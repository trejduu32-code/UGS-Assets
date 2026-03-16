(function() {
    'use strict';

    const originalFetch = window.fetch;
    const mergedData = {};
    const pendingRequests = {};

    const WASM_FILES = {
        "index.wasm": 2,
    };

    window.fetch = function(url, ...args) {
        const urlString = url.toString();
        
        const matchedFile = Object.keys(WASM_FILES).find(f => urlString.endsWith(f));
        
        if (matchedFile) {
            if (mergedData[urlString]) {
                return Promise.resolve(new Response(mergedData[urlString]));
            }

            return new Promise((resolve) => {
                if (!pendingRequests[urlString]) pendingRequests[urlString] = [];
                pendingRequests[urlString].push(resolve);
            });
        }

        return originalFetch(url, ...args);
    };

    async function mergeFiles(fullUrl, partCount) {
        const buffers = [];
        console.log(`[Merger] Starting merge for ${fullUrl}...`);

        try {
            for (let i = 1; i <= partCount; i++) {
                const partUrl = `${fullUrl}.part${i}`;
                const response = await originalFetch(partUrl);
                
                if (!response.ok) throw new Error(`Part ${i} failed (${response.status}) for ${fullUrl}`);
                
                const data = await response.arrayBuffer();
                buffers.push(data);
                console.log(`[Merger] Loaded part ${i}`);
            }

            const mergedBlob = new Blob(buffers, { type: 'application/octet-stream' });
            mergedData[fullUrl] = mergedBlob;

            if (pendingRequests[fullUrl]) {
                pendingRequests[fullUrl].forEach(resolve => resolve(new Response(mergedBlob)));
                delete pendingRequests[fullUrl];
            }

            return mergedBlob;
        } catch (err) {
            console.error(`[Merger] Failed to merge ${fullUrl}:`, err);
        }
    }

    async function init() {
        const BASE_URL = "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/archesspalago";

        await Promise.all(
            Object.entries(WASM_FILES).map(([filename, partCount]) =>
                mergeFiles(`${BASE_URL}/${filename}`, partCount)
            )
        );

        console.log("[Merger] All files ready. Starting Godot...");
        if (typeof window.godotRunStart === 'function') {
            window.godotRunStart();
        }
    }

    init();
})();
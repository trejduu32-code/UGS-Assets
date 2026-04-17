// Yandex Games SDK Mock Implementation
// This provides a complete mock of the Yandex Games SDK for development/testing

(function () {
  "use strict";

  class MockPlayer {
    constructor() {
      this.uniqueID = "mock_player_" + Math.random().toString(36).substr(2, 9);
      this.publicName = "Guest Player";
      this._mode = "lite"; // lite = not authorized, default = authorized
      this._data = {};
    }

    getMode() {
      return this._mode;
    }

    getUniqueID() {
      return this.uniqueID;
    }

    setData(data, flush) {
      return new Promise((resolve) => {
        this._data = { ...this._data, ...data };
        console.log("Player data saved:", this._data);
        setTimeout(() => resolve(), 100);
      });
    }

    getData() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this._data), 100);
      });
    }

    getAvatarSrc(size) {
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='10' r='6' fill='%23999'/%3E%3Cpath d='M4 26c0-6.6 5.4-12 12-12s12 5.4 12 12' fill='%23999'/%3E%3C/svg%3E";
    }
  }

  // Mock Payments object
  class MockPayments {
    constructor() {
      this.catalog = [];
      this.purchases = [];
    }

    getCatalog() {
      return new Promise((resolve) => {
        const mockCatalog = [
          {
            id: "product_1",
            title: "Test Product 1",
            description: "Test product",
            price: "0.99",
          },
          {
            id: "product_2",
            title: "Test Product 2",
            description: "Test product",
            price: "1.99",
          },
        ];
        setTimeout(() => resolve(mockCatalog), 100);
      });
    }

    purchase(productID) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.purchases.push({ id: productID, date: new Date() });
          console.log("Purchase successful:", productID);
          resolve({ productID });
        }, 500);
      });
    }

    getPurchases() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.purchases), 100);
      });
    }

    consumePurchase(purchaseToken) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      });
    }
  }

  // Mock Leaderboard Entry
  class MockLeaderboardEntry {
    constructor(rank, player, score) {
      this.rank = rank;
      this.player = player;
      this.score = score;
    }
  }

  // Mock Leaderboard
  class MockLeaderboard {
    constructor(leaderboardID) {
      this.leaderboardID = leaderboardID;
      this.entries = [
        new MockLeaderboardEntry(
          1,
          {
            publicName: "Top Player",
            getAvatarSrc: () =>
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E",
          },
          1000,
        ),
        new MockLeaderboardEntry(
          2,
          {
            publicName: "Good Player",
            getAvatarSrc: () =>
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E",
          },
          900,
        ),
      ];
    }

    getLeaderboardEntries(options) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            entries: this.entries.slice(0, options.quantityTop || 10),
          });
        }, 100);
      });
    }

    setScore(score) {
      return new Promise((resolve) => {
        console.log("Score set:", score);
        setTimeout(() => resolve(), 100);
      });
    }

    getScore() {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ score: 0 }), 100);
      });
    }
  }

  // Mock Leaderboards Manager
  class MockLeaderboards {
    constructor() {
      this.leaderboards = {};
    }

    getLeaderboardEntries(leaderboardID, options) {
      if (!this.leaderboards[leaderboardID]) {
        this.leaderboards[leaderboardID] = new MockLeaderboard(leaderboardID);
      }
      return this.leaderboards[leaderboardID].getLeaderboardEntries(options);
    }

    setLeaderboardScore(leaderboardID, score) {
      if (!this.leaderboards[leaderboardID]) {
        this.leaderboards[leaderboardID] = new MockLeaderboard(leaderboardID);
      }
      return this.leaderboards[leaderboardID].setScore(score);
    }

    getLeaderboardScore(leaderboardID) {
      if (!this.leaderboards[leaderboardID]) {
        this.leaderboards[leaderboardID] = new MockLeaderboard(leaderboardID);
      }
      return this.leaderboards[leaderboardID].getScore();
    }
  }

  // Mock Advertisement object
  class MockAdvertisement {
    constructor() {
      this.bannerVisible = false;
    }

    getBannerAdvStatus() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            stickyAdvIsShowing: this.bannerVisible,
            reason: this.bannerVisible ? null : "not_shown",
          });
        }, 50);
      });
    }

    showBannerAdv() {
      return new Promise((resolve) => {
        console.log("Banner ad shown");
        this.bannerVisible = true;
        setTimeout(() => resolve(), 100);
      });
    }

    hideBannerAdv() {
      return new Promise((resolve) => {
        console.log("Banner ad hidden");
        this.bannerVisible = false;
        setTimeout(() => resolve(), 100);
      });
    }

    showFullscreenAdv(options) {
      return new Promise((resolve) => {
        console.log("Fullscreen ad shown");
        const callbacks = options.callbacks || {};

        if (callbacks.onOpen) callbacks.onOpen();

        setTimeout(() => {
          if (callbacks.onClose) callbacks.onClose(true);
          resolve();
        }, 1000);
      });
    }

    showRewardedVideo(options) {
      return new Promise((resolve) => {
        console.log("Rewarded video shown");
        const callbacks = options.callbacks || {};

        if (callbacks.onOpen) callbacks.onOpen();

        setTimeout(() => {
          if (callbacks.onRewarded) callbacks.onRewarded();
          if (callbacks.onClose) callbacks.onClose();
          resolve();
        }, 2000);
      });
    }
  }

  // Mock Feedback object
  class MockFeedback {
    canReview() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ value: true, reason: null });
        }, 100);
      });
    }

    requestReview() {
      return new Promise((resolve) => {
        console.log("Review requested");
        setTimeout(() => {
          resolve({ feedbackSent: true });
        }, 500);
      });
    }
  }

  // Mock Auth object
  class MockAuth {
    openAuthDialog() {
      return new Promise((resolve, reject) => {
        console.log("Auth dialog opened");
        setTimeout(() => {
          resolve();
        }, 500);
      });
    }
  }

  // Mock Features object
  class MockFeatures {
    constructor() {
      this.LoadingAPI = {
        ready: () => {
          console.log("Game loading complete");
        },
      };

      this.GameplayAPI = {
        start: () => {
          console.log("Gameplay started");
        },
        stop: () => {
          console.log("Gameplay stopped");
        },
      };
    }
  }

  // Mock Environment object
  class MockEnvironment {
    constructor() {
      this.i18n = {
        lang: navigator.language || "en",
      };
      this.payload = null;
    }
  }

  // Main SDK object
  class YandexGamesSDK {
    constructor() {
      this.adv = new MockAdvertisement();
      this.feedback = new MockFeedback();
      this.auth = new MockAuth();
      this.features = new MockFeatures();
      this.environment = new MockEnvironment();

      this._player = new MockPlayer();
      this._payments = new MockPayments();
      this._leaderboards = new MockLeaderboards();
      this._flags = {
        feature_flag_1: true,
        feature_flag_2: false,
      };
    }

    getPlayer() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this._player), 100);
      });
    }

    getPayments() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this._payments), 100);
      });
    }

    getSaves() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.getPlayer().then((player) => {
            player.getData().then((data) => {
              resolve(data);
            });
          });
        }, 100);
      });
    }

    getFlags() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this._flags), 100);
      });
    }

    getLeaderboards() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(this._leaderboards), 100);
      });
    }
  }

  // Global YaGames object
  window.YaGames = {
    init: function () {
      return new Promise((resolve) => {
        console.log("Yandex Games SDK initializing...");
        setTimeout(() => {
          const sdk = new YandexGamesSDK();
          console.log("Yandex Games SDK initialized successfully");
          resolve(sdk);
        }, 500);
      });
    },
  };

  console.log("Yandex Games SDK Mock loaded successfully");
})();

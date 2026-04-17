const C3 = self.C3;
self.C3_GetObjectRefTable = function() {
  return [
    C3.Plugins.Sprite,
    C3.Behaviors.Platform,
    C3.Behaviors.Bullet,
    C3.Behaviors.Timer,
    C3.Behaviors.scrollto,
    C3.Behaviors.Physics,
    C3.Behaviors.Tween,
    C3.Plugins.Keyboard,
    C3.Plugins.Touch,
    C3.Plugins.Avix_PokiSDK_ForC3,
    C3.Plugins.Audio,
    C3.Plugins.PlatformInfo,
    C3.Plugins.LocalStorage,
    C3.Plugins.Tilemap,
    C3.Behaviors.solid,
    C3.Plugins.TiledBg,
    C3.Behaviors.Pin,
    C3.Plugins.Particles,
    C3.Plugins.NinePatch,
    C3.Behaviors.Rotate,
    C3.Behaviors.Sin,
    C3.Behaviors.Turret,
    C3.Behaviors.LOS,
    C3.Plugins.Spritefont2,
    C3.Plugins.System.Cnds.IsGroupActive,
    C3.Plugins.System.Cnds.OnLayoutStart,
    C3.Plugins.Sprite.Acts.SetOpacity,
    C3.Plugins.Sprite.Acts.SetPosToObject,
    C3.Plugins.Sprite.Acts.AddChild,
    C3.Plugins.Sprite.Acts.SetInstanceVar,
    C3.Plugins.Sprite.Exps.X,
    C3.Plugins.Sprite.Exps.Y,
    C3.Plugins.System.Cnds.Compare,
    C3.Plugins.System.Exps.layoutname,
    C3.Behaviors.Platform.Acts.SetEnabled,
    C3.Plugins.Sprite.Acts.SetAnim,
    C3.Plugins.System.Cnds.TriggerOnce,
    C3.Behaviors.Timer.Acts.StartTimer,
    C3.Behaviors.Timer.Cnds.OnTimer,
    C3.Behaviors.Platform.Acts.SimulateControl,
    C3.Behaviors.Platform.Cnds.OnJump,
    C3.Behaviors.Platform.Cnds.OnLand,
    C3.Behaviors.Platform.Cnds.IsByWall,
    C3.Behaviors.Platform.Acts.SetMaxFallSpeed,
    C3.Behaviors.Platform.Acts.SetGravity,
    C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
    C3.Plugins.Sprite.Acts.SetMirrored,
    C3.Plugins.Sprite.Cnds.OnCollision,
    C3.Behaviors.Platform.Cnds.IsOnFloor,
    C3.Behaviors.Platform.Acts.ResetDoubleJump,
    C3.Behaviors.Platform.Cnds.IsFalling,
    C3.Plugins.Sprite.Cnds.CompareInstanceVar,
    C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
    C3.Behaviors.Platform.Cnds.IsJumping,
    C3.Behaviors.Platform.Cnds.IsMoving,
    C3.Plugins.Sprite.Cnds.IsMirrored,
    C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
    C3.Behaviors.Bullet.Acts.SetEnabled,
    C3.Plugins.Sprite.Acts.SetPos,
    C3.Behaviors.Platform.Cnds.OnFall,
    C3.Plugins.LocalStorage.Acts.SetItem,
    C3.Plugins.Avix_PokiSDK_ForC3.Acts.RequestCommercialBreak,
    C3.Plugins.System.Acts.SetBoolVar,
    C3.Plugins.System.Acts.SetVar,
    C3.Plugins.Spritefont2.Exps.Count,
    C3.Plugins.System.Acts.CreateObject,
    C3.Plugins.System.Exps.viewportmidx,
    C3.Plugins.System.Exps.viewporttop,
    C3.Plugins.Spritefont2.Acts.SetText,
    C3.Plugins.Sprite.Exps.Count,
    C3.Plugins.System.Exps.viewportright,
    C3.Plugins.System.Exps.viewportleft,
    C3.Plugins.System.Exps.viewportbottom,
    C3.Plugins.Avix_PokiSDK_ForC3.Cnds.OnCommercialBreakComplete,
    C3.Plugins.Audio.Cnds.IsTagPlaying,
    C3.Plugins.Audio.Acts.Play,
    C3.Plugins.PlatformInfo.Cnds.IsOnWindows,
    C3.Plugins.PlatformInfo.Cnds.IsOnMacOS,
    C3.Plugins.PlatformInfo.Cnds.IsOnLinux,
    C3.Plugins.PlatformInfo.Cnds.IsOnChromeOS,
    C3.Plugins.Sprite.Acts.Destroy,
    C3.Plugins.PlatformInfo.Cnds.IsOnAndroid,
    C3.Plugins.PlatformInfo.Cnds.IsOniOS,
    C3.Behaviors.Bullet.Acts.SetSpeed,
    C3.Behaviors.Platform.Acts.SetJumpStrength,
    C3.Behaviors.Platform.Acts.SetMaxSpeed,
    C3.Behaviors.Platform.Acts.SetDoubleJumpEnabled,
    C3.Plugins.Sprite.Cnds.OnCreated,
    C3.Plugins.System.Cnds.CompareVar,
    C3.Plugins.Sprite.Acts.SetDefaultColor,
    C3.Plugins.System.Exps.rgba255,
    C3.Plugins.Sprite.Acts.ZMoveToObject,
    C3.Plugins.Particles.Acts.SetParticleObject,
    C3.Plugins.Particles.Acts.SetRate,
    C3.Plugins.Sprite.Cnds.IsOutsideLayout,
    C3.Behaviors.Sin.Acts.SetPeriod,
    C3.Plugins.System.Exps.random,
    C3.Plugins.Sprite.Acts.SetAnimFrame,
    C3.Plugins.System.Cnds.CompareBoolVar,
    C3.Plugins.Tilemap.Acts.MoveToTop,
    C3.Plugins.Touch.Cnds.IsTouchingObject,
    C3.Plugins.Keyboard.Cnds.IsKeyDown,
    C3.Behaviors.Platform.Exps.VectorX,
    C3.Plugins.Audio.Acts.Stop,
    C3.Behaviors.Bullet.Cnds.IsEnabled,
    C3.Plugins.Touch.Cnds.OnTouchObject,
    C3.Plugins.Keyboard.Cnds.OnKey,
    C3.Behaviors.Platform.Acts.SetVectorY,
    C3.Plugins.System.Acts.WaitForPreviousActions,
    C3.Plugins.Keyboard.Cnds.OnAnyKey,
    C3.Plugins.Touch.Cnds.OnTouchStart,
    C3.Plugins.Avix_PokiSDK_ForC3.Acts.NotifyGameplayStart,
    C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
    C3.Behaviors.Timer.Acts.StopTimer,
    C3.Behaviors.Platform.Exps.VectorY,
    C3.Plugins.Sprite.Cnds.IsAnimPlaying,
    C3.Plugins.Sprite.Acts.SetSize,
    C3.Plugins.Sprite.Cnds.CompareX,
    C3.Plugins.Sprite.Cnds.CompareY,
    C3.Plugins.Sprite.Cnds.CompareFrame,
    C3.Plugins.Avix_PokiSDK_ForC3.Acts.NotifyGameplayStop,
    C3.Plugins.Sprite.Cnds.IsOverlapping,
    C3.Plugins.System.Exps.dt,
    C3.Plugins.NinePatch.Cnds.IsBoolInstanceVarSet,
    C3.Plugins.NinePatch.Exps.Y,
    C3.Plugins.NinePatch.Acts.SetBoolInstanceVar,
    C3.Behaviors.Sin.Acts.SetEnabled,
    C3.Plugins.Audio.Acts.SetPaused,
    C3.Plugins.TiledBg.Acts.SetPosToObject,
    C3.Plugins.Spritefont2.Acts.SetPosToObject,
    C3.Behaviors.Tween.Cnds.IsPlaying,
    C3.Behaviors.Tween.Cnds.OnTweensFinished,
    C3.Behaviors.Tween.Acts.TweenOneProperty,
    C3.Plugins.Sprite.Cnds.IsVisible,
    C3.Plugins.TiledBg.Cnds.OnCreated,
    C3.Plugins.TiledBg.Acts.SetWidth,
    C3.Plugins.Spritefont2.Cnds.OnCreated,
    C3.Plugins.TiledBg.Exps.Width,
    C3.Plugins.Sprite.Exps.BBoxRight,
    C3.Plugins.Sprite.Exps.BBoxBottom,
    C3.Behaviors.Tween.Acts.TweenTwoProperties,
    C3.Plugins.Sprite.Exps.BBoxLeft,
    C3.Plugins.System.Acts.Wait,
    C3.Plugins.Sprite.Exps.BBoxMidX,
    C3.Plugins.System.Exps.viewportmidy,
    C3.Plugins.System.Acts.AddVar,
    C3.Plugins.Avix_PokiSDK_ForC3.Cnds.OnRewardedBreakComplete,
    C3.Plugins.Avix_PokiSDK_ForC3.Cnds.LastAdRewardSuccess,
    C3.Plugins.System.Acts.GoToLayout,
    C3.Plugins.Avix_PokiSDK_ForC3.Acts.RequestRewardedBreak,
    C3.Plugins.System.Acts.GoToLayoutByName,
    C3.Plugins.System.Acts.RestartLayout,
    C3.Plugins.System.Cnds.Repeat,
    C3.Plugins.Particles.Acts.SetXRandomiser,
    C3.Plugins.TiledBg.Acts.MoveToLayer,
    C3.Behaviors.Sin.Exps.Period,
    C3.Plugins.Sprite.Exps.Width,
    C3.Behaviors.Turret.Acts.AddTarget,
    C3.Plugins.Sprite.Acts.MoveToBottom,
    C3.Behaviors.Turret.Cnds.OnShoot,
    C3.Behaviors.LOS.Cnds.HasLOSToObject,
    C3.Plugins.Sprite.Acts.Spawn,
    C3.Behaviors.LOS.Acts.CastRay,
    C3.Behaviors.LOS.Exps.Range,
    C3.Behaviors.LOS.Cnds.RayIntersected,
    C3.Behaviors.LOS.Exps.HitY,
    C3.Plugins.Sprite.Exps.Height,
    C3.Plugins.Sprite.Acts.SetWidth,
    C3.Behaviors.Timer.Cnds.IsTimerRunning,
    C3.Behaviors.scrollto.Acts.Shake,
    C3.Plugins.Sprite.Acts.SetHeight,
    C3.Behaviors.Pin.Acts.PinByImagePoint,
    C3.Plugins.Sprite.Acts.MoveToLayer,
    C3.Plugins.Sprite.Exps.Angle,
    C3.Plugins.NinePatch.Cnds.CompareInstanceVar,
    C3.Plugins.NinePatch.Acts.SetInstanceVar,
    C3.Plugins.NinePatch.Exps.BBoxTop,
    C3.Plugins.NinePatch.Exps.BBoxBottom,
    C3.Plugins.NinePatch.Exps.X,
    C3.Plugins.NinePatch.Exps.BBoxLeft,
    C3.Plugins.NinePatch.Exps.BBoxRight,
    C3.Plugins.NinePatch.Exps.BBoxMidX,
    C3.Plugins.NinePatch.Acts.AddChild,
    C3.Plugins.System.Acts.SubVar,
    C3.Plugins.Audio.Acts.StopAll,
    C3.Plugins.Sprite.Acts.RemoveChild,
    C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
    C3.Plugins.Audio.Acts.SetVolume,
    C3.Plugins.LocalStorage.Acts.CheckItemExists,
    C3.Plugins.LocalStorage.Cnds.OnItemMissing,
    C3.Plugins.LocalStorage.Cnds.OnItemExists,
    C3.Plugins.LocalStorage.Acts.GetItem,
    C3.Plugins.LocalStorage.Cnds.OnItemGet,
    C3.Plugins.LocalStorage.Exps.ItemValue
  ];
};
self.C3_JsPropNameTable = [{
    sleding: 0
  },
  {
    aktifSlide: 0
  },
  {
    left: 0
  },
  {
    right: 0
  },
  {
    Kamera: 0
  },
  {
    Platform: 0
  },
  {
    Bullet: 0
  },
  {
    Timer: 0
  },
  {
    playerCollsion: 0
  },
  {
    playerGrafik: 0
  },
  {
    type: 0
  },
  {
    ScrollTo: 0
  },
  {
    KameraTyper: 0
  },
  {
    destroy: 0
  },
  {
    Physics: 0
  },
  {
    PlayerDestroy: 0
  },
  {
    PlayerDestroyGrafik: 0
  },
  {
    Tween: 0
  },
  {
    PartikelMove: 0
  },
  {
    Keyboard: 0
  },
  {
    Touch: 0
  },
  {
    PokiSDK: 0
  },
  {
    Audio: 0
  },
  {
    PlatformInfo: 0
  },
  {
    LocalStorage: 0
  },
  {
    Solid: 0
  },
  {
    Tilemap: 0
  },
  {
    bg1: 0
  },
  {
    endX: 0
  },
  {
    endy: 0
  },
  {
    transisi: 0
  },
  {
    bg2: 0
  },
  {
    bg3: 0
  },
  {
    bg4: 0
  },
  {
    bg5: 0
  },
  {
    BorderPintu: 0
  },
  {
    pintu: 0
  },
  {
    Pin: 0
  },
  {
    plontar: 0
  },
  {
    aktif: 0
  },
  {
    jump: 0
  },
  {
    perPlontar: 0
  },
  {
    sound: 0
  },
  {
    restart: 0
  },
  {
    MoveLeft: 0
  },
  {
    MoveRight: 0
  },
  {
    MoveDash: 0
  },
  {
    MoveJump: 0
  },
  {
    home: 0
  },
  {
    TombolSkin: 0
  },
  {
    ParticlesLava: 0
  },
  {
    JalurDuri: 0
  },
  {
    tempatCannon: 0
  },
  {
    bulletCannon: 0
  },
  {
    ParticlesCannon: 0
  },
  {
    JalurTrap: 0
  },
  {
    colisionBalokTrap: 0
  },
  {
    Rotate: 0
  },
  {
    bulletTurret: 0
  },
  {
    start: 0
  },
  {
    end: 0
  },
  {
    wait: 0
  },
  {
    play: 0
  },
  {
    speed: 0
  },
  {
    JalurDuri2: 0
  },
  {
    Sine: 0
  },
  {
    rantaiSuriken: 0
  },
  {
    rantaiSuriken1: 0
  },
  {
    spike: 0
  },
  {
    lava: 0
  },
  {
    duri: 0
  },
  {
    sineRotate: 0
  },
  {
    DuriMove: 0
  },
  {
    speedBullet: 0
  },
  {
    Turret: 0
  },
  {
    LineOfSight: 0
  },
  {
    Cannon: 0
  },
  {
    startY: 0
  },
  {
    endY: 0
  },
  {
    time: 0
  },
  {
    BalokTrap: 0
  },
  {
    SpeedBullet: 0
  },
  {
    turret: 0
  },
  {
    DuriMove2: 0
  },
  {
    suriken: 0
  },
  {
    BalokJatuh: 0
  },
  {
    balokMove: 0
  },
  {
    SpriteFont: 0
  },
  {
    textLevel: 0
  },
  {
    Tutorial: 0
  },
  {
    startX: 0
  },
  {
    playerTutorial: 0
  },
  {
    playerGrafikTutor: 0
  },
  {
    Jump: 0
  },
  {
    move: 0
  },
  {
    dash: 0
  },
  {
    objekTUTOR: 0
  },
  {
    buttonTutorial: 0
  },
  {
    "9patch": 0
  },
  {
    solidTutorial: 0
  },
  {
    startTutorial: 0
  },
  {
    bgIntro: 0
  },
  {
    logoIntro: 0
  },
  {
    Skin: 0
  },
  {
    nama: 0
  },
  {
    skin: 0
  },
  {
    name: 0
  },
  {
    gelembung: 0
  },
  {
    light: 0
  },
  {
    ButtontYES: 0
  },
  {
    ButtontNO: 0
  },
  {
    textDiSkin: 0
  },
  {
    animasi: 0
  },
  {
    SkinPreview: 0
  },
  {
    PickSkin: 0
  },
  {
    back: 0
  },
  {
    win: 0
  },
  {
    Particleswin: 0
  },
  {
    facePartikel: 0
  },
  {
    SkinReward: 0
  },
  {
    border_popup: 0
  },
  {
    LightReward: 0
  },
  {
    BarReward: 0
  },
  {
    BorderReward: 0
  },
  {
    TextPersenReward: 0
  },
  {
    TombolPickSkin: 0
  },
  {
    NextLevel: 0
  },
  {
    ShowReward: 0
  },
  {
    ParticlesGelembung: 0
  },
  {
    GameAktif: 0
  },
  {
    GameComplete: 0
  },
  {
    GameOver: 0
  },
  {
    HaveSkin: 0
  },
  {
    checkLevel: 0
  },
  {
    GameStart: 0
  },
  {
    audio: 0
  },
  {
    test: 0
  },
  {
    PoinReward: 0
  },
  {
    Speed: 0
  },
  {
    goals: 0
  },
  {
    ShowSkin: 0
  },
  {
    NSR: 0
  },
  {
    PreviewSkin: 0
  }
];

self.InstanceType = {
  playerCollsion: class extends self.ISpriteInstance {},
  playerGrafik: class extends self.ISpriteInstance {},
  Kamera: class extends self.ISpriteInstance {},
  KameraTyper: class extends self.ISpriteInstance {},
  destroy: class extends self.ISpriteInstance {},
  PlayerDestroy: class extends self.ISpriteInstance {},
  PlayerDestroyGrafik: class extends self.ISpriteInstance {},
  PartikelMove: class extends self.ISpriteInstance {},
  Keyboard: class extends self.IInstance {},
  Touch: class extends self.IInstance {},
  PokiSDK: class extends self.IInstance {},
  Audio: class extends self.IInstance {},
  PlatformInfo: class extends self.IInstance {},
  LocalStorage: class extends self.IInstance {},
  Tilemap: class extends self.ITilemapInstance {},
  bg1: class extends self.ITiledBackgroundInstance {},
  transisi: class extends self.ISpriteInstance {},
  bg2: class extends self.ITiledBackgroundInstance {},
  bg3: class extends self.ITiledBackgroundInstance {},
  bg4: class extends self.ITiledBackgroundInstance {},
  bg5: class extends self.ITiledBackgroundInstance {},
  BorderPintu: class extends self.ISpriteInstance {},
  pintu: class extends self.ISpriteInstance {},
  plontar: class extends self.ISpriteInstance {},
  perPlontar: class extends self.ISpriteInstance {},
  sound: class extends self.ISpriteInstance {},
  restart: class extends self.ISpriteInstance {},
  MoveLeft: class extends self.ISpriteInstance {},
  MoveRight: class extends self.ISpriteInstance {},
  MoveDash: class extends self.ISpriteInstance {},
  MoveJump: class extends self.ISpriteInstance {},
  home: class extends self.ISpriteInstance {},
  TombolSkin: class extends self.ISpriteInstance {},
  ParticlesLava: class extends self.IParticlesInstance {},
  JalurDuri: class extends self.IWorldInstance {},
  tempatCannon: class extends self.ISpriteInstance {},
  bulletCannon: class extends self.ISpriteInstance {},
  ParticlesCannon: class extends self.IParticlesInstance {},
  JalurTrap: class extends self.IWorldInstance {},
  colisionBalokTrap: class extends self.ISpriteInstance {},
  bulletTurret: class extends self.ISpriteInstance {},
  JalurDuri2: class extends self.IWorldInstance {},
  rantaiSuriken: class extends self.IWorldInstance {},
  rantaiSuriken1: class extends self.ISpriteInstance {},
  spike: class extends self.ISpriteInstance {},
  lava: class extends self.ITiledBackgroundInstance {},
  duri: class extends self.ISpriteInstance {},
  DuriMove: class extends self.ISpriteInstance {},
  Cannon: class extends self.ISpriteInstance {},
  BalokTrap: class extends self.ISpriteInstance {},
  turret: class extends self.ISpriteInstance {},
  DuriMove2: class extends self.ISpriteInstance {},
  suriken: class extends self.ISpriteInstance {},
  BalokJatuh: class extends self.IWorldInstance {},
  balokMove: class extends self.IWorldInstance {},
  SpriteFont: class extends self.ISpriteFontInstance {},
  textLevel: class extends self.ISpriteFontInstance {},
  Tutorial: class extends self.ISpriteInstance {},
  playerTutorial: class extends self.ISpriteInstance {},
  playerGrafikTutor: class extends self.ISpriteInstance {},
  Jump: class extends self.ISpriteInstance {},
  move: class extends self.ISpriteInstance {},
  dash: class extends self.ISpriteInstance {},
  objekTUTOR: class extends self.ISpriteInstance {},
  buttonTutorial: class extends self.ISpriteInstance {},
  _9patch: class extends self.IWorldInstance {},
  solidTutorial: class extends self.ISpriteInstance {},
  startTutorial: class extends self.ISpriteInstance {},
  bgIntro: class extends self.ISpriteInstance {},
  logoIntro: class extends self.ISpriteInstance {},
  skin: class extends self.ISpriteInstance {},
  gelembung: class extends self.ISpriteInstance {},
  light: class extends self.ISpriteInstance {},
  ButtontYES: class extends self.ISpriteInstance {},
  ButtontNO: class extends self.ISpriteInstance {},
  textDiSkin: class extends self.ISpriteFontInstance {},
  SkinPreview: class extends self.ISpriteInstance {},
  PickSkin: class extends self.ISpriteInstance {},
  back: class extends self.ISpriteInstance {},
  win: class extends self.ISpriteInstance {},
  Particleswin: class extends self.IParticlesInstance {},
  facePartikel: class extends self.ISpriteInstance {},
  SkinReward: class extends self.ISpriteInstance {},
  border_popup: class extends self.ISpriteInstance {},
  LightReward: class extends self.ISpriteInstance {},
  BarReward: class extends self.ITiledBackgroundInstance {},
  BorderReward: class extends self.ISpriteInstance {},
  TextPersenReward: class extends self.ISpriteFontInstance {},
  TombolPickSkin: class extends self.ISpriteInstance {},
  NextLevel: class extends self.ISpriteInstance {},
  ShowReward: class extends self.ISpriteInstance {},
  ParticlesGelembung: class extends self.IParticlesInstance {}
}
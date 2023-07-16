const ori = [
  {
    column1: "Ori WotW scenes are huge, so image how hard synchronize users who work with Unity scene files or assets to prevent conflicts with the repository when pull/push stuff.",
    column2:"Social Framework. Unity Editor integrated UI which dynamically tracks which scene or assets are afftected by repository users.",
  },
  {
    column1: "Measure game performance, analyze problematic places and find bottlenecks.",
    column2:"Performance Tool. Measures TON of statistics at runtime and sends to backend database storage. Tool to query millions of captured points and visualize them in game world. Select any bulk of points and get any useful stats.",
  },
  {
    column1: "Very often designers put too many “trash” into a levels. So why we can’t find objects which affect level with almost zero effect, but they always affect GPU.",
    column2:"Art Optimizer. Tool calculates energy for each object and it’s visual modificator in a scene. Single energy slider allows to enable or disable objects/modificators to optimize 2D parallaxed scenes in semi-automatic mode.",
  },
  {
    column1: "Setup behaviour of AI entities in a game.",
    column2:"Behaviour Tree Graph. Custom tree graph editor with TON of project-related adjustments.",
  },
];

const art = [
    {
      column1: "Create realistic 3D art for project purposes.",
      column2:"With their focus on quality and attention to detail, Stan’s Assets provides a valuable service for game developers and artists looking to enhance the visual appeal of their creations.",
    },
  ];

const stickman = [
    {
      column1: "Achieve an arcade, but challenging physics.",
      column2:"Designed and created unique physics system for bikes and motorbikes by fans of riding.",
    },
    {
      column1: "Create a variety of bikes, motorbikes, upgrades and customizations to allow players setup the dream for the best racing experience.",
      column2:"Physics system has TON of different options and tweaks to setup a bike with any kind of driving features: wheels, suspension, acceleration source, geometry etc.",
    },
    {
      column1: "Socialize game to play with friends.",
      column2:"Game lets you compete against your Facebook friends or anyone else in the world. You can’t do it in real time, though, but by watching the other players in ‘ghost mode’.",
    },
  ];

const tin = [
    {
      column1: "Help to make a Tin Hearts sequel with maximum performance for each platform (planned to deploy for 11 platforms), setup CI/CD and make as fast as possible. Distribute game levels dynamically to prevent huge build size.",
      column2:"Made a cutting edge system which allows to setup a game scene for many platforms (high end or low end). It means that the designer is able to make a setup in a scene and see the final result in the Unity Editor before build is made. Advanced setup for realtime or baked light. As a result in collaboration with Rogue Sun we made a powerful open-source Build System package. Also integrated Addressables to download game levels from the server on demand.",
    },
  ];

const signal = [
    {
      column1: "Make product installation and update easier for users.",
      column2:"In addition to the asset store package delivery we also added ability to install a plugin from the git hub, npm, and open upm. In addition the bootstrapper package was create to make installation even easier.",
    },
    {
      column1: "Make sure users do not have unused code in the project and build.",
      column2:"We have split the plugin into 3 packages each one is responsible for it’s one platform.",
    },
    {
      column1: "Make package a lot more friendly for the Unity users",
      column2:"We have created plugin editor UI that gave an ability to do basic plugin set up without single line of code as well as ability to go straight to the One Signal Dashboard and docs. The code convention was updated to match Unity package code convention, so it will be easier for Unity developers to read and understand the code",
    },
  ];




const tableData = {
  ori,
  art,
  stickman,
  tin,
  signal
};

export default tableData;

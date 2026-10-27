'use strict';

const translations = {
  en: {
    skip: 'Skip to content', navResearch: 'Research', navDemos: 'Demos', navEducation: 'Education', navContact: 'Contact',
    role: "Master's student · Tsinghua University", statement: 'Perceive the world.\nReason. Navigate. Act.',
    bio: 'I work on embodied intelligence, with a focus on robust mobile manipulation, human-aware navigation, and zero-shot robotic reasoning.',
    explore: 'Explore my research', email: 'Email', profileField: 'Embodied AI & Robotics', profileNote: 'From perception to action,\nin the real world.',
    interests: 'RESEARCH INTERESTS', interest1: 'Embodied navigation', interest2: 'Mobile manipulation', interest3: 'Human–robot interaction',
    researchLabel: 'RESEARCH', researchHeading: 'Selected research', figureHint: 'A closer look at the ideas.\nClick any framework to explore.',
    deviCategory: 'ROBUST MANIPULATION', deviSummary: 'A teacher–student framework for visual mobile grasping. State-conditioned grasp reasoning and temporal memory help quadruped manipulators handle degraded perception.',
    tagQuadruped: 'Quadruped manipulation', tagPerception: 'Degraded perception', viewFramework: 'View framework',
    humanCategory: 'HUMAN-AWARE NAVIGATION', humanSummary: 'Human-centric social reasoning turns people and predicted trajectories into actionable waypoints. Trajectory-guided planning anticipates robot–human conflicts in dynamic multi-human environments.',
    tagSocial: 'Social reasoning', tagVLN: 'Vision-and-language navigation', uniCategory: 'UNIFIED EMBODIED NAVIGATION',
    uniSummary: 'A single language-model call builds a task graph to unify navigation and target following. Reusable value maps and global–local memory guide exploration and task switching.', tagGraph: 'Task graphs', tagZero: 'Zero-shot generalization',
    demosLabel: 'IN MOTION', demosHeading: 'Robots in action', demosAside: 'From frameworks to experiments.\nWatch the full demonstrations.',
    badgeDeployment: 'REAL-WORLD DEMO', badgeLab: 'LAB DEMO', badgeSim: 'SIMULATION',
    videoUni: 'UniGuide · Navigation task', videoUniText: 'Object navigation, multi-object navigation, and tracking.',
    videoMobile: 'Mobile robot · Shared spaces', videoMobileText: 'A mobile robot operating near a walking person.',
    videoHumanoid: 'Humanoid · Laboratory demonstration', videoHumanoidText: 'Footage of a physical humanoid robot platform.',
    videoQuad: 'Quadruped · Across terrains', videoQuadText: 'Simulation experiments on flat ground, stairs, and slopes.',
    educationLabel: 'BACKGROUND', educationHeading: 'Education', tsinghuaDate: '2026 — Present', master: "Master's studies", bachelor: "Bachelor's studies", current: 'CURRENT',
    contactLabel: 'GET IN TOUCH', contactHeading: "Let's connect.", contactText: 'For research conversations and collaboration.',
    footer: 'Perception. Reasoning. Action.', backTop: 'Back to top ↑', copied: 'Email address copied', copyFallback: 'Please copy: liang.zhou4312@gmail.com',
    fullSize: 'Full resolution ↗', videoError: 'Unable to play this video. ', directVideo: 'Open the video directly ↗', framework: 'Framework', close: 'Close viewer'
  },
  zh: {
    skip: '跳转到正文', navResearch: '研究', navDemos: '演示', navEducation: '教育', navContact: '联系',
    role: '清华大学 · 硕士研究生', statement: '感知世界。\n推理、导航与行动。',
    bio: '我的研究围绕具身智能展开，关注鲁棒移动操作、人本导航，以及机器人的零样本推理与规划。',
    explore: '了解我的研究', email: '邮件联系', profileField: '具身智能与机器人', profileNote: '从感知走向行动，\n让机器人走进真实世界。',
    interests: '研究方向', interest1: '具身导航', interest2: '移动操作', interest3: '人机交互',
    researchLabel: '研究工作', researchHeading: '研究精选', figureHint: '从框架理解方法。\n点击图片，查看完整细节。',
    deviCategory: '鲁棒移动操作', deviSummary: '面向感知退化场景的教师—学生移动抓取框架，结合状态条件抓取推理与时序记忆，帮助四足机械臂应对遮挡、深度噪声和目标定位抖动。',
    tagQuadruped: '四足机器人操作', tagPerception: '退化感知', viewFramework: '查看框架图',
    humanCategory: '人本导航', humanSummary: '将指令相关人物与预测轨迹转化为可执行航点，结合人本社会推理与轨迹引导规划，在动态多人环境中预判人机冲突、调整局部运动。',
    tagSocial: '社会推理', tagVLN: '视觉语言导航', uniCategory: '统一具身导航',
    uniSummary: '通过单次大语言模型调用构建任务图，统一导航与目标跟随任务，利用可复用价值地图和全局—局部记忆引导探索与任务切换。', tagGraph: '任务图', tagZero: '零样本泛化',
    demosLabel: '机器人演示', demosHeading: '从方法走向行动', demosAside: '从研究框架到实验验证。\n点击观看完整演示。',
    badgeDeployment: '实物部署', badgeLab: '实验室演示', badgeSim: '仿真实验',
    videoUni: 'UniGuide · 导航任务演示', videoUniText: '物体导航、多物体导航与跟踪任务。',
    videoMobile: '移动机器人 · 共享空间', videoMobileText: '移动机器人在行走人员附近运行。',
    videoHumanoid: '人形机器人 · 实验室演示', videoHumanoidText: '真实人形机器人平台的实验室视频。',
    videoQuad: '四足机器人 · 多地形实验', videoQuadText: '平地、楼梯与斜坡上的仿真实验。',
    educationLabel: '学习经历', educationHeading: '教育经历', tsinghuaDate: '2026 — 至今', master: '硕士阶段', bachelor: '本科阶段', current: '在读',
    contactLabel: '保持联系', contactHeading: '期待与你交流。', contactText: '欢迎联系我，交流研究与合作想法。',
    footer: '感知 · 推理 · 行动', backTop: '回到顶部 ↑', copied: '邮箱地址已复制', copyFallback: '请复制：liang.zhou4312@gmail.com',
    fullSize: '查看原图 ↗', videoError: '视频暂时无法播放。', directVideo: '直接打开视频 ↗', framework: '框架图', close: '关闭预览'
  }
};

Object.assign(translations.en, {"degreeRole": "Master's student", "sidebarNote": "Robust perception.\nHuman-aware action.", "aboutHeading": "About Me", "aboutIntro": "Hi, I'm Liang Zhou (周亮), a master's student at Tsinghua University. My research focuses on embodied intelligence and robotics.", "aboutResearch": "I am interested in how robots perceive, reason, and act in complex environments, particularly robust mobile manipulation, human-aware navigation, and zero-shot planning.", "aboutWelcome": "Welcome to reach out for research discussions and collaboration!", "navHome": "Home", "navPublications": "Publications", "navDemos": "Demos", "researchHeading": "Selected Research", "allResearchHeading": "Research Publications", "viewAllResearch": "View all →", "frameworkNote": "Frameworks and research summaries. Click an image to view it in full resolution.", "allDemosHeading": "Robot Demonstrations", "viewAllDemos": "View all demos →", "demoPageNote": "Real-world deployments and laboratory demonstrations, with simulation shown separately.", "lastUpdated": "Last updated: October 2026"});
Object.assign(translations.zh, {"degreeRole": "硕士研究生", "sidebarNote": "鲁棒感知。\n以人为本的机器人行动。", "aboutHeading": "关于我", "aboutIntro": "你好，我是周亮（Liang Zhou），目前在清华大学攻读硕士，研究兴趣主要集中在具身智能与机器人。", "aboutResearch": "我关注机器人如何在复杂环境中感知、推理与行动，尤其是鲁棒移动操作、人本导航和零样本规划。", "aboutWelcome": "欢迎联系我，交流研究想法与合作机会！", "navHome": "主页", "navPublications": "研究论文", "navDemos": "演示视频", "researchHeading": "研究精选", "allResearchHeading": "研究论文", "viewAllResearch": "查看全部 →", "frameworkNote": "研究简介与主框架图。点击图片可放大，也可查看高清原图。", "allDemosHeading": "机器人演示", "viewAllDemos": "全部演示 →", "demoPageNote": "展示实物部署、实验室演示与单独标注的仿真实验。", "lastUpdated": "更新于 2026 年 10 月"});

let language = 'en';
try { if (localStorage.getItem('liang-zhou-language') === 'zh') language = 'zh'; } catch (_) { /* Storage is optional. */ }
const t = key => translations[language][key] || translations.en[key] || key;
const languageButton = document.querySelector('#language-toggle');

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  languageButton.innerHTML = next === 'en' ? '中文 <span aria-hidden="true">↗</span>' : 'EN <span aria-hidden="true">↗</span>';
  languageButton.setAttribute('aria-label', next === 'en' ? '切换到中文' : 'Switch to English');
  document.querySelector('#copy-email').setAttribute('aria-label', next === 'en' ? 'Copy email address' : '复制邮箱地址');
  document.querySelector('#copy-email').title = next === 'en' ? 'Copy email' : '复制邮箱';
  document.querySelector('#close-dialog').setAttribute('aria-label', t('close'));
  try { localStorage.setItem('liang-zhou-language', next); } catch (_) { /* Storage is optional. */ }
}
setLanguage(language);
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
document.querySelector('#year').textContent = new Date().getFullYear();

const dialog = document.querySelector('#media-dialog');
const content = document.querySelector('#dialog-content');
const dialogTitle = document.querySelector('#dialog-title');
const originalLink = document.createElement('a');
originalLink.className = 'original-link';
originalLink.target = '_blank';
originalLink.rel = 'noopener noreferrer';
originalLink.hidden = true;
document.querySelector('#close-dialog').before(originalLink);
let lastTrigger = null;

function openViewer(trigger, title) {
  lastTrigger = trigger;
  dialogTitle.textContent = title;
  document.body.classList.add('dialog-open');
  dialog.showModal();
}

document.querySelectorAll('[data-figure]').forEach(button => {
  button.addEventListener('click', () => {
    content.replaceChildren();
    const img = document.createElement('img');
    img.src = button.dataset.figure;
    img.alt = button.dataset.figureTitle;
    content.append(img);
    originalLink.href = button.dataset.figure;
    originalLink.textContent = t('fullSize');
    originalLink.hidden = false;
    openViewer(button, button.dataset.figureTitle.replace('Framework', t('framework')));
  });
});

document.querySelectorAll('[data-video]').forEach(button => {
  button.addEventListener('click', () => {
    content.replaceChildren();
    originalLink.hidden = true;
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.poster = button.querySelector('img').getAttribute('src');
    video.src = button.dataset.video;
    video.setAttribute('aria-label', t(button.dataset.titleKey));
    video.addEventListener('error', () => {
      const error = document.createElement('p');
      error.className = 'media-error';
      error.append(document.createTextNode(t('videoError')));
      const link = document.createElement('a');
      link.href = button.dataset.video;
      link.textContent = t('directVideo');
      error.append(link);
      content.append(error);
    }, { once: true });
    content.append(video);
    openViewer(button, t(button.dataset.titleKey));
    video.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
  });
});

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
dialog.addEventListener('close', () => {
  const video = content.querySelector('video');
  if (video) { video.pause(); video.removeAttribute('src'); video.load(); }
  content.replaceChildren();
  document.body.classList.remove('dialog-open');
  if (lastTrigger) lastTrigger.focus({ preventScroll: true });
});

let toastTimer;
function toast(message) {
  const el = document.querySelector('#toast');
  el.textContent = message;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), 2800);
}
document.querySelector('#copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('liang.zhou4312@gmail.com');
    toast(t('copied'));
  } catch (_) {
    toast(t('copyFallback'));
  }
});


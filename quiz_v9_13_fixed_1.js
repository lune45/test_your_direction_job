// ═══════════════════════════════════════════════════════
// PART 1: DATA - DIRS, CAREERS, CLUSTERS, DIR_DETAILS
// ═══════════════════════════════════════════════════════

if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', function() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
  window.addEventListener('pageshow', function() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
}

var DIRS={
// ── 1. AI / ML ──────────────────────────────────────
// 1.1 ML Foundations
  ml:        {name:'Machine Learning · 机器学习',         domain:'ai', group:'ml_found',  en:'Machine Learning'},
  dl:        {name:'Deep Learning · 深度学习',             domain:'ai', group:'ml_found',  en:'Deep Learning'},
  repr:      {name:'Representation Learning · 表示学习',   domain:'ai', group:'ml_found',  en:'Representation Learning'},
  ssl:       {name:'Self-Supervised Learning · 自监督',    domain:'ai', group:'ml_found',  en:'Self-Supervised Learning'},
  transfer:  {name:'Transfer & Meta Learning · 迁移学习',  domain:'ai', group:'ml_found',  en:'Transfer & Meta Learning'},
  foundation:{name:'Foundation Models · 基础模型',         domain:'ai', group:'ml_found',  en:'Foundation Models'},
// 1.2 ML Theory
  ml_theory: {name:'ML Theory · 机器学习理论',             domain:'ai', group:'ml_theory', en:'ML Theory'},
  stat_learn:{name:'Statistical Learning · 统计学习理论',  domain:'ai', group:'ml_theory', en:'Statistical Learning Theory'},
  opt_ml:    {name:'Optimization for ML · 优化理论',       domain:'ai', group:'ml_theory', en:'Optimization for ML'},
  scaling:   {name:'Scaling Laws · 规模定律',              domain:'ai', group:'ml_theory', en:'Generalization & Scaling Laws'},
// 1.3 Language Intelligence
  nlp:       {name:'NLP · 自然语言处理',                   domain:'ai', group:'lang',      en:'Natural Language Processing'},
  llm:       {name:'LLM · 大语言模型',                     domain:'ai', group:'lang',      en:'Large Language Models'},
  ir:        {name:'IR & Search · 信息检索与搜索',          domain:'ai', group:'lang',      en:'Information Retrieval & Search'},
  recsys:    {name:'Recommendation · 推荐系统',            domain:'ai', group:'lang',      en:'Recommendation Systems'},
  speech:    {name:'Speech & Audio AI · 语音与音频',        domain:'ai', group:'lang',      en:'Speech & Audio AI'},
// 1.4 Vision Intelligence
  cv:        {name:'Computer Vision · 计算机视觉',          domain:'ai', group:'vision',    en:'Computer Vision'},
  med_vision:{name:'Medical Vision · 医学影像AI',           domain:'ai', group:'vision',    en:'Medical & Scientific Vision'},
  video:     {name:'Video Understanding · 视频理解',        domain:'ai', group:'vision',    en:'Video Understanding'},
  vision3d:  {name:'3D Vision · 三维视觉',                  domain:'ai', group:'vision',    en:'3D Vision & Reconstruction'},
// 1.5 Multimodal
  multimodal:{name:'Multimodal · 多模态学习',               domain:'ai', group:'multi',     en:'Multimodal Learning'},
  vlm:       {name:'VLM · 视觉语言模型',                    domain:'ai', group:'multi',     en:'Vision-Language Models'},
  doc_intel: {name:'Document Intelligence · 文档智能',      domain:'ai', group:'multi',     en:'Document Intelligence'},
// 1.6 Generative AI
  generative:{name:'Generative AI · 生成式AI',              domain:'ai', group:'gen',       en:'Generative Models'},
  diffusion: {name:'Diffusion Models · 扩散模型',            domain:'ai', group:'gen',       en:'Diffusion & Autoregressive Generation'},
  creative_ai:{name:'Creative AI · 创意AI',                 domain:'ai', group:'gen',       en:'Creative & Controllable Generation'},
// 1.7 Decision & RL
  rl:        {name:'Reinforcement Learning · 强化学习',      domain:'ai', group:'decision',  en:'Reinforcement Learning'},
  offline_rl:{name:'Offline RL · 离线强化学习',              domain:'ai', group:'decision',  en:'Offline RL & Imitation Learning'},
  multiagent:{name:'Multi-Agent · 多智能体学习',             domain:'ai', group:'decision',  en:'Multi-Agent Learning'},
  planning_ai:{name:'Planning for AI · AI规划',             domain:'ai', group:'decision',  en:'Planning for Learning Systems'},
// 1.8 Efficient AI
  efficient: {name:'Efficient AI · 高效AI',                 domain:'ai', group:'efficient', en:'Efficient ML'},
  quant:     {name:'Quantization · 量化剪枝',                domain:'ai', group:'efficient', en:'Quantization & Pruning'},
  inf_opt:   {name:'Inference Optimization · 推理优化',      domain:'ai', group:'efficient', en:'Inference Optimization'},
// 1.9 Trustworthy AI
  xai:       {name:'XAI · 可解释AI',                        domain:'ai', group:'trust',     en:'Explainable AI'},
  safety:    {name:'AI Safety · AI对齐与安全',               domain:'ai', group:'trust',     en:'AI Alignment & Safety'},
  fairness:  {name:'AI Fairness · 公平性与伦理',             domain:'ai', group:'trust',     en:'AI Fairness & Ethics'},
// 1.10 Applied AI (umbrella)
  applied_ai:{name:'Applied AI · AI系统落地',                domain:'ai', group:'applied',  en:'Applied AI Systems'},

// ── 2. CS ─────────────────────────────────────────────
// 2.1 Systems
  systems:   {name:'Systems · 系统方向',                    domain:'cs', group:'sys',       en:'Systems'},
  dist_sys:  {name:'Distributed Systems · 分布式系统',       domain:'cs', group:'sys',       en:'Distributed Systems'},
  sys_ai:    {name:'Systems for AI · AI系统工程',            domain:'cs', group:'sys',       en:'Systems for AI/ML'},
  cloud:     {name:'Cloud Computing · 云计算',               domain:'cs', group:'sys',       en:'Cloud Computing'},
// 2.2 Data Systems
  db:        {name:'Databases · 数据库',                     domain:'cs', group:'data_sys',  en:'Databases'},
  stream:    {name:'Stream Processing · 流处理',             domain:'cs', group:'data_sys',  en:'Stream & Data Processing Systems'},
// 2.3 Theory & Algorithms
  theory:    {name:'Theory CS · 理论计算机科学',              domain:'cs', group:'theory',    en:'Theory & Algorithms'},
  algo:      {name:'Algorithms · 算法',                      domain:'cs', group:'theory',    en:'Algorithms'},
  complexity:{name:'Complexity Theory · 复杂度理论',         domain:'cs', group:'theory',    en:'Complexity Theory'},
// 2.4 PL & Formal Methods
  pl:        {name:'PL & Compilers · 编程语言',              domain:'cs', group:'pl',        en:'Programming Languages & Compilers'},
  formal:    {name:'Formal Methods · 形式化验证',            domain:'cs', group:'pl',        en:'Formal Methods & Verification'},
// 2.5 Security
  security:  {name:'Security · 安全与隐私',                  domain:'cs', group:'sec',       en:'Security & Privacy'},
// 2.6 Networks
  networks:  {name:'Networks · 计算机网络',                   domain:'cs', group:'net',       en:'Computer Networks'},
// 2.7 Graphics
  graphics:  {name:'Graphics · 计算机图形学',                 domain:'cs', group:'graphics',  en:'Computer Graphics'},
  geo_proc:  {name:'Geometry Processing · 几何处理',          domain:'cs', group:'graphics',  en:'Geometry Processing & Animation'},
// 2.8 HCI
  hci:       {name:'HCI · 人机交互',                          domain:'cs', group:'hci',       en:'Human-Computer Interaction'},
// 2.9 Visualization
  vis:       {name:'Visualization · 数据可视化',              domain:'cs', group:'vis',       en:'Data Visualization & Visual Analytics'},

// ── 3. ECE / EE ──────────────────────────────────────
// 3.1 Electronic Systems
  elec_sys:  {name:'Electronic Systems · 电子系统',           domain:'ee', group:'elec',      en:'Electronic Systems & Circuits'},
// 3.2 Signal Processing
  signal:    {name:'Signal Processing · 信号处理',            domain:'ee', group:'signal',    en:'Signal Processing'},
// 3.3 Communications
  comm:      {name:'Communications · 通信系统',               domain:'ee', group:'comm',      en:'Wireless & Communication Systems'},
  info_th:   {name:'Information Theory · 信息论',             domain:'ee', group:'comm',      en:'Information & Coding Theory'},
// 3.4 Control
  control:   {name:'Control Systems · 控制系统',              domain:'ee', group:'control',   en:'Control & Dynamical Systems'},
  opt_ctrl:  {name:'Optimal Control · 最优控制',              domain:'ee', group:'control',   en:'Optimal & Adaptive Control'},
// 3.5 Embedded & CPS
  embedded:  {name:'Embedded Systems · 嵌入式系统',           domain:'ee', group:'embedded',  en:'Embedded & Cyber-Physical Systems'},
  iot:       {name:'IoT · 物联网',                            domain:'ee', group:'embedded',  en:'IoT & Sensor Networks'},
// 3.6 VLSI & Microelectronics
  vlsi:      {name:'VLSI · 芯片设计',                         domain:'ee', group:'vlsi',      en:'VLSI & IC Design'},
  eda:       {name:'EDA · 电子设计自动化',                    domain:'ee', group:'vlsi',      en:'Electronic Design Automation'},
  photonics: {name:'Photonics · 光电子学',                    domain:'ee', group:'vlsi',      en:'Photonics & Advanced Devices'},

// ── 4. DS / Statistics ───────────────────────────────
// 4.1 Statistical Foundations
  stats:     {name:'Statistics · 统计学',                     domain:'ds', group:'stats',     en:'Statistical Foundations'},
  bayes:     {name:'Bayesian Methods · 贝叶斯方法',            domain:'ds', group:'stats',     en:'Bayesian Statistics'},
// 4.2 Data Analysis
  ds_sci:    {name:'Data Science · 数据科学',                  domain:'ds', group:'ds_anal',   en:'Data Analysis & Modeling'},
  ts_anal:   {name:'Time Series · 时间序列',                   domain:'ds', group:'ds_anal',   en:'Time Series Analysis'},
// 4.3 Causal & Decision
  causal:    {name:'Causal Inference · 因果推断',              domain:'ds', group:'causal',    en:'Causal Inference & Experimentation'},
  econom:    {name:'Econometrics · 计量经济学',                domain:'ds', group:'causal',    en:'Econometrics & Policy Evaluation'},
// 4.4 Data Engineering
  ds_eng:    {name:'Data Engineering · 数据工程',              domain:'ds', group:'ds_eng',    en:'Data Engineering'},
  data_qual: {name:'Data Quality · 数据质量',                  domain:'ds', group:'ds_eng',    en:'Data Quality & Governance'},
// 4.5 MLOps
  mlops:     {name:'MLOps · ML生产工程',                       domain:'ds', group:'mlops',     en:'MLOps & Production Analytics'},
// 4.6 Domain DS
  domain_ds: {name:'Domain DS · 领域数据科学',                 domain:'ds', group:'domain',    en:'Domain Data Science'},
// 4.7 Visualization (shared with CS)
  // vis already defined above

// ── 5. Robotics / Control ─────────────────────────────
// 5.1 Foundations
  robotics:  {name:'Robotics · 机器人学',                      domain:'rb', group:'rb_found',  en:'Robotics Foundations'},
// 5.2 Control & Planning
  motion:    {name:'Motion Planning · 运动规划',               domain:'rb', group:'rb_plan',   en:'Motion Planning & Control'},
  mpc:       {name:'MPC · 模型预测控制',                       domain:'rb', group:'rb_plan',   en:'Model Predictive Control'},
// 5.3 Perception
  perception:{name:'Robot Perception · 机器人感知',            domain:'rb', group:'rb_perc',   en:'Perception & SLAM'},
  slam:      {name:'SLAM · 同步定位与建图',                     domain:'rb', group:'rb_perc',   en:'SLAM & Localization'},
// 5.4 Embodied AI
  embodied:  {name:'Embodied AI · 具身智能',                   domain:'rb', group:'embodied',  en:'Embodied Intelligence'},
  vla:       {name:'VLA · 视觉-语言-行动模型',                  domain:'rb', group:'embodied',  en:'Vision-Language-Action Models'},
// 5.5 HRI
  hri:       {name:'HRI · 人机器人交互',                        domain:'rb', group:'hri',       en:'Human-Robot Interaction'},
// 5.6 Autonomous Systems
  autonomous:{name:'Autonomous Systems · 自主系统',            domain:'rb', group:'auto',      en:'Autonomous Driving & UAV'},

// ── 6. Applied Math / OR ─────────────────────────────
// 6.1 Math Foundations
  sci_comp:  {name:'Scientific Computing · 科学计算',          domain:'or', group:'math_found',en:'Scientific Computing & Numerical Analysis'},
// 6.2 Optimization
  optim:     {name:'Optimization · 优化',                      domain:'or', group:'optim',     en:'Optimization'},
  conv_opt:  {name:'Convex Optimization · 凸优化',             domain:'or', group:'optim',     en:'Convex Optimization'},
  comb_opt:  {name:'Combinatorial Opt · 组合优化',             domain:'or', group:'optim',     en:'Combinatorial Optimization'},
// 6.3 Operations Research
  or_ops:    {name:'Operations Research · 运筹学',             domain:'or', group:'or',        en:'Operations Research'},
  scheduling:{name:'Scheduling · 调度与资源分配',              domain:'or', group:'or',        en:'Scheduling & Resource Allocation'},
// 6.4 Stochastic Systems
  stoch:     {name:'Stochastic Processes · 随机过程',          domain:'or', group:'stoch',     en:'Stochastic Processes & Simulation'},
  uq:        {name:'Uncertainty Quantification · 不确定性量化',domain:'or', group:'stoch',     en:'Uncertainty Quantification'},
// 6.5 Computational Decision Making
  game_th:   {name:'Game Theory · 博弈论',                     domain:'or', group:'decision',  en:'Game Theory & Mechanism Design'},
  dynamic_prog:{name:'Dynamic Programming · 动态规划',         domain:'or', group:'decision',  en:'Dynamic Programming & Sequential Decisions'},
// 6.6 Applied Mathematical Modeling
  comp_bio:  {name:'Computational Biology · 计算生物学',       domain:'or', group:'app_math',  en:'Computational Biology & Finance'},

// ── 7. CE / Computer Engineering ─────────────────────
// 7.1 Computer Architecture
  arch:      {name:'Computer Architecture · 计算机体系结构',   domain:'ce', group:'arch',      en:'Computer Architecture'},
  mem_sys:   {name:'Memory Systems · 内存系统',                domain:'ce', group:'arch',      en:'Memory Architecture & Systems'},
// 7.2 Embedded Computing
  emb_sw:    {name:'Embedded Software · 嵌入式软件',           domain:'ce', group:'emb_ce',    en:'Embedded Computing & Firmware'},
// 7.3 HW-SW Co-Design
  hw_sw:     {name:'HW-SW Co-Design · 软硬件协同',             domain:'ce', group:'codesign',  en:'Hardware-Software Co-Design'},
  soc:       {name:'SoC · 片上系统设计',                       domain:'ce', group:'codesign',  en:'System-on-Chip Design'},
// 7.4 AI Specialized Hardware
  ai_hw:     {name:'AI Accelerators · AI加速器',               domain:'ce', group:'ai_hw',     en:'AI Accelerators & NPU'},
  npu:       {name:'NPU · 神经处理器',                         domain:'ce', group:'ai_hw',     en:'Neural Processing Units'},
  in_mem:    {name:'In-Memory Computing · 存算一体',           domain:'ce', group:'ai_hw',     en:'In-Memory & Near-Memory Computing'},
// 7.5 Digital Systems
  fpga:      {name:'FPGA · 可重构计算',                        domain:'ce', group:'dig_sys',   en:'FPGA & Reconfigurable Computing'},
  logic_des: {name:'Logic Design · 数字逻辑设计',              domain:'ce', group:'dig_sys',   en:'Digital Logic & Computer Organization'},
};

// ── Umbrella directions (score but exclude from ranking display) ──
var UMBRELLA_DIRS = {
  ml:1, systems:1, theory:1, applied_ai:1, stats:1, robotics:1, optim:1,
  efficient:1, rl:1, generative:1, multimodal:1, arch:1, dl:1
};


// ═══════════════════════════════════════════════════════
// PART 2: CAREERS (extended for new domains)
// ═══════════════════════════════════════════════════════

var CAREERS={

// ══════════════════════════════════════════════════════
// 1. AI / ML 方向路径
// ══════════════════════════════════════════════════════

career_ml_engineer:{
  name:'机器学习工程师 · ML Engineer',
  en:'Machine Learning Engineer / Applied ML Engineer',
  icon:'🤖',
  score_dirs:['ml','dl','repr','ssl','transfer','foundation','applied_ai','inf_opt'],
  salary:'🇺🇸 美国：$22–45万/年总包（L4/中级）；L5/高级 $40–70万；国内：字节/腾讯/阿里 SP 35–60万人民币（含股票）',
  work:'日常：负责模型从实验到上线的完整链路——清洗训练数据、跑 baseline、迭代模型、上线 A/B 测试、监控线上指标。典型场景：「搜索召回率本周下降 3%，排查是模型退化还是数据漂移，修复后重新上线验证」。',
  next:'找一个你感兴趣的开源 ML 项目，提一个有 benchmark 对比的 PR。大厂 MLE 面试核心是 ML 设计题（如何设计推荐系统），不只是 coding。'
},

career_research_scientist:{
  name:'研究科学家 · Research Scientist',
  en:'Research Scientist / ML Research Scientist / AI Research Scientist',
  icon:'🔬',
  score_dirs:['ml_theory','stat_learn','opt_ml','repr','ssl','scaling','foundation','llm','vlm','multimodal'],
  salary:'🇺🇸 新晋 RS（顶校 PhD 直入）$30–55万总包；资深 RS $55–100万+；Google DeepMind/OpenAI/Anthropic 顶端超 $120万；国内顶级研究院 $50–150万人民币',
  work:'日常：读 arxiv → 提出假设 → 设计实验 → 分析结果 → 写论文/内部报告。与学术界核心区别：算力几乎无限（可轻松调用数百张 GPU），但研究方向受产品路线图约束，发表需内部审批。典型产出：NeurIPS/ICML/CVPR 论文或影响公司技术方向的内部 tech report。',
  next:'阅读目标组近 2 年的论文，找到一个可以延伸的问题，写一份 2 页的 research proposal——这比 coding 题更能展示 RS 候选人的水平。'
},

career_applied_scientist:{
  name:'应用科学家 · Applied Scientist',
  en:'Applied Scientist / Applied ML Scientist / Applied Deep Learning Engineer',
  icon:'🔭',
  score_dirs:['ml','dl','applied_ai','nlp','cv','recsys','ir','domain_ds'],
  salary:'🇺🇸 Amazon/Microsoft $25–50万总包；资深 Applied Scientist $45–75万；国内：美团/京东/百度 SP 25–50万人民币',
  work:'介于工程师和研究员之间的角色。典型场景：在电商平台上把学术界最新的 LLM 方法工程化，让商品搜索在真实用户流量下提升指标。既要能读懂论文（知道哪些方法值得尝试），也要能写生产级代码（让方法真正跑起来）。',
  next:'找一篇近 6 个月的 top-venue 论文，在公开数据集上复现其核心结果，然后分析它在 out-of-distribution 场景下的表现。这是 Applied Scientist 面试最常见的考查方式。'
},

career_foundation_model:{
  name:'基础模型工程师 · Foundation Model Engineer',
  en:'Foundation Model Engineer / Foundation Model Research Scientist / Pretraining Engineer',
  icon:'🏗️',
  score_dirs:['foundation','dl','repr','ssl','llm','multimodal','scaling'],
  salary:'🇺🇸 大厂基础模型团队 $40–90万总包；OpenAI/Anthropic/Google 顶端 $80–150万+；国内：百川/零一万物/智谱 early stage 期权价值潜力大',
  work:'做大规模预训练：设计 tokenizer、数据清洗管道、预训练 objective、分布式训练框架调优。典型问题：「为什么这次 1T token 预训练的 loss curve 出现了一个 spike，是数据质量问题还是 learning rate 问题？」高度工程化+研究融合。',
  next:'从 Karpathy 的 nanoGPT 开始，把 GPT-2 在 WebText 上从头训练一遍，深入理解 BPE tokenizer、attention、gradient accumulation 每一个细节。'
},

career_llm_engineer:{
  name:'大语言模型工程师 · LLM Engineer',
  en:'LLM Engineer / LLM Research Engineer / Post-Training Engineer / RAG Engineer / AI Agent Engineer',
  icon:'💬',
  score_dirs:['llm','nlp','ir','applied_ai','planning_ai','safety'],
  salary:'🇺🇸 $22–55万总包；LLM Safety/Alignment 方向溢价；AI 创业公司 early engineer 含期权；国内：月之暗面/阶跃星辰/DeepSeek $30–80万人民币',
  work:'后训练（RLHF/DPO/SFT）、RAG 系统搭建、AI Agent 开发、Prompt 工程化。典型场景：「设计一个法律领域的 RAG 系统，要求在 1000 份判决书里准确定位引用依据，延迟低于 2 秒」。',
  next:'在 LangChain 或 LlamaIndex 上实现一个完整的 RAG 流程（包含 chunking、embedding、检索、reranking），然后设计实验量化不同策略的效果差异。'
},

career_nlp_engineer:{
  name:'NLP 工程师 · NLP Engineer',
  en:'NLP Engineer / NLP Research Engineer / NLP Scientist / Computational Linguist / Text Mining Engineer',
  icon:'📝',
  score_dirs:['nlp','llm','ir','speech','doc_intel'],
  salary:'🇺🇸 $20–50万总包；搜索/广告方向有溢价；国内：百度搜索/腾讯微信 NLP SP 25–50万人民币',
  work:'文本分类、信息抽取、机器翻译、对话系统。典型场景：「在法院判决书里自动提取：案件类型、被告信息、量刑依据、判决结果」，需要处理长文本、领域词汇、不规范表达。',
  next:'在 Hugging Face 上用 BERT/RoBERTa 做一个序列标注任务（如 NER），理解 fine-tuning 流程，再研究 in-context learning 与 fine-tuning 的效果边界。'
},

career_cv_engineer:{
  name:'计算机视觉工程师 · CV Engineer',
  en:'Computer Vision Engineer / CV Scientist / Perception Engineer / Vision Algorithm Engineer / Imaging AI Engineer',
  icon:'👁️',
  score_dirs:['cv','med_vision','video','vision3d','vlm'],
  salary:'🇺🇸 $20–50万总包；自动驾驶/医疗影像方向溢价；国内：大疆/商汤/旷视 SP 25–50万人民币',
  work:'目标检测、图像分割、三维重建、视频理解。典型场景：「在工厂流水线上实时检测产品表面缺陷，要求 60fps 下准确率 99.5%，延迟低于 20ms」。',
  next:'用 YOLO 在一个你感兴趣的领域（医疗/工业/卫星）做一个端到端检测项目，包含数据标注、训练、量化部署，做完整的速度/精度权衡分析。'
},

career_generative_ai:{
  name:'生成式 AI 工程师 · Generative AI Engineer',
  en:'Generative AI Engineer / Diffusion Model Engineer / Creative AI Engineer / Applied Scientist (GenAI) / Content AI Engineer',
  icon:'🎨',
  score_dirs:['generative','diffusion','creative_ai','multimodal','vlm'],
  salary:'🇺🇸 $22–55万总包；创意 AI 创业公司 early 期权潜力大；国内：Midjourney/Stability AI 方向的公司 $30–80万人民币',
  work:'图像/视频/3D 生成，可控生成，AI 内容创作工具。典型场景：「设计一个时装品牌的 AI 换装系统，用户上传照片，系统生成穿着品牌新款的真实感图片，转化率提升 40%」。',
  next:'在 Stable Diffusion 基础上做 ControlNet 或 LoRA 微调实验，理解扩散模型的采样过程和条件控制机制，尝试在一个垂直领域做商业化 demo。'
},

career_rl_engineer:{
  name:'强化学习工程师 · RL Engineer',
  en:'RL Research Scientist / RL Engineer / Decision AI Engineer / Control Learning Engineer',
  icon:'🎮',
  score_dirs:['rl','offline_rl','multiagent','planning_ai','embodied'],
  salary:'🇺🇸 $25–60万总包；机器人/游戏 AI/量化方向有溢价；国内：RLHF 工程方向 $25–55万人民币',
  work:'RLHF/RLAIF 训练流程、机器人控制策略学习、游戏 AI、离线强化学习。典型场景：「用 PPO 训练 LLM 的对齐过程，设计 reward model，调试训练时出现的 reward hacking 问题」。',
  next:'完整实现一个 PPO 算法（从 policy network 到 GAE advantage 估计），在 MuJoCo 或 Atari 环境上验证，再研究它与 RLHF 实现的核心差异。'
},

career_efficient_ai:{
  name:'高效 AI / 推理优化工程师 · Inference Engineer',
  en:'Inference Engineer / LLM Inference Engineer / GPU Performance Engineer / Quantization Engineer / Model Compression Engineer',
  icon:'⚡',
  score_dirs:['efficient','quant','inf_opt','sys_ai'],
  salary:'🇺🇸 $25–65万总包；Nvidia/大厂 AI infra 方向有显著溢价；国内：字节火山引擎/阿里 PAI 推理方向 $30–70万人民币',
  work:'让模型更快更省：CUDA kernel 优化、量化（INT4/FP8）、投机解码、连续批处理、KV Cache 压缩。典型成果：「把 LLaMA-70B 的 P99 延迟从 8 秒降到 1.2 秒，GPU 成本降低 60%」。可量化的成就让这个方向薪资高且职业护城河宽。',
  next:'实现一个 INT8 矩阵乘法的 CUDA kernel，与 cuBLAS 对比性能，分析 memory bandwidth 和 compute 的瓶颈来源。再研究 vLLM 的 PagedAttention 实现原理。'
},

// ══════════════════════════════════════════════════════
// 2. CS 方向路径
// ══════════════════════════════════════════════════════

career_systems_engineer:{
  name:'系统工程师 · Systems Engineer',
  en:'Distributed Systems Engineer / Backend Infrastructure Engineer / Cloud Systems Engineer / Systems Research Engineer',
  icon:'⚙️',
  score_dirs:['systems','dist_sys','cloud','db','stream'],
  salary:'🇺🇸 $22–55万总包（L4）；Staff/Principal 可达 $80–150万+；国内：大厂基础设施方向 SP 30–65万人民币',
  work:'构建支撑亿级用户的分布式系统。典型场景：「设计一个新的消息队列系统，要求在 10 万 QPS 下延迟 P99 < 5ms，同时保证消息不丢失和 exactly-once 语义」。深入处理 CAP 定理的实际权衡，Raft/Paxos 共识，分布式事务。',
  next:'实现一个简化的 Raft 协议（包含 leader election 和 log replication），用 3 节点集群测试网络分区场景。DDIA（Designing Data-Intensive Applications）是必读书。'
},

career_ml_systems:{
  name:'ML 系统 / AI 基础设施工程师 · ML Systems Engineer',
  en:'ML Systems Engineer / AI Infrastructure Engineer / Training Systems Engineer / Inference Systems Engineer / Platform ML Engineer',
  icon:'🏭',
  score_dirs:['sys_ai','dist_sys','efficient','arch','ai_hw'],
  salary:'🇺🇸 $30–80万总包；Nvidia/Google/Meta AI Infra 顶端超 $130万；国内：字节/华为 AI 系统方向 $40–90万人民币',
  work:'让 AI 模型训练和推理更快更省：千卡集群训练调度、通信优化（AllReduce/ZeRO）、分布式训练框架（Megatron/DeepSpeed）、推理服务器。典型成果：「把 GPT-3 规模模型的训练时间从 45 天压到 28 天，节省 $200 万算力成本」。',
  next:'在 4 卡或 8 卡机器上用 torchrun + FSDP 训练一个 7B 参数模型，用 nsight Systems 分析通信和计算的 overlap 比例，找到最大瓶颈。'
},

career_compiler_pl:{
  name:'编译器 / 编程语言工程师 · Compiler Engineer',
  en:'Compiler Engineer / GPU Compiler Engineer / ML Compiler Engineer / Programming Languages Researcher / Language Runtime Engineer',
  icon:'🔧',
  score_dirs:['pl','formal','theory','sys_ai'],
  salary:'🇺🇸 $25–65万总包；GPU 编译器（Nvidia/Google XLA）有显著溢价；国内：华为 bisheng/昆仑芯编译器 $35–70万人民币',
  work:'让代码跑得更快：LLVM IR 优化、算子融合、自动向量化、ML 编译器（Triton/XLA/TorchInductor）。典型场景：「为 Transformer attention 实现 FlashAttention 的 Triton kernel，在 A100 上达到 80% 的理论 bandwidth 利用率」。',
  next:'阅读 LLVM 教程，实现一个简单的 JIT 编译器；再研究 Triton 的 block-level 编程模型，实现一个带 tiling 优化的 softmax kernel。'
},

career_security:{
  name:'安全工程师 · Security Engineer',
  en:'Security Engineer / Cybersecurity Engineer / Security Researcher / Privacy Engineer / Cryptography Engineer / Systems Security Engineer',
  icon:'🔐',
  score_dirs:['security','formal','systems','networks'],
  salary:'🇺🇸 $22–55万总包；安全研究员/红队渗透测试有额外溢价；国内：互联网大厂安全部门 SP 25–50万人民币',
  work:'攻防两方面：漏洞挖掘（buffer overflow、side-channel、ROP chain）、隐私计算（差分隐私、联邦学习、安全多方计算）、AI 安全（adversarial attack、prompt injection、模型水印）。',
  next:'在 CTF 平台（如 pwn.college）做 5 道 binary exploitation 题，理解栈溢出到 ROP 的完整攻击链；再研究 LLM 的 jailbreak 防御论文（如 constitutional AI）。'
},

career_hci_ux:{
  name:'HCI / 人机交互研究员',
  en:'UX Engineer / HCI Research Scientist / UX Researcher / Human Factors Engineer / Human-Centered AI Researcher',
  icon:'🖥️',
  score_dirs:['hci','vis','applied_ai','fairness'],
  salary:'🇺🇸 $20–50万总包；UX Research 偏低，HCI Research Scientist 偏高；国内：大厂用研/体验设计 SP 20–40万人民币',
  work:'理解人如何与计算机/AI 系统交互，设计更好的界面。典型场景：「通过用户研究发现医生在使用 AI 诊断辅助系统时存在"自动化偏见"（过于信任 AI），设计干预机制提升决策质量」。',
  next:'做一个完整的用户研究：招募 5-8 个目标用户，做半结构化访谈，分析 AI 工具的使用痛点，输出可操作的设计建议。这是 HCI 研究最核心的方法。'
},

career_database:{
  name:'数据库 / 数据系统工程师',
  en:'Database Engineer / Database Architect / Query Engine Engineer / Data Platform Engineer / Stream Processing Engineer',
  icon:'🗄️',
  score_dirs:['db','stream','dist_sys','sys_ai'],
  salary:'🇺🇸 $22–55万总包；数据库内核开发有稀缺性溢价；国内：OceanBase/TiDB/ClickHouse 国产数据库团队 $30–65万人民币',
  work:'数据库内核开发（查询优化器、存储引擎、事务处理）、流式计算系统（Flink/Kafka）、向量数据库。典型场景：「把一条复杂的 30 表 JOIN SQL 查询时间从 45 秒优化到 800ms，需要重写执行计划生成逻辑」。',
  next:'阅读 CMU 15-445 数据库课程，实现 BPlusTree 索引和基础查询执行器；再研究向量数据库（Milvus/Weaviate）的 HNSW 索引原理。'
},

// ══════════════════════════════════════════════════════
// 3. ECE / EE 方向路径
// ══════════════════════════════════════════════════════

career_ai_hardware:{
  name:'AI 硬件 / 芯片架构师 · AI Hardware Engineer',
  en:'AI Accelerator Engineer / NPU Architect / ML Accelerator Engineer / Hardware Performance Engineer / AI Hardware Engineer',
  icon:'🔩',
  score_dirs:['ai_hw','npu','arch','vlsi','hw_sw','in_mem'],
  salary:'🇺🇸 $30–80万总包；Nvidia/Apple/AMD AI 芯片方向 $50–130万+；国内：华为海思/寒武纪/壁仞科技 SP 30–70万人民币',
  work:'设计专为 AI 加速的硬件：NPU 微架构（数据流、向量单元、矩阵乘法加速器）、存算一体芯片（在 SRAM 里做乘加运算）、训练集群互联（NVLink/InfiniBand）。典型场景：「在给定 4W 功耗预算下，设计一个支持 INT4 推理的移动端 NPU，Transformer 推理延迟低于 20ms」。',
  next:'阅读 Nvidia Hopper 架构白皮书，理解 TF32/FP8/稀疏计算的硬件实现；用 Tiny Tapeout 走一遍 RTL 到 GDSII 的完整流程，哪怕只是一个简单的移位寄存器。'
},

career_vlsi:{
  name:'VLSI / 芯片设计工程师 · VLSI Engineer',
  en:'VLSI Engineer / ASIC Design Engineer / Digital IC Engineer / RTL Engineer / Physical Design Engineer / EDA Engineer',
  icon:'💾',
  score_dirs:['vlsi','eda','arch','fpga','logic_des'],
  salary:'🇺🇸 $22–60万总包；台积电/Intel/Qualcomm 资深工程师 $50–90万+；国内：展锐/紫光/格科微 SP 25–55万人民币',
  work:'数字 IC 全流程：RTL 设计（SystemVerilog）→ 逻辑综合（Design Compiler）→ 布局布线（IC Compiler/Innovus）→ 签核（timing/power/DRC）→ tape-out。也包括 EDA 工具开发：用 ML 优化布局布线（ML for EDA）。',
  next:'在 Tiny Tapeout 平台用 OpenLane 实现一个简单计数器或 FIFO，完整走一遍 RTL→GDS 流程；再学习 Synopsys/Cadence 工具的基础使用。'
},

career_embedded:{
  name:'嵌入式 / 固件工程师 · Embedded Engineer',
  en:'Embedded Systems Engineer / Firmware Engineer / Real-Time Software Engineer / IoT Engineer / Edge Device Engineer / Embedded AI Engineer',
  icon:'📟',
  score_dirs:['embedded','iot','emb_sw','control','signal'],
  salary:'🇺🇸 $18–45万总包；汽车电子/医疗设备/航空航天方向有溢价；国内：汽车 Tier1（博世/大陆/华为智驾）SP 20–40万人民币',
  work:'在资源受限设备上实现可靠功能：RTOS 开发（FreeRTOS/Zephyr）、驱动程序开发、低功耗优化（让设备用 AA 电池跑 2 年）、端侧 AI（在 STM32 上跑 TinyML）。典型场景：「为心脏起搏器实现实时 ECG 异常检测算法，要求 < 50ms 响应，功耗 < 30μW」。',
  next:'用 STM32 或 ESP32 实现一个 FreeRTOS 多任务系统（传感器采集+数据处理+低功耗睡眠），用示波器测量实际功耗曲线。'
},

career_signal_processing:{
  name:'信号处理工程师 · DSP Engineer',
  en:'DSP Engineer / Signal Processing Engineer / ISP Engineer / Camera Algorithm Engineer / Sensor Fusion Engineer / Speech DSP Engineer',
  icon:'📡',
  score_dirs:['signal','comm','embedded'],
  salary:'🇺🇸 $22–55万总包；自动驾驶雷达/相机 ISP 方向有溢价；国内：高通/联发科/大疆算法岗 SP 25–50万人民币',
  work:'图像信号处理（相机 ISP：降噪→去马赛克→HDR→色彩矫正）、语音信号处理（端点检测、降噪、特征提取）、雷达/激光点云处理（CFAR 检测、聚类、跟踪）。',
  next:'实现一个完整的 OFDM 调制解调器仿真，在 AWGN 和多径信道下分析 BER 性能；再用 Python 实现一个简单的相机 ISP pipeline（demosaic + white balance + tone mapping）。'
},

career_comm_engineer:{
  name:'通信系统工程师 · Communications Engineer',
  en:'Wireless Communications Engineer / 5G/6G Research Engineer / Baseband Engineer / RF Engineer / Information Theory Researcher',
  icon:'📶',
  score_dirs:['comm','info_th','signal','networks'],
  salary:'🇺🇸 $22–55万总包；5G/6G 研究工程师（高通/Ericsson/Nokia）$28–65万；国内：华为/中兴无线研究 SP 25–55万人民币',
  work:'5G/6G 物理层研究（Massive MIMO、OFDM、波束赋形）、信道编码（LDPC/Polar）、网络规划优化。典型场景：「在密集城区部署 5G mmWave 基站，用射线追踪仿真分析覆盖盲区，优化波束配置将边缘用户吞吐量提升 40%」。',
  next:'用 MATLAB 或 Python 仿真 LTE/NR 的 PDSCH 信道（包含 channel estimation 和 MMSE 均衡），对比不同码率和调制方式的系统容量。'
},

career_control_systems:{
  name:'控制系统工程师 · Control Engineer',
  en:'Control Engineer / Controls Software Engineer / Optimal Control Engineer / MPC Engineer / Autonomous Systems Control Engineer',
  icon:'🎛️',
  score_dirs:['control','opt_ctrl','mpc','embedded'],
  salary:'🇺🇸 $20–50万总包；自动驾驶/航空航天控制方向 $28–65万；国内：机械臂/无人机/汽车控制 SP 20–45万人民币',
  work:'设计让系统按期望行为运动的控制器：PID 调参、LQR/LQG 最优控制、MPC（模型预测控制）、自适应控制。典型场景：「为仓库 AMR（自主移动机器人）设计 MPC 控制器，在满载 200kg 货物时保证轨迹跟踪误差 < 5cm，并实时避障」。',
  next:'用 Python+scipy 实现一个倒立摆的 LQR 控制器，再在仿真中加入外界扰动，对比 LQR 和 MPC 的鲁棒性差异。'
},

// ══════════════════════════════════════════════════════
// 4. DS / Statistics 方向路径
// ══════════════════════════════════════════════════════

career_data_scientist:{
  name:'数据科学家 · Data Scientist',
  en:'Data Scientist / Product Data Scientist / Applied Data Scientist / Analytics Scientist / Business Data Scientist',
  icon:'📊',
  score_dirs:['ds_sci','stats','causal','bayes','ts_anal'],
  salary:'🇺🇸 初级 $14–22万/年；Senior DS（FAANG）$25–50万；Staff DS $50–80万+；国内：大厂数据科学 SP 20–45万人民币',
  work:'发现数据里的规律，驱动业务决策。典型场景：「分析为什么新功能上线后次日留存率下降 3%——是新功能本身的问题，还是同期改版的 UI，还是用户获取渠道的变化？」需要设计反事实分析排除混淆。',
  next:'找一个真实业务场景（如电商用户留存），做一次完整的分析：EDA → 因果假设 → A/B 实验设计 → 统计推断 → 决策建议。这是大厂 DS 面试的核心考查场景。'
},

career_causal_scientist:{
  name:'因果推断科学家 · Causal Inference Scientist',
  en:'Causal Inference Scientist / Experimentation Scientist / Policy Scientist / Econometrician / A/B Testing Scientist',
  icon:'🔀',
  score_dirs:['causal','stats','econom','bayes','ds_sci'],
  salary:'🇺🇸 大厂实验平台方向 $25–55万；学术/政策研究 $15–30万；国内：字节/美团实验平台 DS SP 25–50万人民币',
  work:'用严格的统计方法回答因果问题。典型场景：「公司想评估"免运费"政策是否真的提升了用户 LTV——但免运费用户本来就倾向于高价值用户，如何消除这个选择偏差？」使用工具变量、双重差分、倾向得分匹配等方法。',
  next:'读 Judea Pearl 的《The Book of Why》建立因果推断直觉，再用 Python 的 DoWhy 库在真实数据集上实现双重差分和工具变量估计。'
},

career_data_engineer:{
  name:'数据工程师 · Data Engineer',
  en:'Data Engineer / Analytics Engineer / Data Platform Engineer / ETL Engineer / Stream Processing Engineer / Data Infrastructure Engineer',
  icon:'🔧',
  score_dirs:['ds_eng','stream','db','mlops','cloud','data_qual'],
  salary:'🇺🇸 $18–40万/年；Senior DE（FAANG）$30–55万；国内：大厂数据平台 SP 20–45万人民币',
  work:'建让数据可靠流动的基础设施。典型场景：「用户行为日志每天产生 5TB，需要在 T+1 内完成清洗、转换、聚合，生成供算法团队使用的特征表——但上游数据源质量不稳定，每周约 3% 的数据有格式异常」。',
  next:'用 dbt + Airflow + ClickHouse 搭一个端到端的数据管道（原始日志 → ODS → DWS → ADS），加上数据质量监控和血缘追踪，这是 DE 面试最常考的系统设计场景。'
},

career_mlops:{
  name:'MLOps / ML 平台工程师',
  en:'MLOps Engineer / ML Platform Engineer / ML Reliability Engineer / Feature Platform Engineer / Model Operations Engineer',
  icon:'🔄',
  score_dirs:['mlops','ds_eng','sys_ai','applied_ai','cloud'],
  salary:'🇺🇸 $22–50万/年；Senior MLOps（FAANG）$35–65万；国内：大厂 AI 平台方向 SP 25–50万人民币',
  work:'让 ML 在生产中可靠运行：特征工程平台（实时特征计算）、模型训练/上线流水线、A/B 实验平台、模型监控（数据漂移检测）。典型场景：「推荐系统模型每 2 周更新一次，但上线后 3 天内效果衰减——自动检测是数据漂移还是 label shift，决定是否触发紧急重训」。',
  next:'用 MLflow + KubeFlow + Seldon 搭一个 ML pipeline（数据处理 → 训练 → 模型注册 → 部署 → 监控），实现 model drift 检测和自动回滚。'
},

career_domain_ds:{
  name:'领域数据科学家 · Domain Data Scientist',
  en:'Bioinformatician / Healthcare Data Scientist / Financial Data Scientist / Computational Social Scientist / Quantitative Analyst',
  icon:'🧬',
  score_dirs:['domain_ds','causal','stats','bayes','sci_comp'],
  salary:'🇺🇸 生物医疗 $20–50万；金融/量化 $30–120万+（顶级对冲基金更高）；社科/政策 $12–30万；国内：医疗 AI/金融风控 DS $20–55万人民币',
  work:'把统计/ML 方法用于特定领域。生物方向：「用 scRNA-seq 数据分析肿瘤微环境中免疫细胞的分化轨迹，发现一种 T 细胞亚群与免疫治疗响应率高度相关」。金融方向：「用因果推断评估信用卡 cashback 政策对 12 个月 CLV 的真实影响，排除高消费用户的选择偏差」。',
  next:'在你感兴趣的领域找一个公开数据集（MIMIC 医疗/PSID 经济/GEO 基因），用因果方法回答一个有意义的问题，写成完整分析报告。'
},

career_quant:{
  name:'量化研究员 · Quantitative Researcher',
  en:'Quantitative Analyst / Quant Researcher / Algorithmic Trading Researcher / Risk Scientist / Stochastic Optimization Researcher',
  icon:'📈',
  score_dirs:['stats','causal','stoch','optim','game_th','or_ops'],
  salary:'🇺🇸 Two Sigma/Jane Street/Citadel 新人 $30–60万基础薪+大额奖金，总包可达 $100–300万+；国内：九坤/幻方/明汯 $50–200万人民币',
  work:'用数学模型捕捉市场规律。「发现了一个基于期权隐含波动率斜度的统计套利机会：当 VIX put skew 超过历史分位的 85% 时，做多 SPX，夏普比率 1.8」。高度数学化（随机过程、统计套利、因子模型），代码质量要求极高（延迟敏感）。',
  next:'读 Shreve 的《Stochastic Calculus for Finance》，实现 Black-Scholes 定价和 Delta 对冲仿真；再研究因子模型（Barra）的构建方法，理解 IC/IR 指标的含义。'
},

// ══════════════════════════════════════════════════════
// 5. Robotics 方向路径
// ══════════════════════════════════════════════════════

career_robotics_engineer:{
  name:'机器人工程师 · Robotics Engineer',
  en:'Robotics Engineer / Robotics Research Engineer / Autonomy Engineer / Mechatronics Engineer / Field Robotics Engineer',
  icon:'🤖',
  score_dirs:['robotics','motion','perception','slam','control'],
  salary:'🇺🇸 $22–55万总包；Boston Dynamics/Figure/Apptronik $28–70万；国内：大疆/宇树/银河通用 SP 25–55万人民币',
  work:'让机器人在真实世界里可靠运作：运动规划（RRT*/A* 路径规划）、控制器设计（关节力矩控制）、传感器集成（IMU/编码器/激光雷达）。典型场景：「让四足机器人在楼梯和砾石地面上稳定行走，在 ±15° 侧倾时仍能保持平衡，风扰下偏差 < 2cm」。',
  next:'在 ROS 2 + Gazebo 里实现一个差速驱动机器人的完整导航栈（激光 SLAM + 路径规划 + 避障），在仿真中验证后尝试在真实机器人上部署。'
},

career_robot_learning:{
  name:'机器人学习工程师 · Robot Learning Engineer',
  en:'Robot Learning Engineer / Embodied AI Engineer / VLA Engineer / Imitation Learning Researcher / Embodied AI Research Scientist',
  icon:'🦾',
  score_dirs:['embodied','vla','rl','offline_rl','perception','robotics'],
  salary:'🇺🇸 $28–70万总包；具身智能创业公司（Physical Intelligence/Figure）$35–90万；国内：宇树/松延动力/星动纪元 SP 30–70万人民币',
  work:'让机器人通过学习掌握技能：模仿学习（从人类演示中学抓取）、强化学习（在仿真中训练再迁移到真机）、VLA（视觉-语言-行动模型）。典型场景：「收集 200 段人类折叠衣物的演示数据，用 Diffusion Policy 训练策略，让机器人在 50 种不同衣物上成功率达 78%」。',
  next:'复现 ACT 或 Diffusion Policy 的核心代码，在 robosuite 仿真中训练一个拾取放置任务，分析 sim-to-real gap 的主要来源（视觉域差异/动力学差异/接触力差异）。'
},

career_autonomous_driving:{
  name:'自动驾驶工程师 · Autonomous Driving Engineer',
  en:'Autonomous Driving Engineer / AV Perception Engineer / AV Planning Engineer / AV Controls Engineer / Simulation Engineer',
  icon:'🚗',
  score_dirs:['autonomous','perception','slam','motion','rl'],
  salary:'🇺🇸 Waymo/Cruise/Mobileye $28–75万总包；国内：小鹏/理想/华为智驾 AV 方向 SP 25–65万人民币',
  work:'感知-规划-控制三大模块。感知：「在雨天夜间环境下，融合摄像头+激光雷达+毫米波雷达，检测 200 米外的行人，漏检率 < 0.01%」。规划：「在高速公路汇流区，预测 30 辆周边车辆的轨迹，找到安全可行的变道时机」。',
  next:'下载 nuScenes 或 Waymo Open Dataset，实现一个 BEV 空间的目标检测 baseline（如 BEVFusion），分析它在长尾场景（施工区域/异形车辆）的失败案例。'
},

career_perception_engineer:{
  name:'感知工程师 · Perception Engineer',
  en:'Robotics Perception Engineer / AV Perception Engineer / SLAM Engineer / Sensor Fusion Engineer / 3D Perception Engineer',
  icon:'👁️',
  score_dirs:['perception','slam','cv','signal','autonomous'],
  salary:'🇺🇸 $22–60万总包；激光雷达感知/SLAM 方向有稀缺性溢价；国内：自动驾驶公司感知岗 SP 25–60万人民币',
  work:'让机器感知三维世界：视觉 SLAM（从摄像头序列实时建图定位）、多传感器融合（摄像头+激光+IMU 时间同步与空间标定）、3D 目标检测（PointPillars/VoxelNet）。典型成果：「在 RTK 信号遮挡的城市峡谷里，用纯视觉 SLAM 保持定位误差 < 0.3m」。',
  next:'用 COLMAP 对一组室内照片做三维重建，再研究 ORB-SLAM3 的代码，理解特征提取→词袋匹配→回环检测→位姿优化的完整流程。'
},

career_hri:{
  name:'人机器人交互研究员 · HRI Researcher',
  en:'HRI Researcher / Robotics UX Researcher / Assistive Robotics Engineer / Social Robotics Researcher / Human Factors Engineer',
  icon:'🤝',
  score_dirs:['hri','applied_ai','hci','fairness','embodied'],
  salary:'🇺🇸 学术界 $15–35万；工业界（养老机器人/协作机器人公司）$20–50万；国内：服务机器人公司 $15–35万人民币',
  work:'设计让人和机器人自然、安全地协作的系统。典型场景：「老年照护机器人需要判断用户何时需要帮助、何时只是思考——研究声音/姿态/视线等多模态信号，设计不侵入性的需求预测模型，将错误触发率降低 70%」。',
  next:'做一个 Wizard of Oz 用户研究：用遥控机器人模拟 AI 行为，观察用户反应，发现"人-机信任"的关键影响因素。这是 HRI 最经典的快速原型方法。'
},

// ══════════════════════════════════════════════════════
// 6. Applied Math / OR 方向路径
// ══════════════════════════════════════════════════════

career_or_scientist:{
  name:'运筹学科学家 · OR Scientist',
  en:'Operations Research Analyst / OR Scientist / Decision Scientist / Optimization Consultant / Supply Chain Analyst / Scheduling Scientist',
  icon:'📐',
  score_dirs:['or_ops','optim','comb_opt','scheduling','game_th'],
  salary:'🇺🇸 $22–60万总包；物流/供应链/云计算资源调度有溢价；国内：京东物流/菜鸟/滴滴调度优化 SP 22–50万人民币',
  work:'用数学建模解决实际优化问题。典型场景：「为一个拥有 200 辆货车、3000 个每日订单的配送公司设计路径规划系统，在考虑时间窗口和载重约束下，将日均行驶里程降低 18%，节省 $280 万/年」。',
  next:'用 Google OR-Tools 实现车辆路径问题（VRP with time windows），对比贪心算法、大邻域搜索、整数规划的解质量和计算时间。Coursera 上 Gurobi 的入门课程是好起点。'
},

career_optimization:{
  name:'优化工程师 / 研究员 · Optimization Engineer',
  en:'Optimization Researcher / ML Optimization Engineer / Training Optimization Engineer / Large-Scale Optimization Scientist',
  icon:'🎯',
  score_dirs:['optim','conv_opt','comb_opt','or_ops','ml_theory'],
  salary:'🇺🇸 大厂优化团队 $25–65万总包；学术界博士后/助理教授路线；国内：供应链/金融风控方向 $25–55万人民币',
  work:'研究和实现优化算法。ML 方向：「研究 AdamW 在超大批量训练时的收敛退化问题，提出新的 warmup 策略，使 4096 batch size 下 LLM 训练的最终 perplexity 降低 1.2%」。工程方向：「为云厂商设计 GPU 集群任务调度算法，在 SLA 约束下将平均利用率从 62% 提升到 79%」。',
  next:'实现并对比 SGD/Adam/AdamW/Sophia 在 GPT-2 训练上的收敛曲线，分析二阶信息（曲率）对优化的实际影响；再研究 Boyd 的 Convex Optimization 教材前三章。'
},

career_game_theory:{
  name:'博弈论 / 机制设计研究员',
  en:'Quantitative Strategist / Mechanism Design Researcher / Marketplace Scientist / Auction Scientist / Game Theory Researcher',
  icon:'♟️',
  score_dirs:['game_th','optim','or_ops','stoch'],
  salary:'🇺🇸 科技公司市场机制团队（Google Ads/Amazon Marketplace）$28–65万总包；学术界路线；国内：电商/广告平台机制设计岗 $25–55万人民币',
  work:'设计让参与者诚实行为的激励机制。典型场景：「Google Ads 拍卖中，设计 Vickrey-Clarke-Groves 机制确保广告主诚实出价；但真实部署时需要考虑预算约束和 CTR 预测误差，如何修改机制保证近似激励相容」。',
  next:'实现一个二价密封拍卖（Vickrey Auction）模拟，证明诚实出价是弱占优策略；再研究 GSP 拍卖（Google 实际使用的机制）与 VCG 的性质差异。'
},

career_sci_computing:{
  name:'科学计算工程师 / 研究员',
  en:'Scientific Programmer / Computational Scientist / HPC Engineer / Numerical Methods Engineer / Simulation Scientist',
  icon:'🔭',
  score_dirs:['sci_comp','stoch','optim','or_ops'],
  salary:'🇺🇸 国家实验室/高校研究 $12–30万；工业界科学计算岗 $22–50万；量化/金融工程方向 $30–80万+；国内：中科院/国防/量化私募 $20–60万人民币',
  work:'用计算机模拟物理/化学/生物系统。典型场景：「在国家实验室用 10 万核超算模拟蛋白质折叠过程，用 FEP（自由能微扰）方法预测药物分子与靶蛋白的结合自由能，误差 < 1 kcal/mol，加速药物筛选 100 倍」。',
  next:'用 Python + NumPy 实现 Runge-Kutta 4 方法求解 Lorenz 系统（混沌），分析步长对精度的影响；再研究 JAX 的 JIT 编译如何加速大规模科学计算。'
},

// ══════════════════════════════════════════════════════
// 7. CE / Computer Engineering 方向路径
// ══════════════════════════════════════════════════════

career_cpu_architect:{
  name:'CPU / GPU 架构师 · Computer Architect',
  en:'Computer Architect / CPU Architect / GPU Architect / Microarchitecture Engineer / Performance Architect / Processor Design Engineer',
  icon:'🖥️',
  score_dirs:['arch','mem_sys','logic_des','fpga','hw_sw'],
  salary:'🇺🇸 Nvidia/AMD/Intel/Apple $30–80万总包；资深架构师 $60–130万+；国内：华为鲲鹏/龙芯/申威 $30–70万人民币',
  work:'设计下一代处理器。典型场景：「为下一代 GPU 设计新的 L2 cache 替换策略，在 LLM 推理工作负载下将 cache miss rate 从 12% 降到 7%，带来 15% 的吞吐量提升，同时不增加面积成本」。深度涉及流水线设计、分支预测、乱序执行、内存层次。',
  next:'在 gem5 模拟器上实现一个简单的顺序执行 CPU，添加 L1/L2 cache 模拟，用 SPEC2017 benchmark 分析 IPC 和 cache miss rate 的关系。Hennessy & Patterson《Computer Architecture》是标准教材。'
},

career_hw_sw_codesign:{
  name:'软硬件协同设计工程师 · HW-SW Co-Design Engineer',
  en:'HW/SW Co-Design Engineer / SoC Engineer / FPGA-Based Computing Engineer / Accelerator Systems Engineer / Domain-Specific Architectures Engineer',
  icon:'⚡',
  score_dirs:['hw_sw','soc','fpga','ai_hw','arch'],
  salary:'🇺🇸 $28–70万总包；SoC 设计公司（Qualcomm/MediaTek）资深 $50–90万；国内：汇顶科技/展讯/中微 SP 25–60万人民币',
  work:'在硬件和软件的交界地带工作。典型场景：「为自动驾驶 SoC 设计 CNN 加速器，与编译器团队协作定义指令集，让 Transformer 推理的 MAC 利用率从 45% 提升到 80%，同时不增加 SRAM 容量」。',
  next:'用 Xilinx FPGA 实现一个矩阵乘法加速器（带 ping-pong buffer 优化），对比 CPU/GPU 的 GFLOPS/W 效率；研究 Arm 的 Ethos-N78 NPU 白皮书理解 DSA 设计思路。'
},

// ══════════════════════════════════════════════════════
// 通用高阶路径
// ══════════════════════════════════════════════════════

career_academia:{
  name:'学术路线 · Academic Research',
  en:'Research Scientist (Academia) / Assistant Professor / Postdoctoral Researcher / PhD Researcher',
  icon:'🎓',
  score_dirs:['ml_theory','stat_learn','theory','complexity','formal','optim','conv_opt','causal','stoch','game_th','sci_comp'],
  salary:'🇺🇸 博士津贴 $2.5–4万/年；博后 $6–9万/年（NIH 标准 $7.2万）；助理教授（R1 高校）$12–22万/年；工业界 RS 转型后 $35–80万总包；国内：985 副教授 $30–60万人民币（含科研绩效）',
  work:'典型一天：读 3 篇 arxiv 新论文 → 与学生讨论实验进展（1 小时）→ 分析昨晚跑完的实验结果 → 写论文/修审稿意见 → 备课。核心产出：顶会论文（NeurIPS/ICML/CVPR/OSDI），每年 1–3 篇算高产。自由度极高，但反馈周期以年计，薪资前 10 年明显低于工业界。',
  next:'找一篇你真正读完、有问题想追问的论文，联系一作说「我对 Section 3 的 Lemma 2 有一个具体困惑」——能提出好问题是学术路线最重要的早期信号。'
},

career_tech_pm:{
  name:'技术产品经理 · Technical PM',
  en:'Technical Product Manager / AI Product Manager / ML Product Manager',
  icon:'📋',
  score_dirs:['applied_ai','hci','recsys','ir','nlp','doc_intel'],
  salary:'🇺🇸 Google APM 起点约 $25–30万总包；Senior PM $40–65万；Staff/Principal PM $65–100万+；国内：大厂 P7/P8 产品 SP 30–65万人民币',
  work:'把技术能力转化为用户价值。典型场景：「作为 LLM 产品的 PM，需要判断是否要让模型支持 200K token 上下文——分析用户场景（谁真正需要？用多少？），评估工程成本（GPU memory 增加多少？），设计 A/B 实验方案，最终给出优先级决策」。Technical PM 特别需要能深入技术讨论，判断方案可行性。',
  next:'写一份你熟悉产品（如 ChatGPT/Notion AI）的「改进 PRD」：用户痛点是什么 → 成功指标如何定义 → 技术约束是什么 → 方案是什么 → 如何验证。这比任何 PM 面试准备都有效。'
}

};



var DIR_DETAILS={
// ── AI / ML ─────────────────────────────────────────
ml:{
  name:'Machine Learning · 机器学习',
  scene:'你在研究：为什么同一个神经网络，换一种数据增强策略，在医疗影像上的准确率能差 15%？机器学习基础研究不是「调参」，而是真正理解学习算法在什么条件下有效、什么时候失败。',
  example:'典型工作：分析不同优化器在特定损失地形上的收敛行为、研究 self-supervised learning 的表征质量度量（alignment/uniformity）、设计更鲁棒的训练损失函数（label smoothing、focal loss）。',
  reps:'代表方向：sklearn、PyTorch、AutoML、Kaggle 竞赛'
},
dl:{
  name:'Deep Learning · 深度学习',
  scene:'你在让一个神经网络「读懂」X 光片，输出医生级别的诊断建议。深度学习把「特征工程」变成了「架构设计」——你不再手写特征，而是设计让模型自己发现特征的网络结构。',
  example:'典型工作：设计新的 attention 变体来处理超长序列、研究 batch normalization 的内在机制、实现 ResNet/ViT/Mamba 并在医疗数据上微调。',
  reps:'代表框架：PyTorch、JAX、TensorFlow；代表架构：Transformer、ResNet、LSTM'
},
repr:{
  name:'Representation Learning · 表示学习',
  scene:'你在研究：同样的一张猫的图片，CLIP 模型把它映射到和「一只毛茸茸的宠物」几乎相同的位置，这种「语义接近 = 空间接近」的表示是怎么学出来的？',
  example:'典型工作：分析对比学习的几何结构（uniformity 和 alignment 的权衡）、设计面向图结构的表示学习、研究多语言模型的跨语言表示对齐机制。',
  reps:'代表工作：CLIP、SimCLR、DINO、Word2Vec、Graph Neural Networks'
},
ssl:{
  name:'Self-Supervised Learning · 自监督学习',
  scene:'你在思考：互联网上有数千亿张没有标注的图片，有没有一种方法让模型从这些无标签数据里学到和人类视觉类似的理解能力——而不需要人工一张张打标签？',
  example:'典型工作：设计新的 pretext task（预测旋转角度、修复遮挡部分）、研究为什么 SimCLR 需要大 batch size、分析自监督预训练在下游任务的迁移规律。',
  reps:'代表工作：BERT、GPT预训练、MAE、DINO、SimCLR、MoCo'
},
transfer:{
  name:'Transfer Learning · 迁移学习',
  scene:'你手头只有 500 张罕见病的医疗图像，直接训练模型根本不够。但你发现：在 ImageNet 上预训练的模型已经学会了边缘、纹理、形状等通用特征——迁移过来再微调，效果远好于从头训练。',
  example:'典型工作：研究不同领域之间知识迁移的条件（domain shift 的量化方法）、设计高效的 few-shot fine-tuning 策略（LoRA、Adapter、Prefix Tuning）、分析灾难性遗忘的机制。',
  reps:'代表技术：LoRA、Adapter、Prompt Tuning、Domain Adaptation'
},
foundation:{
  name:'Foundation Models · 基础模型',
  scene:'你在研究：为什么将模型从 7B 参数扩展到 70B，会突然涌现出「数学推理」「代码生成」等新能力——这些能力在小模型里根本不存在？Scaling Law 背后的数学是什么？',
  example:'典型工作：分析 scaling law 的拐点和相变现象、设计 MoE（混合专家）的路由机制、研究 RLHF 对模型能力的影响、实现高效的 KV Cache 压缩。',
  reps:'代表模型：GPT-4、Claude 3、Gemini、LLaMA 3、Mistral'
},
ml_theory:{
  name:'ML Theory · 机器学习理论',
  scene:'你在研究：为什么过参数化的神经网络几乎总能收敛到泛化良好的点，而不是「记住」训练数据？这个现象叫「双下降」，理论 ML 的意义就是用数学严格解释这些反直觉的现象。',
  example:'典型工作：证明神经网络训练的隐式偏差（implicit bias toward low-complexity solutions）、分析 SGD 的噪声如何帮助逃离 sharp minima、建立深度学习的 PAC-Bayes 泛化界。',
  reps:'代表成果：NTK理论、Lottery Ticket假说、双下降现象、memorization理论'
},
stat_learn:{
  name:'Statistical Learning Theory · 统计学习理论',
  scene:'你在问一个根本问题：给定有限的训练样本，一个学习算法什么时候能保证测试集性能？VC 维、Rademacher 复杂度——这些是理论机器学习的工具，也是理解为什么机器学习「能用」的数学基础。',
  example:'典型工作：推导不同模型类的样本复杂度下界、分析 online learning 的遗憾界、研究 PAC learning 框架在深度学习的适用性边界。',
  reps:'代表理论：VC维、Rademacher复杂度、PAC学习、在线学习遗憾界'
},
opt_ml:{
  name:'Optimization for ML · 优化方法',
  scene:'你在调 LLM 的训练，发现 Adam 在 batch size 变大时收敛变差，但 SGD 又慢得难以接受。优化理论告诉你为什么——Adam 的 second-moment estimate 在大 batch 下有偏，该怎么校正。',
  example:'典型工作：分析 Adam/AdamW/LAMB 的收敛性质、研究 warmup 的必要性（为什么 Transformer 训练没有 warmup 会崩）、设计适合联邦学习的通信高效优化器。',
  reps:'代表工作：Adam、AdamW、LAMB、Sophia、Lion、ZeRO优化器'
},
scaling:{
  name:'Scaling Laws · 规模定律',
  scene:'OpenAI 在 2020 年发现了一个惊人的规律：模型性能和计算量之间有精确的幂律关系，误差可以精确预测。这意味着可以在小模型上做实验，再「外推」到大模型——节省数百亿美元的计算成本。',
  example:'典型工作：研究不同模态（语言/视觉/代码）的 scaling 规律差异、分析 Chinchilla scaling（最优的模型大小和数据量比例）、研究 emergent abilities 的相变点预测。',
  reps:'代表工作：Scaling Laws (Kaplan 2020)、Chinchilla (Hoffmann 2022)'
},
nlp:{
  name:'NLP · 自然语言处理',
  scene:'你在分析十万份法院判决书，自动提取每个案件的罪名、证据链、量刑理由，并发现法官在类似案件中的判决差异。NLP 让语言从「不可处理的非结构化数据」变成可分析的结构化信号。',
  example:'典型工作：设计信息抽取系统（命名实体识别、关系抽取）、研究语义理解的评测方法（SuperGLUE、BIG-Bench）、处理低资源语言和跨语言迁移。',
  reps:'代表工作：BERT、T5、mBERT、spaCy、Stanford CoreNLP'
},
llm:{
  name:'LLM · 大语言模型',
  scene:'你在研究 GPT-4 为什么在某些数学题上「写出正确推导步骤，却得出错误答案」。LLM 研究的核心不是「把模型做大」，而是理解和控制涌现能力——它如何发生、如何失效、如何可控。',
  example:'典型工作：研究 Chain-of-Thought 的工作机制（为什么加「Let\'s think step by step」就有效）、设计 RLHF/RLAIF 对齐训练流程、分析模型内部表征（Mechanistic Interpretability）。',
  reps:'代表模型：GPT-4、Claude 3、Llama 3、Mistral、Gemini'
},
ir:{
  name:'IR & Search · 信息检索',
  scene:'用户搜索「苹果」——是水果还是科技公司？搜索引擎在 0.1 秒内要理解用户意图、召回相关文档、计算相关性排名，再综合考虑新鲜度、权威性、个性化，最终返回用户真正想要的结果。',
  example:'典型工作：设计向量检索系统（Dense Retrieval，如 DPR）、研究 RAG（检索增强生成）的召回质量优化、实现 ColBERT 这样的交互式检索模型。',
  reps:'代表系统：Elasticsearch、FAISS、Lucene、DPR、ColBERT'
},
recsys:{
  name:'Recommendation Systems · 推荐系统',
  scene:'你在 TikTok 上刷了一个关于钓鱼的视频，然后主页开始出现更多户外、垂钓、自然相关的内容——推荐系统用你的行为序列，实时更新对你兴趣的预测，让「下一个视频」的概率最大化。',
  example:'典型工作：设计协同过滤的矩阵分解算法、研究序列推荐（如 BERT4Rec）、解决「冷启动问题」（新用户没有历史数据时的推荐策略）、反事实去偏（消除流行度偏差）。',
  reps:'代表系统：YouTube推荐、TikTok For You、Amazon商品推荐'
},
speech:{
  name:'Speech & Audio AI · 语音与音频',
  scene:'你在设计一个能在嘈杂的建筑工地上工作的语音助手——背景噪声高达 80 分贝，工人戴着安全帽说话，方言口音很重，语速很快。让机器在这种条件下「听懂人说话」，是语音 AI 的核心挑战。',
  example:'典型工作：设计端到端的 ASR 系统（Whisper、Wav2Vec）、研究 TTS 的韵律和情感控制、实现实时降噪的信号处理算法、多说话人场景的 speaker diarization。',
  reps:'代表工作：Whisper、Wav2Vec 2.0、VALL-E、SoundStream'
},
cv:{
  name:'Computer Vision · 计算机视觉',
  scene:'你在训练一个能实时识别手术器械的视觉系统——输入是内窥镜视频，要求识别精度达到人类外科医生水准，延迟必须低于 50ms。CV 的战场是从识别到理解：不只知道「这是什么」，还要知道「它在做什么、会做什么」。',
  example:'典型工作：设计目标检测框架（YOLO、DETR）、研究自监督视觉预训练（MAE、DINOv2）、实现实例分割（SAM）、处理医疗/卫星遥感等特殊域图像。',
  reps:'代表工作：YOLO系列、DETR、SAM、DINOv2、CLIP-Vision'
},
med_vision:{
  name:'Medical Vision · 医学影像 AI',
  scene:'你在开发一套 CT 扫描自动分析系统，帮助基层医院医生筛查肺结节。系统需要处理 512×512×300 的 3D 体积数据，在 2 分钟内给出结节位置、大小、恶性风险评估——让没有专科医生的农村医院也能做到三甲水平。',
  example:'典型工作：3D 医学图像分割（nnU-Net）、X 光/眼底/病理切片的异常检测、用弱监督学习（只有报告文本，没有像素标注）训练分割模型（正是你做毕设的方向）。',
  reps:'代表数据集：ChestX-ray14、MIMIC、PathMNIST；代表模型：nnU-Net、Med-SAM'
},
video:{
  name:'Video Understanding · 视频理解',
  scene:'你在分析一段监控视频，自动识别：某人在 3:24 拿起了一个包，在 3:27 将包放到了另一个位置，整个动作持续 18 秒——视频理解要把「静态识别」推进到「动态事件」的理解。',
  example:'典型工作：动作识别（I3D、SlowFast、VideoMAE）、时序定位（Temporal Action Localization）、视频字幕生成、长视频理解（如 1 小时电影的摘要提取）。',
  reps:'代表数据集：Kinetics、ActivityNet；代表模型：Sora（生成）、VideoMAE（理解）'
},
vision3d:{
  name:'3D Vision · 三维视觉',
  scene:'你在让 AI 从手机拍的几十张照片，自动重建出一个可以360°旋转查看的三维模型——NeRF 和 3D Gaussian Splatting 让这个过程从「几小时专业建模」变成「几分钟自动生成」，彻底改变了 AR/VR 内容制作方式。',
  example:'典型工作：实现 NeRF 变体（Instant-NGP 的 hash encoding 加速）、3D Gaussian Splatting 的训练和渲染、深度估计（单目深度、双目立体视觉）、点云目标检测。',
  reps:'代表工作：NeRF、3D Gaussian Splatting、MVSNet、Depth Anything'
},
multimodal:{
  name:'Multimodal Learning · 多模态学习',
  scene:'你在开发一个医疗 AI 助手——它需要同时「看」X 光片、「读」病历文字、「听」医生语音备注，综合三种模态给出诊断建议。多模态 AI 的核心挑战是：让不同模态的信息在同一语义空间里真正对齐，而不只是简单拼接。',
  example:'典型工作：设计跨模态对比学习（CLIP 的训练方式）、研究多模态融合的 attention 机制、实现文档理解（PDF 里的图文表格混排）。',
  reps:'代表工作：CLIP、Flamingo、GPT-4V、Gemini 1.5、LLaVA'
},
vlm:{
  name:'VLM · 视觉语言模型',
  scene:'你在开发一个能「看图回答问题」的 AI——给它一张餐厅菜单图片，它能告诉你哪道菜最贵、有没有素食选项、价格是否合理。VLM 把 CV 的感知能力和 LLM 的推理能力真正接合在一起。',
  example:'典型工作：设计图文对齐训练（图像 encoder + LLM decoder 的接口设计）、研究 VQA（视觉问答）的推理能力边界、改进 Grounding（让模型输出「苹果在左边第三个位置」而不只是「有苹果」）。',
  reps:'代表模型：LLaVA、InternVL、GPT-4V、Qwen-VL、Gemini 1.5 Pro'
},
doc_intel:{
  name:'Document Intelligence · 文档智能',
  scene:'你在帮一家律所自动处理合同：给定一份 50 页的并购协议 PDF，自动提取：甲乙方、关键条款、付款条件、违约责任，并标注出与行业标准不一致的风险条款——节省律师 90% 的初审时间。',
  example:'典型工作：实现 OCR 后的文档结构理解（表格、标题层级、脚注）、设计针对「图文混排+多列布局」的 layout-aware 模型（如 LayoutLM）、跨语言文档处理。',
  reps:'代表模型：LayoutLM、DocFormer、Nougat；代表场景：合同分析、发票识别、病历结构化'
},
generative:{
  name:'Generative AI · 生成式 AI',
  scene:'你输入「一只穿着宇航服的柴犬，在月球表面漫步，背景是地球升起，油画风格」，三秒后得到一张专业插画师级别的图片。生成 AI 正在重写所有内容生产行业的工作方式。',
  example:'典型工作：研究扩散模型的采样加速（DDIM、DPM-Solver）、实现 ControlNet 的条件控制、研究视频生成的时序一致性、3D 内容生成（NeRF + 扩散模型）。',
  reps:'代表工作：DALL-E 3、Stable Diffusion、Midjourney、Sora、Kling'
},
diffusion:{
  name:'Diffusion Models · 扩散模型',
  scene:'你在研究：为什么逐步「去噪」比「一次生成」效果好这么多？扩散模型的理论基础是随机微分方程——每一步去噪都是在求解一个逆过程，而 score matching 让这个逆过程可以被神经网络近似。',
  example:'典型工作：设计更高效的采样器（把 1000 步压缩到 20 步）、研究 classifier-free guidance 的最优 scale、实现文本条件生成的 cross-attention 机制、video diffusion 的时序扩展。',
  reps:'代表工作：DDPM、DDIM、Stable Diffusion、DiT、Flow Matching'
},
creative_ai:{
  name:'Creative AI · 创意 AI',
  scene:'你在和一位音乐人合作开发 AI 作曲工具——不是完全替代，而是「AI 提供旋律骨架，人类负责情感润色」的协作模式。创意 AI 的核心挑战是：如何让 AI 理解并辅助人类的创意意图，而不是产生「千篇一律的平庸」。',
  example:'典型工作：实现风格迁移（把梵高的笔触应用到照片）、研究创意生成的可控性（让 AI 生成「悲伤而不绝望」的音乐）、设计人机协作的创意工具界面（如 Adobe Firefly 的工作流）。',
  reps:'代表工具：Adobe Firefly、Suno AI（音乐）、Midjourney（图像）、GitHub Copilot（代码）'
},
rl:{
  name:'Reinforcement Learning · 强化学习',
  scene:'你在训练一个 AI 玩围棋——没有给它任何人类棋谱，只告诉它规则，让它和自己对弈几百万次。RL 的核心问题是：在没有即时正确答案的情况下，如何从长期奖励的稀疏信号里学到最优策略。',
  example:'典型工作：实现 PPO/SAC 等算法、设计 reward shaping 解决稀疏奖励问题、研究 multi-task RL 的迁移学习、RLHF（用人类反馈训练 LLM 的关键技术）。',
  reps:'代表成就：AlphaGo、AlphaFold、OpenAI Five；RLHF是GPT系列的核心技术'
},
offline_rl:{
  name:'Offline RL · 离线强化学习',
  scene:'你在为医院设计 ICU 药物治疗策略优化系统——但你不能在真实患者身上「探索」（代价太高），只能从历史病历数据中学习最优策略。Offline RL 解决的就是「只有历史数据，不能在线交互」的强化学习问题。',
  example:'典型工作：设计 conservative offline RL 算法（CQL、TD3+BC）防止 distribution shift、研究 offline-to-online 的迁移、将离线 RL 应用于推荐系统的策略优化。',
  reps:'代表算法：CQL、IQL、TD3+BC；应用：医疗决策、自动驾驶数据复用'
},
multiagent:{
  name:'Multi-Agent Learning · 多智能体学习',
  scene:'你在模拟股票市场——数百个 AI 交易员同时运行，每个人的决策都影响市场价格，而价格又反过来影响所有人的决策。多智能体系统的核心挑战是：在相互影响的动态环境中，如何定义和找到「均衡」。',
  example:'典型工作：研究 cooperative MARL（让多个机器人协作搬运货物）、competitive MARL（德扑 AI、OpenAI Five）、mean field game（大规模智能体的近似方法）。',
  reps:'代表工作：AlphaStar、OpenAI Five、Cicero（外交游戏）'
},
planning_ai:{
  name:'Planning for AI · AI 规划',
  scene:'你在给一个 AI 助手分配任务：「帮我订下周去上海的机票，选价格最低的，早上9点前到，要靠窗位置，然后把确认邮件转发给我同事」。这需要 AI 把一个模糊目标分解成多步骤的可执行操作序列。',
  example:'典型工作：研究 LLM 的 ReAct 框架（推理+行动交替）、设计 Tree of Thought 让 AI 的探索更系统、实现工具调用和 API 编排的 AI Agent。',
  reps:'代表工作：ReAct、Chain-of-Thought、AutoGPT、LangChain Agents'
},
efficient:{
  name:'Efficient AI · 高效 AI',
  scene:'你被要求把 GPT-4 级别的能力部署到一部 2020 年的 iPhone 上——内存限制 4GB，算力是服务器的 1/1000，延迟要求低于 0.5 秒。高效 AI 的挑战就是：在极端约束下保持尽可能多的模型能力。',
  example:'典型工作：量化（INT4/FP8 精度，模型压缩 4-8 倍）、知识蒸馏（让小模型学大模型的「经验」）、神经网络架构搜索（自动找到更高效的网络结构）。',
  reps:'代表工作：DistilBERT、TinyBERT、LLaMA.cpp、MobileLLM、MLX'
},
quant:{
  name:'Quantization · 量化剪枝',
  scene:'你在把 LLaMA-70B 的 70GB 显存占用压缩到 4GB，让一张消费级显卡能跑起来。量化的关键问题是：从 32bit 降到 4bit，精度损失不可避免，但如何让这个损失最小化？',
  example:'典型工作：实现 GPTQ（逐层量化的后训练量化）、研究 SmoothQuant（重新分配激活和权重的量化难度）、设计 1.58bit 极端压缩（BitNet）。',
  reps:'代表工作：GPTQ、SmoothQuant、AWQ、BitNet；工具：llama.cpp、bitsandbytes'
},
inf_opt:{
  name:'Inference Optimization · 推理优化',
  scene:'你在优化 ChatGPT 的服务器成本——每天数千万个请求，每个请求平均生成 200 个 token，按 $0.002/1K tokens 计算是数万美元/天。把延迟从 2 秒降到 0.8 秒、吞吐量提升 2 倍，直接节省数百万美元。',
  example:'典型工作：实现 vLLM 的 PagedAttention（解决 KV Cache 碎片化）、投机解码（用小模型预测 token，大模型验证）、Flash Attention 的 IO-aware 计算。',
  reps:'代表工作：Flash Attention、vLLM、TensorRT-LLM、DeepSpeed-Inference'
},
xai:{
  name:'XAI · 可解释 AI',
  scene:'你在为一家银行的贷款审核 AI 「解释」它的决策——模型拒绝了一笔申请，但必须告诉申请人「为什么」。在医疗、金融、司法等高风险领域，AI 的每一个决策都必须能追溯、能解释、能质疑。',
  example:'典型工作：实现 LIME/SHAP（特征重要性的局部解释）、Grad-CAM（让模型告诉你它在看图片的哪个区域）、Mechanistic Interpretability（理解 Transformer 的 Attention Head 在做什么）。',
  reps:'代表工作：LIME、SHAP、Grad-CAM；研究方向：Mechanistic Interpretability（Anthropic的重点研究领域）'
},
safety:{
  name:'AI Safety · AI 对齐与安全',
  scene:'你在研究：如何确保一个比人类更聪明的 AI 系统，在没有人监督的情况下，仍然会做人类期望它做的事情——而不是寻找规则漏洞、或者实现一个我们没有真正意图的「字面目标」。',
  example:'典型工作：设计 Constitutional AI（让 AI 用一套原则自我评估和修正）、研究 scalable oversight（如何监督比自己更强的 AI 的工作）、分析 reward hacking 和 specification gaming 的案例。',
  reps:'代表机构：Anthropic、OpenAI Safety Team、ARC；代表工作：RLHF、Constitutional AI、Debate'
},
fairness:{
  name:'AI Fairness · 公平性与伦理',
  scene:'你在审查一个用于假释决策的 AI 系统，发现它对黑人被告的再犯预测风险评分平均比白人被告高 45%——即使控制了犯罪类型和过往记录。AI 公平性研究的核心是：如何识别、量化并消除这种系统性偏差。',
  example:'典型工作：定义和测量不同类型的公平性（demographic parity vs equalized odds）、研究公平性和准确性的权衡（fairness-accuracy tradeoff）、设计去偏的训练方法。',
  reps:'代表工具：IBM AI Fairness 360、Google What-If Tool；代表案例：COMPAS假释系统争议'
},
applied_ai:{
  name:'Applied AI · AI 系统落地',
  scene:'你在一家医疗初创公司，目标是让 AI 系统帮助基层医院筛查糖尿病视网膜病变。技术已经成熟——但真实部署需要解决：农村医生如何信任这个系统、如何处理不同设备拍摄质量的差异、如何在无网络时工作。',
  example:'典型工作：设计面向特定行业的 AI 系统评测框架、研究人机协作中的信任和校准问题（automation bias）、分析模型在真实分布漂移下的鲁棒性。',
  reps:'代表公司：科大讯飞（教育AI）、推想科技（医疗影像）、旷视（人脸识别落地）'
},

// ── CS ──────────────────────────────────────────────
systems:{
  name:'Systems · 系统方向',
  scene:'你在设计支撑全球 5 亿用户同时在线的即时通讯系统——每秒处理 100 万条消息，消息延迟低于 100ms，同时保证「已读」状态的最终一致性。这不是一个算法问题，而是一个「如何让复杂分布式系统可靠运行」的工程挑战。',
  example:'典型工作：设计 Raft/Paxos 的工程实现、优化 Linux 内核的网络栈延迟、研究 NVM（非易失性内存）对存储系统的影响。',
  reps:'代表系统：Redis、RocksDB、ClickHouse；代表课程：MIT 6.824 Distributed Systems'
},
dist_sys:{
  name:'Distributed Systems · 分布式系统',
  scene:'你在设计 Uber 的实时定价系统——全球数百万辆车实时上报位置，数十万乘客同时发起请求，价格需要根据供需实时波动，同时任何一台服务器宕机都不能影响整体服务。这就是分布式系统的现实挑战。',
  example:'典型工作：实现 Raft 共识算法（etcd、CockroachDB 背后的技术）、设计高可用的分布式事务（2PC/3PC 的工程权衡）、分析 CAP 定理在真实系统中的体现。',
  reps:'代表系统：Kafka、Zookeeper、etcd、CockroachDB、Cassandra'
},
sys_ai:{
  name:'Systems for AI · AI 系统工程',
  scene:'你在让 GPT-3 规模的 1750 亿参数模型在 1000 张 GPU 上高效训练——单卡装不下模型，网络通信成为瓶颈，如何把「模型并行、数据并行、流水线并行」组合起来，让 1000 卡的效率达到单卡的 70%？',
  example:'典型工作：实现 ZeRO-3 的显存优化（把 Adam 的 optimizer state 分摊到多卡）、设计高效的 all-reduce 通信（Ring-AllReduce、树形 AllReduce）、优化 CUDA kernel 融合减少内存读写。',
  reps:'代表框架：DeepSpeed、Megatron-LM、FSDP、vLLM；代表论文：ZeRO、Alpa'
},
cloud:{
  name:'Cloud Computing · 云计算',
  scene:'你在设计一个服务——平时有 1000 个并发用户，但每年双十一有 10 万个并发高峰，持续 2 小时。云计算的弹性扩缩容可以让你在高峰期自动扩展到 100 倍容量，高峰过后再自动缩回，只按实际使用付费。',
  example:'典型工作：设计多租户资源隔离（Kubernetes 的 CGroup 机制）、实现 Serverless 的冷启动优化、研究云原生存储（对象存储 vs 块存储 vs 文件存储的适用场景）。',
  reps:'代表平台：AWS、GCP、Azure；代表技术：Kubernetes、Docker、Serverless、Service Mesh'
},
db:{
  name:'Databases · 数据库与数据系统',
  scene:'你在优化一个电商平台的订单查询——用户查询「我最近三个月的退款订单」，涉及 3 亿条记录的表，原本需要 45 秒，客户早就点击刷新走掉了。索引设计、查询优化、存储引擎选择，每个决策都直接影响用户体验。',
  example:'典型工作：实现 LSM-Tree 的 compaction 策略（RocksDB 背后的数据结构）、研究向量数据库的 HNSW 近似近邻搜索、设计 OLAP 查询的列式存储优化。',
  reps:'代表系统：PostgreSQL、MySQL、RocksDB、ClickHouse、Milvus（向量库）'
},
stream:{
  name:'Stream Processing · 流式计算',
  scene:'你在设计实时欺诈检测系统——当一笔银行转账发生时，必须在 200ms 内决定是否拦截。这需要实时处理每秒 10 万条交易流水，关联用户的历史行为、地理位置变化、设备指纹，在极低延迟下给出风险评分。',
  example:'典型工作：设计 Flink 的 windowing 机制处理乱序事件、实现 Kafka Streams 的 exactly-once 语义、研究实时特征计算（feature store 的流批一体架构）。',
  reps:'代表系统：Apache Kafka、Apache Flink、Apache Spark Streaming、Pulsar'
},
theory:{
  name:'Theory CS · 理论计算机科学',
  scene:'你在研究一个已经被问了 50 年的问题：P = NP 吗？如果 NP 问题（比如旅行商问题）有高效解法，那么密码学的基础就崩塌了。理论 CS 的每一个突破都可能从根本上重写我们对计算的理解。',
  example:'典型工作：证明某类算法的近似比下界（NP-hard 规约）、分析在线学习和博弈论的遗憾界（regret bounds）、研究量子计算的复杂度类（BQP 与 NP 的关系）。',
  reps:'代表成果：P vs NP问题、RSA加密的理论基础、NP完全性理论'
},
algo:{
  name:'Algorithms · 算法',
  scene:'你被要求在 Google Maps 里设计「避开收费站的最短路线」——这不只是最短路问题，而是在图上同时优化距离、时间、费用三个目标，还要处理实时路况更新。算法研究就是在约束中找最优解的艺术。',
  example:'典型工作：设计更快的 max-flow 算法（Ford-Fulkerson 的改进）、研究近似算法（TSP 的 1.5-近似）、实现大规模图算法的分布式版本（Pregel 框架）。',
  reps:'代表竞赛：ACM-ICPC、Codeforces；代表课程：MIT 6.046、Stanford CS161'
},
complexity:{
  name:'Complexity Theory · 复杂度理论',
  scene:'你在设计一个密码系统，它的安全性依赖于「分解大整数很难」这个假设——但「很难」是什么意思？复杂度理论给出了数学上严格的「计算难度」定义，让我们能精确讨论问题的本质困难程度。',
  example:'典型工作：证明新的 NP 完全性归约、研究随机化计算的能力（BPP 问题）、分析量子计算对密码学的威胁（Shor 算法）。',
  reps:'代表成果：Cook-Levin定理（SAT是NP完全的）；相关领域：密码学基础、量子计算理论'
},
pl:{
  name:'PL & Compilers · 编程语言',
  scene:'你在设计一种新的编程语言，让开发者无法写出「内存越界访问」这类错误——Rust 的所有权系统就是这样，通过编译期检查消除了 C/C++ 70% 的安全漏洞。这是类型系统和语言设计的杰作。',
  example:'典型工作：设计 Rust 所有权系统的类型推导算法、实现 MLIR 的多层次中间表示（连接深度学习框架和硬件）、研究 JIT 编译器的逃逸分析和内联优化。',
  reps:'代表语言：Rust（所有权）、Haskell（纯函数）；代表编译器：LLVM、GCC、MLIR'
},
formal:{
  name:'Formal Methods · 形式化验证',
  scene:'你在验证波音 787 的飞控软件——一行代码的 bug 可能导致灾难，而测试无法穷举所有情况。形式化验证用数学方法「证明」代码在所有可能输入下都满足规范，这是航空、核电、金融清算系统的最高安全保障。',
  example:'典型工作：用 Coq 证明编译器的正确性（CompCert 项目）、用 TLA+ 规约分布式系统的一致性、验证加密协议的安全性（ProVerif）。',
  reps:'代表工具：Coq、Isabelle、TLA+、Z3（SMT求解器）；代表成果：seL4微内核形式化验证'
},
security:{
  name:'Security · 安全与隐私',
  scene:'你在分析一个被黑客入侵的数据库——攻击者利用了一个 SQL 注入漏洞，绕过了登录验证，获取了 200 万用户的密码哈希。安全研究就是在攻防对抗中，先于攻击者找到系统的薄弱点。',
  example:'典型工作：逆向分析恶意软件、研究 side-channel 攻击（从 CPU 缓存访问模式泄露密钥）、设计隐私保护的联邦学习（差分隐私的参数分析）。',
  reps:'代表赛事：CTF（Capture The Flag）；代表工具：Burp Suite、IDA Pro、Metasploit'
},
networks:{
  name:'Networks · 计算机网络',
  scene:'你在设计海底光缆的路由协议——海底有 400 多条光缆连接全球，一条被船锚切断时，BGP 协议需要在几秒内重新收敛，把全球流量重新路由到其他路径。这就是互联网能「坏而不倒」的秘密。',
  example:'典型工作：研究 QUIC 协议（Google 设计，替代 TCP 的下一代传输层）、实现 P4 可编程交换机、分析 CDN 的请求路由优化。',
  reps:'代表协议：TCP/IP、BGP、QUIC、HTTP/3；代表系统：Cloudflare、Akamai CDN'
},
graphics:{
  name:'Graphics · 计算机图形学',
  scene:'你在为一部科幻电影渲染太空战舰的爆炸效果——每一帧需要模拟数百万个粒子的物理运动、实时计算光线在金属表面的反射折射、生成体积烟雾效果——一帧计算时间可能长达 40 分钟。',
  example:'典型工作：实现路径追踪渲染器（Monte Carlo 积分求解光照方程）、研究 NeRF 的神经渲染（从照片重建三维场景）、优化游戏引擎的实时全局光照。',
  reps:'代表软件：Blender、Unreal Engine；代表技术：光线追踪、NeRF、Gaussian Splatting'
},
geo_proc:{
  name:'Geometry Processing · 几何处理',
  scene:'你在为游戏开发一套自动生成角色动画的系统——给定一个 3D 模型，自动添加骨骼绑定、生成走路/跑步/跳跃等动作，同时保证衣物、皮肤的物理形变看起来真实可信。',
  example:'典型工作：研究网格简化算法（保持视觉质量的同时减少面数）、实现 ARAP（As-Rigid-As-Possible）形变、用扩散模型生成 3D 模型。',
  reps:'代表软件：Maya、3ds Max；代表研究：几何深度学习（PointNet、图卷积）'
},
hci:{
  name:'HCI · 人机交互',
  scene:'你在测试一个医疗 AI 诊断辅助系统的用户界面——通过眼动仪和鼠标轨迹数据，你发现医生普遍会过度信任 AI 的推荐（即使 AI 明显错了），这种「自动化偏见」会导致误诊。HCI 研究的目标就是设计出让人更好地与 AI 协作的界面。',
  example:'典型工作：进行对照实验评估新 UI 设计、研究 AI 可解释性界面的用户理解度、设计面向老年人的无障碍交互系统。',
  reps:'代表顶会：CHI、UIST；代表工具：Figma（原型）、UserTesting（用户研究）'
},
vis:{
  name:'Visualization · 数据可视化',
  scene:'你在为新冠疫情制作实时传播地图——如何用颜色、大小、动画同时表达确诊人数、增长速度、地理分布、医疗系统压力四个维度？一张好的可视化能让观众在 5 秒内理解数据专家花几小时才能讲清楚的故事。',
  example:'典型工作：实现 D3.js 的力导向图、设计 Tableau 无法完成的自定义交互可视化、研究「注意力引导的可视化」（让眼睛自动聚焦到最重要的信息）。',
  reps:'代表工具：D3.js、Vega-Lite、Tableau；代表案例：Our World in Data的新冠可视化'
},

// ── ECE / EE ────────────────────────────────────────
elec_sys:{
  name:'Electronic Systems · 电子系统',
  scene:'你在设计可穿戴心脏监测器的模拟前端——心电信号只有 1mV 幅值，但肌肉运动产生的干扰是它的 100 倍，还要在 3.3V 供电下稳定工作 7 天。模拟电路设计的挑战就是在噪声中提取微弱信号。',
  example:'典型工作：设计低噪声仪表放大器、实现 ADC 的抗混叠滤波器、研究开关电源的 EMI（电磁干扰）抑制。',
  reps:'代表工具：Cadence、ADS；代表公司：德州仪器（TI）、ADI（模拟器件公司）'
},
signal:{
  name:'Signal Processing · 信号处理',
  scene:'你在为特斯拉的 FSD 优化雷达信号处理——雷达回波里混杂着雨滴、路面反射、其他车辆，你需要在 1ms 内从这堆杂波中准确识别出行人的位置和速度，精度误差不能超过 10cm。',
  example:'典型工作：设计 CFAR 检测器（恒虚警率目标检测）、实现 OFDM 的信道估计和均衡、研究压缩感知（欠采样条件下的稀疏信号重建）。',
  reps:'代表领域：雷达信号处理、图像传感器ISP、语音降噪；代表工具：MATLAB Signal Processing Toolbox'
},
comm:{
  name:'Communications · 通信系统',
  scene:'你在设计下一代卫星互联网的链路预算——Starlink 的每颗卫星处于 550km 低轨，需要和地面终端保持稳定的高速连接，同时几百颗卫星要协调频率分配，不互相干扰。这是信息论和工程实现的结合。',
  example:'典型工作：设计 Massive MIMO 的波束赋形算法、研究 Polar Code 的码率匹配（5G 标准的信道编码）、实现 OFDM 系统的同步和均衡。',
  reps:'代表标准：5G NR、WiFi 6/6E；代表公司：高通、华为（5G研究）、Ericsson'
},
info_th:{
  name:'Information Theory · 信息论',
  scene:'香农在 1948 年证明：任何信道都有一个「香农容量」——低于这个速率可以无错误传输，超过这个速率必然出错。这个定理奠定了整个数字通信的理论基础，也是所有压缩算法（JPEG、MP3、zip）的数学根源。',
  example:'典型工作：研究 LDPC 码和 Polar 码接近香农容量的机制、分析深度学习的信息论解释（information bottleneck）、研究量子信道的容量。',
  reps:'代表成果：香农信道容量定理、LDPC码、Polar码（5G标准）'
},
control:{
  name:'Control Systems · 控制系统',
  scene:'你在调试一台工业机械臂的关节控制器——机械臂要在 0.1 秒内把末端精确移动到目标位置（误差<1mm），同时避免振荡和过冲。PID 参数的整定看似简单，但在存在负载变化和摩擦的真实情况下，需要深刻理解控制理论。',
  example:'典型工作：设计工业机器人的力控制器（让机械臂\"有感觉\"地装配精密零件）、研究自动驾驶的横纵向控制（Stanley/Pure Pursuit 算法）、实现四旋翼无人机的姿态控制。',
  reps:'代表工具：MATLAB/Simulink；代表应用：工业自动化、无人机飞控、汽车底盘控制'
},
opt_ctrl:{
  name:'Optimal Control · 最优控制',
  scene:'你在为 SpaceX 的猎鹰火箭设计着陆控制算法——火箭需要在燃料耗尽前精确降落在一个直径 10 米的平台上，同时最小化燃料消耗。MPC（模型预测控制）在每帧都解一个优化问题，让控制性能接近数学上的最优。',
  example:'典型工作：实现 LQR（线性二次调节器）用于倒立摆控制、设计 MPC 算法处理非线性约束、研究随机最优控制（在不确定性下的鲁棒控制）。',
  reps:'代表成就：SpaceX猎鹰火箭垂直着陆、波士顿动力机器人运动控制'
},
embedded:{
  name:'Embedded Systems · 嵌入式系统',
  scene:'你在开发植入式心脏起搏器的固件——芯片只有 256KB RAM，CPU 主频 16MHz，但必须实时监测心律、在 50ms 内检测异常并发出刺激脉冲，同时用一节电池坚持工作 10 年。这是嵌入式系统对可靠性和低功耗的极限挑战。',
  example:'典型工作：实现 FreeRTOS 的任务调度（中断延迟<10μs）、设计 I2C/SPI 驱动程序、用深度睡眠模式把待机电流压到 10μA 以下。',
  reps:'代表平台：STM32、ESP32、Nordic nRF52；代表领域：医疗器械、汽车电子、工业控制'
},
iot:{
  name:'IoT · 物联网',
  scene:'你在为一个智慧农场设计传感器网络——500 个土壤温湿度传感器分布在 1000 亩农田，每个传感器用一节 AA 电池工作 2 年，每小时上报一次数据，数据通过 LoRaWAN 无线传输，最终汇聚到云端做灌溉决策。',
  example:'典型工作：设计低功耗无线协议（LoRa、Zigbee、BLE Mesh）、实现边缘计算（在传感器本地做异常检测，减少无线传输）、研究 Over-the-Air 固件更新。',
  reps:'代表协议：MQTT、LoRaWAN、Zigbee；代表平台：AWS IoT、阿里云IoT'
},
vlsi:{
  name:'VLSI · 芯片设计',
  scene:'你在领导一颗 4nm 工艺 AI 推理芯片的设计——目标是在 10W 功耗内实现 100 TOPS 算力，竞争对手是 Apple M4。从 RTL 代码到 tape-out 需要 18 个月，一次 tapeout 费用 2000 万美元，设计错误没有重来机会。',
  example:'典型工作：设计脉动阵列（Systolic Array）做矩阵乘法加速、分析时序违例并修复（OCV、IR Drop）、用 Design Compiler 做逻辑综合优化。',
  reps:'代表工具：Synopsys Design Compiler、Cadence Innovus；代表公司：台积电、英特尔、三星'
},
eda:{
  name:'EDA · 电子设计自动化',
  scene:'你在用机器学习优化芯片的布局布线——一颗 SoC 有数十亿个晶体管，传统的手工布局不可能，而 EDA 工具的质量直接决定芯片的面积、功耗和性能。ML for EDA 是近五年最热门的研究方向之一。',
  example:'典型工作：用强化学习做 floorplan（Google 2021年 Nature 论文）、用 GNN 预测布局后的时序违例、研究 LLM 辅助的硬件描述语言代码生成。',
  reps:'代表工具：Synopsys、Cadence、Mentor Graphics；代表研究：Google Chip Design with RL (Nature 2021)'
},
photonics:{
  name:'Photonics · 光电子学',
  scene:'你在设计下一代数据中心的光互联方案——传统铜线在 1 米以上的高速数据传输上能耗极高，光纤虽然快但收发器成本高。硅光芯片（Silicon Photonics）可以用成熟的 CMOS 工艺制造光收发器，成本降低 10 倍。',
  example:'典型工作：设计硅基光调制器的驱动电路、研究光量子计算的 qubit 实现、分析 LiDAR（激光雷达）的光学系统设计。',
  reps:'代表公司：Intel Silicon Photonics、IBM Research；应用：数据中心互联、LiDAR、光量子计算'
},

// ── DS / Statistics ──────────────────────────────────
stats:{
  name:'Statistics · 统计学',
  scene:'你在分析一项药物临床试验数据——300 名患者随机分成实验组和对照组，实验组肿瘤缩小率 62%，对照组 47%，差异是真实效果还是随机噪声？统计检验给出了严格的回答：p < 0.001，这个效果不是偶然。',
  example:'典型工作：设计临床试验的样本量计算（power analysis）、研究多重检验的校正方法（FDR 控制）、实现分层随机化分析协方差（ANCOVA）。',
  reps:'代表工具：R、SAS、SPSS；典型领域：医学统计、A/B测试、经济学实证研究'
},
bayes:{
  name:'Bayesian Methods · 贝叶斯方法',
  scene:'你在为一家新闻聚合 APP 估计用户对某类文章的兴趣——新用户只浏览了 3 篇文章，数据太少。贝叶斯方法允许你把「大多数科技从业者喜欢 AI 相关内容」作为先验，然后用 3 次点击的观测来更新这个估计。',
  example:'典型工作：实现层次贝叶斯模型（Hierarchical Bayesian）捕捉用户个性差异、用 MCMC/变分推断做后验估计、设计贝叶斯 A/B 测试（可随时停止而无需修正）。',
  reps:'代表工具：Stan、PyMC、NumPyro；代表应用：贝叶斯广告效果评估、医疗不确定性量化'
},
ds_sci:{
  name:'Data Science · 数据科学',
  scene:'你是一家电商平台的数据科学家，老板问：「我们的用户留存率这季度下降了 3%，是什么原因？」你需要从几千万条行为日志里，分离出产品迭代、市场变化、季节性等多种因素的贡献，最终找到根本原因并量化影响。',
  example:'典型工作：构建用户分群模型（RFM分析）、设计实验评估产品改动效果、研究用户生命周期价值（LTV）预测、异常检测和根因分析。',
  reps:'代表工具：Python (Pandas/Scikit-learn)、SQL、Tableau；代表公司：Netflix DS、Airbnb DS团队'
},
ts_anal:{
  name:'Time Series · 时间序列',
  scene:'你在为北京电网预测明天的用电峰值——需要同时考虑天气（每升温 1°C 用电增加 2%）、工作日/节假日规律、年度增长趋势，以及偶发的大型活动。提前 24 小时的准确预测让电网调度人员从容安排备用机组。',
  example:'典型工作：实现 ARIMA、Prophet、Temporal Fusion Transformer 等时序预测模型、研究时序数据的异常检测（3sigma vs 机器学习方法对比）、多变量时序的 Granger 因果检验。',
  reps:'代表工具：Facebook Prophet、ARIMA、N-BEATS、TFT；应用：能源预测、金融量化、供应链需求预测'
},
causal:{
  name:'Causal Inference · 因果推断',
  scene:'你在帮教育平台评估「AI 辅导功能对学生成绩的影响」——但愿意使用 AI 辅导的学生可能本来就更自律，这个选择偏差让简单的对比分析毫无意义。因果推断的工具（工具变量、断点回归、双重差分）能从观测数据中识别真实的因果效应。',
  example:'典型工作：用双重差分评估政策效果（最低工资上涨对就业的影响）、用工具变量解决内生性问题、用倾向得分匹配做反事实分析。',
  reps:'代表教材：《Causal Inference: The Mixtape》；代表工具：DoWhy、EconML、CausalImpact'
},
econom:{
  name:'Econometrics · 计量经济学',
  scene:'你在研究「名牌大学教育对薪资的真实影响」——申请名校和被录取的人本来就更优秀，所以简单对比名校毕业生和普通大学毕业生的薪资，看到的差距包含了「选拔效应」。计量经济学发展出了精确分离这两种效应的方法。',
  example:'典型工作：利用自然实验设计识别因果效应、实现面板数据的固定效应模型、研究工具变量法在劳动经济学的应用。',
  reps:'代表方法：IV法、双重差分、RDD；2021年诺贝尔经济学奖颁给了这个领域（Card、Imbens、Angrist）'
},
ds_eng:{
  name:'Data Engineering · 数据工程',
  scene:'你在建设字节跳动的数据仓库——每天 800 亿条用户行为日志需要在早上 8 点前完成清洗、聚合、写入分析表，供数据科学团队每天早会使用。数据管道的任何一个环节延误，就会影响几十个下游团队的决策。',
  example:'典型工作：设计 dbt（Data Build Tool）的分层数据模型（ODS→DWD→DWS→ADS）、实现 Kafka 实时消费的流批一体架构、建设数据质量监控系统（异常值检测、数据血缘追踪）。',
  reps:'代表工具：Apache Spark、dbt、Airflow、Kafka；代表职位：Data Engineer、Analytics Engineer'
},
data_qual:{
  name:'Data Quality · 数据质量',
  scene:'你在审查一个机器学习模型为什么突然在生产环境失效——追查发现：上游 ETL 脚本的一次改动，导致某个特征的空值率从 0.1% 跳升到 15%，但没有任何监控告警。数据质量问题是 ML 系统最常见但最难察觉的故障来源。',
  example:'典型工作：设计数据质量规则引擎（Great Expectations 框架）、建立数据血缘追踪系统（Apache Atlas）、实现分布漂移检测（KS 检验、PSI 指标）。',
  reps:'代表工具：Great Expectations、Monte Carlo、dbt tests；典型问题：训练-服务特征不一致'
},
mlops:{
  name:'MLOps · ML 生产工程',
  scene:'你的团队有 20 个模型跑在生产环境——每个模型有不同的训练数据版本、超参数配置、依赖库版本，一次线上事故后你需要快速回滚但不知道「上一个版本」是什么。MLOps 就是给 ML 的「研发运营」建立和软件工程一样的规范。',
  example:'典型工作：设计模型版本管理和实验追踪系统（MLflow）、实现 CI/CD 的自动化模型评估和部署（Kubeflow Pipelines）、建立模型监控和自动触发重训机制。',
  reps:'代表工具：MLflow、Weights & Biases、Kubeflow、Seldon Core；代表理念：\"MLOps = DevOps for ML\"'
},
domain_ds:{
  name:'Domain DS · 领域数据科学',
  scene:'你在和一个医院合作，用电子病历数据预测 ICU 患者的再入院风险——数据高度敏感、样本量有限（几千人）、特征高度稀疏（大部分患者没有做过大多数化验），同时预测错误的代价不对称（漏诊比误诊严重得多）。这是领域数据科学的典型挑战。',
  example:'典型工作：生物信息学（基因表达数据的差异分析、单细胞RNA-seq分析）、金融量化（因子选股、风险模型）、城市计算（出行需求预测、交通流量分析）。',
  reps:'代表数据集：MIMIC（ICU数据）、PSID（收入面板）；代表领域：医疗、金融、能源、教育'
},

// ── Robotics ────────────────────────────────────────
robotics:{
  name:'Robotics · 机器人学',
  scene:'你在开发一台仓储机器人，它需要在嘈杂的亚马逊仓库里自主运行——避开移动的人类工人、识别数千种不规则形状的商品、用机械臂将货物从货架取出装入箱子，一天工作 16 小时，故障率不超过 0.01%。',
  example:'典型工作：实现运动规划（RRT*在 3D 空间中的路径搜索）、设计关节力矩控制器（让机械臂「有感觉」）、Sim-to-Real 迁移（在仿真中训练的策略如何转移到真机）。',
  reps:'代表平台：ROS 2、Gazebo、Isaac Sim；代表公司：Boston Dynamics、Figure、Unitree（宇树）'
},
motion:{
  name:'Motion Planning · 运动规划',
  scene:'你在让一台手术机器人自主规划手术路径——在被血管、神经、器官密集包围的腹腔里，机械臂需要以亚毫米精度移动到目标位置，同时绝对避开所有重要结构。一毫米的偏差可能带来严重后果。',
  example:'典型工作：实现 RRT*（Rapidly-exploring Random Trees）的 6 自由度机械臂路径规划、设计避障的势场法（Potential Field Method）、研究神经网络的运动规划（实时避障）。',
  reps:'代表算法：RRT*、CHOMP、TrajOpt；代表场景：机械臂操作、自动驾驶轨迹规划'
},
mpc:{
  name:'MPC · 模型预测控制',
  scene:'你在给特斯拉 FSD 的高速公路驾驶模块做轨迹规划——每 100ms，系统需要在预测未来 3 秒内可能情景的基础上，选择最优的加速/转向指令，同时满足乘客舒适性（加速度 <0.3g）和安全边界约束。MPC 就是在滚动的时间窗口里解这个优化问题。',
  example:'典型工作：实现非线性 MPC（NMPC）用于四足机器人的步态控制、研究 Tube MPC（应对模型不确定性的鲁棒方案）、用 GPU 加速 MPC 的实时求解。',
  reps:'代表应用：SpaceX猎鹰火箭着陆、ANYmal四足机器人、自动驾驶轨迹规划'
},
perception:{
  name:'Robot Perception · 机器人感知',
  scene:'你在让一台快递无人机在没有 GPS 的城市峡谷里自主飞行——高层建筑遮挡 GPS 信号，视觉 SLAM 用摄像头实时建立三维地图并定位，同时识别可以降落的平台和需要回避的障碍物。',
  example:'典型工作：实现 ORB-SLAM3（特征点提取→特征匹配→BA 优化的完整视觉 SLAM 流程）、设计多传感器标定（摄像头+激光雷达+IMU 的外参估计）、实现占用栅格地图（Occupancy Grid Map）。',
  reps:'代表算法：ORB-SLAM3、LIO-SAM（LiDAR惯性里程计）；代表平台：RealSense D435i'
},
slam:{
  name:'SLAM · 同步定位与建图',
  scene:'你在用手机做室内 AR 导航——App 只靠摄像头，在没有 GPS 的购物中心里，追踪你的精确位置并叠加显示「前方 15 米左转到咖啡厅」。SLAM 让设备在没有预装地图的情况下，边走边建图边定位。',
  example:'典型工作：实现回环检测（识别「我曾经来过这里」，用词袋模型）、研究语义 SLAM（不只知道「在哪」，还知道「周围有什么」）、实现多机器人协作建图。',
  reps:'代表系统：Google ARCore、Apple ARKit；代表算法：LOAM、Cartographer、RTABMap'
},
embodied:{
  name:'Embodied AI · 具身智能',
  scene:'你在训练一个家庭助理机器人，只告诉它「把桌上的苹果放到冰箱里」——它需要先找到苹果（视觉理解）、规划路径（运动规划）、抓取苹果（力控制）、找到冰箱并开门（操作规划）。具身智能的目标是让 AI 真正「活在」物理世界里。',
  example:'典型工作：训练 Diffusion Policy（用扩散模型生成机器人动作序列）、研究 World Models（让机器人在内部模拟中预演动作再执行）、实现 ACT（Action Chunking with Transformers）。',
  reps:'代表工作：RT-2（Google）、Octo、π0（Physical Intelligence）；代表公司：Figure、1X Technologies、宇树（Unitree）'
},
vla:{
  name:'VLA · 视觉语言行动模型',
  scene:'你在开发下一代机器人，它能理解「帮我准备一杯拿铁，用右边的橙色杯子」——需要理解语言中的「拿铁」（找咖啡机）、「右边的橙色杯子」（视觉+空间推理），并把这个理解转化为一系列精确的物理动作。',
  example:'典型工作：将 Vision-Language Model 与机器人控制策略结合（SayCan、PaLM-E）、研究如何用网络视频数据预训练 VLA、设计 VLA 的 Sim-to-Real 迁移策略。',
  reps:'代表工作：RT-2、OpenVLA、π0；代表公司：Physical Intelligence（来自Google Brain研究员创立）'
},
hri:{
  name:'HRI · 人机器人交互',
  scene:'你在为养老院设计陪护机器人——机器人需要判断老人什么时候需要帮助、什么时候只是在思考，理解含糊的指令（「我有点渴」不是字面要求，而是暗示需要帮忙倒水），同时保持让老人感到舒适的社交距离和语气。',
  example:'典型工作：研究机器人运动的「不恐怖谷」效应、设计共享控制系统（人类和机器人协作完成精密操作）、评估不同交互方式（语音/手势/眼神）对老年用户的可用性。',
  reps:'代表机器人：SoftBank Pepper、PARO（海豹机器人）；代表顶会：HRI、RO-MAN'
},
autonomous:{
  name:'Autonomous Systems · 自主系统',
  scene:'你在分析 Waymo 无人出租车在旧金山运营的事故报告——在 200 万英里的无靠背测试中，有 17 次需要人类接管。每一次接管背后是一个值得研究的边缘案例：施工路段的临时标志、穿越马路的摩托车、被遮挡的学校标志。',
  example:'典型工作：设计 BEV（鸟瞰图）目标检测和跟踪、实现行为预测（预测周围车辆的下一步动作）、研究端到端自动驾驶（直接从传感器到控制信号）。',
  reps:'代表公司：Waymo、小鹏智驾、华为ADS、Mobileye；代表数据集：nuScenes、Waymo Open Dataset'
},

// ── Applied Math / OR ─────────────────────────────
sci_comp:{
  name:'Scientific Computing · 科学计算',
  scene:'你在模拟新冠病毒在城市中的传播——建立一个包含 1000 万「虚拟人」的 ABM（基于主体的模型），每个虚拟人有职业、年龄、出行习惯，模拟封控政策的效果需要在超算上运行 72 小时。',
  example:'典型工作：实现 N 体问题的 Barnes-Hut 算法（将 O(n²) 降到 O(n log n)）、用有限元法模拟飞机机翼的气流、实现分子动力学模拟（蛋白质折叠的计算）。',
  reps:'代表工具：MATLAB、NumPy、Julia；代表软件：GROMACS（分子模拟）、OpenFOAM（流体力学）'
},
optim:{
  name:'Optimization · 优化',
  scene:'你在为 Google 设计广告竞价系统——每次用户搜索，数十万个广告主同时参与竞价，Google 需要在 100ms 内找到既让广告主满意（最大化他们的 ROI）又让 Google 收益最大的广告组合。这是一个每天执行数十亿次的大规模优化问题。',
  example:'典型工作：研究 Adam/SGD 的收敛性质、设计约束优化的增广拉格朗日法、实现分布式凸优化的 ADMM 算法。',
  reps:'代表工具：CVX、MOSEK、Gurobi；代表应用：机器学习训练、供应链、广告系统'
},
conv_opt:{
  name:'Convex Optimization · 凸优化',
  scene:'你在设计电网的最优潮流计算——在满足所有用电需求的前提下，如何调度几百座发电站的出力，使总燃料成本最小？这是一个有数千个变量、数千个约束的凸优化问题，每 5 分钟要解一次。',
  example:'典型工作：实现 Interior Point Method（内点法）求解 SDP（半定规划）、研究 LASSO 的坐标下降优化、分析 l1 正则化的稀疏性促进机制。',
  reps:'代表教材：Boyd & Vandenberghe《Convex Optimization》（免费在线）；代表工具：CVX、CVXPY'
},
comb_opt:{
  name:'Combinatorial Optimization · 组合优化',
  scene:'你在为 FedEx 设计年度路网优化方案——全球 700 个枢纽、40000 条航线、150000 辆卡车，每个包裹都有重量、尺寸、时效要求，如何在成本和时效间找到最优平衡？这是现实世界里最难的优化问题之一。',
  example:'典型工作：设计 Vehicle Routing Problem（VRP）的大邻域搜索启发式算法、研究 TSP 的 Branch-and-Bound 精确求解、用图神经网络学习组合优化问题的求解策略。',
  reps:'代表工具：OR-Tools、Gurobi、CPLEX；代表应用：物流路径、排班调度、电路布线'
},
or_ops:{
  name:'Operations Research · 运筹学',
  scene:'你在帮一家医院优化手术室排班——12 间手术室、30 位外科医生、每天 80 台手术，每台手术有时长预测（±20% 不确定性）、医生专长限制、设备共用约束，目标是最小化手术等待时间同时最大化设备利用率。',
  example:'典型工作：建立混合整数规划模型（MILP）、设计列生成算法（针对大规模调度问题）、研究鲁棒优化（应对不确定需求的保守方案）。',
  reps:'代表期刊：Operations Research、Management Science；代表工具：Gurobi、IBM CPLEX'
},
scheduling:{
  name:'Scheduling · 调度优化',
  scene:'你在优化京东物流的分拣中心调度——每天有 300 万个包裹需要在 6 小时内完成分拣，2000 台自动化分拣机、5000 名工人、12 条传送带，如何让每个包裹都走最短路径，同时避免拥堵和碰撞？',
  example:'典型工作：设计单机排序的 EDD（最早截止日期优先）算法、实现并行机的列生成方案、研究云计算任务调度的在线算法。',
  reps:'代表应用：阿里菜鸟仓储机器人、亚马逊Kiva系统、Uber动态定价算法'
},
stoch:{
  name:'Stochastic Processes · 随机过程',
  scene:'你在为一家寿险公司建立核保模型——需要精确预测 35 岁不吸烟男性在未来 20 年内的死亡概率。马尔可夫链可以建模健康状态转移（健康→患病→死亡），随机过程的数学让我们能精确量化这种不确定性。',
  example:'典型工作：实现蒙特卡洛模拟（对随机变量积分）、分析排队系统的稳态分布（M/M/1 队列的等待时间）、研究布朗运动在期权定价中的应用（Black-Scholes 公式的推导）。',
  reps:'代表应用：期权定价（Black-Scholes）、信用风险（CreditMetrics）、RLHF中的奖励建模'
},
uq:{
  name:'Uncertainty Quantification · 不确定性量化',
  scene:'你在为核电站的安全系统做分析——模拟反应堆冷却系统失效的概率。但模型参数（材料强度、流体性质）都有不确定性，UQ 能告诉你：「给定参数的 5% 不确定性，系统失效概率的 95% 置信区间是多少？」',
  example:'典型工作：实现多项式混沌展开（PCE）用于高维不确定性传播、设计 Bayesian Neural Network 的校准方法（让神经网络的置信度真正有统计意义）、研究气候模型的集成预测。',
  reps:'代表工具：UQLab、OpenTURNS；代表应用：气候预测、核安全分析、医疗设备可靠性'
},
game_th:{
  name:'Game Theory · 博弈论',
  scene:'你在分析苹果和高通的专利授权谈判——双方都想获得更有利的条款，但如果谈判破裂双方都会受损。博弈论的纳什均衡预测双方会在什么条件下达成协议，Shapley 值告诉你如何「公平」分配合作带来的收益。',
  example:'典型工作：分析广告拍卖的激励相容性（为什么 Vickrey 拍卖让人诚实出价）、研究多智能体强化学习中的涌现协作行为、设计 AI 对齐的机制（让 AI 自主选择有益行为）。',
  reps:'代表成果：2012年诺贝尔奖（稳定匹配理论）；应用：拍卖设计、平台定价、多智能体AI'
},
dynamic_prog:{
  name:'Dynamic Programming · 动态规划',
  scene:'你在为一家航空公司优化座位收益管理——距离起飞还有 30 天，应该对剩余的 47 个座位定什么价格？价格太高卖不出去，太低损失收益。动态规划把这个问题分解成：在每个时间点，根据剩余座位数量和时间做出最优定价决策。',
  example:'典型工作：实现 Bellman 方程求解最优策略（适用于状态空间有限的问题）、设计近似动态规划应对维度诅咒（状态空间过大时的近似求解）、研究 DP 和 RL 的关系（Q-learning 是 DP 的在线版本）。',
  reps:'代表应用：航空公司收益管理、库存控制、生产调度；代表算法：值迭代、策略迭代'
},
comp_bio:{
  name:'Computational Biology · 计算生物学',
  scene:'你在用 AlphaFold 预测一种抗生素耐药蛋白的三维结构——传统实验方法需要数年，AlphaFold 只需几分钟。但从结构到「能不能设计一种药物阻断它的功能」，还需要分子动力学模拟、虚拟筛选、能量计算——这就是计算生物学的价值。',
  example:'典型工作：分析单细胞 RNA 测序数据（细胞类型鉴定和轨迹分析）、设计基因调控网络的因果分析、研究蛋白质-蛋白质相互作用预测。',
  reps:'代表工作：AlphaFold（蛋白质结构预测）；代表工具：BioPython、Scanpy（单细胞分析）'
},

// ── CE / Computer Engineering ──────────────────────
arch:{
  name:'Computer Architecture · 计算机体系结构',
  scene:'你在设计 Nvidia 下一代 GPU 的 L2 缓存层次——在 LLM 推理工作负载下，KV Cache 的访问模式和传统图形负载完全不同，原有的缓存替换策略导致大量 miss，重新设计后吞吐量提升 23%。',
  example:'典型工作：设计 Out-of-Order CPU 的 ROB（Reorder Buffer）、研究 3D 堆叠内存（HBM）对 AI 加速器的影响、实现分支预测器的机器学习方案（TAGE 预测器）。',
  reps:'代表课程：CMU 15-418 Parallel Computer Architecture；代表工具：gem5模拟器'
},
mem_sys:{
  name:'Memory Systems · 内存系统',
  scene:'你在分析为什么 GPT-3 的推理在 A100 上 GPU 利用率只有 30%——大量时间在等待 KV Cache 从 HBM（高带宽内存）加载到 SRAM。内存系统是 AI 加速器最大的瓶颈，比算力本身更关键。',
  example:'典型工作：实现 Flash Attention（通过 tiling 减少 HBM 读写次数）、研究 CXL（Compute Express Link）对内存池化的影响、设计 Near-Memory Processing（在 DRAM 里做计算）。',
  reps:'代表技术：HBM（高带宽内存）、CXL 互连、SRAM vs DRAM vs HBM 层次架构'
},
emb_sw:{
  name:'Embedded Software · 嵌入式软件',
  scene:'你在开发特斯拉 Model 3 自动驾驶的 ADAS 控制器软件——这段 C++ 代码运行在实时操作系统上，必须满足 ISO 26262 ASIL-D 功能安全标准，任何代码路径的最坏执行时间都必须在 10ms 以内，并经过形式化验证。',
  example:'典型工作：实现 AUTOSAR（汽车嵌入式软件标准）的 BSW（基础软件层）、设计 MISRA-C 合规的安全关键代码、用 WCET（最坏执行时间）分析工具验证实时性。',
  reps:'代表标准：ISO 26262（汽车功能安全）、IEC 61508（工业安全）；代表工具：IAR、Keil'
},
hw_sw:{
  name:'HW-SW Co-Design · 软硬件协同',
  scene:'你在设计一颗手机 AI 芯片的同时设计它的编译器——芯片支持一种新的 INT4 乘加阵列，但如果编译器无法自动把 Transformer 的矩阵乘法映射到这个阵列，芯片的理论算力就只是纸上数字。软硬件协同确保两者能真正「配合」。',
  example:'典型工作：研究 Domain Specific Architecture（DSA）的指令集设计、设计 FPGA overlay 架构（可重配置的专用加速器）、实现编译器-硬件协同的数据流优化。',
  reps:'代表设计：Apple Neural Engine（ANE）、Google TPU；代表框架：MLIR、TVM'
},
soc:{
  name:'SoC · 片上系统',
  scene:'你在设计苹果 M4 芯片的集成验证——这颗芯片集成了 CPU、GPU、NPU、内存控制器、安全模块，十个不同团队的模块要在同一颗硅片上协同工作，其中任何接口时序错误都可能导致数据损坏，而这类 bug 在芯片出厂后无法修复。',
  example:'典型工作：实现 ARM AMBA AXI 总线协议的 RTL 设计、研究 SoC 的 NoC（片上网络）路由算法、用 UVM（通用验证方法学）构建模块验证环境。',
  reps:'代表芯片：Apple M系列、高通骁龙、联发科天玑；代表工具：Synopsys VCS、Cadence Xcelium'
},
ai_hw:{
  name:'AI Accelerators · AI 加速器',
  scene:'你在设计专门为 Transformer 推理优化的 NPU 数据流——传统 GPU 把矩阵乘法看作二维问题，但 Attention 的 QKV 计算有独特的访问模式，设计专门的数据流可以把内存带宽利用率从 40% 提升到 85%。',
  example:'典型工作：设计 Weight-Stationary 和 Output-Stationary 数据流的对比分析、实现 Sparse Attention 的硬件加速（利用注意力矩阵的稀疏性）、研究 PIM（Processing-In-Memory）在 LLM 推理的应用。',
  reps:'代表芯片：Nvidia H100、Google TPU v4、寒武纪 MLU、华为昇腾'
},
npu:{
  name:'NPU · 神经处理器',
  scene:'你在为手机 NPU 设计 INT4 量化推理引擎——每颗手机 NPU 面积不到 5mm²、功耗预算 2W，但要在本地运行 7B 参数的语言模型，生成速度至少 10 tokens/s。从矩阵运算单元设计到内存系统优化，每个细节都决定最终性能。',
  example:'典型工作：设计 Structured Sparsity 加速单元（Nvidia A100 的 Sparse Tensor Core）、实现 INT4/FP8 混合精度的量化推理、研究 In-Memory Computing 的 compute density。',
  reps:'代表芯片：Apple ANE、高通 Hexagon、华为昇腾；代表研究：ISSCC、Hot Chips'
},
in_mem:{
  name:'In-Memory Computing · 存算一体',
  scene:'你在研究一种突破冯·诺依曼架构瓶颈的新型芯片——把「存储」和「计算」融合在同一个物理位置，避免数据在CPU和内存之间反复搬运。对 AI 推理来说，这意味着能效比可以提升 10-100 倍，让「手表上的 GPT」成为可能。',
  example:'典型工作：设计基于 SRAM/DRAM 的矩阵乘法 PIM 架构、研究 ReRAM 的模拟计算（用电阻值存储权重，用欧姆定律做乘法）、分析存算一体的精度-能效权衡。',
  reps:'代表研究：ISSCC 2024的多篇IMC论文；代表公司：SKHYNIX、三星、TSMC研究部门'
},
fpga:{
  name:'FPGA · 可重构计算',
  scene:'你在为一家高频交易公司用 FPGA 实现低延迟行情处理——当交易所的价格数据包到达时，FPGA 在收到数据的几百纳秒内就能完成解析、计算、生成订单，比软件实现快 10-100 倍，这种延迟优势直接转化为利润。',
  example:'典型工作：用 Verilog 实现 LLM 的 Attention 加速器并在 AMD Alveo 上部署、研究 FPGA 的高层次综合（HLS，用 C++ 写硬件）、设计 FPGA 集群的 AI 训练加速。',
  reps:'代表厂商：Xilinx（现AMD）、Intel Altera；代表应用：高频交易、基站信号处理、AI推理'
},
logic_des:{
  name:'Logic Design · 数字逻辑设计',
  scene:'你在调试一块新芯片的 DDR5 内存控制器——在 6400MT/s 的高速下，时序窗口只有 150ps，任何一个触发器的时序违例都会导致数据读写错误，而且这种错误极难复现和定位。从 RTL 到 DFT 到功能验证，数字设计的每个环节都需要极高精度。',
  example:'典型工作：实现 RISC-V 五级流水线处理器（经典教学项目）、设计 AXI4 总线 Crossbar、实现 LFSR（线性反馈移位寄存器）用于随机数生成。',
  reps:'代表课程：MIT 6.004 Computation Structures；代表工具：Vivado、Quartus Prime'
}
};

// ═══════════════════════════════════════════════════════
// PART 3: CLUSTERS (7 domains × sub-clusters for radar)
// ═══════════════════════════════════════════════════════

var CLUSTERS=[
  // AI clusters
  {id:'ai_core',   label:'AI 核心研究 / AI Core Research',  color:'var(--ai-color)', domain:'ai',
   keys:['ml','dl','repr','ssl','transfer','foundation','ml_theory','stat_learn','opt_ml','scaling'],
   high:'这是你得分最突出的区域。你对模型机制、理论和学习算法有持续的好奇心——不满足于「能用」，更想知道「为什么」。',
   mid:'AI 核心方向在你的答案里有稳定的得分，但不是最集中的区域。你可能把 ML/DL 作为工具，而不是研究对象本身。',
   low:'AI 核心研究不是你目前最强的驱动力，这在产品和工程导向的人中很常见。'},
  {id:'lang_intel', label:'语言智能 / Language Intelligence', color:'#a78bfa', domain:'ai',
   keys:['nlp','llm','ir','recsys','speech','doc_intel'],
   high:'语言智能是你的一个突出兴趣点。你对文本、语言、检索和对话系统有持续关注——LLM 时代这个方向的前沿移动速度最快。',
   mid:'你对语言智能有一定兴趣，但没有成为最核心驱动力。',
   low:'语言智能不是你目前的主要兴趣圈。'},
  {id:'vision_multi',label:'视觉与多模态 / Vision & Multimodal', color:'#60a5fa', domain:'ai',
   keys:['cv','med_vision','video','vision3d','multimodal','vlm'],
   high:'视觉和多模态理解是你的强项之一。从医疗影像到三维重建，你对「让机器看懂世界」有真实热情。',
   mid:'你对视觉方向有一定兴趣，把它作为工具或研究的一部分。',
   low:'视觉方向不是你的核心兴趣。'},
  {id:'gen_rl',     label:'生成与决策 / Generative & RL',    color:'#f472b6', domain:'ai',
   keys:['generative','diffusion','creative_ai','rl','offline_rl','multiagent','planning_ai'],
   high:'生成式 AI 和强化学习是你的兴趣核心区域之一。你对「让 AI 创造和决策」——从扩散模型到智能体——有持续热情。',
   mid:'生成和决策方向你有一定关注，但不是最核心的区域。',
   low:'生成式 AI 和 RL 目前不是你的主要研究兴趣。'},
  {id:'trust_ai',   label:'可信 AI / Trustworthy AI',        color:'#c084fc', domain:'ai',
   keys:['xai','safety','fairness','efficient','quant','inf_opt'],
   high:'你对「AI 怎么对人负责」有持续关注——可解释性、对齐、公平性。这随着 AI 影响力扩大正从边缘走向主流。',
   mid:'可信 AI 你有一定关注，但没有成为核心驱动力。',
   low:'可信 AI 目前不在你的核心关注圈，这在研究早期很常见。'},
  // CS clusters
  {id:'cs_systems', label:'系统与数据 / Systems & Data',      color:'var(--cs-color)', domain:'cs',
   keys:['systems','dist_sys','sys_ai','cloud','db','stream','networks'],
   high:'系统方向是你的强项之一。你对「东西怎么跑起来、为什么快/慢」有天然好奇心。这类人在业界极其稀缺，薪资溢价极高。',
   mid:'你对系统方向有基本兴趣，把它作为支撑其他工作的必要工具，而不是研究对象本身。',
   low:'系统和数据基础设施不是你的主要兴趣。你更可能是「给我一个能跑的环境，我专注算法」的人。'},
  {id:'cs_theory',  label:'理论与算法 / Theory & PL',         color:'#34d399', domain:'cs',
   keys:['theory','algo','complexity','pl','formal'],
   high:'理论 CS 是你的一个突出兴趣点。你对算法的本质、复杂度下界和程序正确性有数学层面的好奇心。',
   mid:'你对理论和算法有一定兴趣，但没有成为最核心的驱动力。',
   low:'理论 CS 目前不是你的核心兴趣。'},
  {id:'cs_hci_vis', label:'人机与可视化 / HCI & Visualization', color:'#facc15', domain:'cs',
   keys:['hci','vis','graphics','geo_proc','security'],
   high:'你对「人与计算机如何交互、数据如何被看见」有持续热情——HCI、可视化、图形学在 AI 时代正在被重新定义。',
   mid:'HCI 和可视化方向你有一定兴趣，在研究中作为工具或辅助方向。',
   low:'HCI 和可视化目前不在你的核心兴趣圈。'},
  // EE clusters
  {id:'ee_hw',      label:'硬件与芯片 / Hardware & VLSI',     color:'var(--ee-color)', domain:'ee',
   keys:['vlsi','eda','elec_sys','photonics'],
   high:'芯片设计和电子系统是你的强项之一。从 VLSI 到 EDA，你对硬件底层有真实热情。这条路技术壁垒极高，职业护城河宽。',
   mid:'你对硬件方向有基本兴趣，但不作为核心研究方向。',
   low:'硬件和芯片设计不是你的核心兴趣。'},
  {id:'ee_signal',  label:'信号与通信 / Signal & Comm',       color:'#38bdf8', domain:'ee',
   keys:['signal','comm','info_th'],
   high:'信号处理和通信是你的一个突出方向。信息论、信道编码、5G/6G 研究——这是电气工程最经典的核心领域。',
   mid:'你对信号和通信有一定兴趣，但不是最核心的方向。',
   low:'信号处理和通信目前不是你的核心兴趣。'},
  {id:'ee_control', label:'控制与嵌入式 / Control & Embedded', color:'#fb923c', domain:'ee',
   keys:['control','opt_ctrl','embedded','iot'],
   high:'控制系统和嵌入式是你的一个强方向。从最优控制到 IoT，你对「让系统在物理世界可靠运行」有热情。',
   mid:'你对控制和嵌入式有基本兴趣，通常作为机器人或物联网研究的一部分。',
   low:'控制和嵌入式目前不是你的核心兴趣。'},
  // DS clusters
  {id:'ds_stats',   label:'统计与因果 / Statistics & Causal',  color:'var(--ds-color)', domain:'ds',
   keys:['stats','bayes','causal','econom','uq'],
   high:'统计和因果推断是你的核心强项。你对「数据说了什么」的判断建立在严格的数学基础上——这在数据科学界极其稀缺。',
   mid:'你对统计和因果有一定基础，作为分析工具在用。',
   low:'统计方法目前不是你的核心研究兴趣。'},
  {id:'ds_applied', label:'数据科学实践 / Applied DS',          color:'#f87171', domain:'ds',
   keys:['ds_sci','ts_anal','ds_eng','data_qual','mlops','domain_ds'],
   high:'应用数据科学是你的主战场。从数据工程到领域数据科学，你关注的是「让数据真正服务于决策和产品」。',
   mid:'你对应用数据科学有一定偏好，把它作为支撑业务或研究的工具。',
   low:'应用数据科学不是你的主要兴趣，你更关注上游的建模或系统层面。'},
  // Robotics clusters
  {id:'rb_embodied',label:'具身与自主 / Embodied & Autonomous', color:'var(--rb-color)', domain:'rb',
   keys:['embodied','vla','autonomous','robotics'],
   high:'具身智能和自主系统是你的核心兴趣区域。你对「AI 真正进入物理世界」有热情——不只是屏幕上的模型，而是能感知、行动、学习的系统。',
   mid:'你对具身智能有一定兴趣，但没有成为最核心的驱动力。',
   low:'具身智能目前不在你的核心兴趣圈里，这在大多数 AI 工作者中是正常的。'},
  {id:'rb_perc_ctrl',label:'感知与控制 / Perception & Control', color:'#fdba74', domain:'rb',
   keys:['perception','slam','motion','mpc','control','opt_ctrl','hri'],
   high:'机器人感知和控制是你的技术核心。SLAM、运动规划、反馈控制——这是让机器人真正「能用」的关键底层技术。',
   mid:'你对感知和控制有基本兴趣，通常作为机器人系统的组成部分。',
   low:'机器人感知和控制不是你目前的核心兴趣。'},
  // OR clusters
  {id:'or_optim',   label:'优化与运筹 / Optimization & OR',    color:'var(--or-color)', domain:'or',
   keys:['optim','conv_opt','comb_opt','or_ops','scheduling','dynamic_prog'],
   high:'优化和运筹是你的核心方向。你对「在约束下找最优解」这类数学问题有真实热情——从凸优化到整数规划。',
   mid:'你对优化方法有一定偏好，通常作为 ML 训练或系统设计的工具。',
   low:'优化和运筹目前不在你的核心兴趣圈，这对 AI/CS 方向的人来说很常见。'},
  {id:'or_stoch',   label:'随机与决策 / Stochastic & Decision', color:'#a3e635', domain:'or',
   keys:['stoch','uq','game_th','comp_bio','sci_comp'],
   high:'随机系统和计算决策是你的一个突出方向。你对不确定性的数学建模、博弈论和科学计算有持续热情。',
   mid:'你对随机和决策方向有一定兴趣，通常作为建模工具。',
   low:'随机系统目前不在你的核心关注圈。'},
  // CE clusters
  {id:'ce_arch',    label:'体系结构 / Computer Architecture',  color:'#818cf8', domain:'ce',
   keys:['arch','mem_sys','fpga','logic_des'],
   high:'计算机体系结构是你的强方向之一。你对「处理器怎么工作、内存怎么组织、硬件并行性」有深层好奇心。',
   mid:'你对体系结构有基本兴趣，通常作为理解系统性能的背景知识。',
   low:'计算机体系结构目前不是你的核心兴趣。'},
  {id:'ce_ai_hw',   label:'AI硬件 / AI Hardware Systems',      color:'#6366f1', domain:'ce',
   keys:['ai_hw','npu','in_mem','hw_sw','soc','emb_sw'],
   high:'AI 专用硬件是你的一个突出方向。从 NPU 到存算一体，你关注的是「让 AI 在硬件上跑得更快更省」——这是当前最热门的硬件方向。',
   mid:'你对 AI 硬件有一定兴趣，通常作为 AI 系统优化的底层背景。',
   low:'AI 专用硬件目前不在你的核心关注圈。'},
];


// ═══════════════════════════════════════════════════════
// PART 4: ALL QUESTION BANKS (3-phase, 7 domain tracks)
// ═══════════════════════════════════════════════════════

// ── PHASE 1: ANCHOR (20 questions, all users) ──────────
// ═══════════════════════════════════════════════════════
// PART 7: PHASE 4 — CAREER ORIENTATION QUESTIONS
// 40 questions across 8 career clusters, ~5 per cluster
// Each option maps to a specific career key in CAREER_ROLES
// Users see 1-2 clusters (5-10 questions) based on top directions
// ═══════════════════════════════════════════════════════

// Career role registry — maps career keys to display info
var CAREER_ROLES = {
  // AI Research
  'ml_rs':      {name:'ML Research Scientist / 机器学习研究科学家',   type:'research', salary:'$35–80万/年 (美国)', org:'大厂研究院 / 顶校博后'},
  'ml_theorist':{name:'ML Theorist / 机器学习理论研究员',             type:'research', salary:'$30–70万/年',       org:'学术界 / 研究院'},
  'applied_sci':{name:'Applied Scientist / 应用科学家',               type:'applied',  salary:'$30–65万/年',       org:'大厂产品团队'},
  'fm_researcher':{name:'Foundation Model Researcher / 基础模型研究员',type:'research', salary:'$45–120万+/年',     org:'OpenAI / Anthropic / DeepMind'},
  'optim_researcher':{name:'Optimization Researcher / 优化研究员',    type:'research', salary:'$30–70万/年',       org:'研究院 / 量化基金'},
  // LLM / NLP
  'llm_eng':    {name:'LLM Engineer / 大语言模型工程师',              type:'engineer', salary:'$25–60万/年',       org:'大厂 / AI 创业公司'},
  'llm_rs':     {name:'LLM Research Scientist / LLM研究科学家',       type:'research', salary:'$40–100万+/年',     org:'研究院 / AI Lab'},
  'nlp_eng':    {name:'NLP Engineer / 自然语言处理工程师',             type:'engineer', salary:'$22–55万/年',       org:'大厂 / 搜索 / 对话AI'},
  'search_eng': {name:'Search & Ranking Engineer / 搜索排名工程师',    type:'engineer', salary:'$25–60万/年',       org:'Google / Baidu / 电商'},
  'recsys_eng': {name:'RecSys Engineer / 推荐系统工程师',              type:'engineer', salary:'$25–60万/年',       org:'字节 / Meta / 淘宝'},
  'agent_eng':  {name:'AI Agent Engineer / AI智能体工程师',            type:'engineer', salary:'$25–65万/年',       org:'AI 创业公司 / 大厂'},
  // Vision / Generative
  'cv_eng':     {name:'CV Engineer / 计算机视觉工程师',               type:'engineer', salary:'$22–55万/年',       org:'大厂 / 自动驾驶 / 安防'},
  'med_vision_sci':{name:'Medical Vision Scientist / 医疗影像科学家',  type:'applied',  salary:'$25–60万/年',       org:'医疗 AI 公司 / 医院 / 研究院'},
  'genai_eng':  {name:'Generative AI Engineer / 生成式AI工程师',       type:'engineer', salary:'$25–65万/年',       org:'大厂 / 创意AI公司'},
  'vlm_eng':    {name:'VLM Engineer / 视觉语言模型工程师',             type:'engineer', salary:'$28–70万/年',       org:'研究院 / 多模态AI公司'},
  'vision3d_eng':{name:'3D Vision Engineer / 三维视觉工程师',          type:'engineer', salary:'$25–60万/年',       org:'自动驾驶 / AR/VR / 游戏'},
  'video_ai':   {name:'Video AI Engineer / 视频AI工程师',              type:'engineer', salary:'$25–60万/年',       org:'视频平台 / 内容AI公司'},
  // Systems
  'ml_sys_eng': {name:'ML Systems Engineer / ML系统工程师',            type:'engineer', salary:'$30–80万/年',       org:'大厂 AI 基础设施'},
  'inf_eng':    {name:'Inference Engineer / 推理优化工程师',            type:'engineer', salary:'$28–75万/年',       org:'大厂 / AI 创业'},
  'dist_sys_eng':{name:'Distributed Systems Engineer / 分布式系统工程师',type:'engineer',salary:'$28–70万/年',      org:'大厂后端 / 云厂商'},
  'data_plat':  {name:'Data Platform Engineer / 数据平台工程师',        type:'engineer', salary:'$22–55万/年',       org:'大厂数据部门'},
  'ai_infra':   {name:'AI Infrastructure Engineer / AI基础设施工程师',  type:'engineer', salary:'$30–80万+/年',      org:'Nvidia / Google / Meta'},
  'compiler_eng':{name:'Compiler / Kernel Engineer / 编译器工程师',     type:'engineer', salary:'$28–75万/年',       org:'大厂 / Nvidia / AI 芯片公司'},
  // Hardware / Chip
  'ai_hw_eng':  {name:'AI Accelerator Engineer / AI加速器工程师',       type:'engineer', salary:'$30–80万+/年',      org:'Nvidia / AMD / 寒武纪 / 华为海思'},
  'npu_arch':   {name:'NPU Architect / 神经处理器架构师',               type:'engineer', salary:'$35–100万+/年',     org:'Apple / Nvidia / 华为 / 初创芯片公司'},
  'vlsi_eng':   {name:'VLSI / ASIC Engineer / 芯片设计工程师',          type:'engineer', salary:'$25–65万/年',       org:'Intel / Qualcomm / 展锐 / TSMC 合作伙伴'},
  'embedded_eng':{name:'Embedded Systems Engineer / 嵌入式系统工程师',  type:'engineer', salary:'$20–50万/年',       org:'汽车 / 工业 / 消费电子'},
  'dsp_eng':    {name:'DSP / Signal Processing Engineer / 信号处理工程师',type:'engineer',salary:'$22–55万/年',      org:'通信 / 音频 / 自动驾驶感知'},
  'eda_eng':    {name:'EDA Engineer / 电子设计自动化工程师',             type:'engineer', salary:'$25–60万/年',       org:'Synopsys / Cadence / 国产EDA公司'},
  // Robotics
  'robotics_eng':{name:'Robotics Engineer / 机器人工程师',              type:'engineer', salary:'$25–60万/年',       org:'工业机器人 / 服务机器人 / 大疆'},
  'av_eng':     {name:'Autonomous Driving Engineer / 自动驾驶工程师',    type:'engineer', salary:'$28–80万/年',       org:'Waymo / 小鹏 / 华为智驾 / 比亚迪'},
  'robot_learn':{name:'Robot Learning Engineer / 机器人学习工程师',      type:'research', salary:'$28–70万/年',       org:'具身智能公司 / 大厂机器人部门'},
  'perception_eng':{name:'Perception Engineer / 感知工程师',             type:'engineer', salary:'$25–65万/年',       org:'自动驾驶 / 机器人'},
  'hri_researcher':{name:'HRI Researcher / 人机交互研究员',              type:'research', salary:'$25–55万/年',       org:'学术界 / 服务机器人公司'},
  'slam_eng':   {name:'SLAM Engineer / 定位建图工程师',                  type:'engineer', salary:'$25–60万/年',       org:'自动驾驶 / 无人机 / AR'},
  // Data Science
  'data_sci':   {name:'Data Scientist / 数据科学家',                     type:'applied',  salary:'$18–45万/年',       org:'大厂业务部门 / 金融 / 医疗'},
  'causal_sci': {name:'Causal Inference Scientist / 因果推断科学家',      type:'research', salary:'$25–55万/年',       org:'大厂实验平台 / 政策研究'},
  'data_eng_role':{name:'Data Engineer / 数据工程师',                    type:'engineer', salary:'$18–40万/年',       org:'大厂数据平台 / 数据创业公司'},
  'mlops_eng':  {name:'MLOps Engineer / ML生产工程师',                   type:'engineer', salary:'$22–50万/年',       org:'大厂 AI 平台 / 创业公司'},
  'domain_ds':  {name:'Domain Data Scientist / 领域数据科学家',          type:'applied',  salary:'$20–55万/年',       org:'医疗 / 金融 / 社科研究院'},
  'quant_ds':   {name:'Quantitative Analyst / 量化分析师',               type:'quant',    salary:'$30–150万+/年',     org:'量化基金 / 投行 / 风险管理'},
  // OR / Quant
  'or_sci':     {name:'OR Scientist / 运筹学科学家',                     type:'research', salary:'$25–65万/年',       org:'大厂调度优化 / 物流公司 / 咨询'},
  'quant_researcher':{name:'Quantitative Researcher / 量化研究员',        type:'quant',    salary:'$35–150万+/年',     org:'Jane Street / Two Sigma / 量化私募'},
  'optim_eng':  {name:'Optimization Engineer / 优化工程师',              type:'engineer', salary:'$25–60万/年',       org:'物流 / 能源 / 云计算资源调度'},
  'risk_sci':   {name:'Risk Scientist / 风险科学家',                     type:'applied',  salary:'$25–65万/年',       org:'金融机构 / 保险 / 大厂风控'},
  'decision_sci':{name:'Decision Scientist / 决策科学家',                type:'applied',  salary:'$22–55万/年',       org:'大厂业务决策 / 咨询公司'},
};

// ── Career question banks (40 total, 5 per cluster) ──
var CAREER_Qs = [

// ════ Cluster 1: AI Research (ml_theory, stat_learn, opt_ml, repr, ssl) ════
{id:'c_air1', phase:'career', cluster:'career_ai_research',
 triggerDirs:['ml_theory','stat_learn','opt_ml','repr','ssl'],
 text:'你最享受的研究工作节奏是？',
 opts:[
  {t:'长期钻研单一深度问题，接受以年计的反馈周期',     career:'ml_theorist'},
  {t:'在研究和产品之间切换，研究成果要能落地',      sub:'Switching between research and product, results must ship',      career:'applied_sci'},
  {t:'大算力资源、追前沿模型，研究高度密集',         sub:'Massive compute, frontier models, high-intensity research',      career:'fm_researcher'},
  {t:'设计实验验证理论假设，输出严格证明或分析',     sub:'Design experiments to validate theoretical hypotheses',         career:'ml_rs'},
 ]},

{id:'c_air2', phase:'career', cluster:'career_ai_research',
 triggerDirs:['ml_theory','stat_learn','opt_ml','repr','ssl'],
 text:'你最希望你的研究产出是什么形式？',
 opts:[
  {t:'顶会论文（NeurIPS/ICML/ICLR），被同行引用',                        career:'ml_rs'},
  {t:'实际部署的模型，影响数亿用户',               sub:'Deployed models impacting hundreds of millions of users',        career:'applied_sci'},
  {t:'新的优化算法或理论，被 PyTorch/JAX 采用',    sub:'New optimization algorithms or theory adopted by PyTorch/JAX',   career:'optim_researcher'},
  {t:'基础模型（GPT/Claude 级别），定义一个领域',  sub:'Foundation models (GPT/Claude-level) that define a field',      career:'fm_researcher'},
 ]},

{id:'c_air3', phase:'career', cluster:'career_ai_research',
 triggerDirs:['ml_theory','stat_learn','opt_ml'],
 text:'你对数学推导的态度？',
 opts:[
  {t:'推导是核心工作，乐于几周推一个定理',         sub:'Derivation is core work; happy to spend weeks on a theorem',     career:'ml_theorist'},
  {t:'数学是工具，能用就行，不是终点',             sub:'Math is a tool; useful but not the goal',                        career:'applied_sci'},
  {t:'享受理论与实验的结合——理解 why，也要验证 what',        career:'ml_rs'},
  {t:'优化理论——关心算法的收敛速度和计算代价',      sub:'Optimization theory: convergence rates and computational cost',  career:'optim_researcher'},
 ]},

{id:'c_air4', phase:'career', cluster:'career_ai_research',
 triggerDirs:['repr','ssl','transfer'],
 text:'表示学习里你最想解决的问题？',
 opts:[
  {t:'理论上理解为什么对比学习有效——几何结构是什么',      career:'ml_rs'},
  {t:'在新的模态（蛋白质/音频/代码）上做预训练',   sub:'Pretraining on new modalities: protein / audio / code',          career:'fm_researcher'},
  {t:'把表示学习用于工业级推荐系统的 embedding',   sub:'Applying repr learning to industrial recommendation embeddings',  career:'applied_sci'},
  {t:'研究迁移学习的泛化边界——什么条件下一定有效',           career:'ml_theorist'},
 ]},



// ════ Cluster 2: LLM / NLP (llm, nlp, ir, recsys, speech) ════
{id:'c_llm1', phase:'career', cluster:'career_llm_nlp',
 triggerDirs:['llm','nlp','ir','recsys','speech'],
 text:'语言/检索方向里你最想做的事情？',
 opts:[
  {t:'研究 LLM 推理和对齐——理解和改进模型行为',    sub:'Research LLM reasoning and alignment: understand and improve model behavior', career:'llm_rs'},
  {t:'工程化大规模 LLM 服务——支撑数亿用户',        sub:'Engineer large-scale LLM serving for hundreds of millions of users',        career:'llm_eng'},
  {t:'搜索排名算法——让搜索引擎真正理解用户意图',   sub:'Search ranking: making search engines truly understand user intent',         career:'search_eng'},
  {t:'推荐系统——让用户发现真正想要的内容',          sub:'Recommendation systems: helping users discover what they truly want',        career:'recsys_eng'},
 ]},

{id:'c_llm2', phase:'career', cluster:'career_llm_nlp',
 triggerDirs:['llm','nlp','agent_eng'],
 text:'你认为 LLM 最有价值的应用方向是？',
 opts:[
  {t:'智能体——让 AI 自主完成多步骤真实任务',        sub:'AI Agents: autonomous multi-step real-world task completion',     career:'agent_eng'},
  {t:'企业知识库——让公司内部信息真正可搜索可问答',  sub:'Enterprise knowledge: making internal info searchable and queryable',career:'nlp_eng'},
  {t:'代码生成——让每个开发者都有 AI pair programmer',   career:'llm_eng'},
  {t:'对齐与安全——确保 LLM 不会被滥用',            sub:'Alignment and safety: ensuring LLMs cannot be misused',          career:'llm_rs'},
 ]},

{id:'c_llm3', phase:'career', cluster:'career_llm_nlp',
 triggerDirs:['llm','nlp'],
 text:'你对 LLM 的日常工程工作偏好？',
 opts:[
  {t:'Post-training——RLHF/DPO/SFT，让模型更好用更安全',   career:'llm_rs'},
  {t:'推理优化——KV Cache、量化、投机解码，快 10 倍',  sub:'Inference optimization: KV cache, quantization, 10× speedup',  career:'llm_eng'},
  {t:'评测体系——设计严格的 benchmark 衡量模型能力',   sub:'Evaluation: designing rigorous benchmarks to measure capability',career:'applied_sci'},
  {t:'应用集成——把 LLM API 变成真实产品功能',          sub:'Application integration: turning LLM APIs into real product features',career:'agent_eng'},
 ]},

{id:'c_llm4', phase:'career', cluster:'career_llm_nlp',
 triggerDirs:['ir','recsys'],
 text:'搜索/推荐里你最想解决的工程挑战？',
 opts:[
  {t:'RAG 系统——让 LLM 准确检索并利用外部知识',     sub:'RAG systems: accurate retrieval and use of external knowledge',  career:'search_eng'},
  {t:'实时个性化——用用户行为序列建模即时兴趣',       sub:'Real-time personalization: modeling instant interests from behavior sequences',career:'recsys_eng'},
  {t:'向量检索——大规模 embedding 的 ANN 系统',       sub:'Vector retrieval: ANN systems for large-scale embeddings',       career:'search_eng'},
  {t:'多目标排序——在相关性/多样性/商业目标间平衡',   sub:'Multi-objective ranking: balancing relevance, diversity, business goals',career:'recsys_eng'},
 ]},

{id:'c_llm5', phase:'career', cluster:'career_llm_nlp',
 triggerDirs:['speech','nlp'],
 text:'语音/多语言方向里你最感兴趣的是？',
 opts:[
  {t:'语音识别（ASR）——让 AI 在嘈杂环境里也能听清',  sub:'ASR: making AI hear clearly even in noisy environments',        career:'nlp_eng'},
  {t:'语音合成（TTS）——让 AI 语音听起来像真人',       sub:'TTS: making AI speech sound genuinely human',                   career:'nlp_eng'},
  {t:'多语言 NLP——让低资源语言也能享受 AI 能力',      sub:'Multilingual NLP: bringing AI capabilities to low-resource languages',career:'nlp_eng'},
  {t:'语音+视觉——全感官 AI 交互系统',                 sub:'Speech + vision: full-sensory AI interaction systems',          career:'agent_eng'},
 ]},

// ════ Cluster 3: Vision / Generative AI ════
{id:'c_vis1', phase:'career', cluster:'career_vision_gen',
 triggerDirs:['cv','med_vision','video','vision3d','generative','diffusion'],
 text:'视觉方向里，你最想每天做的工作是？',
 opts:[
  {t:'设计和训练目标检测/分割模型',                  sub:'Design and train object detection/segmentation models',          career:'cv_eng'},
  {t:'让 AI 辅助医生读 CT/MRI/病理切片',             sub:'AI-assisted reading of CT/MRI/pathology slides for doctors',    career:'med_vision_sci'},
  {t:'做三维重建——让 AI 从图像恢复真实世界三维结构',  sub:'3D reconstruction: recovering real-world 3D structure from images',career:'vision3d_eng'},
  {t:'训练视频理解模型——动作识别、事件检测',          sub:'Training video understanding models: action recognition, event detection',career:'video_ai'},
 ]},

{id:'c_vis2', phase:'career', cluster:'career_vision_gen',
 triggerDirs:['generative','diffusion','creative_ai'],
 text:'生成式 AI 里，你最想做的工程/研究工作？',
 opts:[
  {t:'训练和微调扩散模型，让生成质量达到商业标准',   sub:'Train and fine-tune diffusion models to commercial quality',     career:'genai_eng'},
  {t:'研究生成模型的内部机制——为什么它能生成这些东西',career:'ml_rs'},
  {t:'可控生成——让创作者能精确控制风格、构图、内容',  sub:'Controllable generation: precise control of style, composition, content',career:'genai_eng'},
  {t:'视频/世界模型——生成时间一致的长视频',           sub:'Video/world models: generating temporally consistent long videos', career:'genai_eng'},
 ]},

{id:'c_vis3', phase:'career', cluster:'career_vision_gen',
 triggerDirs:['vlm','multimodal'],
 text:'多模态/VLM 方向里，你的职业偏好？',
 opts:[
  {t:'研究视觉语言模型的对齐机制',                   sub:'Research vision-language model alignment mechanisms',            career:'vlm_eng'},
  {t:'把 VLM 产品化——文档智能、图文问答、视觉搜索',  sub:'Productize VLM: document intelligence, visual QA, visual search', career:'applied_sci'},
  {t:'做医疗多模态——影像+报告+患者记录的联合理解',   sub:'Medical multimodal: joint understanding of images, reports, records',career:'med_vision_sci'},
  {t:'构建多模态 AI 系统的基础设施',                  sub:'Build infrastructure for multimodal AI systems',                career:'ml_sys_eng'},
 ]},

{id:'c_vis4', phase:'career', cluster:'career_vision_gen',
 triggerDirs:['cv','vision3d'],
 text:'三维视觉/空间 AI 里你最想做什么？',
 opts:[
  {t:'NeRF / 3D Gaussian Splatting——从照片重建三维世界',              career:'vision3d_eng'},
  {t:'自动驾驶的三维感知——点云目标检测和跟踪',        sub:'AV 3D perception: point cloud detection and tracking',          career:'perception_eng'},
  {t:'AR/VR 空间计算——空间锚点、场景理解、实时渲染',  sub:'AR/VR spatial computing: anchors, scene understanding, real-time rendering',career:'vision3d_eng'},
  {t:'游戏/电影的神经渲染——实时光追和风格化渲染',     sub:'Game/film neural rendering: real-time ray tracing and stylized rendering',career:'vision3d_eng'},
 ]},

{id:'c_vis5', phase:'career', cluster:'career_vision_gen',
 triggerDirs:['cv','med_vision','generative'],
 text:'你更倾向于哪种工作环境？',
 opts:[
  {t:'大厂视觉团队——数据、算力充足，产品影响力大',   sub:'Big Tech vision team: ample data/compute, large product impact',  career:'cv_eng'},
  {t:'医疗 AI 公司——跨界医学+技术，成果真正救人',    sub:'Medical AI company: bridging medicine and technology, results save lives',career:'med_vision_sci'},
  {t:'创意 AI 创业公司——快速迭代，做最前沿的生成产品',career:'genai_eng'},
  {t:'研究院——深入研究视觉基础模型',                  sub:'Research lab: deep research on visual foundation models',        career:'vlm_eng'},
 ]},

// ════ Cluster 4: Systems / Infrastructure ════
{id:'c_sys1', phase:'career', cluster:'career_systems',
 triggerDirs:['sys_ai','dist_sys','efficient','inf_opt','cloud'],
 text:'系统/基础设施里，你最想构建什么？',
 opts:[
  {t:'大规模 LLM 训练系统——千卡集群的通信和调度',    sub:'Large-scale LLM training: communication and scheduling at 1000+ GPUs',career:'ml_sys_eng'},
  {t:'推理优化引擎——让模型延迟从秒级降到毫秒级',     sub:'Inference optimization: reducing latency from seconds to milliseconds',career:'inf_eng'},
  {t:'分布式存储/计算——PB 级数据的高可靠低延迟系统',  sub:'Distributed storage/compute: high-reliability low-latency at PB scale',career:'dist_sys_eng'},
  {t:'AI 数据平台——特征存储、训练数据管道、版本管理', career:'data_plat'},
 ]},

{id:'c_sys2', phase:'career', cluster:'career_systems',
 triggerDirs:['sys_ai','efficient','inf_opt'],
 text:'AI 系统优化里你最感兴趣的技术方向？',
 opts:[
  {t:'CUDA Kernel 开发——直接写 GPU 上的并行计算核',  sub:'CUDA kernel development: parallel compute kernels directly on GPU',career:'ai_infra'},
  {t:'投机解码/连续批处理——LLM serving 的系统创新',  sub:'Speculative decoding/continuous batching: LLM serving innovations', career:'inf_eng'},
  {t:'分布式训练优化——ZeRO / FSDP / Pipeline 并行',   sub:'Distributed training: ZeRO/FSDP/pipeline parallelism',           career:'ml_sys_eng'},
  {t:'编译器优化——Triton / XLA / TorchInductor',      sub:'Compiler optimization: Triton/XLA/TorchInductor',               career:'compiler_eng'},
 ]},

{id:'c_sys3', phase:'career', cluster:'career_systems',
 triggerDirs:['dist_sys','cloud','db','stream'],
 text:'数据系统里你最想深入的方向？',
 opts:[
  {t:'向量数据库——为 AI 嵌入优化的亿级相似检索',     sub:'Vector databases: billion-scale similarity search for AI embeddings',career:'data_plat'},
  {t:'流式计算——Kafka/Flink 实时数据管道',            sub:'Stream computing: Kafka/Flink real-time data pipelines',         career:'dist_sys_eng'},
  {t:'云原生基础设施——Kubernetes、多云架构、SRE',     sub:'Cloud-native infrastructure: Kubernetes, multi-cloud, SRE',      career:'dist_sys_eng'},
  {t:'查询优化——让数据仓库的 SQL 自动快 10 倍',       sub:'Query optimization: automatically making SQL 10× faster',        career:'data_plat'},
 ]},

{id:'c_sys4', phase:'career', cluster:'career_systems',
 triggerDirs:['sys_ai','efficient'],
 text:'你对系统工程的价值取向？',
 opts:[
  {t:'性能极致——快 1 倍不够，要快 10 倍',            sub:'Peak performance: 2× isn\'t enough; I want 10×',                 career:'ai_infra'},
  {t:'可靠性——99.99% SLA，零宕机',                    sub:'Reliability: 99.99% SLA with zero downtime',                     career:'dist_sys_eng'},
  {t:'成本效率——相同效果用更少的算力',                sub:'Cost efficiency: same results with less compute',                 career:'inf_eng'},
  {t:'开发者体验——让 ML 研究者不需要关心底层',        sub:'Developer experience: ML researchers shouldn\'t care about the substrate',career:'ml_sys_eng'},
 ]},



// ════ Cluster 5: Hardware / Chip ════
{id:'c_hw1', phase:'career', cluster:'career_hw_chip',
 triggerDirs:['ai_hw','npu','vlsi','arch','hw_sw'],
 text:'硬件/芯片方向里，你最想做什么？',
 opts:[
  {t:'设计 AI 加速器芯片——NPU 数据流和微架构',        sub:'Design AI accelerator chips: NPU dataflows and microarchitecture', career:'npu_arch'},
  {t:'数字 IC 设计——RTL 到 GDSII 全流程',             sub:'Digital IC design: full RTL to GDSII flow',                     career:'vlsi_eng'},
  {t:'AI 系统性能优化——硬件感知的 kernel 和编译器',   sub:'AI system performance: hardware-aware kernels and compilers',    career:'ai_hw_eng'},
  {t:'FPGA 原型验证——在可重构硬件上快速验证设计',      sub:'FPGA prototyping: rapidly validating designs on reconfigurable hardware',career:'vlsi_eng'},
 ]},

{id:'c_hw2', phase:'career', cluster:'career_hw_chip',
 triggerDirs:['ai_hw','npu','in_mem'],
 text:'AI 硬件里你最关注的技术前沿？',
 opts:[
  {t:'存算一体——在 SRAM/DRAM 里直接做矩阵乘法',       sub:'In-memory computing: matrix multiply inside SRAM/DRAM',         career:'npu_arch'},
  {t:'稀疏/量化硬件——利用模型稀疏性减少计算',          sub:'Sparse/quantized hardware: leveraging sparsity to reduce compute', career:'ai_hw_eng'},
  {t:'Chiplet 和先进封装——3D 集成突破带宽瓶颈',        sub:'Chiplet and advanced packaging: 3D integration to break bandwidth limits',career:'vlsi_eng'},
  {t:'用 ML 优化 EDA——自动布局布线',                   sub:'ML for EDA: automated placement and routing',                   career:'eda_eng'},
 ]},

{id:'c_hw3', phase:'career', cluster:'career_hw_chip',
 triggerDirs:['embedded','signal','iot'],
 text:'嵌入式/信号处理方向里，你最想做什么？',
 opts:[
  {t:'端侧 AI——在微控制器上运行神经网络',              sub:'On-device AI: running neural networks on microcontrollers',      career:'embedded_eng'},
  {t:'图像信号处理——相机 ISP 和移动端影像算法',        sub:'Image signal processing: camera ISP and mobile imaging algorithms',career:'dsp_eng'},
  {t:'雷达/激光信号处理——自动驾驶感知的信号链路',      sub:'Radar/LiDAR signal processing: signal chains for AV perception', career:'dsp_eng'},
  {t:'超低功耗系统——电池供电的边缘 AI 设备',           sub:'Ultra-low-power systems: battery-powered edge AI devices',       career:'embedded_eng'},
 ]},



{id:'c_hw5', phase:'career', cluster:'career_hw_chip',
 triggerDirs:['arch','ai_hw','vlsi'],
 text:'体系结构里你最享受哪类工作？',
 opts:[
  {t:'微架构设计——流水线、分支预测、执行单元',         sub:'Microarchitecture: pipeline, branch prediction, execution units',  career:'npu_arch'},
  {t:'性能分析——找出为什么这个模型在这个硬件上慢',     sub:'Performance analysis: finding why a model is slow on this hardware',career:'ai_hw_eng'},
  {t:'硬件-软件协同——让编译器充分利用硬件特性',        sub:'HW-SW co-design: making compilers fully exploit hardware features', career:'ai_hw_eng'},
  {t:'内存系统——Cache 层次和带宽是 AI 芯片的命门',     sub:'Memory systems: cache hierarchy and bandwidth are AI chip bottlenecks',career:'npu_arch'},
 ]},

// ════ Cluster 6: Robotics / Autonomous Systems ════
{id:'c_rb1', phase:'career', cluster:'career_robotics',
 triggerDirs:['robotics','embodied','autonomous','perception','slam'],
 text:'机器人领域里，你最想做的日常工作是？',
 opts:[
  {t:'让机械臂学会抓取和组装——操作技能',              sub:'Teaching robot arms to grasp and assemble: manipulation skills',  career:'robot_learn'},
  {t:'调试自动驾驶感知——激光雷达+摄像头联合感知',     sub:'Debug AV perception: LiDAR + camera joint perception',           career:'perception_eng'},
  {t:'实现 SLAM 系统——让机器人在新环境里建图定位',     sub:'Implement SLAM: map-building and localization in new environments',career:'slam_eng'},
  {t:'研究具身智能——让机器人理解语言指令并执行',       sub:'Embodied AI: making robots understand language instructions and act',career:'robot_learn'},
 ]},

{id:'c_rb2', phase:'career', cluster:'career_robotics',
 triggerDirs:['autonomous','perception'],
 text:'自动驾驶里你最想专攻哪个方向？',
 opts:[
  {t:'感知——让车看懂周围所有物体和场景',               sub:'Perception: making the car understand all surrounding objects and scenes',career:'perception_eng'},
  {t:'预测与规划——预测其他车辆行为并规划路径',          sub:'Prediction and planning: forecasting other vehicles and planning paths',career:'av_eng'},
  {t:'端到端驾驶——直接从摄像头到控制信号的统一模型',   sub:'End-to-end driving: unified model from camera to control signal',  career:'av_eng'},
  {t:'安全与测试——如何验证自动驾驶系统的安全性',        sub:'Safety and testing: verifying autonomous driving safety',         career:'av_eng'},
 ]},

{id:'c_rb3', phase:'career', cluster:'career_robotics',
 triggerDirs:['embodied','vla','hri'],
 text:'具身智能里你最希望做哪类工作？',
 opts:[
  {t:'训练 VLA 模型——让机器人理解语言并在物理世界行动',  career:'robot_learn'},
  {t:'仿真环境搭建——在 Isaac Sim 里生成训练数据',       sub:'Simulation environments: generating training data in Isaac Sim',   career:'robotics_eng'},
  {t:'人机协作——设计让人和机器人安全共同工作的系统',   sub:'Human-robot collaboration: safe co-working systems',             career:'hri_researcher'},
  {t:'家用机器人——做能完成真实家务的通用机器人',        sub:'Home robots: general-purpose robots that do real household tasks',  career:'robot_learn'},
 ]},

{id:'c_rb4', phase:'career', cluster:'career_robotics',
 triggerDirs:['robotics','motion','control'],
 text:'机器人工程里你最想解决的挑战？',
 opts:[
  {t:'运动规划——在复杂环境里实时找到最优路径',         sub:'Motion planning: real-time optimal paths in complex environments',  career:'robotics_eng'},
  {t:'控制系统——设计鲁棒的力/位置混合控制器',          sub:'Control systems: robust force/position hybrid controllers',       career:'robotics_eng'},
  {t:'Sim-to-Real——把仿真里学的技能迁移到真实世界',    sub:'Sim-to-real: transferring simulation-learned skills to reality',   career:'robot_learn'},
  {t:'传感器融合——雷达+激光+视觉的多模态感知',         sub:'Sensor fusion: multi-modal perception with radar+LiDAR+vision',    career:'perception_eng'},
 ]},



// ════ Cluster 7: Data Science / Statistics ════
{id:'c_ds1', phase:'career', cluster:'career_data',
 triggerDirs:['ds_sci','stats','causal','bayes','domain_ds'],
 text:'数据科学里，你最享受哪类工作？',
 opts:[
  {t:'因果推断——设计 A/B 实验并正确分析效果',          sub:'Causal inference: design A/B experiments and analyze effects correctly',career:'causal_sci'},
  {t:'预测建模——为业务决策提供可靠的概率预测',         sub:'Predictive modeling: reliable probability forecasts for decisions',career:'data_sci'},
  {t:'数据工程——建可靠的数据管道和特征工程系统',       sub:'Data engineering: reliable data pipelines and feature systems',  career:'data_eng_role'},
  {t:'领域数据科学——把统计方法用于医疗/金融/社科',     sub:'Domain DS: applying statistics to healthcare/finance/social science',career:'domain_ds'},
 ]},

{id:'c_ds2', phase:'career', cluster:'career_data',
 triggerDirs:['causal','stats','econom'],
 text:'你对统计/因果工作的偏好？',
 opts:[
  {t:'政策评估——评估政府政策或产品功能的真实效果',     sub:'Policy evaluation: assessing real effects of policies or product features',career:'causal_sci'},
  {t:'量化金融——用统计模型捕捉市场信号',               sub:'Quantitative finance: using statistical models to capture market signals',career:'quant_ds'},
  {t:'贝叶斯建模——用概率分布诚实表达不确定性',        sub:'Bayesian modeling: honestly expressing uncertainty with distributions',career:'causal_sci'},
  {t:'实验平台——设计大规模 A/B 测试基础设施',          sub:'Experimentation platform: large-scale A/B testing infrastructure',career:'data_sci'},
 ]},

{id:'c_ds3', phase:'career', cluster:'career_data',
 triggerDirs:['ds_eng','mlops','data_qual'],
 text:'数据/ML 工程里你最想深入哪个方向？',
 opts:[
  {t:'特征工程系统——实时特征计算和在线学习',           sub:'Feature engineering systems: real-time feature computation and online learning',career:'mlops_eng'},
  {t:'数据质量——在大规模数据里自动发现和修复问题',     sub:'Data quality: automatically detecting and fixing problems at scale',career:'data_eng_role'},
  {t:'模型部署和监控——让模型在生产里稳定运行',         sub:'Model deployment and monitoring: stable production ML systems',  career:'mlops_eng'},
  {t:'数据仓库架构——分层数据模型和血缘追踪',           sub:'Data warehouse architecture: layered data models and lineage tracking',career:'data_eng_role'},
 ]},

{id:'c_ds4', phase:'career', cluster:'career_data',
 triggerDirs:['domain_ds','causal'],
 text:'领域数据科学里你最想做哪个领域？',
 opts:[
  {t:'医疗健康——临床试验分析、基因组数据、患者预后',   sub:'Healthcare: clinical trials, genomics, patient outcomes',        career:'domain_ds'},
  {t:'金融与风险——信用评分、欺诈检测、市场风险',       sub:'Finance and risk: credit scoring, fraud detection, market risk',  career:'quant_ds'},
  {t:'社会科学——政策效果、经济学研究、行为分析',       sub:'Social science: policy effects, economics, behavioral analysis',  career:'domain_ds'},
  {t:'工业制造——预测性维护、质量控制、供应链优化',     sub:'Industrial: predictive maintenance, quality control, supply chain',career:'domain_ds'},
 ]},

{id:'c_ds5', phase:'career', cluster:'career_data',
 triggerDirs:['ds_sci','stats','mlops'],
 text:'你对数据工作的核心价值观是？',
 opts:[
  {t:'严格性——宁可没结论，不能给错结论',               sub:'Rigor: better no conclusion than a wrong one',                   career:'causal_sci'},
  {t:'影响力——分析结论能真正改变业务决策',              sub:'Impact: analysis conclusions that genuinely change business decisions',career:'data_sci'},
  {t:'可靠性——数据管道稳定，不出 incident',             sub:'Reliability: stable data pipelines that don\'t cause incidents',  career:'data_eng_role'},
  {t:'自动化——让反复的数据工作变成可复用的系统',        sub:'Automation: turning repetitive data work into reusable systems',  career:'mlops_eng'},
 ]},

// ════ Cluster 8: OR / Optimization / Quant ════
{id:'c_or1', phase:'career', cluster:'career_or',
 triggerDirs:['optim','or_ops','game_th','stoch','comb_opt'],
 text:'优化/运筹里，你最想做的工作是？',
 opts:[
  {t:'量化研究——设计数学模型捕捉金融市场信号',         sub:'Quant research: mathematical models to capture financial market signals',career:'quant_researcher'},
  {t:'运筹优化——解决物流/调度/资源分配等实际问题',     sub:'Operations research: solving logistics/scheduling/allocation problems',career:'or_sci'},
  {t:'ML 训练优化——让神经网络训练更快更省',             sub:'ML training optimization: faster and cheaper neural network training',career:'optim_eng'},
  {t:'风险建模——量化金融或工程系统里的不确定性',        sub:'Risk modeling: quantifying uncertainty in finance or engineering',  career:'risk_sci'},
 ]},

{id:'c_or2', phase:'career', cluster:'career_or',
 triggerDirs:['optim','comb_opt','or_ops'],
 text:'你最想用优化方法解决哪类问题？',
 opts:[
  {t:'组合优化——整数规划、路由、匹配等 NP-hard 问题',  sub:'Combinatorial optimization: integer programming, routing, matching',career:'or_sci'},
  {t:'大规模凸优化——ML 训练或信号处理中的连续优化',    sub:'Large-scale convex optimization: continuous optimization in ML/signal',career:'optim_eng'},
  {t:'随机优化——在不确定性和噪声下的鲁棒优化',         sub:'Stochastic optimization: robust optimization under uncertainty and noise',career:'risk_sci'},
  {t:'在线优化——不知道未来的情况下做实时决策',          sub:'Online optimization: real-time decisions without knowing the future',career:'quant_researcher'},
 ]},

{id:'c_or3', phase:'career', cluster:'career_or',
 triggerDirs:['game_th','or_ops'],
 text:'博弈论/机制设计里你最感兴趣的应用？',
 opts:[
  {t:'拍卖机制——设计 Google 广告、eBay 拍卖等机制',    sub:'Auction mechanisms: designing Google Ads, eBay auction mechanisms',career:'quant_researcher'},
  {t:'市场定价——动态定价算法（Uber 溢价、酒店定价）',  sub:'Market pricing: dynamic pricing algorithms (Uber surge, hotel pricing)',career:'or_sci'},
  {t:'AI 系统中的多智能体——MARL 和涌现行为',           sub:'Multi-agent AI: MARL and emergent behavior in AI systems',        career:'decision_sci'},
  {t:'政策与社会——博弈论在公共政策中的应用',            sub:'Policy and society: game theory in public policy',               career:'decision_sci'},
 ]},

{id:'c_or4', phase:'career', cluster:'career_or',
 triggerDirs:['stoch','sci_comp'],
 text:'随机系统/科学计算里你最想做什么？',
 opts:[
  {t:'风险分析——金融或工程系统的极端事件概率建模',     sub:'Risk analysis: extreme event probability modeling in finance/engineering',career:'risk_sci'},
  {t:'物理仿真——用数值方法解微分方程，模拟真实世界',   sub:'Physics simulation: solving PDEs with numerical methods',         career:'optim_eng'},
  {t:'不确定性量化——给预测结果配可靠的置信区间',       sub:'Uncertainty quantification: reliable confidence intervals for predictions',career:'risk_sci'},
  {t:'排队论——分析系统容量和瓶颈（云服务、医院）',      sub:'Queueing theory: analyzing capacity and bottlenecks (cloud, hospitals)',career:'or_sci'},
 ]},



];

// Career cluster trigger map
var CAREER_CLUSTER_TRIGGERS = {
  career_ai_research: {dirs:['ml_theory','stat_learn','opt_ml','repr','ssl','scaling'], threshold:12},
  career_llm_nlp:     {dirs:['llm','nlp','ir','recsys','speech','doc_intel'],           threshold:12},
  career_vision_gen:  {dirs:['cv','med_vision','video','vision3d','vlm','multimodal','generative','diffusion'], threshold:12},
  career_systems:     {dirs:['sys_ai','dist_sys','efficient','inf_opt','cloud','db'],   threshold:12},
  career_hw_chip:     {dirs:['ai_hw','npu','vlsi','arch','hw_sw','in_mem','fpga','embedded'], threshold:10},
  career_robotics:    {dirs:['robotics','embodied','autonomous','perception','slam','vla','hri'], threshold:10},
  career_data:        {dirs:['ds_sci','stats','causal','bayes','ds_eng','mlops','domain_ds','econom'], threshold:10},
  career_or:          {dirs:['optim','or_ops','game_th','stoch','sci_comp','comb_opt'],  threshold:10},
};



var ANCHOR_Qs=[

{id:'a1',phase:'anchor',cat:'思维方式 / Thinking Style',
 text:'同样花一周时间深入钻研，你更愿意选哪个？',
 opts:[
  {t:'推导 Transformer 注意力机制的数学本质',d:{ml_theory:3,opt_ml:2,dl:1}},
  {t:'把一个模型的推理速度压到原来的十分之一',d:{efficient:3,sys_ai:3,inf_opt:2}},
  {t:'让机器人在未知环境里可靠地导航',d:{robotics:3,perception:3,motion:2}},
  {t:'设计能精确控制生成内容的扩散模型',d:{generative:3,diffusion:2,creative_ai:2}}
 ]},

{id:'a2',phase:'anchor',cat:'好奇心 / Curiosity',
 text:'以下哪个困惑最让你想花几年时间搞清楚？',
 opts:[
  {t:'神经网络「理解」了什么——表示学习的本质是什么',d:{ml_theory:3,repr:3,stat_learn:2}},
  {t:'AI 如何在物理世界中真正可靠地行动',d:{embodied:3,robotics:3,perception:2}},
  {t:'怎样从观测数据里识别真正的因果关系',d:{causal:3,stats:3,econom:2}},
  {t:'如何设计比现有处理器能效高 100 倍的计算硬件',d:{vlsi:3,ai_hw:3,arch:2}}
 ]},

{id:'a3',phase:'anchor',cat:'成就感来源 / Achievement',
 text:'做完一年的工作，哪种结果最让你觉得没白费？',
 opts:[
  {t:'发表了让同行改变认知的顶会论文',d:{ml_theory:2,theory:2,stat_learn:2}},
  {t:'建了一个全公司每天都在用的数据系统',d:{ds_eng:3,dist_sys:2,mlops:2}},
  {t:'一个机器人在真实环境里完成了任务',d:{robotics:3,embodied:3,autonomous:2}},
  {t:'把推理服务延迟从秒级压到百毫秒级',d:{sys_ai:3,inf_opt:3,arch:2}}
 ]},

{id:'a4',phase:'anchor',cat:'问题尺度 / Problem Scale',
 text:'在以下尺度上解决问题，哪个最让你兴奋？',
 opts:[
  {t:'算法层——改进一个具体模型或学习方法',d:{ml:3,algo:2,opt_ml:2}},
  {t:'系统层——改进整个训练/部署流水线',d:{sys_ai:3,dist_sys:2,arch:2}},
  {t:'数学层——建立新的理论框架或证明',d:{ml_theory:3,theory:3,optim:2}},
  {t:'物理层——设计运行 AI 的专用硬件',d:{ai_hw:3,vlsi:3,arch:2}}
 ]},

{id:'a5',phase:'anchor',cat:'数学感情 / Math Relationship',
 text:'你对数学的真实感情是？',
 opts:[
  {t:'享受——推导本身就是乐趣，不需要应用价值',d:{ml_theory:3,theory:3,optim:2,stoch:2}},
  {t:'工具——能用就行，解决真实问题是驱动力',d:{dl:2,sys_ai:2,applied_ai:2}},
  {t:'必要门槛——用到时能调用，但不是核心驱动',d:{causal:2,ds_sci:2,signal:1}},
  {t:'挑战——有些恐惧，但愿意在具体问题上硬啃',d:{embedded:1,applied_ai:1,or_ops:1}}
 ]},

{id:'a6',phase:'anchor',cat:'工作方式 / Work Style',
 text:'你拿到一个陌生的数据集，最先想做什么？',
 opts:[
  {t:'跑统计、画分布图，先感受数据的「形状」',d:{ds_sci:3,stats:2,causal:1}},
  {t:'直接训练一个 baseline 模型，看能学到什么',d:{ml:3,dl:2,applied_ai:1}},
  {t:'看数据是怎么采集的，有没有质量和偏差问题',d:{ds_eng:3,causal:2,data_qual:2}},
  {t:'想这个数据能回答什么因果或科学问题',d:{causal:3,stats:3,ds_sci:2}}
 ]},

{id:'a7',phase:'anchor',cat:'工程直觉 / Engineering Intuition',
 text:'你的程序比预期慢了 10 倍，第一步是？',
 opts:[
  {t:'用 profiler 找热点，看瓶颈在哪个函数',d:{sys_ai:3,efficient:2,systems:2}},
  {t:'检查算法复杂度，看有没有更优的实现',d:{algo:3,theory:2,opt_ml:1}},
  {t:'看 GPU 利用率，检查内存带宽是不是瓶颈',d:{arch:3,ai_hw:2,sys_ai:2}},
  {t:'看是不是电路/固件问题，用示波器检查时序',d:{embedded:3,elec_sys:2,control:1}}
 ]},

{id:'a8',phase:'anchor',cat:'价值取向 / Values',
 text:'你更愿意做哪种类型的贡献？',
 opts:[
  {t:'新理论框架——让人们对问题有更深层的理解',d:{ml_theory:3,theory:3,stat_learn:2}},
  {t:'新系统——让某件事情的速度快 10 倍',d:{sys_ai:3,systems:3,arch:2}},
  {t:'新的优化方法——解决之前解不了的规模',d:{optim:3,comb_opt:2,or_ops:2}},
  {t:'新应用——让某个群体的生活有真实改变',d:{applied_ai:3,hci:2,domain_ds:2}}
 ]},

{id:'a9',phase:'anchor',cat:'AI系统判断 / AI System Values',
 text:'一个复杂技术系统上线了，你最先盯哪个指标？',
 opts:[
  {t:'可靠性——数据、结论或行为在极端情况下会不会失真',d:{stats:2,ds_sci:2,safety:1}},
  {t:'延迟和吞吐量——系统能不能在真实负载下稳定撑住',d:{systems:2,sys_ai:2,dist_sys:2}},
  {t:'功耗和资源效率——同样效果能不能更省算力、更省电',d:{efficient:2,arch:2,ai_hw:2}},
  {t:'真实场景安全性——到了物理世界里会不会出危险',d:{robotics:2,control:2,embedded:2}}
 ]},

{id:'a10',phase:'anchor',cat:'学习方式 / Learning Style',
 text:'面对一个完全陌生的新问题，你的本能是？',
 opts:[
  {t:'找这个领域最经典的论文和教材，先建框架',d:{ml_theory:2,theory:2,stats:2}},
  {t:'直接找个 codebase 跑起来，边跑边理解',d:{dl:2,sys_ai:2,embedded:1}},
  {t:'用最小的 toy problem 复现核心现象',d:{ml_theory:3,algo:2,causal:2}},
  {t:'找几个在这方向工作的人聊，快速建立直觉',d:{applied_ai:2,hci:1,domain_ds:1}}
 ]},

{id:'a11',phase:'anchor',cat:'职业摩擦接受度 / Career Friction',
 text:'哪种工作里的摩擦你最能接受？',
 opts:[
  {t:'大量流程和审批，但算力和数据资源充足',d:{sys_ai:1,applied_ai:1,dl:1}},
  {t:'方向随时可能变，但每天都有新东西发生',d:{applied_ai:2,embodied:1,autonomous:1}},
  {t:'没人催你，但成果的反馈周期以年计',d:{ml_theory:2,theory:2,optim:1}},
  {t:'机器/硬件随时可能坏，但你能看到东西真的运行',d:{robotics:3,embedded:3,control:2}}
 ]},

{id:'a12',phase:'anchor',cat:'工作成果满足感 / Output Satisfaction',
 text:'什么形式的工作成果最让你有满足感？',
 opts:[
  {t:'一个证明或理论框架，能经得起同行细查',d:{ml_theory:3,theory:3,stat_learn:2}},
  {t:'一个可监控的系统，SLA 99.99% 稳定运行',sub:'意思是这套系统平时很稳、几乎一直在线，出了问题也能很快发现。99.99% 可以简单理解为“很少掉线”。',d:{systems:2,dist_sys:2,mlops:2}},
  {t:'一个机器人完成真实任务的视频',d:{robotics:3,embodied:3,autonomous:2}},
  {t:'一张能帮助医生做出更好决策的影像分析报告',d:{applied_ai:3,med_vision:3,domain_ds:2}}
 ]},

{id:'a13',phase:'anchor',cat:'自我认知 / Self-Identity',
 text:'你觉得自己更像哪种人？',
 opts:[
  {t:'发现者——喜欢从数据里提炼规律、发现不该有的模式',d:{ml:2,stats:2,ds_sci:2}},
  {t:'建造者——喜欢把系统从无到有搭起来',d:{systems:2,dist_sys:2,applied_ai:2}},
  {t:'证明者——喜欢把问题搞到 100% 确定才罢手',d:{theory:3,algo:3,formal:2}},
  {t:'调试者——喜欢让机器在物理世界可靠运行',d:{robotics:3,embedded:3,control:2}}
 ]},

{id:'a14',phase:'anchor',cat:'职业偏好 / Career Vision',
 text:'五年后回头看，什么会让你觉得这段时间没白过？',
 opts:[
  {t:'在一个细分方向成为全球认可的专家',d:{ml_theory:2,theory:2,optim:2}},
  {t:'参与了改变行业的核心产品或系统',d:{applied_ai:2,systems:2,autonomous:2}},
  {t:'积累了让自己任何时候都有竞争力的底层能力',d:{sys_ai:2,arch:2,vlsi:2}},
  {t:'做出了真正影响了某类人生活的应用',d:{applied_ai:3,hci:2,domain_ds:2}}
 ]},

{id:'a15',phase:'anchor',cat:'问题价值观 / Problem Values',
 text:'你觉得哪种问题最值得花时间？',
 opts:[
  {t:'还没有被正确定义的问题——光是把问题说清楚就是贡献',d:{ml_theory:3,causal:2,theory:2}},
  {t:'已有解但解不够好的问题——把性能推到极限',d:{efficient:3,algo:3,opt_ml:2}},
  {t:'技术成熟但工程落地很难的问题',d:{applied_ai:3,sys_ai:2,mlops:2}},
  {t:'看起来和 CS 无关但能用计算方法解决的问题',d:{domain_ds:3,sci_comp:2,causal:2}}
 ]},

{id:'a16',phase:'anchor',cat:'关键决策方式 / Decision Making',
 text:'遇到一个方向判断的关键节点，你更倾向于？',
 opts:[
  {t:'把能找到的资料都看完再决策',d:{ml_theory:1,stats:1,theory:1}},
  {t:'快速做几个小实验，用数据说话',d:{ml:2,causal:2,ds_sci:2}},
  {t:'在物理原型上验证，不相信纯仿真结论',d:{robotics:2,embedded:2,control:2}},
  {t:'直接行动，边做边调整',d:{applied_ai:1,sys_ai:1,dl:1}}
 ]},

{id:'a17',phase:'anchor',cat:'动力来源 / Motivation',
 text:'哪种感觉最能驱动你持续工作？',
 opts:[
  {t:'搞懂了一个之前没人解释清楚的现象',d:{ml_theory:2,xai:2,causal:2}},
  {t:'系统终于跑起来了，而且比预期快很多',d:{sys_ai:3,efficient:2,arch:2}},
  {t:'机器终于在真实世界里稳定完成了任务',d:{robotics:3,embodied:2,autonomous:2}},
  {t:'用户说「这个东西真的帮到了我」',d:{applied_ai:3,hci:2,domain_ds:1}}
 ]},

{id:'a18',phase:'anchor',cat:'兴趣倾向 / Interests',
 text:'有一个月的空闲，你最可能做的 side project 是？',
 multiSelect:true, maxSelect:2,
 opts:[
  {t:'复现一篇近期有意思的论文，然后试着改进它',d:{ml:3,dl:2,repr:2}},
  {t:'把一个生产系统的性能优化到极致',d:{sys_ai:3,arch:2,efficient:2}},
  {t:'做一个工具，解决自己日常工作里的真实痛点',d:{applied_ai:3,hci:2,pl:1}},
  {t:'清洗一批公开数据，找到里面没人注意到的规律',d:{ds_sci:3,stats:2,causal:2}},
  {t:'从头实现一个简单的编译器或操作系统内核',d:{pl:3,systems:2,theory:2}},
  {t:'从零搭建一个机器人，让它完成一个具体任务',d:{robotics:3,embedded:3,control:2}}
 ]},

{id:'a19',phase:'anchor',cat:'智识体验 / Intellectual Experience',
 text:'你最享受哪种「想通了」的体验？',
 opts:[
  {t:'终于理解了某个数学结构为什么是它现在这个样子',d:{ml_theory:3,theory:3,optim:2}},
  {t:'发现了一个反直觉的实验结果，打破了原来的假设',d:{ml:2,causal:3,ds_sci:2}},
  {t:'把一个复杂系统分解成了可以独立测试的模块',d:{systems:3,algo:2,formal:2}},
  {t:'看到自己造的机器在物理世界里第一次成功运行',d:{robotics:3,embedded:3,control:2}}
 ]},

{id:'a20',phase:'anchor',cat:'日常偏好 / Daily Consumption',
 text:'你更喜欢消费哪类内容？（真实的你，不是「应该」）',
 multiSelect:true, maxSelect:2,
 opts:[
  {t:'AI/ML 最新论文和 arxiv 摘要',d:{ml:2,dl:2,foundation:1}},
  {t:'硬件评测、芯片架构分析、性能 benchmark',d:{arch:2,ai_hw:2,vlsi:1}},
  {t:'机器人、无人机、自动驾驶的技术 demo',d:{robotics:2,autonomous:2,embodied:1}},
  {t:'数学证明、算法分析、理论 CS 博客',d:{theory:2,algo:2,optim:2}},
  {t:'产品设计、用户研究、增长数据分析',d:{applied_ai:2,hci:2,ds_sci:1}},
  {t:'开源项目、工程实践、技术架构分析',d:{systems:2,dist_sys:2,pl:1}}
 ]},

{id:'a21',phase:'anchor',cat:'学术共同体 / Community Fit',
 text:'如果要加入一个长期共同体，你最想和哪群人一起钻问题？',
 opts:[
  {t:'喜欢读论文、提新问题、争论定义和边界的研究者',d:{ml_theory:2,theory:2,stats:1}},
  {t:'喜欢把大系统跑稳、跑快、跑出规模的工程师',d:{systems:2,dist_sys:2,sys_ai:2}},
  {t:'喜欢和机器、传感器、电路、控制器打交道的实验派',d:{robotics:2,embedded:2,vlsi:2}},
  {t:'喜欢从数据里挖规律，并把结论转成决策的人',d:{ds_sci:2,causal:2,domain_ds:2}}
 ]},

{id:'a22',phase:'anchor',cat:'困难偏好 / Difficulty Preference',
 text:'下面哪种“难”，是你更愿意长期去啃的？',
 opts:[
  {t:'抽象和证明很难，但一旦想通会非常爽',d:{theory:3,ml_theory:2,optim:2}},
  {t:'工程链路很长很杂，但系统跑起来成就感最高',d:{systems:3,sys_ai:2,mlops:1}},
  {t:'真实世界噪声很多，但机器真的动起来会让你兴奋',d:{robotics:3,control:2,autonomous:2}},
  {t:'硬件约束极严、调试很苦，但性能回报非常直接',d:{vlsi:3,arch:2,embedded:2}}
 ]},

{id:'a23',phase:'anchor',cat:'证据偏好 / Evidence Style',
 text:'当两种路线都“看起来可行”时，你最信哪类证据？',
 opts:[
  {t:'严格证明或清晰的理论保证',d:{theory:3,formal:2,ml_theory:2}},
  {t:'大规模实验和 benchmark 上稳定领先',d:{ml:2,dl:2,applied_ai:1}},
  {t:'线上或生产系统里的真实指标持续变好',d:{systems:2,ds_eng:2,mlops:2}},
  {t:'真实设备或真实场景里重复成功跑通',d:{robotics:2,embedded:2,control:2}}
 ]},

{id:'a24',phase:'anchor',cat:'训练意愿 / Training Commitment',
 text:'如果下周就要开始一项长期训练，你最愿意先练哪种能力？',
 opts:[
  {t:'读论文、拆公式、抓住一个问题背后的本质',d:{ml_theory:2,theory:2,stats:2}},
  {t:'写工程、看指标、做 profiling，把系统越磨越顺',d:{systems:2,sys_ai:2,dist_sys:2}},
  {t:'搭实验、接传感器、调控制，让东西在真实世界运转',d:{robotics:2,embedded:2,control:2}},
  {t:'做建模、看数据、设计实验，把结论讲清楚',d:{ds_sci:2,causal:2,stats:2}}
 ]},

{id:'a25',phase:'anchor',cat:'硬核基础 / Core Foundations',
 text:'如果未来要系统补一门硬核基础课，你最愿意先啃哪门？',
 opts:[
  {t:'操作系统 / 编译原理 / 数据库原理——理解大型软件系统怎么被组织起来',d:{systems:2,pl:2,db:2,dist_sys:1}},
  {t:'概率统计 / 实验设计——学会从数据里做可靠判断',d:{stats:2,ds_sci:2,causal:2,bayes:1}},
  {t:'数字系统 / 计算机组成——从指令到电路看清计算机怎么工作',d:{arch:2,logic_des:2,hw_sw:2,vlsi:1}},
  {t:'控制 / 机器人学——让系统在真实世界里稳、准、快地行动',d:{robotics:2,control:2,motion:2,opt_ctrl:1}}
 ]},

{id:'a26',phase:'anchor',cat:'现实挑战 / Real-World Challenges',
 text:'下面哪类现实问题最容易让你上头？',
 opts:[
  {t:'把一套大规模服务调到稳定、可扩展、低延迟',d:{dist_sys:3,systems:2,cloud:2}},
  {t:'把一个板子/芯片调到功耗、时序、稳定性都过线',d:{embedded:2,vlsi:2,arch:2,hw_sw:1}},
  {t:'用数据和实验把“为什么会这样”说清楚',d:{ds_sci:2,causal:2,stats:2,domain_ds:1}},
  {t:'在约束很多的情况下找到最优调度/路线/分配方案',d:{optim:3,or_ops:2,scheduling:2,comb_opt:1}}
 ]},

{id:'a27',phase:'anchor',cat:'实验室偏好 / Lab Preference',
 text:'如果加入一个实验室，你最想天天接触哪类东西？',
 opts:[
  {t:'Profiler、日志、benchmark、分布式集群',d:{systems:3,dist_sys:2,cloud:2}},
  {t:'FPGA 板卡、示波器、逻辑分析仪、嵌入式设备',d:{logic_des:2,fpga:2,embedded:2,vlsi:1}},
  {t:'机械臂、无人机、相机/激光雷达、控制器',d:{robotics:3,autonomous:2,perception:2,control:1}},
  {t:'数据表、实验设计、因果图、统计报告',d:{ds_sci:2,stats:2,causal:2,econom:1}}
 ]},

{id:'a28',phase:'anchor',cat:'抽象偏好 / Abstraction Preference',
 text:'你更容易被哪种“聪明的抽象”打动？',
 opts:[
  {t:'一个更干净的接口/语言/编译器，让复杂系统变简单',d:{pl:3,systems:2,formal:1}},
  {t:'一个更好的数学模型，让调度/规划/资源分配问题突然清晰',d:{optim:3,or_ops:2,game_th:1}},
  {t:'一个更合理的内存层级/数据流，让硬件把性能吃满',d:{arch:3,hw_sw:2,ai_hw:1}},
  {t:'一个更稳的状态估计/控制策略，让机器在真实世界少出错',d:{control:3,robotics:2,autonomous:2}}
 ]},

{id:'a29',phase:'anchor',cat:'项目预算 / Project Ownership',
 text:'如果给你一笔预算做一年项目，你最想押在哪类东西上？',
 opts:[
  {t:'一套更强的数据平台或数据库基础设施',d:{db:3,ds_eng:2,stream:2}},
  {t:'一块更适合特定任务的硬件 / 边缘设备 / 原型系统',d:{embedded:2,vlsi:2,ai_hw:2,arch:1}},
  {t:'一套真实世界可运行的机器人或自主系统',d:{robotics:3,autonomous:2,embodied:2}},
  {t:'一个能显著改进定价 / 物流 / 排产的优化系统',d:{or_ops:3,optim:2,scheduling:2}}
 ]},

{id:'a30',phase:'anchor',cat:'周末自驱 / Self-Driven Curiosity',
 text:'不为考试也不为简历，你周末更想自学哪类东西？',
 opts:[
  {t:'分布式系统、数据库、编译器这类基础设施原理',d:{systems:2,db:2,pl:2,dist_sys:1}},
  {t:'统计建模、实验设计、时间序列或因果推断',d:{stats:2,ds_sci:2,causal:2,ts_anal:1}},
  {t:'芯片架构、嵌入式、硬件-软件协同',d:{arch:2,embedded:2,hw_sw:2,logic_des:1}},
  {t:'运动规划、SLAM、控制或具身智能',d:{robotics:2,motion:2,slam:2,control:1}}
 ]},

{id:'a31',phase:'anchor',cat:'决策风格 / Decision Flavor',
 text:'面对一个复杂系统，你最想先优化哪一层？',
 opts:[
  {t:'系统协同——服务怎么拆、怎么扩容、怎么容错',d:{systems:3,dist_sys:2,cloud:2}},
  {t:'数据与实验——采样、偏差、指标和因果识别',d:{ds_sci:2,stats:2,causal:2}},
  {t:'硬件约束——带宽、功耗、时序、缓存、指令流',d:{arch:3,embedded:2,ai_hw:2}},
  {t:'决策策略——路径、调度、控制、资源分配',d:{optim:2,or_ops:2,robotics:2,control:1}}
 ]},

{id:'a32',phase:'anchor',cat:'长期成就 / Long-Term Ownership',
 text:'哪种长期积累最会让你觉得自己在走对路？',
 opts:[
  {t:'能独立设计并维护大规模软件/系统底座',d:{systems:2,dist_sys:2,pl:2,db:1}},
  {t:'能用数据和实验把复杂决策讲清楚、做扎实',d:{ds_sci:2,causal:2,stats:2,domain_ds:1}},
  {t:'能把芯片、板卡、嵌入式或硬件系统真正做出来',d:{embedded:2,vlsi:2,hw_sw:2,arch:1}},
  {t:'能让机器人/自主系统在真实场景里稳定工作',d:{robotics:3,autonomous:2,control:2}}
 ]},

{id:'a33',phase:'anchor',cat:'建模兴趣 / Modeling Appetite',
 text:'哪类“建模问题”最容易让你停不下来？',
 opts:[
  {t:'把排产 / 路线 / 定价问题写成优化模型并求解',d:{optim:3,or_ops:3,scheduling:2}},
  {t:'用随机过程 / 仿真估计系统在不确定性下的表现',d:{stoch:3,sci_comp:2,uq:2}},
  {t:'用统计实验识别某个策略到底有没有效果',d:{stats:2,causal:3,econom:2}},
  {t:'用系统和硬件协同把真实吞吐/延迟做上去',d:{systems:2,arch:2,hw_sw:2}}
 ]},

{id:'a34',phase:'anchor',cat:'长期平台 / Long-Term Platform',
 text:'如果未来几年可以长期维护一套“自己的平台”，你最想搭哪一种？',
 opts:[
  {t:'一套经得住真实流量和故障冲击的基础设施平台',d:{systems:3,dist_sys:3,cloud:2}},
  {t:'一套能支撑实验、评估和因果判断的数据平台',d:{ds_eng:3,causal:2,stats:2}},
  {t:'一套从板卡、固件到加速器都能反复迭代的端侧计算平台',d:{arch:3,embedded:3,hw_sw:2}},
  {t:'一套能在真实环境里持续采集、定位、控制和评估的机器人平台',d:{robotics:3,perception:2,control:2}}
 ]},

{id:'a35',phase:'anchor',cat:'问题诊断 / Failure Diagnosis',
 text:'一个项目效果不理想，你本能最先怀疑哪一层出了问题？',
 opts:[
  {t:'目标定义和评估方式错了，大家可能在优化错的东西',d:{causal:3,ds_sci:2,or_ops:1}},
  {t:'系统架构和资源组织不对，真正瓶颈根本不在算法本身',d:{systems:3,sys_ai:2,arch:2}},
  {t:'传感链路、硬件时序或控制闭环带来了物理误差',d:{embedded:3,signal:2,control:2}},
  {t:'调度、规划或资源分配策略不对，整体方案不是最优的',d:{optim:3,scheduling:2,game_th:2}}
 ]},

{id:'a36',phase:'anchor',cat:'约束偏好 / Constraint Preference',
 text:'哪种约束最会激起你“非得把它做出来”的劲头？',
 opts:[
  {t:'用户量暴涨，但系统不能掉线也不能变慢',d:{systems:3,dist_sys:2,cloud:2}},
  {t:'样本少、偏差大，但结论还必须足够可靠',d:{stats:3,causal:2,bayes:2}},
  {t:'功耗和时序都被卡死，还得把设备真正做出来',d:{embedded:3,vlsi:2,arch:2}},
  {t:'噪声、遮挡和扰动很多，机器仍然要稳稳完成动作',d:{robotics:3,control:2,autonomous:2}}
 ]},

{id:'a37',phase:'anchor',cat:'成果画面 / Deliverable Picture',
 text:'如果这个学期最后必须交一个“看得见的成果”，你最想交什么？',
 opts:[
  {t:'一套能承载真实请求的系统、数据库或平台原型',d:{systems:3,db:2,dist_sys:2}},
  {t:'一份能真正改变决策的实验、预测或因果分析报告',d:{ds_sci:3,causal:2,or_ops:2}},
  {t:'一块能稳定跑起来的板卡、端侧设备或计算原型',d:{arch:3,embedded:2,hw_sw:2}},
  {t:'一个在真实场景里完成任务的机器人 demo',d:{robotics:3,perception:2,control:2}}
 ]},

{id:'a38',phase:'anchor',cat:'项目投入 / Project Investment',
 text:'如果要把一个学期都压在同一类项目上，你最愿意长期磨哪一类？',
 opts:[
  {t:'把一套服务在高并发下做得稳、快、可扩展',d:{systems:3,dist_sys:3,cloud:2}},
  {t:'用实验和数据判断一个策略到底有没有真实效果',d:{causal:3,stats:2,ds_sci:2,econom:1}},
  {t:'把板卡、设备或端侧系统真正调到能长期运行',d:{embedded:3,hw_sw:2,arch:2}},
  {t:'让机器人在复杂环境里感知、规划并完成动作',d:{robotics:3,autonomous:2,control:2}}
 ]},

{id:'a39',phase:'anchor',cat:'长期问题 / Long-Haul Problem',
 text:'哪类问题最像你愿意连续啃好几年的？',
 opts:[
  {t:'大型软件系统为什么会慢、会抖、会在高峰期出问题',d:{systems:3,dist_sys:2,db:2}},
  {t:'有限资源怎样分配才最优，比如排班、路线、库存、定价',d:{optim:3,or_ops:3,scheduling:2}},
  {t:'数据里的关系到底是巧合还是因果，怎么说得更可靠',d:{causal:3,stats:2,ds_sci:2}},
  {t:'计算怎样在芯片和硬件层被重新组织得更快更省',d:{arch:3,ai_hw:2,vlsi:2}}
 ]},

{id:'a40',phase:'anchor',cat:'未来工作画面 / Future Work Picture',
 text:'哪种长期工作画面最吸引你？',
 opts:[
  {t:'维护和演进一套很多人依赖的基础设施平台',d:{systems:3,dist_sys:2,cloud:2}},
  {t:'做出一套能支撑分析、实验和业务判断的数据方法或平台',d:{ds_sci:2,ds_eng:2,causal:2}},
  {t:'设计求解器或决策系统，让调度和资源分配更聪明',d:{or_ops:3,optim:2,scheduling:2}},
  {t:'把硬件、固件和系统真正接成一台可靠设备',d:{embedded:3,hw_sw:2,arch:2}}
 ]},

];

// ── PHASE 2: DOMAIN SPECIALIST TRACKS ─────────────────

var AI_Qs=[
{id:'ai1',phase:'ai',cat:'ML基础 / ML Foundations',
 text:'你认为目前深度学习最重要的悬而未决问题是？',
 opts:[
  {t:'为什么过参数化网络不会过拟合——泛化理论',d:{ml_theory:3,stat_learn:2,scaling:2}},
  {t:'如何让模型真正具备因果推理而非统计关联',d:{causal:3,llm:2,safety:1}},
  {t:'在没有大量标注数据的情况下如何高效学习',d:{ssl:3,repr:3,transfer:2}},
  {t:'大模型的能力如何与计算量真正解耦',d:{efficient:3,ml_theory:2,scaling:2}}
 ,
   {t:'以上 AI 研究方向目前都不是我特别感兴趣的',d:{ml:1}}
  ]},

{id:'ai2',phase:'ai',cat:'表示学习 / Representation Learning',
 text:'哪种表示学习方向对你最有吸引力？',
 opts:[
  {t:'对比学习与自监督——用无标签数据学优质表示',d:{ssl:3,repr:3,ml:2}},
  {t:'生成式预训练——通过预测下一 token 学习世界结构',d:{llm:3,foundation:3,repr:2}},
  {t:'多模态对齐——让视觉和语言在同一语义空间对齐',d:{vlm:3,multimodal:3,repr:2}},
  {t:'稀疏激活与混合专家——让大模型按需调用能力',d:{foundation:3,efficient:2,dl:2}}
 ,
   {t:'以上这些挑战目前都不是我最想解决的',d:{ml:1}}
  ]},

{id:'ai3',phase:'ai',cat:'语言智能 / Language Intelligence',
 text:'在 LLM 研究里，你最想解决哪类问题？',
 opts:[
  {t:'推理能力——让模型真正能做多步规划和推导',d:{llm:3,ml_theory:2,foundation:2}},
  {t:'可靠性——让模型知道自己不知道什么',d:{safety:3,xai:2,llm:2}},
  {t:'Agent 能力——自主使用工具、多步骤完成任务',d:{llm:3,planning_ai:3,applied_ai:2}},
  {t:'对齐与价值观——让大模型真正理解并遵循人类意图',d:{safety:3,fairness:2,llm:2}}
 ]},

{id:'ai4',phase:'ai',cat:'视觉智能 / Vision Intelligence',
 text:'在计算机视觉里，哪个方向最让你有研究冲动？',
 opts:[
  {t:'医学影像——辅助诊断，真实改变患者预后',d:{med_vision:3,cv:2,applied_ai:2}},
  {t:'三维理解——NeRF、高斯泼溅、图像到三维重建',d:{vision3d:3,cv:3,generative:2}},
  {t:'视频理解——动作、时序、跨帧因果推理',d:{video:3,cv:2,multimodal:2}},
  {t:'开放词汇检测——识别任意类别，不依赖固定标签',d:{vlm:3,cv:2,foundation:2}}
 ]},

{id:'ai5',phase:'ai',cat:'生成式AI / Generative AI',
 text:'生成 AI 里你最关心什么？',
 opts:[
  {t:'可控生成——让创作者能精确控制生成内容',d:{generative:3,diffusion:3,creative_ai:2}},
  {t:'视频与世界模型——时序一致的长视频生成',d:{generative:3,video:2,diffusion:2}},
  {t:'3D 内容生成——从文字到可交互三维场景',d:{generative:3,vision3d:3,diffusion:2}},
  {t:'生成 = 理解？——探索生成模型的感知能力',d:{generative:2,multimodal:2,ml_theory:2}}
 ,
   {t:'以上生成式 AI 方向目前都不是我的核心兴趣',d:{generative:1}}
  ]},

{id:'ai6',phase:'ai',cat:'强化学习 / Reinforcement Learning',
 text:'RL 里你最感兴趣的场景？',
 opts:[
  {t:'RLHF / RLAIF——用人类反馈让 LLM 更对齐',d:{rl:3,safety:3,llm:2}},
  {t:'机器人控制——学习复杂操作和运动技能',d:{rl:3,robotics:2,embodied:2}},
  {t:'离线 RL——从历史数据学习，无需在线交互',d:{offline_rl:3,rl:3,causal:1}},
  {t:'多智能体博弈——协作、竞争、涌现行为',d:{multiagent:3,rl:2,game_th:2}}
 ]},

{id:'ai7',phase:'ai',cat:'高效AI / Efficient AI',
 text:'模型效率研究里，你更偏向哪类问题？',
 opts:[
  {t:'量化——INT4/FP8 精度损失如何最小化',d:{quant:3,efficient:3,ai_hw:2}},
  {t:'高效架构——设计比 Transformer 更高效的结构',d:{efficient:3,ml_theory:2,foundation:2}},
  {t:'推理系统——投机解码、KV Cache 优化、连续批处理',d:{inf_opt:3,sys_ai:3,efficient:2}},
  {t:'训练效率——梯度压缩、混合精度、大批量训练',d:{efficient:3,dist_sys:2,opt_ml:2}}
 ]},

{id:'ai8',phase:'ai',cat:'可信AI / Trustworthy AI',
 text:'在 AI 安全与可信里，你最关注哪个层面？',
 opts:[
  {t:'可解释性——真正理解模型内部的表征和决策',d:{xai:3,safety:2,ml_theory:2}},
  {t:'价值对齐——确保 AI 真正理解并遵循人类意图',d:{safety:3,fairness:2,llm:2}},
  {t:'对抗鲁棒性——让模型在恶意攻击下不崩溃',d:{safety:3,security:2,ml_theory:2}},
  {t:'AI 公平性——消除算法对不同群体的系统性偏见',d:{fairness:3,safety:1,applied_ai:1}}
 ]},

{id:'ai9',phase:'ai',cat:'应用AI / Applied AI',
 text:'你认为 AI 落地最难的问题是？',
 opts:[
  {t:'分布偏移——训练集和真实场景的差距',d:{applied_ai:3,ml:2,causal:2}},
  {t:'人机信任——用户如何知道该不该相信 AI',d:{hci:3,xai:2,applied_ai:2}},
  {t:'成本——推理太贵，无法真正普及',d:{efficient:3,sys_ai:2,inf_opt:2}},
  {t:'数据飞轮——没有用户就没有数据，没有数据就没有模型',d:{applied_ai:2,mlops:2,ds_eng:2}}
 ]},

{id:'ai10',phase:'ai',cat:'研究偏好 / Research Style',
 text:'你做研究更倾向于？',
 opts:[
  {t:'提出新问题框架，哪怕解法还不完善',d:{ml_theory:3,theory:2,causal:2}},
  {t:'在已有框架下把 SOTA 推到极限',d:{dl:2,efficient:2,ml:2}},
  {t:'发现反直觉实验现象并解释它',d:{ml_theory:2,repr:2,xai:2}},
  {t:'把学术成果转化成工程可用的系统',d:{applied_ai:3,sys_ai:2,mlops:2}}
 ]},

{id:'ai11',phase:'ai',cat:'技术判断 / Tech Trends',
 text:'接下来五年 AI 最重要的突破会在？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'更强的推理和规划——从「生成」到「思考」',d:{llm:2,ml_theory:2,planning_ai:2}},
  {t:'具身智能——机器人学会做家务和户外作业',d:{embodied:3,robotics:2,vla:2}},
  {t:'生成式 AI 重塑内容和知识工作',d:{generative:3,creative_ai:2,applied_ai:1}},
  {t:'AI 压缩到边缘设备，手机本地推理达 GPT-4 级',d:{efficient:3,quant:2,ai_hw:2}},
  {t:'多模态基础模型统一视觉/语言/音频/动作',d:{multimodal:3,foundation:3,vlm:2}},
  {t:'科学发现加速——AI 在生物/物理/材料领域独立提出假设',d:{domain_ds:3,sci_comp:2,applied_ai:2}}
 ]},

{id:'ai12',phase:'ai',cat:'多模态 / Multimodal',
 text:'多模态 AI 里你最想解决的核心问题？',
 opts:[
  {t:'跨模态语义对齐——图像和文字的真正语义等价',d:{vlm:3,multimodal:3,repr:2}},
  {t:'视频时序推理——跨帧理解事件和因果链',d:{video:3,multimodal:2,llm:1}},
  {t:'文档智能——理解 PDF、表格、图文混排',d:{doc_intel:3,nlp:2,applied_ai:2}},
  {t:'语音+视觉+语言——全感官 AI 代理',d:{multimodal:3,speech:2,llm:2}}
 ]},

{id:'ai13',phase:'ai',cat:'应用场景 / Application Domains',
 text:'哪些 AI 应用场景最值得深入做？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'医疗健康——辅助诊断、药物研发、患者管理',d:{med_vision:3,applied_ai:2,domain_ds:2}},
  {t:'科学研究——加速物理/化学/生物的知识发现',d:{domain_ds:3,ml:2,sci_comp:2}},
  {t:'创意工具——让普通人能创作出专业级内容',d:{generative:3,creative_ai:2,hci:2}},
  {t:'教育——个性化学习、智能辅导、评估系统',d:{applied_ai:3,hci:2,nlp:1}},
  {t:'机器人与自动化——AI 进入物理生产流程',d:{robotics:3,embodied:2,applied_ai:1}},
  {t:'金融与量化——用 AI 发现市场规律和风险',d:{applied_ai:2,causal:2,ds_sci:2}}
 ]},

{id:'ai14',phase:'ai',cat:'推荐与检索 / IR & RecSys',
 text:'信息检索和推荐系统里，你最想解决的问题？',
 opts:[
  {t:'RAG 和知识增强——让 LLM 能检索并利用外部知识',d:{ir:3,llm:2,nlp:2}},
  {t:'推荐系统的因果建模——消除流行度偏差',d:{recsys:3,causal:3,applied_ai:1}},
  {t:'搜索排名——用户意图理解和相关性建模',d:{ir:3,nlp:2,ml:2}},
  {t:'语音搜索与对话检索——自然语言交互找信息',d:{speech:3,ir:2,nlp:2}}
 ]},

{id:'ai15',phase:'ai',cat:'研究风格 / Research Philosophy',
 text:'你对 AI 研究方式的偏好？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'数学推导优先——先有理论保证再做实验',d:{ml_theory:3,stat_learn:2,theory:2}},
  {t:'实验驱动——先观察现象，再尝试解释',d:{ml:2,repr:2,xai:1}},
  {t:'系统构建——边做工程边做研究',d:{sys_ai:3,applied_ai:2,mlops:1}},
  {t:'跨学科——把 CS 工具应用到其他领域问题',d:{domain_ds:3,sci_comp:2,causal:2}}
 ]},
];

var CS_Qs=[
{id:'cs1',phase:'cs',cat:'系统方向 / Systems',
 text:'系统研究里你最感兴趣的是？',
 opts:[
  {t:'分布式系统——一致性、容错、大规模协调',d:{dist_sys:3,systems:2,db:1}},
  {t:'AI 系统——让大模型训练和推理更快更省',d:{sys_ai:3,dist_sys:2,arch:2}},
  {t:'数据系统——数据库、流处理、查询优化',d:{db:3,stream:2,systems:2}},
  {t:'操作系统与内核——调度、虚拟化、内存管理',d:{systems:3,arch:2,embedded:1}}
 ]},

{id:'cs2',phase:'cs',cat:'体系结构 / Architecture',
 text:'体系结构里你最想深入哪个方向？',
 opts:[
  {t:'处理器设计——流水线、分支预测、乱序执行',d:{arch:3,mem_sys:1,logic_des:1}},
  {t:'内存层级——Cache、HBM、近存计算',d:{mem_sys:3,arch:3,in_mem:2}},
  {t:'AI 加速器——Tensor Core、稀疏计算、专用数据流',d:{ai_hw:3,arch:3,npu:2}},
  {t:'异构计算——CPU+GPU+FPGA+NPU 协同',d:{hw_sw:3,arch:2,fpga:2}}
 ]},

{id:'cs3',phase:'cs',cat:'理论 / Theory',
 text:'以下哪类理论问题最让你有钻研欲望？',
 opts:[
  {t:'算法的下界——证明某类问题不可能比这更快了',d:{theory:3,algo:3,complexity:2}},
  {t:'近似算法——NP-hard 问题的最优近似比',d:{algo:3,optim:2,comb_opt:2}},
  {t:'在线算法与遗憾理论——不知未来的情况下决策',d:{theory:3,algo:2,game_th:2}},
  {t:'理论方向目前不是我的核心兴趣',d:{systems:1,applied_ai:1}}
 ,
   {t:'以上算法理论方向目前都不是我最感兴趣的',d:{theory:1}}
  ]},

{id:'cs4',phase:'cs',cat:'安全与隐私 / Security',
 text:'在安全这个大方向里，你更关注哪个层面？',
 hint:'计算机安全范围很广：从传统系统安全到 AI 特有的对抗攻击、隐私计算。',
 opts:[
  {t:'系统安全——内核漏洞、内存安全、Side-Channel',d:{security:3,systems:2,arch:1}},
  {t:'隐私计算——联邦学习、差分隐私、安全多方计算',d:{security:3,ml:2,fairness:1}},
  {t:'AI 安全——对抗攻击、Prompt Injection、模型窃取',d:{safety:3,security:2,llm:1}},
  {t:'密码学——零知识证明、同态加密、后量子密码',d:{security:3,formal:2,theory:2}},
  {t:'安全方向对我目前没有特别吸引力',d:{}}
 ,
   {t:'以上安全/隐私方向目前都不是我最感兴趣的',d:{security:1}}
  ]},

{id:'cs5',phase:'cs',cat:'编程语言 / PL',
 text:'PL 和软件工程里你最在意哪个问题？',
 opts:[
  {t:'程序正确性——形式化证明代码没有 bug',d:{formal:3,pl:3,security:1}},
  {t:'编译器优化——让编译器自动生成更优的机器码',d:{pl:3,arch:2,sys_ai:1}},
  {t:'类型系统——用类型在编译期排除错误',d:{pl:3,formal:2,theory:1}},
  {t:'AI 辅助编程——代码生成、自动调试、程序合成',d:{pl:3,llm:2,applied_ai:2}}
 ]},

{id:'cs6',phase:'cs',cat:'图形学 / Graphics',
 text:'计算机图形学里你最感兴趣的是？',
 opts:[
  {t:'实时渲染——光线追踪、全局光照的实时实现',d:{graphics:3,arch:2}},
  {t:'神经渲染——NeRF、3DGS，用 AI 重建三维世界',d:{graphics:3,vision3d:2,generative:2}},
  {t:'几何处理——网格变形、曲面拟合、三维生成',d:{geo_proc:3,graphics:2,vision3d:2}},
  {t:'图形学不是我的核心兴趣',d:{sys_ai:1,applied_ai:1}}
 ]},

{id:'cs7',phase:'cs',cat:'HCI',
 text:'HCI 研究里你最想做的是？',
 opts:[
  {t:'AI 界面设计——如何让用户和 AI 协作更自然',d:{hci:3,applied_ai:2,xai:1}},
  {t:'无障碍技术——让残障用户能平等使用技术',d:{hci:3,fairness:2,applied_ai:1}},
  {t:'增强现实——让数字信息融入物理世界',d:{hci:3,graphics:2,perception:1}},
  {t:'HCI 不是我的核心兴趣',d:{systems:1,dl:1}}
 ]},

{id:'cs8',phase:'cs',cat:'数据系统 / Data Systems',
 text:'数据系统里你最感兴趣的技术挑战是？',
 opts:[
  {t:'向量数据库——为 AI 嵌入优化的相似搜索',d:{db:3,ir:2,sys_ai:2}},
  {t:'流式计算——实时摄入、处理、低延迟输出',d:{stream:3,dist_sys:2,mlops:1}},
  {t:'数据湖/湖仓架构——统一分析和 ML 的数据基础设施',d:{db:3,ds_eng:2,cloud:1}},
  {t:'查询优化——让数据库自动找到最优执行计划',d:{db:3,algo:2,theory:1}}
 ,
 {t:'数据系统目前不是我最想长期投入的方向',d:{systems:1}}
 ]},

{id:'cs9',phase:'cs',cat:'技术判断 / Tech Trends',
 text:'接下来五年 CS 最重要的突破会在？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'AI 推理成本断崖式下降——模型普惠化',d:{efficient:3,inf_opt:2,arch:2}},
  {t:'形式化验证成熟——AI 写可靠代码成为现实',d:{formal:3,pl:3,theory:2}},
  {t:'隐私计算普及——计算和数据隔离成为标准',d:{security:3,systems:2,dist_sys:1}},
  {t:'量子优势——量子计算在特定问题上超过经典',d:{theory:3,arch:2,complexity:2}},
  {t:'可重构数据中心——软件定义一切的基础设施',d:{cloud:3,dist_sys:2,systems:2}},
  {t:'实时协作 AI 工具链——AI 成为开发者的对等伙伴',d:{pl:3,applied_ai:2,hci:1}}
 ]},

{id:'cs10',phase:'cs',cat:'学术偏好 / Academic Venues',
 text:'如果参加学术会议，你最愿意去哪几种？（可多选）',
 multiSelect:true,maxSelect:3,
 opts:[
  {t:'OSDI / SOSP / EuroSys——系统顶会',d:{systems:3,dist_sys:2,arch:1}},
  {t:'ISCA / MICRO / HPCA——体系结构顶会',d:{arch:3,ai_hw:2,mem_sys:1}},
  {t:'CVPR / ICCV / ECCV——计算机视觉顶会',d:{cv:3,multimodal:2,generative:1}},
  {t:'NeurIPS / ICML / ICLR——机器学习顶会',d:{ml_theory:3,dl:2,foundation:1}},
  {t:'ACL / EMNLP / NAACL——NLP 顶会',d:{nlp:3,llm:2,speech:1}},
  {t:'UIST / CHI——人机交互顶会',d:{hci:3,applied_ai:2,vis:1}},
  {t:'CCS / IEEE S&P / USENIX Security——安全顶会',d:{security:3,formal:1,systems:1}},
  {t:'STOC / FOCS / SODA——理论 CS 顶会',d:{theory:3,algo:3,complexity:2}},
  {t:'对学术会议没有特别偏好',d:{}}
 ]},

{id:'cs11',phase:'cs',cat:'工程价值观 / Engineering Values',
 text:'在工程取舍里，你最优先哪几个？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'性能极致——能快一倍我就不接受慢一倍',d:{sys_ai:2,arch:2,efficient:2}},
  {t:'正确性优先——宁可慢，不能有 bug',d:{formal:3,security:2,pl:2}},
  {t:'可扩展性——设计时就考虑到 100× 规模',d:{dist_sys:3,systems:2,cloud:1}},
  {t:'简单性——不引入不必要的复杂度',d:{pl:2,theory:1,systems:1}}
 ]},

{id:'cs12',phase:'cs',cat:'深度方向 / Deep Focus',
 text:'五年后你在 CS 里希望有独特深度的子方向？（可多选）',
 multiSelect:true,maxSelect:3,
 opts:[
  {t:'GPU/CUDA 编程与 AI 系统——理解并行计算的底层',d:{ai_hw:3,arch:3,sys_ai:2}},
  {t:'分布式系统与大规模数据——设计 PB 级可靠系统',d:{dist_sys:3,systems:3,db:2}},
  {t:'形式化验证与程序分析——让代码在数学意义上正确',d:{formal:3,pl:3,security:2}},
  {t:'计算机图形学——从实时渲染到神经渲染',d:{graphics:3,vision3d:2,geo_proc:1}},
  {t:'网络安全与密码学——攻防实战加零知识证明',d:{security:3,formal:2,theory:1}},
  {t:'人机交互——让技术真正对人友好',d:{hci:3,applied_ai:2,vis:1}},
  {t:'编程语言与编译器——构建下一代开发工具链',d:{pl:3,theory:2,systems:1}},
  {t:'以上方向都不是我最感兴趣的',d:{}}
 ]},

{id:'cs13',phase:'cs',cat:'网络与云 / Networks & Cloud',
 text:'如果你继续深挖基础设施，更想攻哪类问题？',
 opts:[
  {t:'云平台调度——把计算、存储、网络资源分给最需要的服务',d:{cloud:3,dist_sys:2,systems:2}},
  {t:'网络性能——延迟、丢包、拥塞控制和链路利用率',d:{networks:3,systems:2,cloud:1}},
  {t:'服务可靠性——故障隔离、回滚、灰度和灾备设计',d:{systems:3,cloud:2,dist_sys:2}},
  {t:'可观测性——日志、指标、Tracing 怎样帮系统更快定位问题',d:{systems:3,cloud:2,ds_eng:1}},
  {t:'这条基础设施方向目前不是我最想长期投入的',d:{systems:1}}
 ]},

{id:'cs14',phase:'cs',cat:'数据库内核 / Database Internals',
 text:'数据库这条线里，哪类挑战更容易让你停不下来？',
 opts:[
  {t:'事务与一致性——并发很高时怎样仍然保证数据不乱',d:{db:3,dist_sys:2,systems:1}},
  {t:'存储引擎——日志、索引、压缩和冷热分层怎样一起配合',d:{db:3,systems:2,cloud:1}},
  {t:'分布式查询——一条 SQL 跨很多机器时怎样仍然跑得快',d:{db:3,dist_sys:3,algo:1}},
  {t:'检索型数据库——让向量搜索、文本检索和结构化查询协同工作',d:{db:2,ir:2,stream:1,sys_ai:1}},
  {t:'数据库内核目前不是我最想深入的方向',d:{db:1}}
 ]},

{id:'cs15',phase:'cs',cat:'开发工具与程序分析 / Tooling',
 text:'如果你做的是“帮助别人写好代码”的方向，你更想做什么？',
 opts:[
  {t:'静态分析——程序还没跑，就先发现潜在 bug 和风险',d:{pl:3,formal:2,security:1}},
  {t:'调试与性能工具——让开发者更快找到慢点和错点',d:{pl:2,systems:2,arch:1}},
  {t:'程序合成——让系统根据目标自动补全或生成代码片段',d:{pl:3,llm:2,applied_ai:1}},
  {t:'构建与测试体系——让大型工程协作更稳、更可回归',d:{systems:2,pl:2,formal:1}},
  {t:'开发工具不是我最想长期投入的方向',d:{pl:1}}
 ]},

{id:'cs16',phase:'cs',cat:'理论与算法 / Theory & Algorithms',
 text:'如果你长期留在理论 / 算法这条线，更愿意攻哪类问题？',
 opts:[
  {t:'算法设计——把一个问题从“能做”改成“做得足够快”',d:{algo:3,theory:2,optim:1}},
  {t:'复杂度边界——哪些问题本质上就是难、快不了',d:{complexity:3,theory:3,formal:1}},
  {t:'图与网络算法——把关系结构、流动路径和连接模式建模清楚',d:{algo:3,theory:2,networks:1}},
  {t:'在线与近似决策——没有完整信息时也要尽快给出不错方案',d:{algo:2,theory:2,or_ops:2,game_th:1}},
  {t:'理论 / 算法不是我最想长期投入的方向',d:{theory:1}}
 ]},

{id:'cs17',phase:'cs',cat:'网络与云 / Networks & Cloud',
 text:'如果你继续往“网络 / 云”这条线深挖，更想长期做哪类问题？',
 opts:[
  {t:'云网络与服务治理——服务之间怎样稳、快、可灰度地通信',d:{cloud:3,networks:2,dist_sys:2}},
  {t:'网络测量与可观测性——系统到底慢在哪、堵在哪、抖在哪',d:{networks:3,systems:2,cloud:1}},
  {t:'移动与边缘网络——设备在弱网、切换和带宽变化中怎样保持体验',d:{networks:3,cloud:1,embedded:1}},
  {t:'协议与互联网基础设施——规则一旦定下，整个系统怎样长期演化',d:{networks:3,theory:1,systems:1}},
  {t:'网络 / 云不是我最想长期投入的方向',d:{networks:1}}
 ]},

{id:'cs18',phase:'cs',cat:'软件可靠性 / Software Reliability',
 text:'如果你更偏“把复杂软件长期做稳”，最想攻哪类问题？',
 opts:[
  {t:'测试与验证——系统越大，越需要自动化保证它没在悄悄变坏',d:{formal:2,systems:2,pl:1}},
  {t:'运行时与调试——程序崩了、卡了、泄漏了，怎样更快看清原因',d:{systems:3,pl:2,arch:1}},
  {t:'工程协作与发布——多人并行开发时怎样做到可回滚、可追踪、可复现',d:{systems:3,cloud:2,pl:1}},
  {t:'开发效率工具——让别人更快写对代码，而不是自己单点写得更快',d:{pl:3,systems:1,hci:1}},
  {t:'软件可靠性不是我最想长期投入的方向',d:{systems:1}}
 ]},
];

var DS_Qs=[
{id:'ds1',phase:'ds',cat:'数据角色 / Data Role',
 text:'面对一个公司的数据挑战，你最自然想扮演什么角色？',
 hint:'数据工程师 = 建管道 | 数据科学家 = 做分析 | MLE = 让模型上线 | 分析师 = 提供业务洞察',
 opts:[
  {t:'建管道——让数据可靠地从源头流到分析层',d:{ds_eng:3,mlops:2,stream:1}},
  {t:'做分析——从数据里发现业务问题和机会',d:{ds_sci:3,causal:2,stats:1}},
  {t:'上模型——让机器学习系统稳定跑在生产里',d:{mlops:3,applied_ai:2,sys_ai:1}},
  {t:'讲故事——把数据结论变成决策者能理解的洞察',d:{ds_sci:2,vis:3,applied_ai:1}}
 ]},

{id:'ds2',phase:'ds',cat:'统计方法 / Statistical Methods',
 text:'以下哪类统计/数学工具你最感兴趣深入学？',
 opts:[
  {t:'贝叶斯统计——用概率分布表达不确定性',d:{bayes:3,stats:3,stoch:2}},
  {t:'因果推断——从观测数据中识别真实因果关系',d:{causal:3,stats:3,econom:2}},
  {t:'时间序列——预测、异常检测、时序建模',d:{ts_anal:3,stats:2,applied_ai:1}},
  {t:'优化方法——线性规划、整数规划、大规模凸优化',d:{optim:3,or_ops:3,conv_opt:2}}
 ]},

{id:'ds3',phase:'ds',cat:'因果与实验 / Causal & Experimentation',
 text:'你认为以下哪个数据工作最难做对？',
 opts:[
  {t:'A/B 实验——看起来简单，但偏差来源很多',d:{causal:3,stats:2,ds_sci:2}},
  {t:'双重差分——政策效果评估中的混淆变量控制',d:{causal:3,econom:3,stats:2}},
  {t:'推荐系统的离线评估——线下指标与线上效果不对齐',d:{ds_sci:2,mlops:2,causal:2}},
  {t:'数据质量——你以为数据对，其实错了',d:{ds_eng:3,data_qual:3,causal:1}}
 ,
   {t:'以上统计建模方向目前都不是我特别感兴趣的',d:{stats:1}}
  ]},

{id:'ds4',phase:'ds',cat:'数据工程 / Data Engineering',
 text:'数据工程里你最感兴趣的挑战是？',
 opts:[
  {t:'流处理——实时数据管道，毫秒级特征计算',d:{ds_eng:3,stream:3,mlops:1}},
  {t:'数据质量——在大规模数据里自动发现和修复问题',d:{ds_eng:3,data_qual:3,stats:1}},
  {t:'数据湖仓架构——分层建模、血缘追踪、元数据管理',d:{ds_eng:3,db:3,cloud:1}},
  {t:'特征工程系统——可复用、可监控的特征平台',d:{ds_eng:2,mlops:3,applied_ai:1}}
 ]},

{id:'ds5',phase:'ds',cat:'MLOps',
 text:'MLOps 里你最想解决哪个问题？',
 opts:[
  {t:'训练-服务特征不一致——线下线上 skew',d:{mlops:3,ds_eng:2,sys_ai:1}},
  {t:'模型监控——检测数据漂移和模型退化',d:{mlops:3,causal:2,ds_sci:1}},
  {t:'实验管理——让模型迭代可复现、可追溯',d:{mlops:3,applied_ai:1,stats:1}},
  {t:'模型部署——A/B 测试、蓝绿发布、快速回滚',d:{mlops:3,systems:2,applied_ai:1}}
 ]},

{id:'ds6',phase:'ds',cat:'可视化 / Visualization',
 text:'数据可视化里你最想做的是？',
 opts:[
  {t:'交互式分析仪表盘——让非技术用户能自助探索',d:{vis:3,hci:2,applied_ai:1}},
  {t:'科学可视化——展示高维数据、模型内部结构',d:{vis:3,xai:2,ml_theory:1}},
  {t:'叙事可视化——把数据故事变成引人入胜的报道',d:{vis:3,ds_sci:2,applied_ai:1}},
  {t:'可视化不是我的核心兴趣',d:{ds_sci:1,stats:1}}
 ]},

{id:'ds7',phase:'ds',cat:'领域数据科学 / Domain DS',
 text:'你对哪个领域的数据科学最感兴趣？',
 opts:[
  {t:'生物医疗——基因组学、电子病历、临床试验',d:{domain_ds:3,applied_ai:2,stats:2}},
  {t:'金融与量化——量化策略、风险建模、信用评分',d:{domain_ds:3,causal:2,stoch:2}},
  {t:'社会科学——政策评估、经济学、社会网络分析',d:{domain_ds:3,econom:3,causal:2}},
  {t:'工业与制造——预测性维护、质量控制、供应链',d:{domain_ds:3,applied_ai:2,or_ops:1}}
 ,
   {t:'以上 DS 细分方向目前都不是我最感兴趣的',d:{ds_sci:1}}
  ]},

{id:'ds8',phase:'ds',cat:'工具栈 / Tool Stack',
 text:'你更愿意深入哪类工具栈？',
 opts:[
  {t:'Python 数据栈——Pandas / Polars / NumPy / Statsmodels',d:{ds_sci:2,stats:2,ts_anal:1}},
  {t:'大数据工程——Spark / Kafka / Flink / dbt',d:{ds_eng:3,stream:2,dist_sys:1}},
  {t:'ML 框架——PyTorch / JAX / Triton',d:{ml:2,sys_ai:2,efficient:1}},
  {t:'可视化工具——D3.js / Observable / Plotly / Tableau',d:{vis:3,hci:1,ds_sci:1}}
 ]},

{id:'ds9',phase:'ds',cat:'数据规模偏好 / Data Scale',
 text:'你更喜欢在哪种数据规模下工作？',
 opts:[
  {t:'小数据高质量——几百个样本，需要严格统计推断',d:{stats:3,bayes:3,causal:2}},
  {t:'中等规模——百万行，工程和统计双修',d:{ds_sci:3,ds_eng:2,mlops:1}},
  {t:'超大规模——PB 级，分布式计算是必需品',d:{ds_eng:3,dist_sys:2,stream:2}},
  {t:'流数据——实时摄入，延迟比规模更关键',d:{stream:3,mlops:2,ds_eng:2}}
 ]},

{id:'ds10',phase:'ds',cat:'因果决策 / Causal Decision-Making',
 text:'数据驱动决策里你最关注什么？',
 opts:[
  {t:'因果性——相关不是因果，如何真正评估干预效果',d:{causal:3,econom:3,stats:2}},
  {t:'不确定性——如何诚实地量化预测的置信度',d:{stats:3,bayes:3,uq:2}},
  {t:'可操作性——分析结论如何转化为具体行动',d:{ds_sci:2,applied_ai:2,or_ops:2}},
  {t:'公平性——数据驱动决策对不同群体的影响',d:{fairness:3,causal:2,stats:1}}
 ]},

{id:'ds11',phase:'ds',cat:'统计应用 / Statistical Applications',
 text:'你对哪类统计建模问题最感兴趣？',
 opts:[
  {t:'生存分析——时间到事件建模（用户流失、设备故障）',d:{stats:3,ts_anal:2,domain_ds:1}},
  {t:'层次模型——个体和群体层次的联合建模',d:{bayes:3,stats:3,domain_ds:2}},
  {t:'空间统计——地理信息与区域相关性建模',d:{stats:2,domain_ds:3,sci_comp:1}},
  {t:'以上都不是我特别感兴趣的',d:{ds_eng:1,mlops:1}}
 ]},

{id:'ds12',phase:'ds',cat:'数据产品 / Data Products',
 text:'你认为一个好的数据产品最重要的是？',
 opts:[
  {t:'数据准确——宁可没结论，不能给错结论',d:{stats:2,causal:2,data_qual:2}},
  {t:'用户友好——非技术用户也能自助使用',d:{vis:3,hci:2,applied_ai:1}},
  {t:'实时性——分钟级甚至秒级的数据反馈',d:{ds_eng:3,stream:2,mlops:1}},
  {t:'可解释——每个结论都有可追溯的数据链路',d:{xai:2,vis:2,ds_sci:2}}
 ]},

{id:'ds13',phase:'ds',cat:'职业方向 / Career Path',
 text:'数据相关岗位里，你最感兴趣的是？',
 opts:[
  {t:'数据科学家——建模+分析，推动业务决策',d:{ds_sci:3,causal:2,stats:2}},
  {t:'数据工程师——建基础设施，保证数据可靠流动',d:{ds_eng:3,stream:2,mlops:1}},
  {t:'ML 工程师——让机器学习在生产里稳定运行',d:{mlops:3,applied_ai:2,sys_ai:2}},
  {t:'研究科学家（统计/因果）——方法研究',d:{stats:3,causal:3,bayes:2}}
 ]},

{id:'ds14',phase:'ds',cat:'量化视角 / Quantitative',
 text:'量化金融/计量经济学，你的兴趣是？',
 opts:[
  {t:'很感兴趣——因果推断在政策和金融中的应用',d:{econom:3,causal:3,stats:2}},
  {t:'有兴趣——量化策略和风险建模',d:{domain_ds:2,stoch:2,optim:1}},
  {t:'当成工具就好——不作为主要方向',d:{ds_sci:1}},
  {t:'不感兴趣',d:{}}
 ]},

{id:'ds15',phase:'ds',cat:'预测与时序 / Forecasting',
 text:'如果你长期做预测类问题，更想解决哪种难点？',
 opts:[
  {t:'长周期趋势——季节性、节假日、结构变化一起出现时还能稳住',d:{ts_anal:3,stats:2,domain_ds:1}},
  {t:'异常与告警——尽早发现系统、业务或设备正在偏离正常状态',d:{ts_anal:3,data_qual:2,domain_ds:1}},
  {t:'分层预测——单店、区域、全局多个层次要同时讲得通',d:{bayes:2,ts_anal:3,stats:2}},
  {t:'概率预测——不只给一个数，还要给出上下界和风险范围',d:{uq:3,bayes:2,stats:2}},
  {t:'预测建模目前不是我最想长期投入的方向',d:{ts_anal:1}}
 ]},

{id:'ds16',phase:'ds',cat:'决策科学 / Decision Science',
 text:'数据支持决策时，你更想补强哪一环？',
 opts:[
  {t:'实验设计——让结论更可信，避免“看起来有效其实没用”',d:{causal:3,stats:2,ds_sci:2}},
  {t:'策略评估——判断某个定价、营销或政策到底值不值得继续',d:{econom:3,causal:2,domain_ds:1}},
  {t:'风险建模——把高损失、低频率的问题尽量提前识别出来',d:{domain_ds:2,stoch:2,uq:2}},
  {t:'资源配置——把分析结论转成真正能执行的资源分配方案',d:{or_ops:2,ds_sci:2,optim:2}},
  {t:'决策科学目前不是我最想长期投入的方向',d:{ds_sci:1}}
 ]},

{id:'ds17',phase:'ds',cat:'数据平台产品化 / Data Productization',
 text:'如果你负责一套数据产品，你最在意哪件事？',
 opts:[
  {t:'数据入口稳——上游变化了，平台也能第一时间发现和止损',d:{ds_eng:3,data_qual:2,stream:1}},
  {t:'指标定义统一——不同团队看到的是同一套口径，而不是各说各话',d:{ds_eng:2,stats:2,vis:1}},
  {t:'分析复用高——同一份数据可以反复被不同业务拿去做判断',d:{ds_eng:3,db:2,domain_ds:1}},
  {t:'建模接入顺——从原始数据到实验、训练、上线是一条通路',d:{mlops:3,ds_eng:2,applied_ai:1}},
  {t:'数据平台产品化不是我最想长期投入的方向',d:{ds_eng:1}}
 ]},

{id:'ds18',phase:'ds',cat:'应用研究 / Applied Research',
 text:'如果你做的是“行业里的数据研究”，你最想站在哪个位置？',
 opts:[
  {t:'贴近业务现场——把模糊问题讲清楚，再设计数据方法去回答',d:{domain_ds:3,ds_sci:2,causal:1}},
  {t:'贴近统计方法——把一类行业问题抽象成可重复的方法框架',d:{stats:3,bayes:2,causal:2}},
  {t:'贴近系统落地——让模型和指标真正进入生产闭环',d:{mlops:2,ds_eng:2,domain_ds:2}},
  {t:'贴近政策 / 组织决策——让分析结果真的改变资源分配和策略',d:{econom:2,domain_ds:2,causal:2}},
  {t:'应用研究目前不是我最想长期投入的方向',d:{domain_ds:1}}
 ]},

{id:'ds19',phase:'ds',cat:'风险与预测 / Risk & Forecasting',
 text:'如果你继续往“预测 / 风险”深挖，更想长期做哪类问题？',
 opts:[
  {t:'需求与供给预测——提前判断未来会来什么、缺什么、该备多少',d:{ts_anal:3,domain_ds:2,or_ops:1}},
  {t:'信用 / 欺诈 / 风险识别——在大量噪声里提前看出危险信号',d:{domain_ds:3,stats:2,bayes:1}},
  {t:'医疗 / 教育结果预测——提前识别谁更需要干预和帮助',d:{domain_ds:3,causal:2,stats:1}},
  {t:'不确定性建模——不仅要预测结果，还要说清它有多不稳',d:{bayes:3,stats:2,uq:1}},
  {t:'预测 / 风险不是我最想长期投入的方向',d:{ts_anal:1}}
 ]},

{id:'ds20',phase:'ds',cat:'产品分析 / Product Analytics',
 text:'如果你做的是“产品里的数据科学”，最想把时间花在哪类问题上？',
 opts:[
  {t:'指标体系——什么才算真的增长、留存、满意和健康',d:{ds_sci:3,stats:2,vis:1}},
  {t:'实验平台——让 A/B、分层实验和归因分析都能长期复用',d:{causal:3,mlops:1,ds_eng:1}},
  {t:'用户分层与行为建模——不同人到底为什么会做出不同选择',d:{domain_ds:3,ds_sci:2,causal:1}},
  {t:'决策支持——把分析变成产品、运营和商业团队真的会用的动作建议',d:{domain_ds:2,vis:2,ds_sci:2}},
  {t:'产品分析不是我最想长期投入的方向',d:{ds_sci:1}}
 ]},
];

var ROBOTICS_Qs=[
{id:'rb1',phase:'robotics',cat:'机器人基础 / Robotics Foundations',
 text:'机器人学里你最想深入的核心技术是？',
 opts:[
  {t:'感知——让机器人用视觉/激光理解三维世界',d:{perception:3,slam:2,cv:2}},
  {t:'规划——在复杂环境里找到最优行动序列',d:{motion:3,robotics:2,optim:2}},
  {t:'控制——精确执行目标动作，处理外界干扰',d:{control:3,opt_ctrl:2,embedded:1}},
  {t:'学习——让机器人通过经验改善自己的行为',d:{rl:3,embodied:3,robotics:2}}
 ]},

{id:'rb2',phase:'robotics',cat:'具身智能 / Embodied AI',
 text:'具身 AI 里你最感兴趣的研究方向？',
 opts:[
  {t:'操作——让机器手臂学会抓取、组装、精细操作',d:{embodied:3,rl:2,robotics:2}},
  {t:'导航——在未知环境里可靠地到达目标',d:{embodied:3,slam:3,motion:2}},
  {t:'语言-行动——理解自然语言指令并在物理世界执行',d:{vla:3,llm:2,embodied:2}},
  {t:'世界模型——让机器人内部建立对物理世界的预测',d:{embodied:3,rl:2,ml_theory:2}}
 ,
   {t:'具身 AI 目前不是我最想长期投入的方向',d:{robotics:1}}
  ]},

{id:'rb3',phase:'robotics',cat:'自主系统 / Autonomous Systems',
 text:'自动驾驶/无人机里你最感兴趣的技术问题？',
 opts:[
  {t:'传感器融合——摄像头+激光雷达+毫米波的联合感知',d:{autonomous:3,perception:3,signal:2}},
  {t:'预测与规划——预测其他参与者行为并规划路径',d:{autonomous:3,motion:3,ml:2}},
  {t:'端到端学习——直接从传感器到控制信号',d:{autonomous:3,rl:2,dl:2}},
  {t:'安全性——如何在数学上证明自驾系统是安全的',d:{safety:3,formal:2,autonomous:2}}
 ,
   {t:'自主系统目前不是我最想长期投入的方向',d:{autonomous:1}}
  ]},

{id:'rb4',phase:'robotics',cat:'SLAM与感知 / SLAM & Perception',
 text:'机器人感知与建图里，你最感兴趣的是？',
 opts:[
  {t:'视觉 SLAM——从摄像头序列实时重建三维环境',d:{slam:3,perception:3,cv:2}},
  {t:'语义建图——不只知道在哪，还知道是什么东西',d:{perception:3,cv:2,embodied:2}},
  {t:'多模态感知——激光+视觉+IMU 的深度融合',d:{perception:3,signal:2,autonomous:2}},
  {t:'动态场景感知——人在移动、物体遮挡时仍能稳定定位和建图',d:{perception:3,slam:2,autonomous:2}},
  {t:'以上机器人感知方向目前都不是我最感兴趣的',d:{perception:1}}
 ]},

{id:'rb5',phase:'robotics',cat:'人机器人交互 / HRI',
 text:'人机器人交互（HRI）里你最想研究什么？',
 opts:[
  {t:'协作机器人——和人类在同一空间安全高效协作',d:{hri:3,control:2,safety:2}},
  {t:'社交机器人——理解人类情感和意图，自然交流',d:{hri:3,nlp:2,multimodal:1}},
  {t:'辅助机器人——帮助老人、残障人士完成日常任务',d:{hri:3,applied_ai:2,fairness:1}},
  {t:'信任与可解释交互——让人知道机器人为什么这么做、何时该接管',d:{hri:3,safety:2,xai:1}},
  {t:'以上 HRI 方向目前都不是我最感兴趣的',d:{hri:1}}
 ]},

{id:'rb6',phase:'robotics',cat:'工程挑战 / Engineering Challenges',
 text:'机器人学习里最难的工程问题是？',
 opts:[
  {t:'Sim-to-Real——仿真里学会的技能到真实世界会退化',d:{robotics:3,rl:2,embodied:2}},
  {t:'数据收集——如何高效收集高质量的机器人演示数据',d:{robotics:3,embodied:2,applied_ai:1}},
  {t:'安全探索——让机器人在学习过程中不损坏自己或环境',d:{safety:3,control:2,rl:2}},
  {t:'泛化——在训练没见过的物体/场景里也能可靠工作',d:{embodied:3,rl:2,ml_theory:2}}
 ]},

{id:'rb7',phase:'robotics',cat:'应用场景 / Application Domains',
 text:'哪个机器人应用场景最让你有研究动力？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'工业机器人——工厂自动化、精密组装、协作制造',d:{robotics:3,control:2,embodied:1}},
  {t:'医疗机器人——手术辅助、康复、精准操作',d:{robotics:3,applied_ai:2,hri:2}},
  {t:'家用机器人——家务、陪伴、老年照护',d:{embodied:3,hri:3,applied_ai:2}},
  {t:'无人机——物流、测绘、搜救',d:{autonomous:3,perception:2,control:2}},
  {t:'自动驾驶——L4/L5 级完全自主驾驶',d:{autonomous:3,perception:2,safety:2}}
 ]},

{id:'rb8',phase:'robotics',cat:'规划与控制 / Planning & Control',
 text:'如果你继续留在“机器人怎么动”这条线，更想攻哪类问题？',
 opts:[
  {t:'轨迹规划——在复杂约束下找到平滑、可执行的动作路径',d:{motion:3,opt_ctrl:2,robotics:1}},
  {t:'接触控制——推、抓、插入这类高精度接触任务怎么稳',d:{control:3,robotics:2,embodied:1}},
  {t:'鲁棒控制——外界扰动很大时系统仍能保持稳定',d:{control:3,opt_ctrl:2,autonomous:1}},
  {t:'学习型控制——用数据和试错补足传统模型的盲区',d:{rl:2,control:2,embodied:2}},
  {t:'规划 / 控制不是我最想长期投入的方向',d:{motion:1}}
 ]},

{id:'rb9',phase:'robotics',cat:'机器人系统工程 / Systems Engineering',
 text:'如果你负责把机器人从 demo 做成可交付系统，你最想解决哪块？',
 opts:[
  {t:'系统集成——传感器、算力、控制器、机械结构怎样稳定协同',d:{robotics:3,embedded:2,systems:1}},
  {t:'部署与维护——实验室能跑，不代表现场也能长期跑',d:{robotics:3,systems:2,autonomous:1}},
  {t:'仿真与测试——让大量问题在上真机前就先暴露出来',d:{robotics:2,motion:1,systems:2}},
  {t:'算力与边缘化——把感知和控制压到机载设备里',d:{embedded:2,robotics:2,ai_hw:1}},
  {t:'机器人系统工程不是我最想长期投入的方向',d:{robotics:1}}
 ]},

{id:'rb10',phase:'robotics',cat:'场景复杂度 / Scenario Complexity',
 text:'哪类机器人场景最能体现你想解决的难题？',
 opts:[
  {t:'室内服务场景——空间拥挤、人和物随时变化',d:{hri:2,embodied:2,robotics:2}},
  {t:'户外自主场景——天气、光照、地形都在变化',d:{autonomous:3,perception:2,slam:1}},
  {t:'工业精密场景——动作要求准、节拍要求稳、容错空间小',d:{control:2,robotics:2,embedded:1}},
  {t:'多机协同场景——不只一台机器动，而是很多台一起配合',d:{autonomous:2,robotics:2,motion:1,dist_sys:1}},
  {t:'这些复杂场景目前都不是我最想长期投入的',d:{robotics:1}}
 ]},

{id:'rb11',phase:'robotics',cat:'研究切口 / Research Angle',
 text:'如果你做机器人研究，更想从哪个切口切进去？',
 opts:[
  {t:'感知优先——先让机器真正看懂和定位，再谈后续动作',d:{perception:3,slam:2,robotics:1}},
  {t:'行动优先——先把规划和执行打磨到稳定可靠',d:{motion:3,control:2,robotics:1}},
  {t:'交互优先——先把“人怎么给机器人意图”这件事讲清楚',d:{hri:3,embodied:2,vla:1}},
  {t:'平台优先——先把软硬件和数据闭环搭起来，让研究能持续迭代',d:{robotics:2,embedded:2,systems:2}},
  {t:'机器人研究整体目前不是我最想长期投入的方向',d:{robotics:1}}
 ]},

{id:'rb12',phase:'robotics',cat:'机器人学习 / Robot Learning',
 text:'如果你更偏“机器人怎么学会新技能”，最想长期攻哪类问题？',
 opts:[
  {t:'模仿学习——看人做几遍，机器人就能学会关键动作',d:{embodied:3,robotics:2,rl:1}},
  {t:'离线机器人学习——不反复上真机试错，也能从历史数据学策略',d:{embodied:2,rl:3,robotics:1}},
  {t:'语言条件操作——一句自然语言指令就能触发复杂动作链',d:{vla:3,embodied:2,hri:1}},
  {t:'世界模型与预训练——先学会理解环境，再学具体任务',d:{embodied:3,rl:2,perception:1}},
  {t:'机器人学习不是我最想长期投入的方向',d:{embodied:1}}
 ]},

{id:'rb13',phase:'robotics',cat:'野外与行业机器人 / Field Robotics',
 text:'如果机器人要走出实验室，你更想把它放到哪类现场？',
 opts:[
  {t:'巡检与运维——去工厂、电站、矿区这些人不想长待的地方',d:{autonomous:3,robotics:2,perception:1}},
  {t:'空中机器人——无人机在复杂地形里自主感知和执行任务',d:{autonomous:3,control:2,motion:1}},
  {t:'海洋 / 水下机器人——传感困难、通信受限，但任务价值很高',d:{robotics:3,signal:1,autonomous:2}},
  {t:'多机器人协同——很多机器人一起分工，不只是一台机器聪明',d:{robotics:3,autonomous:2,motion:1}},
  {t:'这些野外 / 行业机器人场景不是我最想长期投入的',d:{robotics:1}}
 ]},

{id:'rb14',phase:'robotics',cat:'机器人软件栈 / Robotics Stack',
 text:'如果你负责整个机器人软件栈，更想把精力花在哪一层？',
 opts:[
  {t:'感知栈——把相机、激光、IMU 变成稳定可用的世界表示',d:{perception:3,slam:2,signal:1}},
  {t:'任务与行为层——把“要做什么”拆成一串可靠的动作计划',d:{motion:3,hri:1,autonomous:2}},
  {t:'控制与执行层——让命令真正丝滑地落到电机和执行器上',d:{control:3,embedded:2,robotics:1}},
  {t:'数据与评测层——把日志、仿真、回放和测试闭环搭起来',d:{robotics:2,systems:2,embodied:1}},
  {t:'机器人软件栈不是我最想长期投入的方向',d:{robotics:1}}
 ]},

{id:'rb15',phase:'robotics',cat:'机器人操作 / Manipulation',
 text:'如果机器人要真正“动手做事”，你最想长期攻哪类问题？',
 opts:[
  {t:'抓取与操作——杂乱环境里也能稳定抓到和放对物体',d:{robotics:3,perception:2,embodied:1}},
  {t:'移动操作——一边移动一边完成操作，不只停在工作台前',d:{motion:3,robotics:2,autonomous:1}},
  {t:'从示范里学技能——看几次人类演示就能迁移到新任务',d:{embodied:3,vla:2,rl:1}},
  {t:'接触与安全——和人、物体接触时仍然柔顺、可控、可信任',d:{control:2,hri:2,robotics:2}},
  {t:'机器人操作目前不是我最想长期投入的方向',d:{robotics:1}}
 ]},

{id:'rb16',phase:'robotics',cat:'机器人部署 / Deployment',
 text:'如果机器人真的要长期上线，哪类现实问题最值得你花时间？',
 opts:[
  {t:'传感器漂移与标定——今天能跑，过几周后也要还能跑',d:{perception:2,slam:2,signal:1}},
  {t:'仿真到真实迁移——实验室里好使，到了现场别突然失灵',d:{embodied:2,autonomous:2,robotics:1}},
  {t:'故障诊断与远程维护——机器出了问题，要能快速定位和恢复',d:{robotics:2,systems:2,embedded:1}},
  {t:'人与机器协作——人何时信任它、何时接管、如何更顺手地配合',d:{hri:3,robotics:1,safety:1}},
  {t:'机器人部署整体目前不是我最想长期投入的方向',d:{robotics:1}}
 ]},
];

var EE_Qs=[
{id:'ee1',phase:'ee',cat:'EE大方向 / EE Direction',
 text:'ECE/EE 里你最感兴趣的大方向是？',
 opts:[
  {t:'芯片设计——从逻辑电路到 tape-out 全流程',d:{vlsi:3,eda:2,arch:1}},
  {t:'AI 加速器——专为 AI 训练/推理设计的硬件',d:{ai_hw:3,arch:3,npu:2}},
  {t:'嵌入式与控制——在资源受限设备上实现可靠功能',d:{embedded:3,control:2,iot:1}},
  {t:'通信与信号——5G/6G、无线协议、信息论',d:{comm:3,signal:3,info_th:2}}
 ,
   {t:'以上硬件/芯片方向目前都不是我最感兴趣的',d:{vlsi:1}}
  ]},

{id:'ee2',phase:'ee',cat:'芯片设计 / Chip Design',
 text:'芯片设计里你最想深入哪个方向？',
 opts:[
  {t:'数字 IC——RTL 到 GDSII 的完整流程',d:{vlsi:3,logic_des:2,eda:1}},
  {t:'FPGA——可重构硬件上的快速原型验证',d:{fpga:3,hw_sw:2,ai_hw:1}},
  {t:'低功耗设计——在能耗约束下最大化计算密度',d:{vlsi:3,ai_hw:2,embedded:1}},
  {t:'EDA——用 ML 优化芯片布局布线',d:{eda:3,vlsi:2,ml:2}}
 ,
   {t:'芯片设计目前不是我最想长期投入的方向',d:{vlsi:1}}
  ]},

{id:'ee3',phase:'ee',cat:'AI硬件 / AI Hardware',
 text:'AI 硬件研究里你最感兴趣的问题？',
 opts:[
  {t:'NPU 架构——为 Transformer 推理设计专用数据流',d:{npu:3,ai_hw:3,arch:2}},
  {t:'存算一体——在存储单元里做计算，消除内存墙',d:{in_mem:3,ai_hw:3,arch:2}},
  {t:'稀疏计算——利用权重稀疏性加速推理',d:{ai_hw:3,quant:2,arch:2}},
  {t:'互联与通信——多芯片训练的片间通信优化',d:{ai_hw:3,dist_sys:2,arch:2}}
 ,
   {t:'AI 硬件目前不是我最想长期投入的方向',d:{ai_hw:1}}
  ]},

{id:'ee4',phase:'ee',cat:'信号处理 / Signal Processing',
 text:'信号处理里你最想研究什么？',
 opts:[
  {t:'图像信号处理——从传感器到像素的完整链路',d:{signal:3,cv:2,vlsi:1}},
  {t:'雷达/激光点云处理——自动驾驶感知',d:{signal:3,perception:2,autonomous:2}},
  {t:'语音信号处理——降噪、增强、特征提取',d:{signal:3,speech:2,nlp:1}},
  {t:'信号处理不是我的核心兴趣',d:{control:1,comm:1}}
 ]},

{id:'ee5',phase:'ee',cat:'控制系统 / Control Systems',
 text:'控制系统里你最感兴趣的是？',
 opts:[
  {t:'最优控制——设计数学意义上最优的控制策略',d:{opt_ctrl:3,optim:3,motion:2}},
  {t:'模型预测控制（MPC）——滚动优化的实时控制',d:{mpc:3,opt_ctrl:2,autonomous:2}},
  {t:'自适应控制——参数未知情况下的鲁棒控制',d:{control:3,robotics:2,stoch:1}},
  {t:'控制系统不是我的核心兴趣',d:{vlsi:1,signal:1}}
 ]},

{id:'ee6',phase:'ee',cat:'嵌入式 / Embedded',
 text:'嵌入式系统里你最想解决的挑战是？',
 opts:[
  {t:'实时性——在严格时间约束下保证系统响应',d:{embedded:3,control:2,systems:1}},
  {t:'超低功耗——让边缘设备用电池工作数月乃至数年',d:{embedded:3,vlsi:2,iot:1}},
  {t:'端侧 AI——在微控制器上跑神经网络',d:{embedded:3,quant:3,ai_hw:2}},
  {t:'嵌入式不是我的核心兴趣',d:{vlsi:1,arch:1}}
 ]},

{id:'ee7',phase:'ee',cat:'通信 / Communications',
 text:'通信方向里你最感兴趣的是？',
 opts:[
  {t:'5G/6G——下一代移动通信的关键技术',d:{comm:3,signal:2,embedded:1}},
  {t:'信息论——信道容量、编码理论的数学基础',d:{info_th:3,theory:2,stats:1}},
  {t:'AI for Communication——用 ML 优化无线系统',d:{comm:3,ml:2,signal:2}},
  {t:'通信不是我的核心兴趣',d:{vlsi:1,control:1}}
 ]},

{id:'ee8',phase:'ee',cat:'软硬件协同 / HW-SW Co-Design',
 text:'硬件-软件协同设计里你最感兴趣的是？',
 opts:[
  {t:'领域特定架构（DSA）——为特定算法定制硬件',d:{hw_sw:3,ai_hw:3,arch:2}},
  {t:'SoC 设计——多计算单元集成的片上系统',d:{soc:3,hw_sw:2,vlsi:2}},
  {t:'编译器-硬件协同——让编译器感知并利用硬件特性',d:{hw_sw:3,pl:2,arch:2}},
  {t:'软硬件协同目前不是我最想长期投入的方向',d:{hw_sw:1}}
 ]},

{id:'ee9',phase:'ee',cat:'模拟与混合信号 / Analog & Mixed-Signal',
 text:'如果你继续往“电路更底层”走，更想做哪类问题？',
 opts:[
  {t:'模拟前端——让传感器信号在进入数字世界前尽量少失真',d:{elec_sys:3,signal:2,photonics:1}},
  {t:'混合信号链路——ADC/DAC、时钟、噪声和版图一起平衡',d:{elec_sys:3,vlsi:2,signal:2}},
  {t:'电源与功耗管理——高性能系统下怎样仍然稳、凉、省电',d:{elec_sys:3,embedded:2,vlsi:1}},
  {t:'验证与量产一致性——样片能跑和大规模稳定出货不是一回事',d:{elec_sys:2,vlsi:2,eda:1}},
  {t:'模拟 / 混合信号不是我最想长期投入的方向',d:{elec_sys:1}}
 ]},

{id:'ee10',phase:'ee',cat:'器件与传感 / Devices & Sensors',
 text:'如果你更偏“器件和物理世界接口”，哪类方向最吸引你？',
 opts:[
  {t:'MEMS / 传感器——让机器更准确地感知位移、压力、姿态和环境',d:{photonics:2,signal:2,embedded:1}},
  {t:'光电与成像——让相机、激光、光学链路更准、更快、更稳',d:{photonics:3,signal:2,cv:1}},
  {t:'先进器件——新材料、新结构怎样带来新的计算或感知能力',d:{photonics:3,vlsi:2,ai_hw:1}},
  {t:'边缘感知系统——把传感、计算和控制放进同一套设备里',d:{embedded:2,signal:2,control:2}},
  {t:'器件 / 传感不是我最想长期投入的方向',d:{signal:1}}
 ]},

{id:'ee11',phase:'ee',cat:'无线系统 / Wireless Systems',
 text:'如果你继续做通信，更想站在哪一层？',
 opts:[
  {t:'物理层——调制、编码、信道估计和误码率',d:{comm:3,info_th:2,signal:2}},
  {t:'协议与系统层——链路调度、接入控制、网络资源分配',d:{comm:3,systems:2,or_ops:1}},
  {t:'终端与基站实现——把算法真正做进可运行设备',d:{comm:2,embedded:2,signal:2}},
  {t:'智能无线——让学习方法帮助频谱、功率和链路决策',d:{comm:2,signal:2,ml:2}},
  {t:'无线系统不是我最想长期投入的方向',d:{comm:1}}
 ]},

{id:'ee12',phase:'ee',cat:'硬件验证与Bring-up / Validation',
 text:'如果你做的是“把硬件做成真的能跑”，你更想攻哪块？',
 opts:[
  {t:'功能验证——在设计阶段尽量找出更多边界 bug',d:{vlsi:2,logic_des:2,eda:1}},
  {t:'板级 Bring-up——让新板卡、新芯片第一次真正跑起来',d:{embedded:2,elec_sys:2,hw_sw:1}},
  {t:'系统调优——把时序、功耗、温度和稳定性一起调到目标区间',d:{elec_sys:2,vlsi:2,embedded:1}},
  {t:'量产测试——从样品可用走到规模稳定出货',d:{elec_sys:2,vlsi:2,signal:1}},
  {t:'硬件验证 / Bring-up 不是我最想长期投入的方向',d:{embedded:1}}
 ]},

{id:'ee13',phase:'ee',cat:'混合信号 / Mixed-Signal',
 text:'如果你继续往“模拟 / 混合信号”走，更想长期攻哪类问题？',
 opts:[
  {t:'模数转换——ADC/DAC 的速度、精度和功耗怎样一起平衡',d:{elec_sys:3,signal:2,vlsi:1}},
  {t:'时钟与同步——系统一复杂，时序和抖动就会变成底层大问题',d:{elec_sys:3,vlsi:2,embedded:1}},
  {t:'电源管理——算力越来越高，但热和功耗必须被压住',d:{elec_sys:3,embedded:2,ai_hw:1}},
  {t:'传感前端——让真实世界里的微弱信号别在第一步就被淹没',d:{elec_sys:2,signal:3,photonics:1}},
  {t:'混合信号不是我最想长期投入的方向',d:{elec_sys:1}}
 ]},

{id:'ee14',phase:'ee',cat:'端侧系统 / Edge Systems',
 text:'如果你做的是“设备端真正要跑起来的系统”，最想长期攻哪类问题？',
 opts:[
  {t:'低功耗设备——算力不多、电池很紧，但功能还得长期稳定工作',d:{embedded:3,iot:2,elec_sys:1}},
  {t:'传感-控制闭环——从感知到动作的整个链条都必须足够快和稳',d:{embedded:2,control:2,signal:2}},
  {t:'端侧 AI 部署——模型要压缩、量化，还要在真设备上跑得动',d:{embedded:3,ai_hw:2,quant:2}},
  {t:'设备联网与更新——成千上万台设备怎样安全协同和远程维护',d:{iot:3,embedded:2,security:1}},
  {t:'端侧系统不是我最想长期投入的方向',d:{embedded:1}}
 ]},

{id:'ee15',phase:'ee',cat:'下一代通信 / Next-Gen Communication',
 text:'如果你继续往“通信系统”深挖，更想长期做哪类问题？',
 opts:[
  {t:'无线链路优化——把频谱、功率和误码率调到更优',d:{comm:3,signal:2,info_th:1}},
  {t:'通信标准与协议——规则定得怎样，整个生态才会真正跑起来',d:{comm:3,systems:1,info_th:1}},
  {t:'基站 / 终端实现——让算法真正变成能跑的工程系统',d:{comm:2,embedded:2,signal:2}},
  {t:'智能通信——把学习方法接进资源调度、信道估计和网络控制里',d:{comm:2,signal:2,ml:2}},
  {t:'通信系统不是我最想长期投入的方向',d:{comm:1}}
 ]},

{id:'ee16',phase:'ee',cat:'EE工作画面 / EE Work Style',
 text:'哪种 EE 工作日常最像你愿意长期投入的状态？',
 opts:[
  {t:'反复测量和调优信号链路，让输入输出更稳更准',d:{signal:3,elec_sys:2,photonics:1}},
  {t:'围绕无线链路和协议做系统级优化，盯吞吐、误码和覆盖',d:{comm:3,info_th:1,signal:1}},
  {t:'让嵌入式控制系统在真实设备上长期稳定运行',d:{embedded:2,control:2,elec_sys:1}},
  {t:'设计并验证数字/AI 硬件模块，把计算真正做进芯片',d:{vlsi:2,ai_hw:2,arch:1}},
  {t:'这些 EE 工作画面目前都不是我最想长期投入的',d:{comm:1}}
 ]},
];

var CE_Qs=[
{id:'ce1',phase:'ce',cat:'CE大方向 / CE Direction',
 text:'如果你走计算机工程（CE）这条线，最想长期待在哪一层？',
 opts:[
  {t:'处理器与体系结构——研究一条指令如何真正跑完整台机器',d:{arch:3,mem_sys:2,logic_des:1}},
  {t:'软硬件协同——让编译器、运行时和硬件配合得更好',d:{hw_sw:3,arch:2,soc:1}},
  {t:'边缘与设备计算——让计算真正落在设备端并长期稳定运行',d:{emb_sw:3,soc:2,fpga:1}},
  {t:'AI 专用计算——让模型在专用硬件上跑得更快更省',d:{ai_hw:3,npu:2,arch:2}},
  {t:'以上 CE 方向目前都不是我最想长期投入的',d:{arch:1}}
 ]},

{id:'ce2',phase:'ce',cat:'体系结构 / Architecture',
 text:'体系结构里你更想解决哪种瓶颈？',
 opts:[
  {t:'流水线与执行单元——让每个时钟周期都尽量别浪费',d:{arch:3,logic_des:2,mem_sys:1}},
  {t:'缓存与内存层级——算得快不如数据来得快',d:{mem_sys:3,arch:2,in_mem:1}},
  {t:'片上互联与扩展——很多模块如何同时高效协作',d:{soc:3,arch:2,hw_sw:1}},
  {t:'异构调度——不同计算单元怎样分工最合理',d:{hw_sw:3,arch:2,ai_hw:1}},
  {t:'体系结构不是我最想长期投入的方向',d:{arch:1}}
 ]},

{id:'ce3',phase:'ce',cat:'固件与底层软件 / Firmware',
 text:'如果你更靠近设备底层，更想做哪类事情？',
 opts:[
  {t:'驱动与 bring-up——让新设备第一次真正被系统正确识别和使用',d:{emb_sw:3,soc:2,embedded:1}},
  {t:'RTOS / 实时软件——严格时序下仍然保证响应和稳定性',d:{emb_sw:3,embedded:2,control:1}},
  {t:'平台固件——启动链路、功耗管理、设备初始化与安全边界',d:{emb_sw:3,soc:2,security:1}},
  {t:'设备调试工具——让底层问题更容易被看见、定位和复现',d:{emb_sw:2,hw_sw:2,systems:1}},
  {t:'固件与底层软件不是我最想长期投入的方向',d:{emb_sw:1}}
 ]},

{id:'ce4',phase:'ce',cat:'SoC 与集成 / SoC Integration',
 text:'如果你负责一颗复杂芯片的系统集成，最在意哪块？',
 opts:[
  {t:'模块划分——哪些能力该分给 CPU、NPU、DSP 或外设',d:{soc:3,hw_sw:2,arch:1}},
  {t:'数据通路——不同模块之间怎么传数据才不堵',d:{soc:3,mem_sys:2,arch:2}},
  {t:'功耗 / 热设计——性能和热预算永远在互相拉扯',d:{soc:3,arch:1,ai_hw:1}},
  {t:'验证与可量产性——系统规模一大，边界条件就会疯狂冒出来',d:{soc:2,logic_des:2,emb_sw:1}},
  {t:'SoC 集成不是我最想长期投入的方向',d:{soc:1}}
 ]},

{id:'ce5',phase:'ce',cat:'AI 专用计算 / AI Compute',
 text:'如果你继续往 AI 专用计算走，更想解决什么？',
 opts:[
  {t:'算子映射——同一个模型在不同硬件上怎样排布最划算',d:{ai_hw:3,hw_sw:2,npu:2}},
  {t:'数据流设计——算力没变的情况下怎样少搬数据、多算有效值',d:{ai_hw:3,arch:2,npu:2}},
  {t:'运行时协同——让编译器和 runtime 自动吃满硬件潜力',d:{hw_sw:3,ai_hw:2,arch:1}},
  {t:'端侧部署——把模型压到车端、边缘设备、消费电子里长期稳定跑',d:{ai_hw:2,emb_sw:2,soc:2}},
  {t:'AI 专用计算目前不是我最想长期投入的方向',d:{ai_hw:1}}
 ]},

{id:'ce6',phase:'ce',cat:'FPGA 与原型 / FPGA & Prototyping',
 text:'如果你手上有一块 FPGA，更想拿它做什么？',
 opts:[
  {t:'快速验证新架构——先证明这个硬件想法是真的值得做',d:{fpga:3,arch:2,logic_des:1}},
  {t:'做低延迟专用计算——在固定任务上打穿性能和时延',d:{fpga:3,ai_hw:2,hw_sw:1}},
  {t:'做软硬件联合调试——边改硬件、边改驱动、边看系统表现',d:{fpga:2,hw_sw:2,emb_sw:1}},
  {t:'做教学和研究原型——把抽象结构变成能跑的真实系统',d:{fpga:2,arch:2,soc:1}},
  {t:'FPGA / 原型验证不是我最想长期投入的方向',d:{fpga:1}}
 ]},

{id:'ce7',phase:'ce',cat:'边缘计算 / Edge Compute',
 text:'如果你做的是设备端计算，更想优先解决什么？',
 opts:[
  {t:'资源受限——算力、内存、电池都很紧，怎样还把任务做成',d:{emb_sw:3,soc:2,embedded:2}},
  {t:'实时响应——任务必须在严格时限内完成，不能拖延',d:{emb_sw:3,control:2,systems:1}},
  {t:'设备协同——边缘端、网关、云端怎样合理分工',d:{emb_sw:2,cloud:2,soc:2}},
  {t:'可靠升级——设备一旦出了现场，后续维护和升级怎么不翻车',d:{emb_sw:3,systems:2,security:1}},
  {t:'边缘计算不是我最想长期投入的方向',d:{emb_sw:1}}
 ]},

{id:'ce8',phase:'ce',cat:'计算机工程职业画面 / CE Career Picture',
 text:'哪种工作画面最像你愿意长期投入的 CE 路线？',
 opts:[
  {t:'看性能报告、改微架构、重跑基准测试，把吞吐再往上推一截',d:{arch:3,mem_sys:2,ai_hw:1}},
  {t:'和编译器、驱动、硬件团队一起把整条执行链路打通',d:{hw_sw:3,soc:2,emb_sw:1}},
  {t:'在设备端盯启动、日志、功耗和时序，把系统一点点稳定下来',d:{emb_sw:3,embedded:2,soc:1}},
  {t:'设计面向 AI 的专用执行单元，让同样模型更快更省',d:{ai_hw:3,npu:2,arch:2}},
  {t:'这些 CE 工作画面目前都不是我最想长期投入的',d:{arch:1}}
 ]},

{id:'ce9',phase:'ce',cat:'运行时与编译 / Runtime & Compiler',
 text:'如果你站在“软件怎样把硬件吃满”这条线上，最想长期攻哪类问题？',
 opts:[
  {t:'编译器映射——同一个模型怎样自动变成最适合目标硬件的执行计划',d:{hw_sw:3,ai_hw:2,pl:1}},
  {t:'运行时调度——不同算子、不同内存块、不同执行单元怎样排队协作',d:{hw_sw:3,arch:2,soc:1}},
  {t:'内核与算子优化——真正把热点算子改到更快、更省带宽',d:{ai_hw:2,hw_sw:2,arch:2}},
  {t:'调试与可观测性——让复杂硬件运行链路里的问题更快被看见',d:{emb_sw:2,hw_sw:2,systems:1}},
  {t:'运行时 / 编译链不是我最想长期投入的方向',d:{hw_sw:1}}
 ]},

{id:'ce10',phase:'ce',cat:'内存与互连 / Memory & Interconnect',
 text:'如果你继续往“数据在系统里怎么流动”深挖，更想长期做哪类问题？',
 opts:[
  {t:'缓存与带宽——算力已经够快，真正卡住的是数据搬运',d:{mem_sys:3,arch:2,ai_hw:1}},
  {t:'片上互连——越来越多模块在一颗芯片上，怎么别互相堵死',d:{soc:3,mem_sys:2,arch:1}},
  {t:'近存 / 存内计算——把数据尽量留在靠近计算的地方',d:{in_mem:3,ai_hw:2,mem_sys:1}},
  {t:'多芯片协同——单芯片不够了，很多块芯片怎样像一个系统那样工作',d:{soc:2,arch:2,hw_sw:2}},
  {t:'内存 / 互连不是我最想长期投入的方向',d:{mem_sys:1}}
 ]},

{id:'ce11',phase:'ce',cat:'设备到云 / Device to Cloud',
 text:'如果你负责“设备-边缘-云”整条链路，最想长期解决什么？',
 opts:[
  {t:'设备侧稳定性——设备资源紧，但还得长期运行、远程维护',d:{emb_sw:3,embedded:2,soc:1}},
  {t:'边缘协同——哪些任务放本地、哪些放云上，怎样分工最划算',d:{emb_sw:2,cloud:2,hw_sw:2}},
  {t:'数据与模型下发——更新一旦出错，现场设备可能全部受影响',d:{emb_sw:3,security:1,systems:1}},
  {t:'设备平台产品化——让不同硬件代际也能复用同一套软件平台',d:{soc:2,emb_sw:2,hw_sw:1}},
  {t:'设备到云这条线不是我最想长期投入的方向',d:{emb_sw:1}}
 ]},

{id:'ce12',phase:'ce',cat:'可重构与验证 / Reconfigurable & Validation',
 text:'如果你继续往“把体系结构想法变成真机”走，更想长期做哪类问题？',
 opts:[
  {t:'FPGA 原型——先在可重构硬件上验证架构，快速试错',d:{fpga:3,arch:2,logic_des:1}},
  {t:'系统验证——复杂系统一大，边界条件和时序问题就会成倍出现',d:{logic_des:3,soc:2,emb_sw:1}},
  {t:'平台集成——不同 IP、不同外设、不同软件栈怎样真正接起来',d:{soc:3,hw_sw:2,emb_sw:1}},
  {t:'板级与接口联调——从原理图到设备通信，最后一公里最磨人也最关键',d:{emb_sw:2,fpga:2,systems:1}},
  {t:'可重构 / 验证不是我最想长期投入的方向',d:{fpga:1}}
 ]},

{id:'ce13',phase:'ce',cat:'执行瓶颈 / Execution Bottlenecks',
 text:'如果你继续深挖 CE，更想长期盯哪类瓶颈？',
 opts:[
  {t:'执行效率——流水线、执行单元和乱序机制怎样把周期吃满',d:{arch:3,logic_des:2,mem_sys:1}},
  {t:'数据搬运——缓存、带宽、互连怎样别拖慢整套系统',d:{mem_sys:3,soc:2,arch:1}},
  {t:'编译与运行时——软件怎样更聪明地把硬件潜力真正用出来',d:{hw_sw:3,arch:2,ai_hw:1}},
  {t:'平台固件与 bring-up——底层链路怎样从上电开始就可控、可调、可诊断',d:{emb_sw:3,soc:1,embedded:1}},
  {t:'这些 CE 执行瓶颈目前都不是我最想长期投入的',d:{arch:1}}
 ]},

{id:'ce14',phase:'ce',cat:'计算平台 / Compute Platforms',
 text:'哪种 CE 工作现场最像你愿意长期投入的样子？',
 opts:[
  {t:'AI 加速器 / NPU 平台——围绕模型、算子和硬件一起做联合优化',d:{ai_hw:3,npu:2,arch:1}},
  {t:'边缘设备平台——传感器、连接、固件和设备端计算要一起配合',d:{emb_sw:2,soc:2,embedded:2}},
  {t:'原型与验证平台——先把想法做成能跑的 FPGA / 板级系统，再快速试错',d:{fpga:3,soc:1,logic_des:1}},
  {t:'CPU / GPU / 内存系统分析——用 benchmark 和 profiling 找出真实瓶颈',d:{arch:3,mem_sys:2,hw_sw:1}},
  {t:'这些 CE 平台场景目前都不是我最想长期投入的',d:{arch:1}}
 ]},
];

var OR_Qs=[
{id:'or1',phase:'or',cat:'优化基础 / Optimization Foundations',
 text:'优化方法里你最感兴趣的是？',
 opts:[
  {t:'凸优化——严格的数学保证，工业界大量使用',d:{conv_opt:3,optim:3,or_ops:1}},
  {t:'组合优化——整数规划、旅行商、背包问题',d:{comb_opt:3,algo:3,or_ops:2}},
  {t:'随机优化——SGD、variance reduction、在线算法',d:{optim:3,ml_theory:3,stoch:2}},
  {t:'非凸优化——神经网络训练背后的优化理论',d:{optim:3,ml_theory:3,theory:2}}
 ,
   {t:'以上数学/OR 方向目前都不是我最感兴趣的',d:{optim:1}}
  ]},

{id:'or2',phase:'or',cat:'运筹学 / Operations Research',
 text:'运筹学里你最想解决哪类问题？',
 opts:[
  {t:'调度——工厂排产、云资源分配、任务调度',d:{scheduling:3,or_ops:3,optim:2}},
  {t:'供应链——库存、物流、需求预测的联合优化',d:{or_ops:3,optim:2,domain_ds:1}},
  {t:'网络流——运输网络、路由、二分图匹配',d:{or_ops:3,algo:3,comb_opt:2}},
  {t:'收益管理——动态定价、座位分配、拍卖设计',d:{or_ops:3,stoch:2,game_th:2}}
 ,
   {t:'以上运筹应用方向目前都不是我最感兴趣的',d:{or_ops:1}}
  ]},

{id:'or3',phase:'or',cat:'博弈论 / Game Theory',
 text:'博弈论和机制设计里你最感兴趣的是？',
 opts:[
  {t:'拍卖机制——设计让诚实出价的拍卖规则',d:{game_th:3,optim:2,or_ops:1}},
  {t:'多智能体 AI——AI 系统里的纳什均衡与涌现',d:{game_th:3,multiagent:2,ml_theory:2}},
  {t:'合作博弈——联盟、Shapley 值、公平分配',d:{game_th:3,fairness:2,or_ops:1}},
  {t:'博弈论不是我的核心兴趣',d:{optim:1,stoch:1}}
 ]},

{id:'or4',phase:'or',cat:'科学计算 / Scientific Computing',
 text:'科学计算里你最感兴趣的是？',
 opts:[
  {t:'数值方法——微分方程的数值求解',d:{sci_comp:3,optim:2,stoch:1}},
  {t:'高性能科学计算——在超算上跑物理/化学模拟',d:{sci_comp:3,sys_ai:2,dist_sys:1}},
  {t:'ML 与科学计算融合——Physics-Informed Neural Networks',d:{sci_comp:3,ml:2,ml_theory:2}},
  {t:'科学计算不是我的核心兴趣',d:{optim:1,stats:1}}
 ]},

{id:'or5',phase:'or',cat:'随机系统 / Stochastic Systems',
 text:'概率与随机系统里你最感兴趣的是？',
 opts:[
  {t:'随机过程与马尔科夫链——理论基础，应用于 RL',d:{stoch:3,ml_theory:2,rl:2}},
  {t:'不确定性量化——给预测结果配可靠的置信区间',d:{uq:3,stats:2,causal:1}},
  {t:'蒙特卡洛方法——用采样解决高维积分',d:{stoch:3,sci_comp:2,optim:1}},
  {t:'排队论——系统容量、等待时间、吞吐量分析',d:{stoch:3,or_ops:2,systems:1}}
 ]},

{id:'or6',phase:'or',cat:'应用场景 / Application Domains',
 text:'你最希望把优化/OR 方法用在哪类问题上？（可多选）',
 multiSelect:true,maxSelect:2,
 opts:[
  {t:'AI 系统优化——训练调度、推理延迟、资源分配',d:{or_ops:3,sys_ai:2,scheduling:2}},
  {t:'医疗资源调度——手术室排班、ICU 床位分配',d:{or_ops:3,domain_ds:2,applied_ai:1}},
  {t:'物流与供应链——全球供应链的端到端优化',d:{or_ops:3,scheduling:2,domain_ds:2}},
  {t:'能源系统——电网调度、可再生能源优化',d:{or_ops:3,sci_comp:2,domain_ds:2}},
  {t:'金融工程——投资组合优化、风险控制',d:{or_ops:3,optim:2,stoch:2}}
 ]},

{id:'or7',phase:'or',cat:'决策问题 / Decision Problems',
 text:'下面哪类“必须做决定”的问题最让你想建模？',
 opts:[
  {t:'资源分配——预算、人力、时间永远不够，怎样分才最值',d:{or_ops:3,optim:2,scheduling:1}},
  {t:'顺序决策——现在做了 A，会影响后面很多步的可选空间',d:{dynamic_prog:3,stoch:2,optim:1}},
  {t:'排队与容量——服务来了很多，但系统接不接得住',d:{stoch:3,or_ops:2,systems:1}},
  {t:'博弈与激励——规则怎么定，大家的行为才会朝好结果收敛',d:{game_th:3,or_ops:1,optim:1}},
  {t:'这些决策问题目前都不是我最想长期投入的',d:{or_ops:1}}
 ]},

{id:'or8',phase:'or',cat:'建模手感 / Modeling Style',
 text:'你更喜欢哪种建模风格？',
 opts:[
  {t:'约束写得清清楚楚——目标和约束都要明确，解法要可解释',d:{conv_opt:3,optim:2,or_ops:1}},
  {t:'随机性写进去——噪声和不确定性本来就是问题的一部分',d:{stoch:3,uq:2,optim:1}},
  {t:'仿真先行——先把系统跑起来，再研究为什么会这样',d:{sci_comp:3,stoch:2,or_ops:1}},
  {t:'策略演化——更关心不同参与者怎么彼此影响',d:{game_th:3,dynamic_prog:1,or_ops:1}},
  {t:'这些建模风格目前都不是我最想长期投入的',d:{optim:1}}
 ]},

{id:'or9',phase:'or',cat:'应用落点 / Application Fit',
 text:'如果把优化 / OR 放进真实行业，你最想进哪类现场？',
 opts:[
  {t:'物流与交通——车、货、路和时窗一起动',d:{scheduling:3,or_ops:2,domain_ds:1}},
  {t:'金融与市场——价格、库存、风险和激励都在变',d:{game_th:2,stoch:2,or_ops:2}},
  {t:'能源与工业——设备、功率和生产线都要协调',d:{or_ops:3,sci_comp:1,optim:2}},
  {t:'平台与计算资源——算力、任务、时延和成本一起平衡',d:{or_ops:2,scheduling:2,systems:1,sys_ai:1}},
  {t:'这些行业落点目前都不是我最想长期投入的',d:{or_ops:1}}
 ]},

{id:'or10',phase:'or',cat:'数理工具 / Mathematical Tools',
 text:'如果接下来要补一套工具，你最愿意先补哪类？',
 opts:[
  {t:'凸分析与拉格朗日——把很多优化问题写成可证明可求解的形式',d:{conv_opt:3,optim:2,theory:1}},
  {t:'随机过程与马尔可夫链——理解不确定系统随时间怎样变化',d:{stoch:3,uq:2,dynamic_prog:1}},
  {t:'数值方法与仿真——让复杂模型在计算机里跑起来并可验证',d:{sci_comp:3,optim:1,stoch:1}},
  {t:'机制与博弈——把人的行为和规则设计也纳入模型',d:{game_th:3,or_ops:1,econom:1}},
  {t:'这些数理工具目前都不是我最想长期投入的',d:{optim:1}}
 ]},

{id:'or11',phase:'or',cat:'服务系统 / Service Systems',
 text:'如果你继续往“服务系统与容量”深挖，更想长期做哪类问题？',
 opts:[
  {t:'排队与等待——用户来了很多，系统怎样既不爆也不让人等太久',d:{stoch:3,or_ops:2,systems:1}},
  {t:'容量规划——该备多少资源才既稳又不浪费',d:{or_ops:3,scheduling:2,optim:1}},
  {t:'鲁棒运营——需求波动很大时，方案怎样仍然可执行',d:{stoch:2,optim:2,or_ops:2}},
  {t:'服务网络设计——站点、仓、运力和时窗怎样整体协同',d:{or_ops:3,scheduling:2,comb_opt:1}},
  {t:'服务系统不是我最想长期投入的方向',d:{or_ops:1}}
 ]},

{id:'or12',phase:'or',cat:'市场与机制 / Markets & Mechanisms',
 text:'如果你更偏“规则与激励”，最想长期做哪类问题？',
 opts:[
  {t:'拍卖与定价——规则稍微一变，参与者行为就会完全不同',d:{game_th:3,or_ops:2,stoch:1}},
  {t:'平台资源分配——商家、用户、平台三方目标怎么平衡',d:{game_th:3,or_ops:2,domain_ds:1}},
  {t:'激励机制——怎样设计规则，大家更愿意说真话、做对事',d:{game_th:3,econom:2,or_ops:1}},
  {t:'市场仿真——先把参与者行为模拟清楚，再谈策略与制度',d:{stoch:2,game_th:2,sci_comp:1}},
  {t:'市场 / 机制不是我最想长期投入的方向',d:{game_th:1}}
 ]},

{id:'or13',phase:'or',cat:'科学建模 / Scientific Modeling',
 text:'如果你做的是“现实系统的数学模型”，最想长期建哪类模型？',
 opts:[
  {t:'制造与工业系统——设备、良率、排程和约束都要进同一个模型',d:{or_ops:3,sci_comp:2,optim:1}},
  {t:'能源与电网——供需、功率、储能和不确定天气一起进入决策',d:{or_ops:3,stoch:2,sci_comp:1}},
  {t:'交通与城市系统——路网、需求波动、拥堵和策略反馈一起建模',d:{or_ops:3,stoch:2,domain_ds:1}},
  {t:'生物 / 科学过程——系统本身很复杂，但又值得用严格模型去逼近',d:{sci_comp:3,comp_bio:2,stoch:1}},
  {t:'科学建模不是我最想长期投入的方向',d:{sci_comp:1}}
 ]},

{id:'or14',phase:'or',cat:'序贯决策 / Sequential Decision',
 text:'如果问题不是“一次性决定”，而是一步一步往前走，你最想长期做哪类？',
 opts:[
  {t:'长期规划——当前动作会改变后面很多步的可选空间',d:{dynamic_prog:3,optim:2,stoch:1}},
  {t:'风险控制——每一步都得考虑最坏情况，不然代价会滚雪球',d:{stoch:3,uq:2,or_ops:1}},
  {t:'自适应策略——边观察边更新，不可能一次就把世界看全',d:{dynamic_prog:2,stoch:2,bayes:1}},
  {t:'RL / OR 交叉——把现实业务问题写成能学习、能规划、能执行的决策系统',d:{dynamic_prog:3,or_ops:2,rl:1}},
  {t:'序贯决策不是我最想长期投入的方向',d:{dynamic_prog:1}}
 ]},

{id:'or15',phase:'or',cat:'优化建模 / Optimization Modeling',
 text:'如果你负责一个复杂运营问题，第一反应更想把哪一层建清楚？',
 opts:[
  {t:'目标和约束——先把“什么算好、什么不能碰”写成清楚模型',d:{conv_opt:3,optim:2,or_ops:1}},
  {t:'不确定性——需求、天气、价格和噪声怎样一起进模型',d:{stoch:3,uq:2,optim:1}},
  {t:'离散结构——路线、匹配、排程这种组合关系怎样被精确表达',d:{comb_opt:3,algo:2,or_ops:1}},
  {t:'参与者反应——规则一变，人的行为和系统结果就一起变',d:{game_th:3,econom:2,or_ops:1}},
  {t:'这些建模层面目前都不是我最想长期投入的',d:{optim:1}}
 ]},

{id:'or16',phase:'or',cat:'OR落地 / OR Productization',
 text:'如果一个优化系统真的要进入业务，最想长期解决哪类难点？',
 opts:[
  {t:'解释和信任——结果再优，如果业务团队不敢用也没有意义',d:{or_ops:3,vis:1,game_th:1}},
  {t:'预测和优化联动——不是先预测完就结束，而是要直接连到后续动作',d:{or_ops:2,ts_anal:2,optim:2}},
  {t:'实时重算——需求和约束一变，方案也要跟着快速更新',d:{scheduling:3,stoch:2,optim:1}},
  {t:'规则和最优解的平衡——数学上最优，不一定是业务上最能落地的方案',d:{or_ops:3,game_th:1,domain_ds:1}},
  {t:'OR 落地目前不是我最想长期投入的方向',d:{or_ops:1}}
 ]},
];

// ── PHASE 3: DEEP DIVE (triggered by high scores in phase 2) ──

var DEEP_Qs=[
{id:'d_llm',phase:'deep',cat:'LLM深度 / LLM Deep Dive',
 triggerDir:'llm', triggerThreshold:14,
 text:'LLM 研究里你最想推进哪个前沿？',
 opts:[
  {t:'Reasoning——System 2 thinking、慢思考、证明生成',sub:'※ 让AI像人一样「先想再答」，解决数学证明、复杂推理等需要多步思考的问题',d:{llm:3,ml_theory:2,planning_ai:2}},
  {t:'长上下文——超长文档理解、高效注意力机制',sub:'※ 让AI读懂整本书、整个代码库，处理百万字级别的输入',d:{llm:3,efficient:2,inf_opt:2}},
  {t:'Agent——多步骤工具调用、自主任务完成',sub:'※ AI自主使用搜索、代码执行等工具，完成「订机票」「写报告」这类多步骤任务',d:{llm:3,applied_ai:2,planning_ai:2}},
  {t:'Mechanistic Interpretability——理解模型内部表征',sub:'※ 打开AI的「黑盒子」，研究神经网络内部每个神经元和注意力头在做什么',d:{xai:3,llm:2,ml_theory:2}}
 ,
   {t:'以上都不是我目前最感兴趣的方向',d:{llm:1}}
  ]},

{id:'d_cv',phase:'deep',cat:'CV深度 / CV Deep Dive',
 triggerDir:'cv', triggerThreshold:12,
 text:'CV 里你最想深入哪个具体方向？',
 opts:[
  {t:'三维视觉——NeRF、3DGS、从图到三维的完整重建',sub:'※ 从普通照片还原三维世界，是 AR/VR 和机器人的核心技术',d:{vision3d:3,cv:2,graphics:1}},
  {t:'医学影像——CT/MRI/病理切片的 AI 分析',sub:'※ 让 AI 像医生一样读懂医学图像，辅助诊断癌症、分析病理',d:{med_vision:3,cv:2,applied_ai:2}},
  {t:'视频理解——动作识别、时序推理、跨帧分析',sub:'※ 让 AI 看懂视频中「发生了什么」，不只是单帧识别',d:{video:3,cv:2,multimodal:1}},
  {t:'开放词汇——CLIP 类模型、视觉基础模型',sub:'※ 让视觉模型识别任意物体，无需提前训练，像 GPT 一样通用',d:{vlm:3,foundation:2,cv:2}}
 ,
   {t:'以上 CV 细分方向目前都不是我的核心兴趣',d:{cv:1}}
  ]},

{id:'d_sys',phase:'deep',cat:'AI系统深度 / Systems Deep Dive',
 triggerDir:'sys_ai', triggerThreshold:12,
 text:'AI 系统里你最想解决哪个工程挑战？',
 opts:[
  {t:'大规模训练——千卡集群通信、显存优化、调度',sub:'※ 让几百张 GPU 高效协作训练超大模型，是大模型时代的基础设施',d:{sys_ai:3,dist_sys:3,arch:1}},
  {t:'推理引擎——KV Cache、连续批处理、投机解码',sub:'※ 让 AI 回答更快、成本更低，是 ChatGPT 类产品的核心工程挑战',d:{inf_opt:3,sys_ai:3,efficient:2}},
  {t:'多模型服务——路由、冷启动、资源复用',sub:'※ 同时管理几十个 AI 模型，智能分配计算资源',d:{sys_ai:3,dist_sys:2,cloud:1}},
  {t:'编译器与内核——Triton、XLA、自动算子融合',sub:'※ 让 AI 代码在 GPU 上跑得更快，介于软件和硬件之间的底层工作',d:{sys_ai:3,pl:2,arch:2}}
 ,
   {t:'以上 AI 系统方向目前都不是我最想专攻的',d:{sys_ai:1}}
  ]},

{id:'d_embodied',phase:'deep',cat:'具身深度 / Embodied Deep Dive',
 triggerDir:'embodied', triggerThreshold:12,
 text:'具身 AI 里你认为最核心的瓶颈在哪？',
 opts:[
  {t:'数据——高质量机器人演示数据太难获取',sub:'※ 机器人需要大量人类示范数据，但收集成本极高，这是当前最大瓶颈之一',d:{embodied:3,robotics:2,vla:1}},
  {t:'泛化——从有限场景迁移到无限真实世界',sub:'※ 机器人在实验室训练好，放到真实家庭就失败——如何让它适应新环境？',d:{embodied:3,rl:2,ml_theory:2}},
  {t:'感知-行动闭环——端到端学习 vs 模块化系统',sub:'※ 是让 AI 「感知→理解→规划→执行」分开，还是用一个大模型一步到位？',d:{embodied:3,vla:2,perception:2}},
  {t:'基础模型+具身——把 LLM/VLM 的能力接入机器人',sub:'※ 让机器人理解「把桌上的苹果放进冰箱」这样的语言指令并执行',d:{vla:3,embodied:2,llm:2}}
 ,
   {t:'具身 AI 整体不是我目前最感兴趣的方向',d:{embodied:1}}
  ]},

{id:'d_optim',phase:'deep',cat:'优化深度 / Optimization Deep Dive',
 triggerDir:'optim', triggerThreshold:12,
 text:'优化研究里你最想推进的前沿是？',
 opts:[
  {t:'大规模分布式优化——联邦学习、去中心化梯度',sub:'※ 让分布在不同设备上的数据不离开本地就能共同训练模型',d:{optim:3,dist_sys:2,ml_theory:2}},
  {t:'组合优化+ML——用神经网络求解 NP-hard 问题',sub:'※ 用 AI 解决排班、路径规划等传统方法计算量极大的难题',d:{comb_opt:3,algo:3,ml:2}},
  {t:'黑箱优化——无梯度方法、贝叶斯优化',sub:'※ 当目标函数不可微分时（如神经网络架构搜索），用无梯度方法寻优',d:{optim:3,stoch:2,ml_theory:1}},
  {t:'量子优化——量子退火、QAOA',sub:'※ 用量子计算机解决特定优化问题，目前仍是前沿研究阶段',d:{optim:3,theory:2,sci_comp:2}}
 ,
   {t:'以上优化前沿方向目前都不是我最想深入的',d:{optim:1}}
  ]},

{id:'d_vlsi',phase:'deep',cat:'芯片深度 / Chip Design Deep Dive',
 triggerDir:'vlsi', triggerThreshold:12,
 text:'芯片设计里你最感兴趣的前沿方向？',
 opts:[
  {t:'ML for EDA——用机器学习优化布局布线',sub:'※ 芯片设计需要把数十亿晶体管放到几平方厘米内，ML 帮助自动化这个过程',d:{eda:3,vlsi:3,ml:2}},
  {t:'3D 集成——Chiplet、3D-IC、先进封装',sub:'※ 把多个芯片像乐高一样堆叠，突破单芯片的性能上限',d:{vlsi:3,arch:2,hw_sw:1}},
  {t:'存算一体——在存储单元里做计算',sub:'※ 传统架构数据要从内存搬到 CPU，存算一体直接在内存里算，极大降低能耗',d:{in_mem:3,ai_hw:3,vlsi:2}},
  {t:'开源芯片——RISC-V 生态、开放工艺',sub:'※ 类似 Linux 之于操作系统，RISC-V 让芯片设计不再被少数公司垄断',d:{fpga:3,vlsi:2,systems:1}}
 ,
   {t:'以上芯片方向目前都不是我最感兴趣的',d:{vlsi:1}}
  ]},

{id:'d_stats',phase:'deep',cat:'统计深度 / Statistics Deep Dive',
 triggerDir:'causal', triggerThreshold:12,
 text:'因果推断研究里你最感兴趣的方向？',
 opts:[
  {t:'潜在结果框架——Rubin Causal Model 的深度应用',sub:'※ 「如果当时吃了这个药，结果会不同吗？」用数学严格定义这类反事实问题',d:{causal:3,econom:2,stats:2}},
  {t:'结构因果模型——Pearl 的 do-calculus 和 SCM',sub:'※ 图灵奖得主 Pearl 提出的因果推断框架，用有向图描述变量之间的因果关系',d:{causal:3,ml_theory:2,theory:1}},
  {t:'工具变量与 RDD——从准实验数据识别因果效应',sub:'※ 没有随机实验时，利用「巧合的自然实验」来估计真实的因果影响',d:{econom:3,causal:3,stats:2}},
  {t:'因果 + 机器学习——CATE 估计、DML、因果森林',sub:'※ 结合 ML 的预测能力和因果推断的可靠性，估计政策对不同人群的差异化效果',d:{causal:3,ml:2,stats:2}}
 ,
   {t:'以上因果推断方向目前都不是我最感兴趣的',d:{causal:1}}
  ]},

{id:'d_autonomous',phase:'deep',cat:'自主系统深度 / Autonomous Deep Dive',
 triggerDir:'autonomous', triggerThreshold:12,
 text:'自动驾驶/自主系统里你最想攻克的核心问题？',
 opts:[
  {t:'Occupancy World Model——预测环境的完整三维占用',sub:'※ 让 AI 建立周围世界的三维模型，预测未来几秒内空间的变化',d:{autonomous:3,perception:2,generative:1}},
  {t:'端到端 AD——从传感器直接到规控的统一模型',sub:'※ 用一个大模型直接处理「摄像头输入→方向盘转角输出」，比模块化系统更简洁',d:{autonomous:3,dl:2,rl:2}},
  {t:'长尾安全——如何在极罕见场景中保证安全',sub:'※ 99.99% 的场景都能处理，但那 0.01% 的突发情况（如路面油污+暴雨）才是关键',d:{safety:3,autonomous:2,formal:2}},
  {t:'多车协作——V2X、车路云协同感知',sub:'※ 让不同车辆、路边摄像头、云端共享信息，突破单车感知的盲区',d:{autonomous:3,comm:2,dist_sys:1}}
 ,
   {t:'以上自动驾驶方向目前都不是我最想攻克的',d:{autonomous:1}}
  ]},

{id:'d_foundation',phase:'deep',cat:'基础模型深挖 / Foundation Model Deep Dive',
 triggerDirs:['foundation','repr','ssl','transfer','scaling'], triggerThreshold:10,
 text:'如果继续深挖“基础模型/表示学习”，你最想长期做哪类问题？',
 opts:[
  {t:'预训练数据与目标设计——模型到底该先从什么数据、用什么目标学起',sub:'※ 更偏数据配方、训练目标和规模策略，决定模型最初学到什么能力',d:{foundation:3,ssl:2,scaling:2}},
  {t:'表征空间结构——embedding 到底编码了哪些语义关系',sub:'※ 更偏表示学习本质，关心模型内部向量空间为什么会形成可迁移的结构',d:{repr:3,ml_theory:2,stat_learn:1}},
  {t:'迁移与微调——如何把通用模型更稳地迁到新领域',sub:'※ 更偏适配问题，关注少量数据、低成本微调和跨领域泛化',d:{transfer:3,foundation:2,applied_ai:1}},
  {t:'评测与规模规律——能力边界怎样随数据和参数变化',sub:'※ 更偏研究“模型为什么会在某个规模点突然出现新能力”',d:{scaling:3,ml_theory:2,foundation:2}}
 ]},

{id:'d_nlp_ir',phase:'deep',cat:'语言与检索深挖 / NLP & Retrieval Deep Dive',
 triggerDirs:['nlp','ir','recsys','doc_intel','speech'], triggerThreshold:10,
 text:'如果继续深挖语言智能，你最想长期做哪类问题？',
 opts:[
  {t:'检索与排序——先把最相关的信息找准，再让模型回答',sub:'※ 更偏搜索、RAG、推荐和“相关性到底怎么衡量”这类问题',d:{ir:3,recsys:2,nlp:1}},
  {t:'信息抽取与文档理解——从长文档、表格、票据里稳定拿到关键信息',sub:'※ 更偏企业文档、知识管理、法律金融文本和 OCR 后处理',d:{doc_intel:3,nlp:2,applied_ai:1}},
  {t:'对话与 Agent——让语言模型连续规划、调用工具并完成任务',sub:'※ 更偏多轮对话、工作流自动化和“语言模型如何变成执行者”',d:{llm:2,planning_ai:3,applied_ai:2}},
  {t:'语音与语言一体化——让系统既会听又会说，还能理解上下文',sub:'※ 更偏 ASR/TTS、语音助手和实时语音交互体验',d:{speech:3,nlp:2,multimodal:1}}
 ]},

{id:'d_security',phase:'deep',cat:'安全深挖 / Security Deep Dive',
 triggerDirs:['security','formal','safety'], triggerThreshold:10,
 text:'如果继续深挖安全与可信，你最想长期攻哪个层面？',
 opts:[
  {t:'系统安全——内核、内存、隔离边界和底层攻防',sub:'※ 更偏操作系统、处理器和运行时层面的漏洞与防御',d:{security:3,systems:2,formal:1}},
  {t:'隐私计算——既想用数据，又不想暴露数据',sub:'※ 更偏联邦学习、差分隐私、安全多方计算等隐私保护技术',d:{security:3,fairness:1,ml:1}},
  {t:'AI 安全——模型会不会被诱导、窃取、越狱或误导人',sub:'※ 更偏大模型对抗、安全评测、红队和安全部署',d:{safety:3,security:2,llm:1}},
  {t:'形式化与密码学——从数学和协议层保证“它本来就不该出错”',sub:'※ 更偏证明、协议、零知识、同态加密和验证式安全',d:{formal:3,security:2,theory:1}}
 ]},

{id:'d_pl_formal',phase:'deep',cat:'程序语言深挖 / PL & Formal Deep Dive',
 triggerDirs:['pl','formal'], triggerThreshold:10,
 text:'如果继续深挖 PL / Formal Methods，你最想长期做哪类问题？',
 opts:[
  {t:'类型系统与静态分析——尽量在编译期提前拦住错误',sub:'※ 更偏“程序还没跑就先知道哪里可能有问题”',d:{pl:3,formal:2,theory:1}},
  {t:'编译器优化——让高级代码自动变成更高效的底层执行',sub:'※ 更偏 LLVM、ML compiler、自动算子融合和代码生成',d:{pl:3,arch:1,sys_ai:1}},
  {t:'验证与证明助手——用数学方法证明系统满足关键性质',sub:'※ 更偏 theorem proving、模型检查和安全关键软件验证',d:{formal:3,security:1,theory:1}},
  {t:'开发者工具——让程序员更容易写对、改快、调稳',sub:'※ 更偏 IDE、静态分析工具、代码智能和工程落地',d:{pl:2,applied_ai:1,systems:1}}
 ]},

{id:'d_graphics_hci',phase:'deep',cat:'交互与图形深挖 / Graphics & HCI Deep Dive',
 triggerDirs:['graphics','geo_proc','hci','vis'], triggerThreshold:10,
 text:'如果继续深挖图形 / HCI / 可视化，你最想长期做哪类问题？',
 opts:[
  {t:'实时渲染与图形管线——让复杂画面稳定地以高帧率跑起来',sub:'※ 更偏游戏引擎、渲染系统、光照和 GPU 图形管线',d:{graphics:3,arch:1,systems:1}},
  {t:'几何与三维交互——让用户能自然操作三维对象和空间信息',sub:'※ 更偏几何处理、3D 建模、空间交互和沉浸式界面',d:{geo_proc:3,graphics:2,hci:1}},
  {t:'AI 界面与人机协作——让人和模型真正顺手地一起工作',sub:'※ 更偏 AI 产品、工作流设计、可解释交互和协同体验',d:{hci:3,applied_ai:2,xai:1}},
  {t:'可视化与解释——把复杂数据和模型行为讲清楚',sub:'※ 更偏仪表盘、交互分析、解释性可视化和决策支持',d:{vis:3,hci:1,ds_sci:1}}
 ]},

{id:'d_data_eng',phase:'deep',cat:'数据生产化深挖 / Data Production Deep Dive',
 triggerDirs:['ds_eng','mlops','data_qual','stream'], triggerThreshold:10,
 text:'如果继续深挖数据工程 / MLOps，你最想长期做哪类问题？',
 opts:[
  {t:'实时数据流——让特征和事件在秒级稳定流动',sub:'※ 更偏 Kafka、Flink、流式特征计算和事件驱动架构',d:{stream:3,ds_eng:2,mlops:1}},
  {t:'特征与实验平台——让训练、上线、实验三件事真正打通',sub:'※ 更偏特征存储、实验追踪、线上线下一致性',d:{mlops:3,ds_eng:2,applied_ai:1}},
  {t:'数据质量与治理——自动发现、解释并修复数据问题',sub:'※ 更偏血缘、质量规则、数据契约和可靠性工程',d:{data_qual:3,ds_eng:2,stats:1}},
  {t:'模型监控与回滚——让生产模型能被看见、被解释、被快速止损',sub:'※ 更偏上线后治理：漂移、告警、评测、版本管理',d:{mlops:3,applied_ai:1,systems:1}}
 ]},

{id:'d_bayes_ts',phase:'deep',cat:'统计建模深挖 / Statistics Modeling Deep Dive',
 triggerDirs:['bayes','stats','ts_anal','econom'], triggerThreshold:10,
 text:'如果继续深挖统计建模，你最想长期做哪类问题？',
 opts:[
  {t:'贝叶斯层次模型——同时建个体差异和群体结构',sub:'※ 更偏小数据、高不确定性和多层级结构建模',d:{bayes:3,stats:2,domain_ds:1}},
  {t:'时间序列与预测——趋势、季节性、异常和提前预警',sub:'※ 更偏销量、金融、设备监控和时序风险预测',d:{ts_anal:3,stats:2,domain_ds:1}},
  {t:'实验与因果估计——尽量可靠地回答“做了这件事有没有用”',sub:'※ 更偏 A/B、政策评估、准实验和效果归因',d:{causal:3,stats:2,econom:1}},
  {t:'不确定性表达——结论不仅要给答案，还要说清有多稳',sub:'※ 更偏置信区间、后验分布、风险边界和稳健决策',d:{bayes:2,stats:3,uq:1}}
 ]},

{id:'d_signal_comm',phase:'deep',cat:'信号与通信深挖 / Signal & Communication Deep Dive',
 triggerDirs:['signal','comm','info_th'], triggerThreshold:10,
 text:'如果继续深挖信号 / 通信，你最想长期做哪类问题？',
 opts:[
  {t:'无线系统——把 5G/6G 的链路、协议和资源调度做得更强',sub:'※ 更偏基带、协议、网络优化和下一代移动通信系统',d:{comm:3,signal:2,info_th:1}},
  {t:'传感器与感知信号——从雷达、激光、音频里提取更可靠的信息',sub:'※ 更偏 DSP、滤波、前端处理和感知算法链路',d:{signal:3,perception:1,autonomous:1}},
  {t:'信息论与编码——从数学底层研究传输极限和可靠性',sub:'※ 更偏信道容量、纠错编码、理论极限和标准底座',d:{info_th:3,theory:1,comm:1}},
  {t:'AI for Signal/Comm——用学习方法提升传统信号系统表现',sub:'※ 更偏把机器学习接进通信与信号处理链路里',d:{signal:2,comm:2,ml:1}}
 ]},

{id:'d_arch_codesign',phase:'deep',cat:'体系结构深挖 / Architecture Deep Dive',
 triggerDirs:['arch','ai_hw','npu','mem_sys','hw_sw'], triggerThreshold:10,
 text:'如果继续深挖体系结构 / AI 硬件，你最想长期做哪类问题？',
 opts:[
  {t:'内存与互联——Cache、带宽、NoC 和数据搬运瓶颈',sub:'※ 更偏“为什么不是算力不够，而是数据搬运太慢”这类瓶颈分析',d:{mem_sys:3,arch:2,ai_hw:1}},
  {t:'数据流与映射——让模型在加速器上以最合适的方式流动',sub:'※ 更偏 NPU 设计、算子映射、tile 策略和硬件利用率',d:{ai_hw:3,npu:2,arch:1}},
  {t:'编译器 / Runtime 协同——让软件自动吃满硬件潜力',sub:'※ 更偏 ML compiler、runtime 调度和软硬件协同优化',d:{hw_sw:3,pl:1,arch:1}},
  {t:'大规模训练硬件系统——多 GPU / 多芯片如何稳、快、省地协作',sub:'※ 更偏 AI 集群、训练系统和跨节点通信链路',d:{arch:2,ai_hw:2,dist_sys:1}}
 ]},

{id:'d_control_emb',phase:'deep',cat:'控制与嵌入式深挖 / Control & Embedded Deep Dive',
 triggerDirs:['control','opt_ctrl','embedded','iot'], triggerThreshold:10,
 text:'如果继续深挖控制 / 嵌入式，你最想长期做哪类问题？',
 opts:[
  {t:'模型预测控制与自治系统——边预测边优化下一步动作',sub:'※ 更偏车辆、机器人、无人机等实时决策控制',d:{opt_ctrl:3,control:2,autonomous:1}},
  {t:'安全关键嵌入式软件——在严格时序和可靠性约束下写系统',sub:'※ 更偏 RTOS、固件、车规/航规软件和实时响应',d:{embedded:3,control:1,systems:1}},
  {t:'状态估计与传感器融合——把 noisy 观测拼成更可靠的状态判断',sub:'※ 更偏卡尔曼滤波、跟踪、导航和多传感器融合',d:{control:2,signal:2,perception:1}},
  {t:'低功耗边缘设备——让算法在小设备上长期稳定运行',sub:'※ 更偏功耗、资源约束、设备软件和端侧部署',d:{embedded:3,iot:2,quant:1}}
 ]},

{id:'d_robot_perception',phase:'deep',cat:'机器人感知深挖 / Robotics Perception Deep Dive',
 triggerDirs:['perception','slam','motion','hri'], triggerThreshold:10,
 text:'如果继续深挖机器人这条线，你最想长期做哪类问题？',
 opts:[
  {t:'SLAM 与定位——让机器人在陌生环境里持续知道自己在哪',sub:'※ 更偏地图构建、回环检测、定位稳健性和空间表示',d:{slam:3,perception:2,robotics:1}},
  {t:'三维感知与融合——把视觉、激光、IMU 拼成稳定世界模型',sub:'※ 更偏多传感器融合、空间理解和感知鲁棒性',d:{perception:3,signal:1,autonomous:1}},
  {t:'规划与交互——让机器人在有人类参与的环境里既高效又礼貌',sub:'※ 更偏人机协作、任务规划、行为决策和可解释交互',d:{motion:2,hri:2,robotics:1}},
  {t:'机器人产品化——把研究原型变成稳定能交付的系统',sub:'※ 更偏系统集成、调试、部署和跨软硬件工程落地',d:{robotics:3,embedded:1,systems:1}}
 ]},

{id:'d_or_decision',phase:'deep',cat:'决策与运筹深挖 / Decision & OR Deep Dive',
 triggerDirs:['or_ops','game_th','dynamic_prog','stoch'], triggerThreshold:10,
 text:'如果继续深挖运筹 / 决策，你最想长期做哪类问题？',
 opts:[
  {t:'调度与资源分配——把有限资源分给最该用的地方',sub:'※ 更偏排班、云资源、制造和运力调度',d:{scheduling:3,or_ops:2,optim:1}},
  {t:'机制设计与定价——设计规则，让系统自己朝好结果演化',sub:'※ 更偏拍卖、平台规则、动态定价和激励设计',d:{game_th:3,or_ops:1,stoch:1}},
  {t:'随机决策——在不确定信息下仍然做出稳健动作',sub:'※ 更偏风险、库存、服务系统和序贯决策',d:{stoch:3,or_ops:1,uq:1}},
  {t:'动态规划 / RL 交叉——把长期决策问题写成可计算的递推结构',sub:'※ 更偏 Bellman 思想、序贯规划和 RL 的数学底座',d:{dynamic_prog:3,rl:1,optim:1}}
 ]},

{id:'d_multimodal_gen',phase:'deep',cat:'多模态与生成深挖 / Multimodal & GenAI Deep Dive',
 triggerDirs:['multimodal','vlm','generative','creative_ai'], triggerThreshold:10,
 text:'如果继续深挖多模态 / 生成，你最想长期做哪类问题？',
 opts:[
  {t:'图文统一理解——让模型真的把“看见”和“读懂”接起来',sub:'※ 更偏视觉语言模型、文档理解和跨模态对齐',d:{vlm:3,multimodal:2,foundation:1}},
  {t:'多模态生成——让文本、图像、视频和 3D 内容在一套系统里联动生成',sub:'※ 更偏图像视频生成、跨模态编辑和内容一致性',d:{generative:3,multimodal:2,diffusion:1}},
  {t:'文档与企业智能——让长文档、图表、票据和知识库能被稳定理解和调用',sub:'※ 更偏 Document AI、企业知识系统和复杂工作流自动化',d:{doc_intel:3,vlm:2,applied_ai:1}},
  {t:'交互式创作——让人和模型一起迭代，而不是一次性出结果',sub:'※ 更偏创作工具、设计协同和可控生成体验',d:{creative_ai:3,generative:2,hci:1}}
 ]},

{id:'d_db_infra',phase:'deep',cat:'数据库与基础设施深挖 / Database & Infra Deep Dive',
 triggerDirs:['db','stream','cloud','dist_sys'], triggerThreshold:10,
 text:'如果继续深挖数据基础设施，你最想长期做哪类问题？',
 opts:[
  {t:'事务与一致性——数据分布在多台机器上时怎样还保证正确',sub:'※ 更偏分布式数据库、共识协议和故障恢复',d:{db:3,dist_sys:2,systems:1}},
  {t:'流式与实时系统——事件一来就要算，不能等批处理',sub:'※ 更偏实时数据流、窗口计算、消息系统和低延迟架构',d:{stream:3,dist_sys:2,db:1}},
  {t:'分析引擎——让海量查询和复杂分析仍然可交互、可扩展',sub:'※ 更偏列式存储、查询优化、执行引擎和资源管理',d:{db:3,cloud:1,systems:1}},
  {t:'数据平台治理——表、指标、血缘和权限怎样一起长期稳定运转',sub:'※ 更偏数据平台工程、治理和跨团队协作底座',d:{db:2,cloud:2,ds_eng:2}}
 ]},

{id:'d_theory_algos',phase:'deep',cat:'理论与算法深挖 / Theory & Algorithms Deep Dive',
 triggerDirs:['theory','algo','complexity','formal'], triggerThreshold:10,
 text:'如果继续深挖理论 / 算法，你最想长期做哪类问题？',
 opts:[
  {t:'复杂度边界——哪些问题“本质上就快不了”',sub:'※ 更偏下界、可计算性和问题难度的严格刻画',d:{complexity:3,theory:2,algo:1}},
  {t:'算法设计——在现实约束下把解法做得又快又稳',sub:'※ 更偏近似算法、图算法和算法工程',d:{algo:3,theory:2,optim:1}},
  {t:'在线与序贯决策——边接收信息边做决定，没法等全部信息到齐',sub:'※ 更偏 online algorithms、遗憾分析和序贯规划',d:{algo:2,theory:2,dynamic_prog:1,game_th:1}},
  {t:'形式化方法——把程序和系统的关键性质写成可验证对象',sub:'※ 更偏模型检查、证明和程序正确性',d:{formal:3,theory:2,security:1}}
 ]},

{id:'d_experiment_policy',phase:'deep',cat:'实验与政策评估深挖 / Experimentation Deep Dive',
 triggerDirs:['causal','econom','ds_sci'], triggerThreshold:10,
 text:'如果继续深挖实验 / 因果评估，你最想长期做哪类问题？',
 opts:[
  {t:'在线实验——产品变化一上线，怎样快速又可靠地判断效果',sub:'※ 更偏 A/B、指标设计、实验平台和偏差控制',d:{causal:3,ds_sci:2,stats:1}},
  {t:'政策评估——没法随机实验时怎样仍然尽量逼近真实因果效应',sub:'※ 更偏准实验、工具变量、双重差分和公共政策评估',d:{econom:3,causal:3,stats:1}},
  {t:'异质性效应——同一个策略对不同人、不同区域的作用为什么不一样',sub:'※ 更偏 CATE、uplift 和精细化干预策略',d:{causal:3,stats:2,domain_ds:1}},
  {t:'实验基础设施——怎样把实验、数据和决策闭环真正串起来',sub:'※ 更偏平台化实验系统，而不是只做单次分析',d:{causal:2,mlops:1,ds_eng:2}}
 ]},

{id:'d_forecast_decision',phase:'deep',cat:'预测与决策深挖 / Forecasting Deep Dive',
 triggerDirs:['ts_anal','bayes','domain_ds','uq'], triggerThreshold:10,
 text:'如果继续深挖预测建模，你最想长期做哪类问题？',
 opts:[
  {t:'长期预测——趋势、季节、结构变化叠在一起时还能稳住',sub:'※ 更偏时间序列、分层预测和长周期变化建模',d:{ts_anal:3,stats:2,domain_ds:1}},
  {t:'概率预测——结论必须连“有多不确定”一起说清楚',sub:'※ 更偏区间预测、后验分布和风险感知决策',d:{uq:3,bayes:2,stats:1}},
  {t:'高价值预警——小概率但高损失的事件怎样尽量提早发现',sub:'※ 更偏风险建模、告警系统和异常识别',d:{domain_ds:2,uq:2,ts_anal:2}},
  {t:'预测驱动行动——预测只是第一步，关键是后面怎么调度和分配资源',sub:'※ 更偏预测与运筹、预测与业务动作联动',d:{ts_anal:2,or_ops:2,domain_ds:1}}
 ]},

{id:'d_domain_risk',phase:'deep',cat:'行业数据科学深挖 / Domain Data Science Deep Dive',
 triggerDirs:['domain_ds','stats','bayes','econom'], triggerThreshold:10,
 text:'如果继续深挖行业数据科学，你更想长期在哪类场景里做模型？',
 opts:[
  {t:'医疗与生命科学——数据少、约束强，但问题价值极高',sub:'※ 更偏临床、医疗影像、病历、药物和高可靠分析',d:{domain_ds:3,stats:2,applied_ai:1}},
  {t:'金融与风险——错误代价很高，稳健性和解释性都必须在线',sub:'※ 更偏量化、信用、风控和因果评估',d:{domain_ds:3,stoch:2,econom:1}},
  {t:'产业与运维——设备、工厂和供应链里长期累积的数据价值',sub:'※ 更偏预测维护、生产优化和运营分析',d:{domain_ds:3,or_ops:1,ts_anal:1}},
  {t:'社会与公共决策——结论不仅要准，还要经得起公平性和政策影响讨论',sub:'※ 更偏政策分析、教育、劳动和公共服务数据',d:{domain_ds:3,econom:2,causal:1}}
 ]},

{id:'d_motion_control',phase:'deep',cat:'机器人规划与控制深挖 / Motion & Control Deep Dive',
 triggerDirs:['motion','mpc','control','opt_ctrl'], triggerThreshold:10,
 text:'如果继续深挖“机器人怎么动”，你最想长期做哪类问题？',
 opts:[
  {t:'轨迹优化——在约束很多的情况下仍然找到可执行、平滑、安全的动作',sub:'※ 更偏优化式规划、约束处理和路径质量',d:{motion:3,opt_ctrl:2,optim:1}},
  {t:'反馈控制——环境一变、目标一变，系统还能马上稳住',sub:'※ 更偏鲁棒控制、跟踪控制和动态系统稳定性',d:{control:3,opt_ctrl:2,robotics:1}},
  {t:'MPC 与实时决策——每一步都先预测未来再选当前动作',sub:'※ 更偏模型预测控制、在线优化和自治系统',d:{mpc:3,opt_ctrl:2,autonomous:1}},
  {t:'学习型规划控制——用数据和试错补足传统模型的盲区',sub:'※ 更偏 RL、模仿学习和学习增强控制',d:{rl:2,control:2,motion:2}}
 ]},

{id:'d_hri_field',phase:'deep',cat:'机器人交互深挖 / HRI & Field Robotics Deep Dive',
 triggerDirs:['hri','robotics','embodied'], triggerThreshold:10,
 text:'如果继续深挖机器人与人协作，你最想长期做哪类问题？',
 opts:[
  {t:'协作与安全——人在旁边时，机器人怎样既高效又让人放心',sub:'※ 更偏协作机器人、安全边界和人机共处规则',d:{hri:3,safety:2,robotics:1}},
  {t:'信任与解释——人为什么会在某一刻选择相信或接管机器人',sub:'※ 更偏可解释交互、信任校准和交互设计',d:{hri:3,xai:1,applied_ai:1}},
  {t:'辅助与照护——让机器人真正走进长期使用场景，而不是只做 demo',sub:'※ 更偏养老、康复、照护和长期部署',d:{hri:3,robotics:2,applied_ai:1}},
  {t:'现场部署——实验室里能跑的系统，怎样在真实复杂现场长期稳定工作',sub:'※ 更偏 field robotics、系统工程和产品化',d:{robotics:3,systems:1,embedded:1}}
 ]},

{id:'d_embedded_edge',phase:'deep',cat:'嵌入式与端侧深挖 / Embedded & Edge Deep Dive',
 triggerDirs:['embedded','iot','elec_sys'], triggerThreshold:10,
 text:'如果继续深挖嵌入式 / 端侧系统，你最想长期做哪类问题？',
 opts:[
  {t:'实时系统——任务必须按时完成，迟到就是失败',sub:'※ 更偏 RTOS、时序分析和安全关键软件',d:{embedded:3,control:2,emb_sw:1}},
  {t:'低功耗设备——算得够用的同时还要长期省电稳定',sub:'※ 更偏边缘端、功耗预算和设备级优化',d:{embedded:3,iot:2,elec_sys:1}},
  {t:'设备感知链路——从传感器输入到控制或推理输出一整条链路打通',sub:'※ 更偏嵌入式感知、边缘 AI 和设备集成',d:{embedded:2,signal:2,control:1}},
  {t:'设备系统维护——升级、日志、回滚、诊断怎样在现场做得住',sub:'※ 更偏设备软件生命周期和长期运维能力',d:{embedded:3,systems:1,security:1}}
 ]},

{id:'d_devices_photonics',phase:'deep',cat:'器件与光电深挖 / Devices & Photonics Deep Dive',
 triggerDirs:['photonics','signal','vlsi'], triggerThreshold:10,
 text:'如果继续深挖器件 / 光电 / 传感，你最想长期做哪类问题？',
 opts:[
  {t:'成像链路——从光到像素再到可计算表示，哪一步最该优化',sub:'※ 更偏传感器、ISP、成像质量和下游视觉效果',d:{photonics:3,signal:2,cv:1}},
  {t:'光通信与高速链路——信息在高速电光通道里怎样稳定传输',sub:'※ 更偏高速接口、链路设计和信号完整性',d:{photonics:3,comm:2,signal:1}},
  {t:'新型器件——材料、结构和工艺怎样带来新的计算可能',sub:'※ 更偏先进器件、研究导向和底层物理',d:{photonics:3,vlsi:2,ai_hw:1}},
  {t:'传感系统落地——让器件、前端电路和算法真正形成稳定产品',sub:'※ 更偏工程化传感系统，而不是单点器件研究',d:{signal:2,embedded:1,photonics:2}}
 ]},

{id:'d_firmware_soc',phase:'deep',cat:'固件与SoC深挖 / Firmware & SoC Deep Dive',
 triggerDirs:['emb_sw','soc','logic_des','fpga'], triggerThreshold:10,
 text:'如果继续深挖 CE 里的底层系统，你最想长期做哪类问题？',
 opts:[
  {t:'启动与平台固件——系统从上电到可运行，中间每一步怎样都可控',sub:'※ 更偏 boot chain、设备初始化、异常恢复和平台安全',d:{emb_sw:3,soc:2,security:1}},
  {t:'SoC 集成——很多模块同时上芯片后，怎么保持协同和可验证性',sub:'※ 更偏片上系统划分、互联和系统级验证',d:{soc:3,logic_des:2,hw_sw:1}},
  {t:'板级 bring-up——第一次让新硬件真跑起来并把问题找全',sub:'※ 更偏驱动、寄存器、板卡调试和软硬件联调',d:{emb_sw:3,fpga:1,soc:2}},
  {t:'设备长期维护——底层系统怎么升级、观测和稳定演进',sub:'※ 更偏 firmware 生命周期和大规模设备维护',d:{emb_sw:3,systems:1,security:1}}
 ]},

{id:'d_accelerator_runtime',phase:'deep',cat:'加速器与运行时深挖 / Accelerator Runtime Deep Dive',
 triggerDirs:['ai_hw','npu','arch','hw_sw'], triggerThreshold:10,
 text:'如果继续深挖 AI 加速器这条线，你最想长期做哪类问题？',
 opts:[
  {t:'数据流与映射——同一个模型怎样在不同硬件上得到最优执行方式',sub:'※ 更偏 tile、算子切分、调度和利用率分析',d:{ai_hw:3,npu:2,arch:1}},
  {t:'Runtime 与编译协同——让系统自动知道“该怎么喂硬件”',sub:'※ 更偏 ML compiler、runtime、kernel 调度和图优化',d:{hw_sw:3,ai_hw:2,pl:1}},
  {t:'多芯片协同——模型太大时，计算和通信怎样一起做局部最优',sub:'※ 更偏系统级加速器、片间互联和训练基础设施',d:{arch:2,ai_hw:2,dist_sys:1}},
  {t:'端侧专用加速——把模型能力放进车端、手机、摄像头等设备里',sub:'※ 更偏边缘加速器、功耗和部署效率',d:{ai_hw:3,emb_sw:1,soc:1}}
 ]},

{id:'d_ce_platform',phase:'deep',cat:'边缘平台深挖 / CE Platform Deep Dive',
 triggerDirs:['soc','emb_sw','fpga','mem_sys'], triggerThreshold:10,
 text:'如果继续深挖 CE 的平台层，你最想长期做哪类问题？',
 opts:[
  {t:'边缘平台架构——设备端算力、内存和接口怎样组合最合理',sub:'※ 更偏平台设计、资源分配和产品级架构判断',d:{soc:3,mem_sys:2,emb_sw:1}},
  {t:'原型与验证平台——先用 FPGA / 板级平台把新想法跑通',sub:'※ 更偏可重构原型、验证和系统迭代速度',d:{fpga:3,soc:1,hw_sw:1}},
  {t:'平台软件栈——让驱动、运行时和应用层顺畅接起来',sub:'※ 更偏底层软件、设备抽象和平台工程',d:{emb_sw:3,hw_sw:2,systems:1}},
  {t:'性能分析——系统慢到底是算、存、互联还是软件链路在拖后腿',sub:'※ 更偏 profiling、瓶颈分析和跨层优化',d:{mem_sys:2,arch:2,emb_sw:1}}
 ]},

{id:'d_market_risk',phase:'deep',cat:'市场与风险深挖 / Market & Risk Deep Dive',
 triggerDirs:['game_th','stoch','uq'], triggerThreshold:10,
 text:'如果继续深挖市场 / 风险这条线，你最想长期做哪类问题？',
 opts:[
  {t:'收益管理——价格、库存和需求一起变时怎样做最稳的决策',sub:'※ 更偏动态定价、库存控制和服务系统收益优化',d:{or_ops:2,stoch:2,game_th:1}},
  {t:'风险量化——低概率高损失事件怎样建模和提前控制',sub:'※ 更偏尾部风险、压力测试和不确定性传播',d:{uq:3,stoch:2,domain_ds:1}},
  {t:'市场机制——规则一变，参与者行为就变，怎样设计更稳的机制',sub:'※ 更偏平台、拍卖和激励相容问题',d:{game_th:3,or_ops:1,econom:1}},
  {t:'序贯风险决策——每一步的动作会改变后面所有风险分布',sub:'※ 更偏动态规划、风险敏感控制和长期策略',d:{dynamic_prog:2,stoch:2,optim:1}}
 ]},

{id:'d_sci_modeling',phase:'deep',cat:'科学建模深挖 / Scientific Modeling Deep Dive',
 triggerDirs:['sci_comp','stoch','comp_bio'], triggerThreshold:10,
 text:'如果继续深挖科学计算 / 建模，你最想长期做哪类问题？',
 opts:[
  {t:'数值模拟——先把系统稳定算出来，再看它告诉了我们什么',sub:'※ 更偏 PDE、迭代方法、求解器和 HPC',d:{sci_comp:3,optim:1,stoch:1}},
  {t:'不确定性传播——输入一有噪声，输出会怎么一起被放大或抵消',sub:'※ 更偏 UQ、敏感性分析和稳健建模',d:{uq:3,sci_comp:2,stoch:1}},
  {t:'生物 / 物理建模——用计算方法理解本来很难直接实验的问题',sub:'※ 更偏计算生物、物理系统和科研软件',d:{comp_bio:3,sci_comp:2,domain_ds:1}},
  {t:'仿真与学习结合——用 ML 帮模拟更快，用模拟帮模型更稳',sub:'※ 更偏 surrogate models、PINN 和科学机器学习',d:{sci_comp:2,ml:1,optim:1}}
 ]},

{id:'d_or_products',phase:'deep',cat:'运筹产品化深挖 / OR Productization Deep Dive',
 triggerDirs:['or_ops','scheduling','domain_ds'], triggerThreshold:10,
 text:'如果继续深挖运筹落地，你最想长期做哪类问题？',
 opts:[
  {t:'调度系统产品化——从一个求解器变成业务每天离不开的系统',sub:'※ 更偏调度平台、规则工程和业务接入',d:{scheduling:3,or_ops:2,systems:1}},
  {t:'决策支持平台——让非算法同学也能理解并使用优化结果',sub:'※ 更偏可解释、可操作的决策界面和闭环',d:{or_ops:2,domain_ds:1,vis:1}},
  {t:'优化与预测联动——不是单独做模型，而是把预测直接接进优化动作',sub:'※ 更偏 demand forecasting + resource planning 的一体化系统',d:{or_ops:3,ts_anal:1,domain_ds:1}},
  {t:'规则与人机协同——不是一味追求最优，而是给人留出可干预空间',sub:'※ 更偏现实约束、交互式优化和策略接受度',d:{or_ops:2,game_th:1,hci:1}}
 ]},

{id:'d_network_cloud',phase:'deep',cat:'网络与云深挖 / Network & Cloud Deep Dive',
 triggerDirs:['networks','cloud','dist_sys'], triggerThreshold:10,
 text:'如果继续深挖网络 / 云基础设施，你最想长期做哪类问题？',
 opts:[
  {t:'云网络与服务发现——服务一多，通信、隔离和治理就会复杂得多',sub:'※ 更偏大型服务之间怎么稳定通信、发现彼此、做灰度和容灾',d:{cloud:3,networks:2,dist_sys:2}},
  {t:'性能测量与可观测性——系统慢不是最可怕，可怕的是根本不知道它为什么慢',sub:'※ 更偏 tracing、拥塞分析、网络测量和性能归因',d:{networks:3,systems:2,cloud:1}},
  {t:'边缘与移动网络——用户位置、链路条件和带宽都在不断变化',sub:'※ 更偏弱网、切换、边缘节点协同和端到端体验优化',d:{networks:3,cloud:1,embedded:1}},
  {t:'协议演化与互联网基础设施——一条规则改动会影响整张网的长期行为',sub:'※ 更偏互联网架构、协议设计和大规模网络治理',d:{networks:3,systems:1,theory:1}}
 ]},

{id:'d_devinfra',phase:'deep',cat:'开发基础设施深挖 / Developer Infra Deep Dive',
 triggerDirs:['systems','pl','formal'], triggerThreshold:10,
 text:'如果继续深挖“让复杂软件长期可维护”，你最想长期做哪类问题？',
 opts:[
  {t:'测试与发布体系——改动很多，但系统必须始终可回滚、可追踪、可验证',sub:'※ 更偏 CI/CD、测试策略、变更管理和工程稳定性',d:{systems:3,formal:1,pl:1}},
  {t:'运行时与调试工具——程序真出事时，怎样最快把问题看清楚',sub:'※ 更偏 profiler、调试器、诊断工具和性能分析链路',d:{systems:3,pl:2,arch:1}},
  {t:'静态检查与程序分析——尽量在程序真正运行前发现问题',sub:'※ 更偏 lint、类型、静态分析和自动化质量保证',d:{pl:3,formal:2,systems:1}},
  {t:'开发体验平台——让大团队也能稳定、高效地协作开发',sub:'※ 更偏仓库工具链、构建系统和开发者效率平台',d:{pl:2,systems:2,hci:1}}
 ]},

{id:'d_product_metrics',phase:'deep',cat:'产品指标深挖 / Product Metrics Deep Dive',
 triggerDirs:['ds_sci','causal','vis'], triggerThreshold:10,
 text:'如果继续深挖产品分析，你最想长期做哪类问题？',
 opts:[
  {t:'指标设计——什么才是真正能代表用户价值和业务健康的指标',sub:'※ 更偏定义口径、拆分目标和避免“把错误东西做得更快”',d:{ds_sci:3,stats:2,vis:1}},
  {t:'实验平台——让实验设计、分层分析和回看复盘都能长期复用',sub:'※ 更偏 A/B 平台、实验治理和结论沉淀',d:{causal:3,mlops:1,ds_eng:1}},
  {t:'用户分群与旅程分析——不同用户为什么在不同阶段做出不同选择',sub:'※ 更偏行为分析、路径分析和策略拆分',d:{domain_ds:3,ds_sci:2,causal:1}},
  {t:'决策可视化——把复杂分析变成产品和运营团队愿意真正使用的界面',sub:'※ 更偏 dashboard、交互分析和决策支持',d:{vis:3,ds_sci:2,hci:1}}
 ]},

{id:'d_decision_analytics',phase:'deep',cat:'决策分析深挖 / Decision Analytics Deep Dive',
 triggerDirs:['domain_ds','econom','causal'], triggerThreshold:10,
 text:'如果继续深挖“数据怎样帮助真实决策”，你最想长期做哪类问题？',
 opts:[
  {t:'策略评估——先判断一项政策或产品动作到底有没有用',sub:'※ 更偏效果评估、归因和“如果不做会怎样”的问题',d:{causal:3,econom:2,domain_ds:1}},
  {t:'资源分配——预算、人力、营销或运营动作怎样分才最值',sub:'※ 更偏决策支持、优化和业务落地',d:{domain_ds:3,or_ops:2,causal:1}},
  {t:'风险与预警——提前发现哪些用户、流程或机构更可能出问题',sub:'※ 更偏预警、监控和不确定性下的决策',d:{domain_ds:3,bayes:1,stats:2}},
  {t:'解释与沟通——让复杂分析结果真的被决策者采用',sub:'※ 更偏把复杂模型翻译成管理层和业务团队能行动的建议',d:{domain_ds:2,vis:2,ds_sci:1}}
 ]},

{id:'d_robot_learning',phase:'deep',cat:'机器人学习深挖 / Robot Learning Deep Dive',
 triggerDirs:['embodied','rl','vla'], triggerThreshold:10,
 text:'如果继续深挖机器人学习，你最想长期攻哪类问题？',
 opts:[
  {t:'模仿学习——少量高质量示范如何变成稳定可迁移的技能',sub:'※ 更偏从人类演示里学技能，而不是完全靠试错',d:{embodied:3,rl:2,robotics:1}},
  {t:'离线机器人学习——不用反复上真机，也能从历史轨迹里学策略',sub:'※ 更偏从已有数据中学机器人动作，降低真实世界试错成本',d:{rl:3,embodied:2,robotics:1}},
  {t:'语言条件控制——一句自然语言指令怎样真正变成可靠动作',sub:'※ 更偏把语言模型、视觉和控制接成一个可执行链路',d:{vla:3,embodied:2,hri:1}},
  {t:'世界模型与预训练——先学环境规律，再学具体任务',sub:'※ 更偏让机器人先建立对物理世界的可迁移表示',d:{embodied:3,rl:2,perception:1}}
 ]},

{id:'d_field_robotics',phase:'deep',cat:'野外机器人深挖 / Field Robotics Deep Dive',
 triggerDirs:['autonomous','robotics','perception'], triggerThreshold:10,
 text:'如果继续深挖“机器人走出实验室”，你最想长期做哪类问题？',
 opts:[
  {t:'巡检与运维机器人——环境脏、远、危险，但任务价值极高',sub:'※ 更偏工厂、电站、矿区、隧道等真实环境里的自主作业',d:{autonomous:3,robotics:2,perception:1}},
  {t:'空中机器人——受限载荷下还要感知、规划、控制一起做好',sub:'※ 更偏无人机导航、避障、任务规划和机载算力约束',d:{autonomous:3,control:2,motion:1}},
  {t:'海洋 / 水下机器人——通信差、感知难，系统鲁棒性要求更高',sub:'※ 更偏长期自主运行和强不确定环境下的系统设计',d:{robotics:3,signal:1,autonomous:2}},
  {t:'多机器人协同——不是单机智能，而是很多机器人一起完成任务',sub:'※ 更偏协同规划、任务分配和系统级 coordination',d:{robotics:3,autonomous:2,motion:1}}
 ]},

{id:'d_mixed_signal',phase:'deep',cat:'混合信号深挖 / Mixed-Signal Deep Dive',
 triggerDirs:['elec_sys','signal','vlsi'], triggerThreshold:10,
 text:'如果继续深挖模拟 / 混合信号，你最想长期做哪类问题？',
 opts:[
  {t:'模数转换与时钟——速度、精度、抖动和功耗总是在互相拉扯',sub:'※ 更偏 ADC/DAC、时钟链路和底层稳定性问题',d:{elec_sys:3,signal:2,vlsi:1}},
  {t:'电源与热管理——系统越来越强，但供电和散热永远是硬约束',sub:'※ 更偏 PMIC、功耗管理和整机稳定性',d:{elec_sys:3,embedded:1,ai_hw:1}},
  {t:'前端传感链路——弱小的真实信号怎样在第一步就别被毁掉',sub:'※ 更偏模拟前端、噪声控制和传感器接口',d:{signal:3,elec_sys:2,photonics:1}},
  {t:'量产一致性与验证——实验室能跑和大规模稳定交付不是一回事',sub:'※ 更偏 PVT、验证、测试和出货稳定性',d:{elec_sys:2,vlsi:2,eda:1}}
 ]},

{id:'d_wireless_systems',phase:'deep',cat:'无线系统深挖 / Wireless Systems Deep Dive',
 triggerDirs:['comm','info_th','signal'], triggerThreshold:10,
 text:'如果继续深挖无线 / 通信系统，你最想长期做哪类问题？',
 opts:[
  {t:'物理层与链路——把调制、编码和估计做到更稳更接近极限',sub:'※ 更偏 PHY、误码率、链路预算和信道特性',d:{comm:3,info_th:2,signal:1}},
  {t:'网络与资源调度——不同用户、不同链路怎样公平又高效地共享资源',sub:'※ 更偏 MAC、调度、协议和系统层优化',d:{comm:3,or_ops:1,systems:1}},
  {t:'通信实现——让算法最终落到基站、终端和真实设备上',sub:'※ 更偏工程实现、基带、板级与系统整合',d:{comm:2,embedded:2,signal:2}},
  {t:'智能无线——把学习方法真正接进估计、优化和链路控制里',sub:'※ 更偏 AI for wireless、信道预测和学习型调度',d:{comm:2,signal:2,ml:2}}
 ]},

{id:'d_memory_runtime',phase:'deep',cat:'内存与运行时深挖 / Memory & Runtime Deep Dive',
 triggerDirs:['mem_sys','hw_sw','arch'], triggerThreshold:10,
 text:'如果继续深挖 CE 里的“数据流和执行流”，你最想长期做哪类问题？',
 opts:[
  {t:'缓存与带宽瓶颈——算力不是不够，而是数据来不及送到位',sub:'※ 更偏 memory hierarchy、缓存策略和带宽利用率',d:{mem_sys:3,arch:2,ai_hw:1}},
  {t:'执行时调度——不同算子、不同核、不同内存块怎样更聪明地配合',sub:'※ 更偏 runtime、调度和资源分配',d:{hw_sw:3,arch:2,soc:1}},
  {t:'近存 / 异构数据流——让数据更少移动、让不同计算单元更自然分工',sub:'※ 更偏 in-memory、heterogeneous computing 和 dataflow',d:{in_mem:2,hw_sw:2,arch:2}},
  {t:'性能诊断——系统慢不是最可怕，最可怕是根本看不清慢在哪里',sub:'※ 更偏 profiling、性能归因和底层可观测性',d:{arch:2,hw_sw:2,systems:1}}
 ]},

{id:'d_device_platform',phase:'deep',cat:'设备平台深挖 / Device Platform Deep Dive',
 triggerDirs:['soc','emb_sw','fpga'], triggerThreshold:10,
 text:'如果继续深挖 CE 里的设备平台，你最想长期做哪类问题？',
 opts:[
  {t:'固件与启动链路——设备从上电到可用，中间每一步都不能乱',sub:'※ 更偏 boot chain、初始化、设备发现和平台稳定性',d:{emb_sw:3,soc:2,security:1}},
  {t:'SoC 集成——不同 IP、外设和软件栈怎样真正装进同一个可交付系统',sub:'※ 更偏集成、接口和跨团队协同',d:{soc:3,emb_sw:2,hw_sw:1}},
  {t:'可重构平台——用 FPGA / 原型系统快速试错新的计算想法',sub:'※ 更偏 prototype、reconfigurable systems 和验证',d:{fpga:3,arch:1,soc:1}},
  {t:'设备长期维护——部署之后怎么升级、追踪、止损和远程修复',sub:'※ 更偏平台工程、运维、日志和生命周期管理',d:{emb_sw:3,systems:1,security:1}}
 ]},

{id:'d_service_risk',phase:'deep',cat:'服务与风险深挖 / Service & Risk Deep Dive',
 triggerDirs:['stoch','uq','or_ops'], triggerThreshold:10,
 text:'如果继续深挖不确定系统，你最想长期做哪类问题？',
 opts:[
  {t:'排队与服务容量——系统来了多少请求、多久排完、哪里会堵住',sub:'※ 更偏 queueing、容量建模和服务系统分析',d:{stoch:3,or_ops:2,systems:1}},
  {t:'稳健规划——最坏情况不一定常见，但一旦出现代价极高',sub:'※ 更偏 robust optimization、风险边界和保守决策',d:{uq:3,optim:2,stoch:1}},
  {t:'风险量化——不仅要给方案，还要说清它在什么条件下会失效',sub:'※ 更偏 uncertainty quantification 和风险评估',d:{uq:3,stoch:2,stats:1}},
  {t:'服务网络决策——等待时间、成本和服务质量怎样一起平衡',sub:'※ 更偏服务运营、调度和系统级决策',d:{or_ops:3,stoch:2,scheduling:1}}
 ]},

{id:'d_mechanism_platform',phase:'deep',cat:'机制与平台深挖 / Mechanism & Platform Deep Dive',
 triggerDirs:['game_th','or_ops','econom'], triggerThreshold:10,
 text:'如果继续深挖“平台规则怎样影响行为”，你最想长期做哪类问题？',
 opts:[
  {t:'拍卖与定价——规则一旦设计不同，平台收益和公平性都会变',sub:'※ 更偏 auction、pricing 和市场设计',d:{game_th:3,or_ops:2,econom:1}},
  {t:'激励兼容——怎样让参与者更愿意诚实行动而不是钻空子',sub:'※ 更偏 mechanism design 和策略行为分析',d:{game_th:3,econom:2,or_ops:1}},
  {t:'平台供需匹配——订单、司机、商家、用户之间怎样更高效地配平',sub:'※ 更偏 marketplace、matching 和实时决策',d:{or_ops:3,game_th:2,domain_ds:1}},
  {t:'规则仿真——先在模拟里看长期行为，再决定制度要不要上线',sub:'※ 更偏 simulation、policy design 和系统性副作用分析',d:{stoch:2,game_th:2,sci_comp:1}}
 ]},

{id:'d_ai_eval',phase:'deep',cat:'AI评测深挖 / AI Evaluation Deep Dive',
 triggerDirs:['llm','foundation','safety','xai'], triggerThreshold:10,
 text:'如果继续深挖“怎么判断 AI 真的变强了”，你最想长期做哪类问题？',
 opts:[
  {t:'能力评测——推理、规划、代码、工具使用这些能力怎样被测得更准',sub:'※ 更偏 benchmark 设计、任务拆解和能力边界定义',d:{llm:3,foundation:2,ml_theory:1}},
  {t:'可靠性评测——模型什么时候会胡说、失控、过度自信',sub:'※ 更偏 red teaming、failure case 和部署前风险评估',d:{safety:3,llm:2,xai:1}},
  {t:'数据与污染分析——模型是真的会了，还是只是背过了评测集',sub:'※ 更偏训练数据来源、评测公平性和数据污染分析',d:{foundation:3,ml_theory:2,stats:1}},
  {t:'自动化评估系统——让评测可以规模化、持续化，而不是一次性跑分',sub:'※ 更偏 eval pipeline、自动评分和长期监控',d:{applied_ai:2,llm:2,mlops:1}}
 ]},

{id:'d_cs_storage_reliability',phase:'deep',cat:'存储与可靠性深挖 / Storage & Reliability Deep Dive',
 triggerDirs:['db','dist_sys','systems','cloud'], triggerThreshold:10,
 text:'如果继续深挖“系统怎样长期跑稳”，你最想长期做哪类问题？',
 opts:[
  {t:'一致性与复制——多副本、多机房下数据怎样既不乱又别太慢',sub:'※ 更偏复制协议、一致性级别和故障恢复',d:{db:3,dist_sys:2,systems:1}},
  {t:'存储与日志——写入、压缩、恢复和冷热分层怎样一起协作',sub:'※ 更偏存储引擎、日志结构和系统级性能设计',d:{db:3,systems:2,cloud:1}},
  {t:'可靠发布与回滚——系统更新很频繁，但业务不能跟着一起翻车',sub:'※ 更偏发布策略、回滚、灰度和服务稳定性',d:{systems:3,cloud:2,dist_sys:1}},
  {t:'可观测性与诊断——出问题时怎样更快把根因从大量信号里拎出来',sub:'※ 更偏 tracing、指标、日志和性能定位工具',d:{systems:3,cloud:2,db:1}}
 ]},

{id:'d_ds_intervention_design',phase:'deep',cat:'干预设计深挖 / Intervention Design Deep Dive',
 triggerDirs:['causal','domain_ds','econom','stats'], triggerThreshold:10,
 text:'如果继续深挖“数据怎样支撑干预动作”，你最想长期做哪类问题？',
 opts:[
  {t:'实验设计——在真实业务里怎样把实验做得既可信又不扰民',sub:'※ 更偏分层实验、随机化策略和效果识别',d:{causal:3,stats:2,domain_ds:1}},
  {t:'异质性影响——同一个动作对不同人群的效果怎么可能完全不同',sub:'※ 更偏 uplift、CATE 和人群差异化决策',d:{causal:3,stats:2,econom:1}},
  {t:'策略上线评估——不是“模型分高就上线”，而是要判断真实收益和副作用',sub:'※ 更偏 policy evaluation、归因和长期影响跟踪',d:{domain_ds:3,causal:2,stats:1}},
  {t:'干预闭环——分析、实验、上线、回看怎样形成真正可复用的流程',sub:'※ 更偏产品化、实验平台和决策系统闭环',d:{domain_ds:2,mlops:1,causal:2}}
 ]},

{id:'d_robot_manipulation',phase:'deep',cat:'机器人操作深挖 / Manipulation Deep Dive',
 triggerDirs:['robotics','embodied','motion','perception'], triggerThreshold:10,
 text:'如果继续深挖“机器人怎样真正动手做事”，你最想长期攻哪类问题？',
 opts:[
  {t:'抓取与放置——杂乱场景下怎样稳定拿对、放对、不打滑',sub:'※ 更偏抓取、接触建模和操作稳定性',d:{robotics:3,perception:2,control:1}},
  {t:'移动操作——机器人一边移动一边操作时，规划和控制怎样配合',sub:'※ 更偏 mobile manipulation、路径约束和动作串联',d:{motion:3,robotics:2,control:1}},
  {t:'从示范学技能——看几次人类操作后，怎样稳地迁移到新物体和新环境',sub:'※ 更偏 imitation learning、数据收集和泛化',d:{embodied:3,robotics:2,rl:1}},
  {t:'接触与柔顺控制——机器人碰到人和物体时怎样仍然安全、可解释、可控',sub:'※ 更偏 compliant control、触觉和人机接触安全',d:{control:2,robotics:2,hri:1}}
 ]},

{id:'d_ee_sensor_frontend',phase:'deep',cat:'传感前端深挖 / Sensor Front-End Deep Dive',
 triggerDirs:['signal','elec_sys','photonics'], triggerThreshold:10,
 text:'如果继续深挖“真实世界信号怎样进系统”，你最想长期做哪类问题？',
 opts:[
  {t:'模拟前端——微弱信号在第一步就别被噪声和失真淹没',sub:'※ 更偏 AFE、噪声控制、放大与滤波设计',d:{elec_sys:3,signal:2,photonics:1}},
  {t:'成像链路——从光到像素再到 ISP，哪一步最影响最终可用性',sub:'※ 更偏成像器件、ISP 和视觉前端系统',d:{photonics:3,signal:2,cv:1}},
  {t:'传感系统集成——传感器、电路、固件和控制怎样真正配成一个产品',sub:'※ 更偏系统级感知集成，而不是单点器件研究',d:{signal:2,embedded:1,elec_sys:2}},
  {t:'高速接口与信号完整性——信息越快越容易乱，链路怎样还能稳',sub:'※ 更偏高速链路、时钟、抖动和板级接口设计',d:{elec_sys:3,comm:1,signal:1}}
 ]},

{id:'d_ce_reconfigurable_runtime',phase:'deep',cat:'可重构平台深挖 / Reconfigurable Platform Deep Dive',
 triggerDirs:['fpga','hw_sw','soc','arch'], triggerThreshold:10,
 text:'如果继续深挖 CE 里的“平台与原型”，你最想长期做哪类问题？',
 opts:[
  {t:'可重构原型——先用 FPGA 把体系结构想法快速跑通和验证',sub:'※ 更偏原型验证、架构试错和快速迭代',d:{fpga:3,arch:2,soc:1}},
  {t:'跨层调优——编译器、runtime 和硬件一起动，才能把性能真正吃满',sub:'※ 更偏 runtime、mapping 和跨层协同优化',d:{hw_sw:3,arch:2,fpga:1}},
  {t:'系统集成——原型不只是能跑，还要能接驱动、接设备、接应用',sub:'※ 更偏平台软件栈、外设接口和 SoC 级集成',d:{soc:3,emb_sw:2,hw_sw:1}},
  {t:'可观测与验证——原型复杂了以后，怎样快速看清到底哪层出了问题',sub:'※ 更偏 profiling、debug、trace 和系统验证',d:{hw_sw:2,fpga:2,systems:1}}
 ]},

{id:'d_or_network_design',phase:'deep',cat:'网络与服务优化深挖 / Network & Service Optimization Deep Dive',
 triggerDirs:['or_ops','scheduling','stoch','optim'], triggerThreshold:10,
 text:'如果继续深挖“很多节点怎样一起协作更优”，你最想长期做哪类问题？',
 opts:[
  {t:'物流与配送网络——仓、车、路和时窗一起变化时怎样仍然高效',sub:'※ 更偏 network design、vehicle routing 和时窗优化',d:{or_ops:3,scheduling:2,optim:1}},
  {t:'服务系统容量——排队、等待、峰值和资源冗余怎样一起平衡',sub:'※ 更偏 service operations、queueing 和容量规划',d:{stoch:3,or_ops:2,scheduling:1}},
  {t:'实时资源调度——需求在变、资源也在变，方案还得快速重算',sub:'※ 更偏 online optimization、实时调度和动态约束',d:{scheduling:3,optim:2,stoch:1}},
  {t:'网络化决策平台——不是只出一个解，而是让系统持续滚动给出更好的动作建议',sub:'※ 更偏 OR 系统产品化、决策闭环和平台接入',d:{or_ops:3,optim:1,domain_ds:1}}
 ]},
];

// ── QUESTION BANK NORMALIZATION / UX CLEANUP ───────────────────────────────
var _questionBanksNormalized = false;
var QUESTION_BANKS = [ANCHOR_Qs, AI_Qs, CS_Qs, DS_Qs, ROBOTICS_Qs, EE_Qs, CE_Qs, OR_Qs, DEEP_Qs, CAREER_Qs];
var ANCHOR_ROUTING_IDS = [
  'a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12',
  'a13','a14','a15','a16','a17','a18','a19','a20','a21','a22','a23',
  'a24','a25','a26','a27','a28','a29','a30','a31','a32','a33','a34',
  'a35','a36','a37','a38','a39','a40'
];
var ENGLISH_ONLY_RE = /^[^一-龥]*[A-Za-z][^一-龥]*$/;
var PREFERENCE_QUESTION_RE = /感兴趣|研究冲动|最关注|最在意|最想深入|最想每天做|职业偏好|更愿意|更喜欢|最享受|最想做|最有吸引力|最值得|最希望|最想专攻|最想攻克|最想解决|偏好|最重要|最优先|最自然|最核心|最愿意|最有研究动力/;
var NEUTRAL_OPTION_RE = /没有明确|无明显偏好|暂时没有|不特别想|都不是我|不感兴趣|核心兴趣|目前不在|暂时还没有特别|还没有特别|想再多看看|没有特别想|没有特别吸引力|没有特别偏好|不是我最想长期投入|不是我最(?:想|感兴趣).*方向|不是我最感兴趣|目前不是我最感兴趣|目前不是我最想|都不是我最感兴趣|都不是我最想/;
var OPTION_NOTE_RULES = [
  {re:/Transformer|注意力机制/, note:'Transformer / 注意力机制：大语言模型最常用的网络结构，会自动判断序列里哪些信息更重要。'},
  {re:/baseline/i, note:'baseline：先跑一个最基础、最容易实现的版本，作为后续改进时的对照线。'},
  {re:/生成式预训练|预测下一\s*token|next token/i, note:'生成式预训练：让模型不断猜“下一个词/符号是什么”，在这个过程中学到语言、结构和世界规律。'},
  {re:/A\/B|AB 测试|A\/B 测试/, note:'A/B 测试：把用户随机分组，对比新旧方案的真实效果，避免只凭感觉做决策。'},
  {re:/因果推断|因果/, note:'因果推断：不只看“两个现象一起出现”，而是判断“是不是这个因素真的导致了结果”。'},
  {re:/RAG/, note:'RAG：先检索外部资料，再让大模型作答，常用来减少胡编并补充最新知识。'},
  {re:/RLHF|DPO|SFT|RLAIF|Post-training/i, note:'后训练：在预训练完成后，用人工偏好或规则继续把模型调成更好用、更安全的状态。'},
  {re:/KV Cache|投机解码|连续批处理/, note:'这些都是大模型推理优化手段，目标是让回答更快、显存更省、单位成本更低。'},
  {re:/ANN|向量检索|相似搜索/, note:'向量检索：把文本或图片变成向量后，按“语义接近”而不是关键词完全匹配去找内容。'},
  {re:/ASR|语音识别/, note:'ASR：让机器把人说的话自动转成文字，是语音输入系统的基础模块。'},
  {re:/TTS|语音合成/, note:'TTS：让机器把文字自然地念出来，常用于语音助手、有声内容和陪伴机器人。'},
  {re:/VLM|视觉语言模型/, note:'VLM：同时看图和读字的模型，能做图文问答、文档理解、视觉搜索等任务。'},
  {re:/CT|MRI|病理切片|医学影像/, note:'医学影像：把 X 光、CT、MRI、病理图像交给模型分析，辅助医生诊断和筛查。'},
  {re:/NeRF|3D Gaussian Splatting|3DGS/i, note:'这类方法能从多张图片还原三维场景，常见于 3D 重建、AR/VR 和机器人感知。'},
  {re:/CUDA|Kernel|并行计算核/, note:'CUDA Kernel：直接在 GPU 上写并行计算代码，用来把模型训练或推理跑得更快。'},
  {re:/ZeRO|FSDP|Pipeline 并行|分布式训练/, note:'分布式训练：把超大模型拆到多张 GPU/多台机器上协同训练，解决显存和吞吐问题。'},
  {re:/Triton|XLA|TorchInductor/, note:'这些是深度学习编译器/内核工具，作用是把模型代码自动编译成更高效的底层执行方式。'},
  {re:/GDSII|RTL|tape-out|流片|Chiplet|先进封装|数字 IC|模拟 IC|混合信号 IC|ASIC|芯片设计/i, note:'这些词都和芯片设计流程有关，涵盖从写硬件逻辑到真正流片制造的各个环节。'},
  {re:/FPGA|可重构/, note:'FPGA：一种可反复改写的芯片，适合快速验证硬件想法或做低延迟专用计算。'},
  {re:/NPU|AI 加速器|Tensor Core/, note:'AI 加速器：专门为神经网络计算设计的硬件，目标是让训练或推理更快、更省电。'},
  {re:/Cache|HBM|近存计算|内存墙/, note:'这些都和“数据搬运”有关。很多系统慢不是算得慢，而是数据在内存和计算单元之间搬得太慢。'},
  {re:/SoC|片上系统/, note:'SoC：把 CPU、内存控制器、AI 单元、接口等做进一块芯片里，常见于手机、车载和边缘设备。'},
  {re:/微架构|Microarchitecture/i, note:'微架构：处理器内部的具体组织方式，比如流水线、执行单元、缓存和分支预测如何配合工作。'},
  {re:/数据湖|湖仓|血缘追踪|元数据/, note:'这些概念都属于数据平台建设，目标是让数据更好找、更可靠、更方便复用。'},
  {re:/特征工程|特征平台/, note:'特征工程：把原始数据整理成模型更容易使用的输入，是很多推荐、风控、广告系统的基础。'},
  {re:/监控|数据漂移|模型退化/, note:'模型监控：上线后持续看输入数据和输出结果有没有“变味”，及时发现模型失效。'},
  {re:/贝叶斯/, note:'贝叶斯方法：用概率分布表达“不确定”，不是只给一个答案，而是连可信程度一起给出来。'},
  {re:/时间序列|时序/, note:'时间序列：按时间顺序记录的数据，比如销量、股价、设备传感器读数。重点是预测趋势和变化。'},
  {re:/\bSLA\b|服务等级目标/i, note:'SLA：服务等级目标，常用来衡量系统是否够稳定，比如一年里能不能做到 99.99% 在线。'},
  {re:/Profiler|profiling/i, note:'Profiler：性能诊断工具，能告诉你程序时间究竟耗在哪一段代码上。'},
  {re:/差分隐私|联邦学习|安全多方计算/, note:'这些都是“既想用数据，又想保护数据”的方法，常用于隐私保护型 AI 和统计分析。'},
  {re:/Prompt Injection|模型窃取|对抗攻击/, note:'这些属于 AI 安全问题，关注模型会不会被恶意诱导、复制或骗出错误结果。'},
  {re:/零知识证明|同态加密|后量子密码/, note:'这些是现代密码学里的高级工具，用来在保护隐私的前提下验证信息或完成计算。'},
  {re:/SLAM/, note:'SLAM：让机器人一边移动，一边判断自己在哪，同时把周围环境地图建出来。'},
  {re:/Sim-to-Real/, note:'Sim-to-Real：模型在仿真里学得很好，但到了真实机器和真实环境里往往会掉性能，这就是它要解决的问题。'},
  {re:/VLA|语言-行动|Vision-Language-Action/i, note:'VLA：把视觉、语言和动作连起来，让机器人能听懂指令并在真实世界执行。'},
  {re:/MPC|模型预测控制/, note:'MPC：每一步都先预测未来几步会发生什么，再选当前最好的控制动作。'},
  {re:/Rubin|潜在结果|Pearl|do-calculus|SCM/i, note:'这些是因果推断里的经典框架，用来严格定义“如果我干预一下，结果会不会变”。'},
  {re:/Occupancy World Model|世界模型/, note:'世界模型：让系统先在内部“脑补”周围环境和未来变化，再决定下一步怎么做。'},
  {re:/PINN|Physics-Informed Neural Networks/i, note:'PINN：把物理规律直接写进神经网络训练里，让模型既学数据也遵守方程约束。'},
  {re:/Shapley|拍卖|VCG|GSP|机制设计/i, note:'这些属于博弈论和机制设计，研究怎样设计规则，才能让参与者更愿意诚实行动。'},
  {re:/泛化理论|Generalization/i, note:'泛化：模型在没见过的新数据上还能不能保持效果，不只是把训练集背下来。'},
  {re:/多模态|Multimodal/i, note:'多模态：让模型同时处理文字、图像、语音、视频等多种输入，而不是只会一种。'},
  {re:/强化学习|Reinforcement Learning|\bRL\b/i, note:'强化学习：让系统通过“尝试动作→得到反馈”的方式学会长期决策。'},
  {re:/表示学习|Representation Learning/i, note:'表示学习：先把复杂数据变成更有结构的向量表示，后续检索、分类、生成都会更容易。'},
  {re:/自监督|Self-Supervised/i, note:'自监督：不靠人工标注，而是从数据本身制造训练信号，让模型先学会通用表征。'},
  {re:/规模定律|Scaling Laws/i, note:'规模定律：研究模型、数据和算力变大时，能力会按什么规律提升。'},
  {re:/对比学习|Contrastive/i, note:'对比学习：让相似样本的表示更接近、不相似样本更远，常用于无监督学习。'},
  {re:/扩散模型|Diffusion/i, note:'扩散模型：先把数据逐步加噪，再学会一步步去噪，常用于图片、视频和 3D 内容生成。'},
  {re:/推理速度|推理优化|Serving/i, note:'推理：模型训练完后真正给用户回答问题的阶段，核心是速度、显存占用和成本。'},
  {re:/导航|Navigation/i, note:'导航：让机器人或系统知道自己在哪、该往哪走，并安全到达目标。'},
  {re:/混合专家|MoE|稀疏激活/i, note:'混合专家：每次只激活模型里的一小部分参数，目标是提升能力同时节省算力。'},
  {re:/长上下文|Long Context/i, note:'长上下文：让模型能一次处理超长输入，比如整本书、整个代码库或长视频转写。'},
  {re:/检索|Retrieval|排序|Ranking/i, note:'检索/排序：先把候选内容找出来，再把最相关的内容排到前面，是搜索和推荐系统的核心。'},
  {re:/推荐系统|Recommendation/i, note:'推荐系统：根据用户历史和上下文，预测“下一条最可能让他感兴趣的内容”。'},
  {re:/联邦学习|Federated/i, note:'联邦学习：数据不离开本地设备，也能联合训练模型，常用于隐私敏感场景。'},
  {re:/差分隐私|Differential Privacy/i, note:'差分隐私：在统计结果里加入可控噪声，降低暴露单个用户信息的风险。'},
  {re:/安全多方计算|Secure Multi-Party|\bSMC\b/i, note:'安全多方计算：多方一起算一个结果，但彼此看不到对方原始数据。'},
  {re:/Side-Channel|旁路|侧信道/i, note:'侧信道攻击：不直接破解算法，而是从耗时、功耗、缓存命中等“旁路信号”里偷信息。'},
  {re:/零知识证明|Zero-Knowledge/i, note:'零知识证明：你可以证明自己知道某个秘密，但不用把秘密本身说出来。'},
  {re:/同态加密|Homomorphic/i, note:'同态加密：数据在加密状态下也能直接计算，适合隐私敏感场景。'},
  {re:/后量子密码|Post-Quantum/i, note:'后量子密码：面向未来量子计算威胁设计的新一代密码算法。'},
  {re:/程序分析|Program Analysis/i, note:'程序分析：不真正运行程序，也能推断代码里可能出错、变慢或不安全的地方。'},
  {re:/类型系统|Type System/i, note:'类型系统：用编译期规则提前拦住错误，避免程序跑起来才发现问题。'},
  {re:/查询优化|Query Optimization/i, note:'查询优化：数据库自动决定“先做哪一步、用什么索引”才能把查询跑得更快。'},
  {re:/向量数据库|Vector Database/i, note:'向量数据库：专门存储高维向量，用来做语义检索、RAG 和推荐召回。'},
  {re:/湖仓|Lakehouse|数据湖/i, note:'湖仓：把大数据存储和数仓分析能力合到一起，兼顾灵活性和治理。'},
  {re:/血缘|Lineage|元数据/i, note:'数据血缘：追踪“这张表/这个特征是从哪些原始数据一步步变来的”。'},
  {re:/特征存储|Feature Store/i, note:'特征平台：把训练和线上服务都要用的特征统一管理，避免线下线上不一致。'},
  {re:/分布偏移|Distribution Shift/i, note:'分布偏移：训练时见过的数据和真实世界分布不一样，模型就可能突然失效。'},
  {re:/数据飞轮/i, note:'数据飞轮：更多用户带来更多数据，更多数据让模型更好，模型更好又带来更多用户。'},
  {re:/Occupancy/i, note:'Occupancy：把空间中“哪里有东西、哪里可通行”表示成稠密网格或体素。'},
  {re:/V2X/i, note:'V2X：车与车、车与路侧设备、车与云之间共享信息，提升感知和规划能力。'},
  {re:/Rubin|潜在结果/i, note:'潜在结果框架：用“如果采取/不采取某个动作，各自会怎样”来定义因果效应。'},
  {re:/工具变量|Instrumental Variable|RDD|回归不连续/i, note:'这些都是因果推断里的“准实验”方法，用来在没法做随机实验时估计真实影响。'},
  {re:/CATE|DML|因果森林/i, note:'这些方法研究“同一个策略对不同人是不是效果不同”，适合做精细化决策。'},
  {re:/黑箱优化|Bayesian Optimization/i, note:'黑箱优化：目标函数没法直接求导时，用更聪明的试探方式找最优点。'},
  {re:/QAOA|量子退火/i, note:'这是量子优化方向的典型方法，目标是用量子计算处理特定难优化问题。'},
  {re:/PDE|微分方程|排队论/i, note:'这类方法都在做“建立数学模型并求解”，常见于仿真、网络容量和物理系统分析。'},
  {re:/arxiv/i, note:'arXiv：计算机和数学领域常用的论文预印本网站，很多最新研究会先发在这里。'},
  {re:/benchmark/i, note:'benchmark：用统一数据集和统一指标横向比较不同方法，避免只凭主观感觉判断优劣。'},
  {re:/\b(OSDI|SOSP|EuroSys)\b/i, note:'这些是系统和基础设施领域的代表性顶会，研究操作系统、分布式系统和大型平台。'},
  {re:/\b(ISCA|MICRO|HPCA)\b/i, note:'这些是计算机体系结构顶会，重点研究处理器、内存系统和 AI 加速器。'},
  {re:/\b(CVPR|ICCV|ECCV)\b/i, note:'这些是计算机视觉顶会，关注图像、视频、三维理解和视觉基础模型。'},
  {re:/\b(NeurIPS|ICML|ICLR)\b/i, note:'这些是机器学习顶会，常见主题包括深度学习、优化、表示学习和大模型。'},
  {re:/\b(ACL|EMNLP|NAACL)\b/i, note:'这些是自然语言处理顶会，研究文本理解、生成、检索和语言模型。'},
  {re:/\bUIST\b|\bCHI\b|人机交互顶会/i, note:'这些是人机交互顶会，研究界面、交互方式和人如何更自然地使用技术。'},
  {re:/\bCCS\b|IEEE S&P|USENIX Security|安全顶会/i, note:'这些是安全领域顶会，研究系统安全、隐私保护和攻防技术。'},
  {re:/\b(STOC|FOCS|SODA)\b/i, note:'这些是理论计算机科学顶会，研究算法、复杂度和严格的数学证明。'}
];
var QUESTION_HINT_OVERRIDES = {
  cs10:'这题不是在考你认不认识会议简称，而是在看你更愿意把未来几年放进哪类研究社区：系统、芯片、视觉、机器学习、语言、安全还是理论。',
  ai11:'这题没有标准答案，它更像在判断你会被哪一类“未来十年还会持续发酵的大问题”长期吸住。',
  a21:'这题在看你更适合哪种学术或工程共同体，不需要你真的认识这些人，只要选你最愿意天天和他们讨论问题的那种氛围。',
  a22:'这里的“难”不是考试难度，而是你愿不愿意把时间耗在这种困难上。愿意长期啃哪种难题，往往比“哪种更热门”更重要。',
  a14:'',
  c_vis3:'这题不是在问你会不会做多模态，而是在看你更想做哪一种工作：偏研究原理、偏产品落地、偏行业应用，还是偏底层平台。',
  c_air4:'这题在看你对表示学习最感兴趣的是哪一类问题：解释原理、扩展到新数据类型、做大规模应用，还是研究它什么时候真的能迁移成功。'
};
var OPTION_NOTE_OVERRIDES = {
  'a12::一个可监控的系统，SLA 99.99% 稳定运行':'意思是这套系统能长期稳定地跑着，平时可以随时看到它是否正常，一出问题也能很快发现。这里的 99.99% 可以简单理解为“几乎一直在线，很少出故障”。',
  'c_vis3::研究视觉语言模型的对齐机制':'更偏研究岗：你会更关心模型为什么能把“图片里的东西”和“文字里的意思”对应起来，而不只是把它做成一个功能。',
  'c_vis3::把 VLM 产品化——文档智能、图文问答、视觉搜索':'更偏产品落地：你想把图文能力做成用户真的会用的功能，比如合同问答、票据识别、商品搜图和文档检索。',
  'c_vis3::做医疗多模态——影像+报告+患者记录的联合理解':'更偏行业应用：你会把影像、文字报告和病历放在一起理解，目标是帮助医生判断得更快、更准。',
  'c_vis3::构建多模态 AI 系统的基础设施':'更偏平台与系统：你更在意训练、部署、数据管线和算力调度，让多模态模型能稳定跑起来、被团队反复使用。',
  'c_air4::理论上理解为什么对比学习有效——几何结构是什么':'更偏基础研究：你想回答“这类方法为什么有效”，会更常接触数学分析、表示空间结构和理论解释。',
  'c_air4::在新的模态（蛋白质/音频/代码）上做预训练':'更偏基础模型研究：你想把同一套学习方法带到新的数据类型里，看看模型能不能学出可迁移的通用表示。',
  'c_air4::把表示学习用于工业级推荐系统的 embedding':'更偏工业应用：embedding 可以理解为“给用户、商品、内容做一个数字画像”，方便系统做召回、匹配和排序。',
  'c_air4::研究迁移学习的泛化边界——什么条件下一定有效':'更偏理论边界：迁移学习就是“在一个任务上学到的能力，换到另一个任务还能不能用”；你关心它什么时候有效、什么时候会失灵。'
};
var QUESTION_HINT_RULES = [
  {re:/ML基础|ML Foundations/, note:'这题在判断你更想推进模型为什么能学会、如何更省数据，还是如何更高效地把能力做出来。'},
  {re:/表示学习|Representation Learning/, note:'表示学习可以理解为“先把复杂世界变成机器更容易理解的内部表征”，很多后续任务都建立在这一步。'},
  {re:/语言智能|Language Intelligence/, note:'语言智能主要研究“让模型读懂和生成自然语言”，包括问答、检索、对话、Agent 和长文理解。'},
  {re:/视觉智能|Vision Intelligence/, note:'视觉方向不只是识别图片，还包括视频理解、三维重建、医学影像和视觉基础模型。'},
  {re:/生成式AI|Generative AI/, note:'生成式 AI 关注“从无到有地产生内容”，比如图片、视频、3D 场景、代码和文本。'},
  {re:/强化学习|Reinforcement Learning/, note:'强化学习类题目都在问“系统怎样靠试错学会长期决策”，不要求你先学过 RL。'},
  {re:/高效AI|Efficient AI/, note:'这里关注的不是模型更大，而是同样能力下如何更快、更省显存、更省成本。'},
  {re:/可信AI|Trustworthy AI/, note:'可信 AI 关心的是模型能不能解释、能不能对齐、会不会在攻击或偏见场景里失控。'},
  {re:/多模态|Multimodal/, note:'多模态就是让系统同时理解文字、图像、语音或视频，不是只处理一种输入。'},
  {re:/系统方向|Systems/, note:'系统类题目不在考“会不会写底层代码”，而是在看你是否会被性能、可靠性和规模化问题吸引。'},
  {re:/安全与隐私|Security/, note:'安全与隐私不只是“防黑客”，还包括怎么在共享数据、运行模型和部署系统时不泄露、不失控。'},
  {re:/编程语言|PL/, note:'PL 指编程语言与编译器这条线，关注“代码怎样被表达、检查、翻译和优化”。'},
  {re:/图形学|Graphics/, note:'图形学不仅是游戏画面，也包括三维几何、渲染、神经重建和可交互视觉世界。'},
  {re:/数据系统|Data Systems/, note:'数据系统更偏“数据怎么存、怎么流、怎么被高效查询和复用”，是 AI 与数据产品的底座。'},
  {re:/统计方法|Statistical Methods/, note:'这里不是在考你会不会公式，而是在看你更愿意用哪类数学工具理解现实问题。'},
  {re:/因果与实验|Causal & Experimentation/, note:'这类题目关心“为什么会发生”，而不是只看“它们经常一起出现”。'},
  {re:/数据工程|Data Engineering/, note:'数据工程更偏底层供给：让数据稳定进来、正确处理、方便建模和监控。'},
  {re:/MLOps/, note:'MLOps 关注模型上线后的生命线：训练、部署、监控、回滚和实验追踪。'},
  {re:/可视化|Visualization/, note:'可视化不只是画图，而是把复杂结论变成别人能快速看懂、愿意拿去决策的界面。'},
  {re:/领域数据科学|Domain DS/, note:'领域数据科学是在具体行业里用统计、建模和实验方法解决真实问题，比如医疗、金融、制造。'},
  {re:/具身智能|Embodied AI/, note:'具身智能关心的是“AI 怎样进入真实物理世界”，所以会反复遇到感知、控制、语言和泛化问题。'},
  {re:/自主系统|Autonomous Systems/, note:'自主系统强调系统自己在复杂环境里感知、判断和行动，比如自动驾驶、无人机和移动机器人。'},
  {re:/SLAM|Perception|感知/, note:'感知/SLAM 类题目都在看你是否喜欢处理“机器怎么看懂世界、怎么知道自己在哪”。'},
  {re:/芯片|Chip Design|AI硬件|AI Hardware/, note:'这些题目更偏硬件与体系结构：怎样让计算真正落在更快、更省电、更适配 AI 的芯片上。'},
  {re:/信号处理|Signal Processing/, note:'信号处理是把连续世界里的声音、图像、雷达、电波等信息变成可分析、可控制的计算表示。'},
  {re:/控制系统|Control Systems/, note:'控制类题目关心的是“系统下一步该怎么动才稳、准、快”，常见于机器人、车辆和工业系统。'},
  {re:/通信|Communications/, note:'通信方向研究信息怎样在复杂信道里稳定传输，既有工程实现，也有很强的数学底层。'},
  {re:/优化|Optimization/, note:'优化题不只是“求最大最小”，而是在资源有限、约束很多时找到最好的可执行方案。'},
  {re:/统计深度|Statistics Deep Dive/, note:'这部分是在把统计/因果的大方向继续压到更具体的方法论层面，看你更想钻哪套工具。'},
  {re:/深度|Deep Dive/, note:'第三部分不是重新选专业，而是把你已经偏高的方向继续压缩成更具体的研究口。'}
];
var PHASE_META = {
  anchor:   {part:'第一部分', section:'粗分与性格锚定', pill:'第一部分 · 基础锚定', short:'基础锚定', icon:'🧭', color:'var(--accent3)', desc:'先不急着谈具体专业，先看你更像哪类问题解决者，以及你做事时真正被什么驱动。'},
  ai:       {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · AI / ML', short:'AI / ML 专项', icon:'🤖', color:'var(--ai-color)', desc:'继续在 AI / ML 里收窄到你愿意长期投入的子方向。'},
  cs:       {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · CS', short:'CS 专项', icon:'⚙️', color:'var(--cs-color)', desc:'继续在计算机科学里判断你更偏系统、理论、语言还是交互。'},
  ds:       {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · DS / Stats', short:'数据科学专项', icon:'📊', color:'var(--ds-color)', desc:'继续细分你更偏统计推断、数据产品、数据工程还是因果分析。'},
  robotics: {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · Robotics', short:'机器人专项', icon:'🦾', color:'var(--rb-color)', desc:'继续细分你在机器人、具身智能、自主系统里的真实兴趣点。'},
  ee:       {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · ECE / EE', short:'ECE / EE 专项', icon:'🔌', color:'var(--ee-color)', desc:'继续细分你在芯片、控制、信号、通信和嵌入式里的偏好。'},
  or:       {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · Math / OR', short:'数学 / OR 专项', icon:'📐', color:'var(--or-color)', desc:'继续细分你更适合做优化、运筹、随机系统还是科学计算。'},
  ce:       {part:'第二部分', section:'专业与方向细分', pill:'第二部分 · CE', short:'CE 专项', icon:'🖥️', color:'#818cf8', desc:'继续细分你在体系结构、软硬件协同和 AI 硬件里的兴趣。'},
  deep:     {part:'第三部分', section:'研究领域深挖', pill:'第三部分 · 研究领域', short:'研究领域深挖', icon:'🔬', color:'var(--accent)', desc:'把前面高分的方向继续收窄到具体研究问题，看看你更想长期攻哪个研究口。'},
  career:   {part:'第四部分', section:'职业路径匹配', pill:'第四部分 · 职业路径', short:'职业路径匹配', icon:'💼', color:'#c084fc', desc:'最后不再问“学什么”，而是问“你每天更想做什么工作”，把方向落到具体岗位上。'}
};

function getCnLabel(text) {
  if (!text) return '';
  return String(text).split('/')[0].trim();
}

function getPhaseMeta(phaseKey) {
  return PHASE_META[phaseKey] || {part:'当前部分', section:'继续探索', pill:'继续探索', short:'继续探索', icon:'✨', color:'var(--accent)', desc:'继续探索你的方向。'};
}

function isNeutralOptionText(text) {
  return NEUTRAL_OPTION_RE.test(text || '');
}

function needsNeutralOption(q) {
  if (!q || q.phase === 'anchor') return false;
  var shouldOfferNeutral = getStageKey(q.phase) !== 'part1' || PREFERENCE_QUESTION_RE.test(q.text || '');
  return shouldOfferNeutral && !(q.opts || []).some(function(opt) {
    return isNeutralOptionText(opt.t || '');
  });
}

function getNeutralOptionText(q) {
  var text = q.text || '';
  if (/最关注|最在意|最重要|最优先/.test(text)) return '这些点里我暂时没有最关注的一个';
  if (/职业偏好|最想每天做|最想做|更愿意做/.test(text)) return '目前还没有特别想长期投入的那一种';
  if (/感兴趣|研究冲动|最想深入|最想专攻|最想攻克|最想解决/.test(text)) return '目前还没有特别想深入的方向';
  if (/更愿意|更喜欢|最享受/.test(text)) return '目前没有明显偏好，想再多看看';
  return '暂时没有明确偏好';
}

function getNeutralOptionScore(q) {
  if (q && q.phase === 'deep') {
    if (q.triggerDir) {
      var single = {};
      single[q.triggerDir] = 1;
      return single;
    }
    if (q.triggerDirs && q.triggerDirs.length) {
      var multi = {};
      multi[q.triggerDirs[0]] = 1;
      return multi;
    }
  }
  var phase = q.phase;
  if (phase === 'ai') return {applied_ai:1};
  if (phase === 'cs') return {systems:1};
  if (phase === 'ds') return {ds_sci:1};
  if (phase === 'robotics') return {robotics:1};
  if (phase === 'ee') return {embedded:1};
  if (phase === 'or') return {optim:1};
  if (phase === 'deep') return {};
  if (phase === 'career') return {};
  return {};
}

function buildNeutralOption(q) {
  return {
    t: getNeutralOptionText(q),
    sub: q.phase === 'career'
      ? '如果这些岗位画面暂时都不够明确，可以先保留空间，最后仍会结合前面三部分的方向信号给出职业建议。'
      : '如果这些选项暂时都不够打动你，可以先保留探索空间，系统会优先沿用前面已经形成的方向信号继续判断。',
    d: getNeutralOptionScore(q),
    exclusive: !!q.multiSelect,
    neutral: true
  };
}

function getNeutralOptionSub(q) {
  return q.phase === 'career'
    ? '如果这些岗位画面暂时都不够明确，也没关系，系统会更多参考你前面已经形成的方向信号。'
    : '如果这些选项暂时都不够打动你，可以先保留探索空间，系统会优先沿用前面已经形成的方向信号继续判断。';
}

function deriveOptionNote(q, opt) {
  if (!opt || opt.neutral || isNeutralOptionText(opt.t || '')) return '';
  var overrideKey = (q && q.id ? q.id : '') + '::' + (opt.t || '');
  if (Object.prototype.hasOwnProperty.call(OPTION_NOTE_OVERRIDES, overrideKey)) {
    return OPTION_NOTE_OVERRIDES[overrideKey];
  }
  var rawSub = (opt.sub || '').trim();
  if (rawSub && /[一-龥]/.test(rawSub)) return rawSub.replace(/^※\s*/, '');
  var source = [opt.t || '', rawSub].join(' ');
  var notes = [];
  OPTION_NOTE_RULES.forEach(function(rule) {
    if (rule.re.test(source) && notes.indexOf(rule.note) < 0) notes.push(rule.note);
  });
  return notes.slice(0, 2).join('；');
}

function deriveQuestionHint(q) {
  if (!q) return '';
  if (Object.prototype.hasOwnProperty.call(QUESTION_HINT_OVERRIDES, q.id)) return QUESTION_HINT_OVERRIDES[q.id];
  var source = [q.cat || '', q.text || ''].join(' ');
  for (var i = 0; i < QUESTION_HINT_RULES.length; i++) {
    if (QUESTION_HINT_RULES[i].re.test(source)) return QUESTION_HINT_RULES[i].note;
  }
  if (q.phase === 'anchor') {
    return '第一部分主要看你天然被哪类问题吸引，以及你更像研究型、系统型、数据型还是硬件/机器人型的问题解决者。';
  }
  if (q.phase === 'career') {
    return '这题在看你更想过哪种工作日常，而不是考你现在已经掌握了多少技能。';
  }
  return '看不懂专业词也没关系，先看每个选项下面的一句解释，再选你愿意长期投入、最不容易做腻的那类问题。';
}

function normalizeQuestionBanks() {
  if (_questionBanksNormalized) return;
  _questionBanksNormalized = true;
  QUESTION_BANKS.forEach(function(bank) {
    var uniqueQuestions = [];
    var seenQuestionKeys = {};
    bank.forEach(function(q) {
      var qKey = (q.phase || '') + '|' + (q.text || '').trim();
      if (seenQuestionKeys[qKey]) return;
      seenQuestionKeys[qKey] = true;
      var seen = {};
      q.opts = (q.opts || []).filter(function(opt) {
        var key = (opt.t || '').trim();
        if (!key || seen[key]) return false;
        seen[key] = true;
        return true;
      });
      q.opts.forEach(function(opt) {
        if (isNeutralOptionText(opt.t || '')) {
          opt.sub = ((opt.sub || '').trim() && /[一-龥]/.test(opt.sub || ''))
            ? opt.sub.trim()
            : getNeutralOptionSub(q);
          opt.exclusive = !!q.multiSelect;
          opt.neutral = true;
          opt.d = opt.d || getNeutralOptionScore(q);
          return;
        }
        var note = deriveOptionNote(q, opt);
        opt.sub = note || '';
      });
      if (needsNeutralOption(q)) q.opts.push(buildNeutralOption(q));
      var deduped = {};
      var seenNeutral = false;
      q.opts = q.opts.filter(function(opt) {
        var textKey = (opt.t || '').trim();
        var isNeutral = !!opt.neutral || isNeutralOptionText(textKey);
        var key = isNeutral ? '__neutral__' : textKey;
        if (isNeutral) {
          if (seenNeutral) return false;
          seenNeutral = true;
        }
        if (deduped[key]) return false;
        deduped[key] = true;
        return true;
      });
      q.hint = q.hint || deriveQuestionHint(q);
      uniqueQuestions.push(q);
    });
    bank.splice(0, bank.length);
    uniqueQuestions.forEach(function(q) { bank.push(q); });
  });
}


// ═══════════════════════════════════════════════════════
// PART 5: QUIZ ENGINE (3-phase, 7 domains)
// ═══════════════════════════════════════════════════════

var scores={}, careerScores={}, answers=[], qSequence=[], curIdx=0;
var phaseBuilt=false, deepBuilt=false, careerBuilt=false;
var _viewingHistorySnapshot = false;
var _activeHistorySnapshot = null;
var phaseActivated={anchor:true,ai:false,cs:false,ds:false,robotics:false,ee:false,ce:false,or:false,deep:false,career:false};
var phase2Domains=[], phase2Finalists=[], primaryDomain=null, careerClustersSelected=[];
var DOMAIN_KEYS={
  ai:['ml','dl','repr','ssl','transfer','foundation','ml_theory','stat_learn','opt_ml','scaling','nlp','llm','ir','recsys','speech','cv','med_vision','video','vision3d','multimodal','vlm','doc_intel','generative','diffusion','creative_ai','rl','offline_rl','multiagent','planning_ai','efficient','quant','inf_opt','xai','safety','fairness','applied_ai'],
  cs:['systems','dist_sys','sys_ai','cloud','db','stream','theory','algo','complexity','pl','formal','security','networks','graphics','geo_proc','hci','vis'],
  ee:['elec_sys','signal','comm','info_th','control','opt_ctrl','embedded','iot','vlsi','eda','photonics'],
  ds:['stats','bayes','ds_sci','ts_anal','causal','econom','ds_eng','data_qual','mlops','domain_ds'],
  rb:['robotics','motion','mpc','perception','slam','embodied','vla','hri','autonomous'],
  or:['sci_comp','optim','conv_opt','comb_opt','or_ops','scheduling','stoch','uq','game_th','dynamic_prog','comp_bio'],
  ce:['arch','mem_sys','emb_sw','hw_sw','soc','ai_hw','npu','in_mem','fpga','logic_des']
};

var PHASE2_TRACKS={
  ai:AI_Qs,
  cs:CS_Qs,
  ds:DS_Qs,
  robotics:ROBOTICS_Qs,
  ee:EE_Qs,
  ce:CE_Qs,
  or:OR_Qs
};

var PHASE2_LIMITS={1:15,2:12,3:9};
var PHASE3_LIMIT=9;

var DEEP_DOMAIN_MAP={
  ai:['d_foundation','d_nlp_ir','d_llm','d_cv','d_sys','d_multimodal_gen','d_security','d_optim','d_ai_eval'],
  cs:['d_sys','d_security','d_pl_formal','d_graphics_hci','d_db_infra','d_theory_algos','d_network_cloud','d_devinfra','d_cs_storage_reliability'],
  ds:['d_stats','d_bayes_ts','d_data_eng','d_experiment_policy','d_forecast_decision','d_domain_risk','d_product_metrics','d_decision_analytics','d_ds_intervention_design'],
  robotics:['d_robot_perception','d_embodied','d_autonomous','d_control_emb','d_motion_control','d_hri_field','d_robot_learning','d_field_robotics','d_robot_manipulation'],
  ee:['d_signal_comm','d_vlsi','d_arch_codesign','d_control_emb','d_embedded_edge','d_devices_photonics','d_mixed_signal','d_wireless_systems','d_ee_sensor_frontend'],
  ce:['d_arch_codesign','d_vlsi','d_firmware_soc','d_accelerator_runtime','d_ce_platform','d_control_emb','d_memory_runtime','d_device_platform','d_ce_reconfigurable_runtime'],
  or:['d_optim','d_or_decision','d_bayes_ts','d_market_risk','d_sci_modeling','d_or_products','d_service_risk','d_mechanism_platform','d_or_network_design']
};

var CAREER_DOMAIN_CLUSTER_MAP={
  ai:['career_ai_research','career_llm_nlp','career_vision_gen','career_systems'],
  cs:['career_systems','career_hw_chip'],
  ds:['career_data'],
  robotics:['career_robotics'],
  ee:['career_hw_chip'],
  ce:['career_hw_chip','career_systems'],
  or:['career_or']
};

function resetAll(){
  scores={};careerScores={};answers=[];qSequence=[];curIdx=0;
  phaseActivated={anchor:true,ai:false,cs:false,ds:false,robotics:false,ee:false,ce:false,or:false,deep:false,career:false};
  phaseBuilt=false;deepBuilt=false;careerBuilt=false;
  _viewingHistorySnapshot=false;
  phase2Domains=[];phase2Finalists=[];primaryDomain=null;careerClustersSelected=[];
}

function getStageKey(phaseKey) {
  if (phaseKey === 'anchor') return 'part1';
  if (phaseKey === 'deep') return 'part3';
  if (phaseKey === 'career') return 'part4';
  return 'part2';
}

function getStageInfoFromPhase(phaseKey) {
  var stageKey = getStageKey(phaseKey);
  if (stageKey === 'part1') return { key: stageKey, label: '第一部分', desc: '粗分与性格锚定' };
  if (stageKey === 'part2') return { key: stageKey, label: '第二部分', desc: '专业与方向细分' };
  if (stageKey === 'part3') return { key: stageKey, label: '第三部分', desc: '研究领域深挖' };
  return { key: stageKey, label: '第四部分', desc: '职业路径匹配' };
}

function getStageQuestionCount(stageKey) {
  return qSequence.filter(function(qq) {
    return getStageKey(qq.phase) === stageKey;
  }).length;
}

function getStageAnsweredCount(stageKey) {
  return qSequence.slice(0, curIdx).filter(function(qq) {
    return getStageKey(qq.phase) === stageKey;
  }).length;
}

function getDeepTriggerScore(q) {
  if (!q) return 0;
  if (q.triggerDir) return scores[q.triggerDir] || 0;
  if (q.triggerDirs && q.triggerDirs.length) {
    return q.triggerDirs.reduce(function(best, key) {
      return Math.max(best, scores[key] || 0);
    }, 0);
  }
  return 0;
}

function startQuiz(){
  // _startQuizCore is defined later in the script; call via window to be safe
  if (typeof canAccessQuiz === 'function' && canAccessQuiz()) {
    if (typeof _startQuizCore === 'function') {
      _startQuizCore();
    } else {
      // Fallback: inline start (should never happen in production)
      resetAll();
      var intro = document.getElementById('intro');
      var quiz  = document.getElementById('quiz');
      if (intro) intro.style.display = 'none';
      if (quiz)  quiz.style.display  = 'block';
      qSequence = ANCHOR_Qs.slice();
      curIdx = 0;
      updateProgress();
      renderQ();
    }
  } else {
    openRedeemOverlay();
  }
}

function addScores(d){
  if(!d) return;
  Object.keys(d).forEach(function(k){
    var v=d[k];
    if(k.indexOf('career_')===0){
      careerScores[k]=(careerScores[k]||0)+v;
    } else {
      scores[k]=(scores[k]||0)+v;
    }
  });
}

function domainSum(dom, sourceScores){
  var pool = sourceScores || scores;
  var vals=(DOMAIN_KEYS[dom]||[]).map(function(k){ return pool[k]||0; }).filter(function(v){ return v>0; });
  if(!vals.length) return 0;
  vals.sort(function(a,b){ return b-a; });
  var head=vals.slice(0,6).reduce(function(sum,v){ return sum+v; },0);
  var tail=vals.slice(6,10).reduce(function(sum,v){ return sum+v; },0);
  return head + tail*0.25;
}

function getPhaseDomainScores() {
  return {
    ai:domainSum('ai'),
    cs:domainSum('cs'),
    ds:domainSum('ds'),
    robotics:domainSum('rb'),
    ee:domainSum('ee'),
    ce:domainSum('ce'),
    or:domainSum('or')
  };
}

function getQuestionById(qid) {
  var found = null;
  QUESTION_BANKS.some(function(bank) {
    found = bank.find(function(q) { return q.id === qid; });
    return !!found;
  });
  return found;
}

function collectLeafScoresFromAnswers(filterFn) {
  var leafScores = {};
  answers.forEach(function(answer) {
    var q = getQuestionById(answer.qid);
    if (!q || (filterFn && !filterFn(q, answer))) return;
    (answer.selectedIdxs || []).forEach(function(idx) {
      var opt = q.opts[idx];
      if (!opt || !opt.d) return;
      Object.keys(opt.d).forEach(function(key) {
        if (key.indexOf('career_') === 0) return;
        leafScores[key] = (leafScores[key] || 0) + opt.d[key];
      });
    });
  });
  return leafScores;
}

function getDomainScoresFromLeafScores(leafScores) {
  return {
    ai: domainSum('ai', leafScores),
    cs: domainSum('cs', leafScores),
    ds: domainSum('ds', leafScores),
    robotics: domainSum('rb', leafScores),
    ee: domainSum('ee', leafScores),
    ce: domainSum('ce', leafScores),
    or: domainSum('or', leafScores)
  };
}

function getAnchorRoutingScores() {
  var routingLookup = {};
  ANCHOR_ROUTING_IDS.forEach(function(id) { routingLookup[id] = true; });
  return getDomainScoresFromLeafScores(collectLeafScoresFromAnswers(function(q) {
    return q.phase === 'anchor' && !!routingLookup[q.id];
  }));
}

function getPhase2DecisionScores() {
  var activeLookup = {};
  (phase2Domains.length ? phase2Domains : resolvePhase2Domains()).forEach(function(dom) {
    activeLookup[dom] = true;
  });
  var trackScores = {
    ai: 0,
    cs: 0,
    ds: 0,
    robotics: 0,
    ee: 0,
    ce: 0,
    or: 0
  };
  answers.forEach(function(answer) {
    var q = getQuestionById(answer.qid);
    if (!q || !activeLookup[q.phase]) return;
    var phaseDomain = q.phase;
    (answer.selectedIdxs || []).forEach(function(idx) {
      var opt = q.opts[idx];
      if (!opt || !opt.d) return;
      trackScores[phaseDomain] = (trackScores[phaseDomain] || 0) + 2.4;
      Object.keys(activeLookup).forEach(function(dom) {
        var domKey = dom === 'robotics' ? 'rb' : dom;
        var contribution = (DOMAIN_KEYS[domKey] || []).reduce(function(sum, key) {
          if (key.indexOf('career_') === 0) return sum;
          return sum + (opt.d[key] || 0);
        }, 0);
        if (!contribution) return;
        var weight = dom === phaseDomain ? 0.9 : 0.28;
        trackScores[dom] = (trackScores[dom] || 0) + contribution * weight;
      });
    });
  });
  return trackScores;
}

function activatePhaseDomains(domains) {
  phaseActivated.ai = domains.indexOf('ai') >= 0;
  phaseActivated.cs = domains.indexOf('cs') >= 0;
  phaseActivated.ds = domains.indexOf('ds') >= 0;
  phaseActivated.robotics = domains.indexOf('robotics') >= 0;
  phaseActivated.ee = domains.indexOf('ee') >= 0;
  phaseActivated.ce = domains.indexOf('ce') >= 0;
  phaseActivated.or = domains.indexOf('or') >= 0;
}

function resolvePhase2Domains() {
  var sums = getAnchorRoutingScores();
  var ranking = Object.keys(sums).map(function(dom){
    return {dom:dom, score:sums[dom]||0};
  }).sort(function(a, b) {
    return b.score - a.score;
  });
  var top = ranking[0];
  var second = ranking[1];
  if (!top || top.score <= 0) return ['ai'];
  var activated = [top.dom];
  if (second && second.score > 0) {
    var total = ranking.reduce(function(sum, item){ return sum + item.score; }, 0) || 1;
    var secondShare = second.score / total;
    var secondRel = second.score / (top.score || 1);
    var closeGap = (top.score - second.score) <= 5;
    if (second.score >= 9 && (secondRel >= 0.66 || secondShare >= 0.22 || closeGap)) {
      activated.push(second.dom);
    }
  }
  return activated;
}

function getPhase2TrackLimit(domainCount, dom) {
  var bank = PHASE2_TRACKS[dom] || [];
  return Math.min(bank.length, PHASE2_LIMITS[domainCount] || 9);
}

function resolvePhase2Focus() {
  var phase2Scores = getPhase2DecisionScores();
  var anchorScores = getAnchorRoutingScores();
  var ranked = (phase2Domains.length ? phase2Domains : resolvePhase2Domains()).map(function(dom) {
    return {
      dom: dom,
      score: phase2Scores[dom] || 0,
      tie: anchorScores[dom] || 0,
      combined: (phase2Scores[dom] || 0) + (anchorScores[dom] || 0) * 0.38
    };
  }).sort(function(a, b) {
    if (b.combined !== a.combined) return b.combined - a.combined;
    if (b.score !== a.score) return b.score - a.score;
    return b.tie - a.tie;
  });
  var finalists = [];
  if (ranked[0]) finalists.push(ranked[0].dom);
  if (ranked[1]) {
    var topScore = ranked[0].combined || 1;
    var secondScore = ranked[1].combined || 0;
    var pairTotal = ranked[0].combined + secondScore || 1;
    if (secondScore >= topScore * 0.8 && secondScore / pairTotal >= 0.35) finalists.push(ranked[1].dom);
  }
  return { finalists: finalists, primary: finalists[0] || (ranked[0] && ranked[0].dom) || null };
}

function getDeepQuestionsForPrimaryDomain(dom) {
  var ids = DEEP_DOMAIN_MAP[dom] || [];
  return ids.map(function(id) {
    return DEEP_Qs.find(function(q) { return q.id === id; });
  }).filter(Boolean);
}

function getCareerClustersForPrimaryDomain(dom) {
  var relevant = (CAREER_DOMAIN_CLUSTER_MAP[dom] || Object.keys(CAREER_CLUSTER_TRIGGERS)).slice();
  var ranked = relevant.map(function(key) {
    var cfg = CAREER_CLUSTER_TRIGGERS[key];
    var sum = 0;
    (cfg.dirs || []).forEach(function(dirKey) { sum += (scores[dirKey] || 0); });
    return { key: key, score: sum, threshold: cfg.threshold || 10 };
  }).sort(function(a, b) {
    return b.score - a.score;
  });
  if (!ranked.length) return [];
  var selected = [ranked[0].key];
  if (ranked[1] && ranked[1].score >= ranked[1].threshold && ranked[1].score >= ranked[0].score * 0.58) {
    selected.push(ranked[1].key);
  }
  return selected;
}

function buildPhaseSequence(){
  if(phaseBuilt) return;
  phaseBuilt=true;
  phase2Domains = resolvePhase2Domains();
  activatePhaseDomains(phase2Domains);

  var added={};
  phase2Domains.forEach(function(dom){
    var track=PHASE2_TRACKS[dom];
    var trackKey=dom;
    if(!track || added[trackKey]) return;
    added[trackKey]=true;
    qSequence=qSequence.concat(track.slice(0, getPhase2TrackLimit(phase2Domains.length, dom)));
  });
  updateProgress();
}

function buildDeepSequence(){
  if(deepBuilt) return;
  deepBuilt=true;
  var focus = resolvePhase2Focus();
  phase2Finalists = focus.finalists;
  primaryDomain = focus.primary;
  var candidates = getDeepQuestionsForPrimaryDomain(primaryDomain).sort(function(a, b) {
    return getDeepTriggerScore(b) - getDeepTriggerScore(a);
  });

  if (!candidates.length) {
    candidates = DEEP_Qs.map(function(q) {
      return { q: q, score: getDeepTriggerScore(q) };
    }).sort(function(a, b) {
      return b.score - a.score;
    }).slice(0, PHASE3_LIMIT).map(function(item) { return item.q; });
  }

  candidates.slice(0, PHASE3_LIMIT).forEach(function(q) {
    qSequence.push(q);
  });
  updateProgress();
}

function shuffle(arr){
  for(var i=arr.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var tmp=arr[i];arr[i]=arr[j];arr[j]=tmp;
  }
  return arr;
}

function renderQ(){
  var q=qSequence[curIdx];
  if(!q){showResults();return;}
  updateProgress();

  var isMulti=q.multiSelect||false;
  var maxSel=q.maxSelect||1;
  var existingAns=answers.find(function(a){return a.qid===q.id;});
  var selectedIdxs=existingAns?existingAns.selectedIdxs.slice():[];

  // Phase label
  var phaseLabel=(getPhaseMeta(q.phase)||{}).short || q.phase;
  var catLabel=getCnLabel(q.cat);
  var canGoBack=curIdx>0 && qSequence[curIdx-1] && qSequence[curIdx-1].phase===q.phase;

  var letters='ABCDEFGHIJ';
  var html='<div class="q-card">';
  html+='<div class="q-meta"><span class="q-phase-badge">'+phaseLabel+'</span>';
  if(catLabel) html+='<span class="q-phase-badge">'+catLabel+'</span>';
  if(isMulti) html+='<div class="multi-badge">☑ 多选题 · 最多选 <strong>'+maxSel+'</strong> 项</div>';
  html+='</div>';
  html+='<div class="q-text">'+q.text+'</div>';
  if(q.hint) html+='<div class="q-hint">'+q.hint+'</div>';
  html+='<div class="q-opts">';
  q.opts.forEach(function(opt,i){
    var isSel=selectedIdxs.indexOf(i)>=0;
    var isDisabled=isMulti&&selectedIdxs.length>=maxSel&&!isSel;
    html+='<div class="opt'+(isSel?' selected':'')+(isDisabled?' disabled-opt':'')+'" onclick="selectOpt('+i+','+isMulti+','+maxSel+')">';
    html+='<div class="opt-letter" style="'+(isSel?'background:var(--accent);color:#fff;':'')+'">'+letters[i]+'</div>';
    html+='<div class="opt-body"><div class="opt-main">'+opt.t+'</div>';
    if(opt.sub) html+='<div class="opt-sub">'+opt.sub+'</div>';
    html+='</div></div>';
  });
  html+='</div>';

  html+='<div class="q-nav">';
  html+='<button class="nav-btn btn-back" onclick="goBack()"'+(canGoBack?'':' disabled')+'>← 上一题 / Back</button>';
  var isLast=curIdx===qSequence.length-1;
  if(isLast){
    html+='<button class="nav-btn btn-finish" id="nextBtn" onclick="commitAndNext('+isMulti+')" '+(selectedIdxs.length===0?'disabled':'')+'>查看结果 →</button>';
  } else {
    html+='<button class="nav-btn btn-next" id="nextBtn" onclick="commitAndNext('+isMulti+')" '+(selectedIdxs.length===0?'disabled':'')+'>继续 → Continue</button>';
  }
  html+='</div></div>';
  document.getElementById('qArea').innerHTML=html;
  document.getElementById('qArea').scrollIntoView({behavior:'smooth',block:'start'});
}

function selectOpt(i,isMulti,maxSel){
  var q=qSequence[curIdx];
  var existingAns=answers.find(function(a){return a.qid===q.id;});
  var sel=existingAns?existingAns.selectedIdxs.slice():[];
  var targetOpt=q.opts[i]||{};
  if(!isMulti){
    sel=[i];
  } else {
    var pos=sel.indexOf(i);
    if(targetOpt.exclusive){
      sel = pos>=0 ? [] : [i];
    } else {
      sel=sel.filter(function(idx){ return !(q.opts[idx] && q.opts[idx].exclusive); });
      if(pos>=0){ sel.splice(pos,1); }
      else if(sel.length<maxSel){ sel.push(i); }
    }
  }
  if(existingAns){ existingAns.selectedIdxs=sel; }
  else { answers.push({qid:q.id,selectedIdxs:sel,scored:false}); }
  var opts=document.querySelectorAll('.opt');
  opts.forEach(function(el,idx){
    el.classList.toggle('selected',sel.indexOf(idx)>=0);
    el.classList.toggle('disabled-opt',isMulti&&sel.length>=maxSel&&sel.indexOf(idx)<0);
    el.querySelector('.opt-letter').style.background=sel.indexOf(idx)>=0?'var(--accent)':'';
    el.querySelector('.opt-letter').style.color=sel.indexOf(idx)>=0?'#fff':'';
  });
  var btn=document.getElementById('nextBtn');
  if(btn) btn.disabled=sel.length===0;
}


function buildCareerSequence(){
  if(careerBuilt) return;
  careerBuilt=true;

  careerClustersSelected = getCareerClustersForPrimaryDomain(primaryDomain);
  if (!careerClustersSelected.length) {
    careerClustersSelected = Object.keys(CAREER_CLUSTER_TRIGGERS).sort(function(a, b) {
      var aScore = 0, bScore = 0;
      CAREER_CLUSTER_TRIGGERS[a].dirs.forEach(function(dk){ aScore += (scores[dk] || 0); });
      CAREER_CLUSTER_TRIGGERS[b].dirs.forEach(function(dk){ bScore += (scores[dk] || 0); });
      return bScore - aScore;
    }).slice(0, 1);
  }

  careerClustersSelected.forEach(function(ck){
    var qs=CAREER_Qs.filter(function(q){return q.cluster===ck;});
    qSequence=qSequence.concat(qs);
  });

  updateProgress();
}

function commitAndNext(isMulti){
  var q=qSequence[curIdx];
  var existingAns=answers.find(function(a){return a.qid===q.id;});
  var sel=existingAns?existingAns.selectedIdxs:[];
  if(existingAns&&!existingAns.scored){
    sel.forEach(function(i){ addScores(q.opts[i].d); });
    existingAns.scored=true;
  }
  var prevPhase=q.phase;
  var prevStage=getStageKey(prevPhase);
  curIdx++;

  // After anchor phase → build domain tracks
  if(!phaseBuilt && prevStage==='part1' && curIdx>=ANCHOR_Qs.length){
    buildPhaseSequence();
  }

  // Build the next stage only after the current stage is fully completed,
  // so section counts stay stable and the user can clearly perceive stage changes.
  if(phaseBuilt && !deepBuilt && prevStage==='part2' && curIdx>=qSequence.length){
    buildDeepSequence();
  }

  if(deepBuilt && !careerBuilt && prevStage==='part3' && curIdx>=qSequence.length){
    buildCareerSequence();
  }

  if(curIdx>=qSequence.length){showResults();return;}
  updateProgress();
  var nextQ=qSequence[curIdx];
  if(nextQ && nextQ.phase !== prevPhase){
    showPhaseOverlay(nextQ.phase, function(){ renderQ(); });
    return;
  }
  renderQ();
}

function goBack(){
  if(curIdx <= 0) return;
  var curPhase = qSequence[curIdx] ? qSequence[curIdx].phase : 'anchor';
  var prevPhase = qSequence[curIdx-1] ? qSequence[curIdx-1].phase : 'anchor';
  if(curPhase !== prevPhase){ return; }
  curIdx--;
  renderQ();
}

function updateProgress(){
  var q = qSequence[curIdx] || qSequence[curIdx-1];
  var curPhase = q ? q.phase : 'anchor';
  var meta = getPhaseMeta(curPhase);
  var stageInfo = getStageInfoFromPhase(curPhase);
  
  // Phase questions
  var phaseQs = qSequence.filter(function(qq){ return qq.phase === curPhase; });
  var phaseStart = qSequence.findIndex(function(qq){ return qq.phase === curPhase; });
  var phaseAnswered = Math.max(0, curIdx - phaseStart);
  var phaseCurrent = Math.min(phaseQs.length || 1, phaseAnswered + 1);
  var phasePct = phaseQs.length > 0 ? Math.round(phaseAnswered / phaseQs.length * 100) : 0;
  
  // Stage progress
  var stageTotal = getStageQuestionCount(stageInfo.key);
  var stageAnswered = getStageAnsweredCount(stageInfo.key);
  var stagePct = stageTotal > 0 ? Math.round(stageAnswered / stageTotal * 100) : 0;
  
  var fill = document.getElementById('progressFill');
  var fillTotal = document.getElementById('progressFillTotal');
  var text = document.getElementById('progressText');
  var pct = document.getElementById('progressPct');
  var totalText = document.getElementById('progressTotalText');
  
  if(fill) fill.style.width = phasePct + '%';
  if(fillTotal) fillTotal.style.width = stagePct + '%';
  if(text) text.textContent = phaseCurrent + ' / ' + phaseQs.length;
  if(pct) pct.textContent = '当前小节 ' + phasePct + '%';
  if(totalText) {
    totalText.textContent = stageInfo.label + '总进度 ' + stageAnswered + ' / ' + stageTotal + ' · 当前已解锁 ' + qSequence.length + ' 题';
  }
  var pill = document.getElementById('phasePill');
  if(pill) pill.textContent = meta.pill || curPhase;
}


function showResults(options){
  var preserveScroll = !!(options && options.preserveScroll);
  document.getElementById('quiz').style.display='none';
  document.getElementById('results').style.display='block';
  document.body.classList.remove('in-quiz');
  document.body.classList.add('in-results');
  if (!preserveScroll) {
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // ── Sort directions ──
  var dirEntries=Object.keys(scores).filter(function(k){return DIRS[k];})
    .map(function(k){return[k,scores[k]];})
    .sort(function(a,b){return b[1]-a[1];});

  var primaryDomainDirKey = {
    ai:'ai',
    cs:'cs',
    ds:'ds',
    robotics:'rb',
    ee:'ee',
    ce:'ce',
    or:'or'
  }[primaryDomain] || null;
  var primaryDomainTopDir = dirEntries.find(function(e){
    return !UMBRELLA_DIRS[e[0]] && DIRS[e[0]] && DIRS[e[0]].domain === primaryDomainDirKey;
  });
  var topDir=(primaryDomainTopDir || dirEntries.find(function(e){return !UMBRELLA_DIRS[e[0]];}) || dirEntries[0] || [null])[0];
  var topDirObj=topDir?DIRS[topDir]:null;
  var primaryDomainLabel = {
    ai:'AI / ML',
    cs:'CS',
    ds:'DS / Stats',
    robotics:'Robotics',
    ee:'ECE / EE',
    ce:'CE',
    or:'Math / OR'
  }[primaryDomain] || '';

  // Domain distribution (7 domains) uses the routed family scores rather than
  // raw leaf totals, so large families like AI do not win just because they
  // have more sub-directions.
  var routedDomainScores=getPhaseDomainScores();
  var domainSum={
    ai:routedDomainScores.ai||0,
    cs:routedDomainScores.cs||0,
    ds:routedDomainScores.ds||0,
    rb:routedDomainScores.robotics||0,
    or:routedDomainScores.or||0,
    ee:routedDomainScores.ee||0,
    ce:routedDomainScores.ce||0
  };
  var totalDom=Object.values(domainSum).reduce(function(a,b){return a+b;},0)||1;
  var aiPct=domainSum.ai/totalDom, csPct=domainSum.cs/totalDom, dsPct=domainSum.ds/totalDom;
  var rbPct=domainSum.rb/totalDom, orPct=domainSum.or/totalDom;
  var eePct=domainSum.ee/totalDom, cePct=domainSum.ce/totalDom;

  // Determine primary domains (>20%)
  var activeDomains=[];
  var domPctMap={ai:aiPct,cs:csPct,ds:dsPct,rb:rbPct,or:orPct,ee:eePct,ce:cePct};
  var domLabelMap={ai:'AI / ML',cs:'CS',ds:'DS / Stats',rb:'Robotics',or:'Math / OR',ee:'ECE / EE',ce:'CE'};
  var domColorMap={ai:'--ai-color',cs:'--cs-color',ds:'--ds-color',rb:'--rb-color',or:'--or-color',ee:'--ee-color',ce:'--ce-color'};
  Object.keys(domPctMap).forEach(function(d){
    if(domPctMap[d]>0.12) activeDomains.push({dom:d,pct:domPctMap[d],label:domLabelMap[d],color:domColorMap[d]});
  });
  activeDomains.sort(function(a,b){return b.pct-a.pct;});

  // ── HERO ──
  var heroDomsEl=document.getElementById('heroDomains');
  heroDomsEl.innerHTML='';
  activeDomains.slice(0,3).forEach(function(d){
    var chip=document.createElement('span');
    chip.className='domain-chip';
    chip.style.setProperty('--badge-color','var('+d.color+',var(--accent))');
    chip.textContent=(d.label||d.dom)+' '+(Math.round(d.pct*100))+'%';
    heroDomsEl.appendChild(chip);
  });

  document.getElementById('heroDir').textContent=topDirObj?topDirObj.name:'暂无明确方向';
  var topDirDetail=DIR_DETAILS[topDir];
  var topDirDesc=topDirDetail&&topDirDetail.scene?topDirDetail.scene.split('。')[0]+'。':'';
  document.getElementById('heroTagline').innerHTML=topDirObj?
    '<strong>'+topDirObj.name+'</strong>是你得分最高的方向。'+(topDirDesc||'')
    +(primaryDomainLabel?'<br>在第二部分的收敛里，你的主方向被判定为 <strong>'+primaryDomainLabel+'</strong>。':'')
    +'<br>以下是基于你所有答案的完整分析。':
    '你的偏好分布相当均匀，以下是详细的分布分析。';

  // ── 01 PROFILE ──
  buildProfile(domainSum,totalDom);

  // ── 02 MAJORS ──
  buildMajors(domainSum,totalDom,dirEntries);

  // ── 03 DIRECTION BARS ──
  buildDirectionBars(dirEntries,activeDomains);

  // ── 04 DIR DETAILS ──
  buildDirDetails(dirEntries);

  // ── 05 CAREERS ──
  buildCareers();

  // ── 06 ACTIONS ──
  buildActions(topDirObj,topDir,activeDomains);

  // Animate bars after a tick
  setTimeout(function(){
    document.querySelectorAll('.dir-bar-fill,.cc-bar-fill').forEach(function(el){
      el.style.width=el.getAttribute('data-pct')+'%';
    });
  },80);
}

// ── Cluster definitions ──

var clusterColors={'ai_core':'var(--ai-color)','embodied':'var(--accent2)','systems':'var(--cs-color)','applied':'var(--accent4)','safety':'#c084fc','ds':'var(--ds-color)'};

function clusterScore(cl){
  var sum=0,cnt=0;
  cl.keys.forEach(function(k){if(scores[k]){sum+=scores[k];cnt++;}});
  return cnt>0?sum/cnt:0;
}

function buildProfile(domainSum,totalDom){
  var g=function(k){return scores[k]||0;};

  // Thinking style
  var theorySc=g('ml_theory')+g('stat_learn')+g('theory')+g('algo')+g('optim');
  var sysSc=g('systems')+g('sys_ai')+g('dist_sys')+g('arch')+g('ai_hw');
  var appliedSc=g('applied_ai')+g('hci')+g('domain_ds');
  var empiricSc=g('causal')+g('ds_sci')+g('stats');
  var rbSc=g('robotics')+g('embodied')+g('autonomous')+g('perception');
  var eeSc=g('vlsi')+g('embedded')+g('control')+g('signal')+g('comm');
  var dsSc=g('ds_eng')+g('mlops')+g('ds_sci')+g('stats')+g('bayes');
  var maxTrait=Math.max(theorySc,sysSc,appliedSc,empiricSc,rbSc,eeSc);

  var styleLabel, styleDesc;
  if(maxTrait===rbSc&&rbSc>0){
    styleLabel='物理系统型 / Physical Systems';
    styleDesc='你的直觉在物理世界里最敏锐——机器怎么感知、怎么运动、怎么在真实环境里可靠工作。理论对你是手段，能在物理世界运行才是验证标准。';
  } else if(maxTrait===eeSc&&eeSc>0){
    styleLabel='硬件系统型 / Hardware Systems';
    styleDesc='你对「东西在电路层面是怎么工作的」有天然好奇心。从信号到芯片，硬件给你的满足感是软件层面无法替代的——特别是当东西真的跑起来的时候。';
  } else if(maxTrait===theorySc&&theorySc>0){
    styleLabel='理论推导型';
    styleDesc='遇到问题本能先想能否在数学上搞清楚。「为什么有效」的好奇心高于「能不能有效」。在基础研究中是核心竞争力，但在需要快速迭代的工程环境里可能感到别扭。';
  } else if(maxTrait===sysSc&&sysSc>0){
    styleLabel='系统工程型';
    styleDesc='对性能、延迟、可靠性有天然敏感度。满足感来自「东西真的能跑起来，而且跑得好」。在 AI 基础设施大建设的当下极其有价值。';
  } else if(maxTrait===dsSc&&dsSc>0){
    styleLabel='数据驱动型';
    styleDesc='判断优先依赖数据——不是作为形容词，而是工作方式。「数据说了什么」先于直觉和理论。在数据工程、数据科学和 MLOps 方向是最直接的竞争力。';
  } else if(maxTrait===appliedSc&&appliedSc>0){
    styleLabel='应用落地型';
    styleDesc='判断核心是「这个东西真正有用吗」。技术的优雅程度对你的吸引力不如实际效果。知道做什么往往比知道怎么做更难，而你具备这种判断力。';
  } else {
    styleLabel='实证探索型';
    styleDesc='相信数据比直觉更可靠，对严格的对照设计和可复现性有持续关注。在 AI 评测、benchmark 设计、数据驱动决策方向有天然优势。';
  }

  // Domain primary
  var domLabels={ai:'AI / ML',cs:'CS',ds:'DS / Stats',rb:'Robotics',or:'Math / OR',ee:'ECE / EE',ce:'CE'};
  var sortedDom=Object.keys(domainSum).filter(function(k){return domainSum[k]>0;}).map(function(k){
    return[domLabels[k]||k,domainSum[k],k];
  }).sort(function(a,b){return b[1]-a[1];});
  var domLabel=sortedDom[0]?sortedDom[0][0]:'AI / ML';
  var domPct=sortedDom[0]?Math.round(sortedDom[0][1]/totalDom*100):0;

  // Ranked clusters
  var ranked=CLUSTERS.slice().sort(function(a,b){return clusterScore(b)-clusterScore(a);});
  var topCluster=ranked[0];
  var topCS=clusterScore(topCluster);
  var spread=topCS-(clusterScore(ranked[1])||0);
  var spreadDesc=spread>8?'你的偏好非常集中，对不喜欢什么已经有比较清晰的判断。':
    spread>3?'你有主方向的同时保持了跨领域的开放性。':
    '你的偏好分布相当均匀，可能处于探索阶段，或者本身就是跨方向型的人。';

  // ── Helper: get selected option index for a specific question ──
  function getAns(qid){
    var a=answers.find(function(x){return x.qid===qid;});
    return a ? a.selectedIdxs : [];
  }
  function picked(qid, idx){ return getAns(qid).indexOf(idx)>=0; }

  // 工作风格: derived from a11 (职业摩擦接受度) + a12 (工作成果满足感)
  // a11: 0=大厂流程 1=初创变化 2=学术长周期 3=无固定团队
  // a12: 0=证明/理论 1=数据仪表盘 2=生产系统 3=机器人视频
  var a11=getAns('a11'), a12=getAns('a12');
  var soloSignals=(picked('a11',2)?2:0)+(picked('a12',0)?2:0)+(theorySc>appliedSc&&theorySc>12?1:0);
  var teamSignals=(picked('a11',1)?2:0)+(picked('a11',3)?1:0)+(picked('a12',3)?1:0)+(appliedSc>theorySc&&appliedSc>10?1:0);
  var structSignals=(picked('a11',0)?2:0)+(picked('a12',2)?1:0);
  var workStyle, workDesc;
  if(soloSignals>=4){
    workStyle='深度独立型';
    workDesc='你能接受长时间没有外部反馈——学术路线的"反馈周期以年计"不会让你焦虑，反而是合适的节奏。理论和基础研究类工作需要这种耐心。注意：独立工作的成果影响力需要主动对外输出。';
  } else if(teamSignals>=3){
    workStyle='协作驱动型';
    workDesc='你对用户反馈、团队讨论、快速迭代有正向响应。初创、产品团队、工业界研究都适合你——这类环境能让你持续保持动力。在学术环境里可能会因为反馈太慢感到不适。';
  } else if(structSignals>=3){
    workStyle='结构稳定型';
    workDesc='你在有充足资源和清晰流程的环境里效率最高——大厂的基础设施、充足算力、成熟工具链是你的加速器。需要注意：结构化环境的代价是更多会议和审批，需要主动管理这部分摩擦。';
  } else {
    workStyle='适应性强';
    workDesc='你的工作方式没有强烈的单一偏好——独立推进和团队协作都能接受。这种灵活性在职业早期是资产，进入中期需要主动选择一种主导模式，否则容易在不同角色间漂移。';
  }

  // 价值取向: derived from a8 (贡献类型) + a17 (驱动感觉) + a3 (成就感来源)
  // a8: 0=理论框架 1=benchmark/数据集 2=更快的系统 3=改变生活的应用
  // a17: 0=搞懂现象 1=系统跑起来且快 2=用户说有帮助 3=数据故事被挖出
  // a3: 0=改变认知的论文 1=全公司用的数据系统 2=改变用户工作方式的产品 3=推理延迟大幅压缩
  var a8=getAns('a8'), a17=getAns('a17'), a3=getAns('a3');
  var valTheory=(picked('a8',0)?3:0)+(picked('a17',0)?3:0)+(picked('a3',0)?2:0);
  var valSystem=(picked('a8',2)?3:0)+(picked('a17',1)?3:0)+(picked('a3',3)?2:0);
  var valImpact=(picked('a8',3)?3:0)+(picked('a17',2)?3:0)+(picked('a3',2)?2:0);
  var valData=(picked('a8',1)?3:0)+(picked('a17',3)?3:0)+(picked('a3',1)?2:0);
  var maxVal=Math.max(valTheory,valSystem,valImpact,valData);
  var valueLabel, valueDesc;
  if(maxVal===valTheory&&valTheory>0){
    valueLabel='知识创造驱动';
    valueDesc='你的满足感来自「真正理解了某件事」——不只是让它工作，而是知道为什么有效。这是基础研究和算法方向最强的内驱力信号，也是学术路线能长期维持的核心条件。';
  } else if(maxVal===valSystem&&valSystem>0){
    valueLabel='工程效能驱动';
    valueDesc='「让东西快、稳、可靠」是你最直接的满足感来源。推理优化、基础设施、MLSys 这类工作成果清晰可量化——这正是你需要的反馈方式。';
  } else if(maxVal===valImpact&&valImpact>0){
    valueLabel='用户价值驱动';
    valueDesc='你在乎的是「这个东西真的改变了什么人的生活」。技术本身不是终点，能否落到真实用户的场景里才是。这种驱动力在应用AI、产品团队、创业公司里是最稀缺的能力之一。';
  } else {
    valueLabel='数据洞察驱动';
    valueDesc='你相信数据是最可靠的判断来源。发现隐藏在数据里的规律、用严格方法验证结论——这在数据科学、实证研究、benchmark 设计方向是核心竞争力。';
  }

  var grid=document.getElementById('profileGrid');
  grid.innerHTML=[
    {label:'思维方式', value:styleLabel, desc:styleDesc, highlight:true},
    {label:'主要领域', value:domLabel+' ('+domPct+'%)', desc:'你的答案在「'+domLabel+'」方向上的信号最集中。'+spreadDesc},
    {label:'核心方向族', value:topCluster.label, desc:topCluster.high},
    {label:'数学偏好', value:(g('ml_theory')+g('theory'))>8?'偏好理论推导':(g('sys_ai')+g('dist_sys'))>8?'偏好工程实现':'工具性使用', desc:(g('ml_theory')+g('theory'))>8?'你对数学本身有兴趣，理论推导是你享受的过程，不只是手段。':(g('sys_ai')+g('dist_sys'))>8?'数学是你的工具，好用就行，解决实际问题是驱动力。':'对数学保持实用主义态度，用到时能调用，不作为核心兴趣。'},
    {label:'工作风格', value:workStyle, desc:workDesc},
    {label:'价值取向', value:valueLabel, desc:valueDesc}
  ].map(function(card){
    return '<div class="profile-card"><div class="pc-label">'+card.label+'</div><div class="pc-value'+(card.highlight?' highlight':'')+'">'+card.value+'</div><div class="pc-desc">'+card.desc+'</div></div>';
  }).join('');

  // Extra paragraph
  var extraEl=document.getElementById('profileExtra');
  if(extraEl){
    var topDirNames=ranked.slice(0,3).map(function(cl){return cl.label;}).join('、');
    var tensionNote='';
    if(Math.abs(theorySc-appliedSc)<8&&theorySc>8&&appliedSc>8){
      tensionNote='<br><br>值得注意的是，你在「理论推导」和「应用落地」两个方向上的得分都不低——这是一个内在张力，很多人在这个交叉点上会感到选择困难。建议明确自己的优先序：<strong>如果资源只允许做一件事，你选哪个</strong>？答案比你想象的更能揭示真实的驱动力。';
    } else if(sysSc>12&&(g('ml')||0)>12){
      tensionNote='<br><br>你同时对系统和 AI/ML 有较高得分——这是市场上极其稀缺的「系统×AI」组合。现阶段很多人能做 AI 研究，也有人能做系统工程，但两者都懂的人是 AI 基础设施大建设里最紧缺的。';
    }
    extraEl.innerHTML='<div class="profile-card" style="grid-column:1/-1;margin-top:0;"><div class="pc-label">综合解读</div><div class="pc-desc" style="font-size:13px;line-height:1.8;">你在 <strong style="color:var(--text)">'+topDirNames+'</strong> 这几个方向族上的得分最为集中。'+spreadDesc+tensionNote+'</div></div>';
  }
}


function buildDirDetails(dirEntries){
  var top4=dirEntries.filter(function(e){
    return DIRS[e[0]] && !UMBRELLA_DIRS[e[0]];
  }).slice(0,4);
  var grid=document.getElementById('dirDetailGrid');
  if(!grid) return;
  grid.innerHTML='';
  if(top4.length===0){ grid.innerHTML='<p style="color:var(--dim);font-size:13px;">完成更多题目后将显示详细方向分析。</p>'; return; }
  
  var domLabels={ai:'AI / ML',cs:'CS',ds:'数据科学',rb:'Robotics',or:'Math / OR',ee:'ECE / EE',ce:'CE'};
  var domColors={ai:'var(--ai-color)',cs:'var(--cs-color)',ds:'var(--ds-color)',
                 rb:'var(--rb-color)',or:'var(--or-color)',ee:'var(--ee-color)',ce:'var(--ce-color)'};
  
  top4.forEach(function(entry,i){
    var k=entry[0];
    var dir=DIRS[k];
    var det=DIR_DETAILS[k];
    if(!dir) return;
    var domLabel=domLabels[dir.domain]||dir.domain;
    var domColor=domColors[dir.domain]||'var(--accent)';
    var card=document.createElement('div');
    card.className='dir-detail-card clickable'+(i===0?' rank-1':'');
    card.style.cursor='pointer';
    
    // Card content: scene first (most important sentence)
    var sceneFirst = det ? (det.scene.split('。')[0]+'。') : dir.name+'——探索这个方向的具体应用与研究问题。';
    var exampleText = det ? det.example : '';
    
    card.innerHTML=
      '<div class="ddc-header">'
      +'<div class="ddc-name">'+(i===0?'🏆 ':'')+dir.name+'</div>'
      +'<span class="ddc-domain ddc-domain-'+dir.domain+'" style="color:'+domColor+'">'+domLabel+'</span>'
      +'</div>'
      +'<div class="ddc-scene">'+sceneFirst+'</div>'
      +(exampleText?'<div class="ddc-example">'+exampleText+'</div>':'')
      +'<div class="dir-modal-trigger" style="margin-top:10px;">点击查看详细介绍 →</div>';
    
    card.addEventListener('click', function(){ openDirModal(k); });
    grid.appendChild(card);
  });
}

function buildMajors(domainSum,totalDom,dirEntries){
  var g=function(k){return scores[k]||0;};
  // Score 8 majors based on domain totals + specific direction signals
  var dom=function(d){return domainSum[d]||0;};
  var domainToMajorKeyMap={
    ai:'ai_ml',
    cs:'cs',
    ds:'ds_stat',
    robotics:'robotics',
    ee:'ece',
    ce:'ce',
    or:'or_math'
  };
  var scores8={
    ai_ml:    dom('ai')*1.15 + g('ml')+g('dl')+g('nlp')+g('llm')+g('cv')+g('multimodal')+g('generative')+g('foundation'),
    cs:       dom('cs')*1.25 + g('systems')+g('theory')+g('algo')+g('pl')+g('security')+g('dist_sys'),
    ece:      dom('ee')*1.25 + g('vlsi')+g('embedded')+g('control')+g('signal')+g('comm')+g('info_th'),
    ce:       dom('ce')*1.25 + g('arch')+g('hw_sw')+g('soc')+g('ai_hw')+g('npu')+g('fpga'),
    ds_stat:  dom('ds')*1.25 + g('stats')+g('causal')+g('bayes')+g('ds_sci')+g('econom'),
    robotics: dom('rb')*1.25 + g('robotics')+g('embodied')+g('autonomous')+g('perception')+g('slam'),
    or_math:  dom('or')*1.25 + g('optim')+g('or_ops')+g('game_th')+g('stoch')+g('sci_comp')+g('comb_opt'),
    swe:      dom('cs')*0.95 + g('dist_sys')+g('sys_ai')+g('mlops')+g('db')+g('cloud')
  };
  var majorData={
    ai_ml:{abbr:'AI / ML',name:'人工智能 / 机器学习 · Artificial Intelligence & Machine Learning',
      desc:'专注深度学习、NLP、CV、生成式 AI 等核心技术。Carnegie Mellon MSML、Stanford AI、MIT EECS 是代表性项目。既能走研究路线（RS/PhD），也能走工程路线（MLE）。',
      salary:'美国 MLE/RS 起薪 $25–50万/年；OpenAI/DeepMind 顶端可超 $120万',
      tags:['Deep Learning','LLM / NLP','Computer Vision','Generative AI','AI Systems & Alignment']},
    cs:{abbr:'CS',name:'计算机科学 · Computer Science',
      desc:'覆盖从理论到工程最广谱的学科。算法、系统、安全、HCI——几乎所有方向都能在 CS 里找到入口。竞争最激烈，但自由度也最高，是求职最通用的背景。',
      salary:'美国硕士起薪 $20–35万/年总包；Staff+ $70–130万+；国内大厂 SP 25–50万人民币/年',
      tags:['Systems & Distributed','Theory & Algorithms','Security & Privacy','HCI','PL & Compilers']},
    ece:{abbr:'ECE',name:'电气工程 / 计算机工程 · Electrical & Computer Engineering',
      desc:'信号处理、通信、嵌入式、VLSI 芯片设计——ECE 是硬件基础的核心。5G/6G 研究、医疗设备、传感器系统都在这里。AI 芯片热潮让 ECE 背景需求猛增。',
      salary:'硅谷芯片岗 $25–55万/年；AI 芯片方向溢价明显；国内华为/海思/中兴 SP 25–50万人民币',
      tags:['VLSI & IC Design','Signal Processing','Communications & Info Theory','Control Systems','Embedded & IoT']},
    ce:{abbr:'CE',name:'计算机工程 · Computer Engineering',
      desc:'处理器设计、AI 加速器、软硬件协同——CE 是 CS 与 EE 在计算层的融合。SoC、NPU、FPGA 是典型方向。与 ECE 的区别：CE 更偏数字计算，ECE 更偏模拟/通信/控制。',
      salary:'美国体系结构岗 $25–60万/年；AI 加速器方向（Nvidia/Apple/AMD）可达 $80–130万+',
      tags:['Computer Architecture','AI Accelerators & NPU','HW-SW Co-Design','FPGA','In-Memory Computing']},
    ds_stat:{abbr:'DS / Stats',name:'数据科学 / 统计学 · Data Science / Statistics',
      desc:'因果推断、贝叶斯方法、实验设计、数据工程——DS/Statistics 是「让数据真正说话」的学科。比 AI/ML 更关注统计严谨性，量化金融和政策研究是典型出口。',
      salary:'DS 初级 $14–22万/年；Senior FAANG DS $25–45万；量化研究员 $50–150万+',
      tags:['Causal Inference & Experimentation','Bayesian Statistics','Data Engineering & MLOps','Domain DS','Time Series']},
    robotics:{abbr:'Robotics',name:'机器人学 / 自主系统 · Robotics & Autonomous Systems',
      desc:'感知、规划、控制、学习——机器人学是最综合的工程学科。CMU Robotics、MIT CSAIL、Stanford ILIAD 是代表性项目。自动驾驶、智能制造、医疗机器人需求持续高涨。',
      salary:'美国机器人工程师 $25–60万/年；自动驾驶公司 $30–80万总包；国内大疆/华为智驾/比亚迪 SP 25–50万人民币',
      tags:['Embodied AI & VLA','Motion Planning & Control','Robot Perception & SLAM','Autonomous Driving','Human-Robot Interaction']},
    or_math:{abbr:'OR / Math',name:'运筹学 / 应用数学 · Operations Research & Applied Mathematics',
      desc:'优化、博弈论、随机过程、科学计算——应用数学是 AI、金融、物流、能源的共同数学基础。OR 科学家在科技公司（Google、Amazon、Uber）和量化金融里都有极高需求。',
      salary:'量化研究员 $30–100万+/年（Jane Street/Two Sigma）；OR 科学家（科技公司）$25–65万总包',
      tags:['Convex & Combinatorial Optimization','Operations Research','Game Theory & Mechanism Design','Stochastic Processes','Scientific Computing']},
    swe:{abbr:'SWE',name:'软件工程 · Software Engineering',
      desc:'大规模软件系统的设计与维护。更偏工程实践——架构设计、测试、DevOps、API 建设。比 CS 少一些理论，更面向工业界真实需求，就业起点高、方向实际清晰。',
      salary:'大厂 SWE L4–L5 $25–50万/年总包；L6 Staff $70–130万+；国内大厂 SP 25–50万人民币',
      tags:['System Architecture','Distributed Systems','DevOps & CI-CD','API Design','Full-Stack Development']},
  };

  var primaryMajor = domainToMajorKeyMap[primaryDomain] || null;
  var finalistMajors = (phase2Finalists || []).map(function(domKey){
    return domainToMajorKeyMap[domKey];
  }).filter(Boolean);

  if (primaryMajor) scores8[primaryMajor] += 72;
  finalistMajors.forEach(function(key){
    if (key !== primaryMajor) scores8[key] += 24;
  });

  var ranked=Object.keys(scores8).sort(function(a,b){return scores8[b]-scores8[a];});
  var orderedMajors = [];
  if (primaryMajor && majorData[primaryMajor]) orderedMajors.push(primaryMajor);
  finalistMajors.forEach(function(key){
    if (majorData[key] && orderedMajors.indexOf(key) < 0) orderedMajors.push(key);
  });
  ranked.forEach(function(key){
    if (majorData[key] && orderedMajors.indexOf(key) < 0) orderedMajors.push(key);
  });
  var top4=orderedMajors.slice(0,4);

  var majorEl=document.getElementById('majorGrid');
  if(!majorEl) return;
  majorEl.innerHTML=top4.map(function(k,i){
    var m=majorData[k];
    var s=scores8[k];
    var maxS=scores8[ranked[0]]||1;
    var fitClass=(k===primaryMajor)?'mc-fit-strong':(finalistMajors.indexOf(k)>=0?'mc-fit-mid':'');
    var fitLabel=(k===primaryMajor)?'主方向推荐':(finalistMajors.indexOf(k)>=0?'并行可考虑':'拓展备选');
    return '<div class="major-card'+(i===0?' top-major':'')+'">'
      +'<div class="mc-header"><span class="mc-abbr">'+m.abbr+'</span>'
      +'<span class="mc-fit '+fitClass+'">'+fitLabel+'</span></div>'
      +'<div class="mc-name">'+m.name.replace('\n','<br><span style=\'font-size:11px;color:var(--muted)\'>').replace(/$/,'</span>')+'</div>'
      +'<div class="mc-desc">'+m.desc+'</div>'
      +'<div class="mc-salary">💰 '+m.salary+'</div>'
      +'<div class="mc-tags">'+m.tags.map(function(t){return '<span class="mc-tag">'+t+'</span>';}).join('')+'</div>'
      +'</div>';
  }).join('');
}


function buildDirectionBars(dirEntries,activeDomains){
  var rankedClusters=CLUSTERS.slice().sort(function(a,b){return clusterScore(b)-clusterScore(a);});
  var maxCS=clusterScore(rankedClusters[0])||1;

  // Cluster grid
  var cgEl=document.getElementById('clusterGrid');
  cgEl.innerHTML='';
  // Show top 8 clusters with score > 0
  var visibleClusters=rankedClusters.filter(function(cl){return clusterScore(cl)>0;}).slice(0,8);
  visibleClusters.forEach(function(cl,ci){
    var cs=clusterScore(cl);
    var pct=Math.round(cs/maxCS*100);
    var ratio=cs/maxCS;
    var level=ratio>0.65?'high':ratio>0.35?'mid':'low';
    var card=document.createElement('div');
    card.className='cluster-card'+(ci===0?' rank-1':'');
    card.style.setProperty('--cluster-color',cl.color);
    card.innerHTML='<div class="cl-bar-row">'
      +'<div class="cl-label">'+cl.label+'</div>'
      +'<div class="cl-track"><div class="cl-fill" style="width:'+pct+'%;background:'+cl.color+';opacity:.8;"></div></div>'
      +'<div class="cl-pct" style="color:'+cl.color+'">'+pct+'%</div>'
      +'</div>'
      +'<div class="cl-desc">'+cl[level]+'</div>';
    cgEl.appendChild(card);
  });

  // Direction bars - top 12
  var top12=dirEntries.slice(0,12);
  var maxScore=top12.length>0?top12[0][1]:1;
  // Show umbrella dir scores as context chips
  var umbrellaEl=document.getElementById('umbrellaRow');
  if(umbrellaEl){
    var umbrellaItems=dirEntries.filter(function(e){return UMBRELLA_DIRS[e[0]];});
    var umbrellaHtml=umbrellaItems.slice(0,6).map(function(e){
      var d=DIRS[e[0]]||{name:e[0]};
      return '<div style="font-family:var(--font-mono);font-size:10px;padding:4px 12px;border-radius:8px;background:rgba(255,255,255,.03);border:1px solid var(--border);color:var(--dim);">'
        +'<span style="color:var(--muted);">'+d.name+'</span>'
        +' <span style="color:var(--accent4);">'+e[1]+'分</span>'
      +'</div>';
    }).join('');
    umbrellaEl.innerHTML='<div style="font-family:var(--font-mono);font-size:10px;color:var(--dim);letter-spacing:.08em;margin-right:4px;padding-top:4px;">基础大类得分：</div>'+umbrellaHtml;
  }

  var barsEl=document.getElementById('dirBars');
  barsEl.innerHTML='';
  top12.forEach(function(entry,i){
    var k=entry[0], v=entry[1];
    var dir=DIRS[k];
    if(!dir) return;
    var pct=Math.round(v/maxScore*100);
    var dom=dir.domain;
    var fillClass=dom==='ai'?'fill-ai':dom==='cs'?'fill-cs':dom==='ds'?'fill-ds':'fill-mix';
    var row=document.createElement('div');
    row.className='dir-bar-row';
    row.innerHTML='<div class="dir-bar-label'+(i===0?' top-dir':'')+'">'+dir.name+'</div>'
      +'<div class="dir-bar-track"><div class="dir-bar-fill '+fillClass+'" data-pct="'+pct+'"></div></div>'
      +'<div class="dir-bar-score">'+v+'</div>';
    barsEl.appendChild(row);
  });
}

var CAREER_ROLE_TO_PATHS = {
  ml_rs:['career_research_scientist','career_academia'],
  ml_theorist:['career_research_scientist','career_academia'],
  applied_sci:['career_applied_scientist'],
  fm_researcher:['career_foundation_model','career_research_scientist'],
  optim_researcher:['career_optimization','career_research_scientist'],
  llm_eng:['career_llm_engineer'],
  llm_rs:['career_research_scientist','career_foundation_model'],
  nlp_eng:['career_nlp_engineer'],
  search_eng:['career_nlp_engineer'],
  recsys_eng:['career_ml_engineer','career_data_scientist'],
  agent_eng:['career_llm_engineer','career_tech_pm'],
  cv_eng:['career_cv_engineer'],
  med_vision_sci:['career_cv_engineer','career_domain_ds'],
  genai_eng:['career_generative_ai'],
  vlm_eng:['career_foundation_model','career_generative_ai'],
  vision3d_eng:['career_cv_engineer','career_robotics_engineer'],
  video_ai:['career_cv_engineer'],
  ml_sys_eng:['career_ml_systems'],
  inf_eng:['career_efficient_ai','career_ml_systems'],
  dist_sys_eng:['career_systems_engineer'],
  data_plat:['career_database','career_data_engineer'],
  ai_infra:['career_ml_systems','career_ai_hardware'],
  compiler_eng:['career_compiler_pl'],
  ai_hw_eng:['career_ai_hardware'],
  npu_arch:['career_cpu_architect','career_ai_hardware'],
  vlsi_eng:['career_vlsi'],
  embedded_eng:['career_embedded'],
  dsp_eng:['career_signal_processing'],
  eda_eng:['career_vlsi'],
  robotics_eng:['career_robotics_engineer'],
  av_eng:['career_autonomous_driving'],
  robot_learn:['career_robot_learning'],
  perception_eng:['career_perception_engineer'],
  hri_researcher:['career_hri'],
  slam_eng:['career_perception_engineer','career_robotics_engineer'],
  data_sci:['career_data_scientist'],
  causal_sci:['career_causal_scientist'],
  data_eng_role:['career_data_engineer'],
  mlops_eng:['career_mlops'],
  domain_ds:['career_domain_ds'],
  quant_ds:['career_quant'],
  or_sci:['career_or_scientist'],
  quant_researcher:['career_quant'],
  optim_eng:['career_optimization'],
  risk_sci:['career_quant','career_domain_ds'],
  decision_sci:['career_or_scientist','career_data_scientist']
};

function getCareerBaseScores() {
  var combined = {};
  Object.keys(CAREERS).forEach(function(ck){
    var c = CAREERS[ck];
    var score = 0;
    if(c.score_dirs) c.score_dirs.forEach(function(dk){ score += (scores[dk] || 0) * 0.4; });
    combined[ck] = score;
  });
  return combined;
}

function getCareerLeafScores(options) {
  var opts = options || {};
  var includeBase = opts.includeBase !== false;
  var combined = {};
  if (includeBase) {
    var baseScores = getCareerBaseScores();
    Object.keys(baseScores).forEach(function(ck) {
      var roles = getCareerLeafRoles(ck);
      if (!roles.length) return;
      var perRole = baseScores[ck] / roles.length;
      roles.forEach(function(role) {
        combined[role] = (combined[role] || 0) + perRole;
      });
    });
  }
  answers.forEach(function(answer){
    var q = CAREER_Qs.find(function(item){ return item.id === answer.qid; });
    if(!q) return;
    answer.selectedIdxs.forEach(function(idx){
      var opt = q.opts[idx];
      if(!opt || !opt.career) return;
      var targets = CAREER_ROLE_TO_LEAF_ROLES[opt.career] || [];
      targets.forEach(function(role, order){
        var weight = Math.max(2.8, 6.6 - order * 0.75);
        combined[role] = (combined[role] || 0) + weight;
      });
    });
  });
  return combined;
}

function getCareerPathScores() {
  var combined = getCareerBaseScores();
  var leafScores = getCareerLeafScores({includeBase:false});
  Object.keys(leafScores).forEach(function(role) {
    var familyKey = CAREER_LEAF_FAMILY_BY_ROLE[role];
    if (!familyKey) return;
    combined[familyKey] = (combined[familyKey] || 0) + leafScores[role];
  });
  return combined;
}

function buildCareers(){
  var careerScoresCombined=getCareerPathScores();
  var careerEntries=Object.keys(careerScoresCombined).filter(function(k){return careerScoresCombined[k]>0;})
    .map(function(k){return[k,careerScoresCombined[k]];})
    .sort(function(a,b){return b[1]-a[1];});

  var topCareer=careerEntries.length>0?careerEntries[0][0]:null;
  var grid=document.getElementById('careerGrid');
  if(!grid) return;
  grid.innerHTML='';

  if(careerEntries.length===0){
    grid.innerHTML='<p style="color:var(--dim);font-size:13px;">答题越多，职业匹配越精准。当前数据不足以生成推荐。</p>';
    return;
  }

  careerEntries.slice(0,4).forEach(function(entry,i){
    var k=entry[0];
    var c=CAREERS[k];
    if(!c) return;
    var matchLabel=i===0?'最强匹配':i===1?'强匹配':'参考';
    var matchClass=i===0?'fit-strong':i===1?'fit-mid':'fit-low';
    var workParts = getCareerWorkParts(c.work);
    var leafCount = getCareerLeafRoles(k).length;
    var card=document.createElement('div');
    card.className='career-card clickable'+(i===0?' top-career':'');
    card.style.cursor='pointer';

    card.innerHTML=
      '<div class="cc-career-name">'+(c.icon?c.icon+' ':'')+c.name+'</div>'
      +'<div class="cc-career-fit '+matchClass+'" style="display:inline-block;margin-bottom:10px;">'+matchLabel+'</div>'
      +(leafCount
        ? '<div class="career-leaf-meta"><span>树上具体岗位</span><strong>'+leafCount+' 个</strong></div>'
          + '<div class="career-leaf-preview">'+renderCareerLeafPreview(k, 4, 'career-leaf-chip', true)+'</div>'
        : '')
      +'<div class="cc-career-work"><strong>做什么</strong>'+shortenText(workParts.intro || c.name, 112)+'</div>'
      +'<div class="cc-career-example"><strong>例子</strong>'+shortenText(workParts.example || c.work, 120)+'</div>'
      +'<div class="cc-career-salary">'+renderCareerSalaryPreview(k, 'cc-salary-lines', 'cc-salary-line')+'</div>'
      +'<div class="dir-modal-trigger" style="margin-top:10px;">点击查看完整介绍 →</div>';
    
    (function(key){ card.addEventListener('click', function(){ openCareerModal(key); }); })(k);
    grid.appendChild(card);
  });
  buildCareerLeafBox(careerEntries);
}

function buildActions(topDirObj,topDir,activeDomains){
  var items=[];
  var g=function(k){return scores[k]||0;};

  // Action 1: direction anchor
  if(topDirObj){
    var dirHint = {
    vlm:'找 LLaVA 或 InternVL 的论文，复现其中最简单的图文对齐训练实验',
    llm:'读 Chain-of-Thought 原论文，然后找 5 个让当前 GPT-4 失败的推理题，分析共同失败模式',
    cv:'在 Kaggle 找一个视觉竞赛，两周内从零到提交一个 baseline，记录每个改进步骤',
    ml:'选一个你觉得「理所当然」的 ML 技巧（如 batch norm），读懂它为什么有效的理论解释',
    ml_theory:'读 Shai Shalev-Shwartz 的《Understanding Machine Learning》第一章，做其中一个习题的完整证明',
    sys_ai:'用 nsight Systems profiling 一个你熟悉的 PyTorch 模型，找到最大的计算/通信瓶颈',
    arch:'阅读 Nvidia Hopper 架构白皮书，理解 TF32/FP8 计算单元的设计权衡',
    causal:'找一个公开的 A/B 测试数据集，独立做一次因果分析，明确说出哪个因素是 confounder',
    ds_eng:'用 dbt 把一个从原始数据到分析表的 ETL 流程重构一遍，确保每一层有数据质量测试',
    safety:'阅读 Anthropic Constitutional AI 论文，理解 RLAIF 和传统 RLHF 的实质区别',
    applied_ai:'找 5 个真实用户，访谈他们在某个你关注的领域遇到的最大问题，不要假设你知道答案',
    robotics:'在 ROS 2 里实现一个导航 demo（SLAM + 路径规划），部署在仿真或真实机器人上',
    embodied:'复现 ACT 或 Diffusion Policy 论文里的一个操作任务，分析 sim-to-real 的差距来源',
    autonomous:'用 nuScenes 数据集实现一个 BEV 目标检测 baseline，分析其在长尾场景里的失败案例',
    vlsi:'阅读 Tiny Tapeout 文档，用 OpenLane 设计一个简单的数字电路并走完 RTL 到 GDS 的流程',
    optim:'实现并比较 Adam vs Adagrad vs LBFGS 在同一个非凸目标上的收敛行为，画出 loss landscape',
    or_ops:'用 OR-Tools 实现一个车辆路径问题（VRP）的求解器，与简单贪心算法比较解的质量'
  }[topDir] || '选这个方向里一篇你觉得最有意思的论文，把它读到能复述核心 idea、能说出它的局限在哪';
  items.push({tag:'立即可做',tagClass:'',h:'在「'+topDirObj.name+'」上建立一个具体的锚点',b:'偏好不等于深度。'+dirHint+'。一个具体的动手记录，胜过泛泛了解二十篇。'});
  }

  // Action 2: career-specific (blend direction and career-phase answers)
  var careerScores9=getCareerPathScores();
  var topCareer=Object.keys(careerScores9).filter(function(k){return careerScores9[k]>0;})
    .sort(function(a,b){return careerScores9[b]-careerScores9[a];})[0]||null;
  if(topCareer&&CAREERS[topCareer]){
    items.push({tag:'三个月内',tagClass:'tag-mid',h:'验证你的职业路径判断',b:CAREERS[topCareer].next});
  }

  // Action 3: tension / combo insight
  var t=g('ml_theory')+g('algo'),ap=g('applied_ai')+g('hci');
  var hasSys=g('sys_ai')>10||g('dist_sys')>10||g('arch')>10;
  var hasDS=(g('ds_sci')+g('ds_eng')+g('causal')+g('stats'))>15;
  if(Math.abs(t-ap)<8&&t>8&&ap>8){
    items.push({tag:'持续练习',tagClass:'tag-long',h:'同时锻炼理论和应用两种能力，不让其中一个萎缩',b:'在做理论推导时，逼自己问「这个结论在什么真实场景里重要」；在做应用工作时，逼自己问「背后的机制是什么」。两种思维方式互相喂养，才不会退化成单一型。'});
  } else if(hasDS&&g('ml')>10){
    items.push({tag:'持续练习',tagClass:'tag-long',h:'在「数据×模型」的交叉地带建立自己的护城河',b:'你同时对数据流和模型能力有较高关注——这是 MLE 最经典的能力画像。纯数据工程师不懂模型，纯 AI 研究员不懂数据管道，而两者都懂的人是产业界最短缺的。'});
  } else if(hasSys&&g('ml')>8){
    items.push({tag:'持续练习',tagClass:'tag-long',h:'培养「既懂系统、又懂模型」的稀缺组合',b:'大多数 AI 研究者不懂系统，大多数系统工程师不懂 AI。两者都懂的人在 AI 基础设施大建设的当下薪资溢价极高。这个组合需要刻意维护，不能让其中一侧萎缩。'});
  }

  // Action 4: social calibration
  items.push({tag:'环境层面',tagClass:'tag-long',h:'找到能真实校准你判断的外部反馈',b:'测试能告诉你偏好什么，但偏好和适合不是一回事。接下来最重要的一步，是找到一个或几个在你目标方向真正工作的人，不是要内推，而是聊清楚他们每周的工作长什么样、最让他们感到有意思的是什么、最让他们感到消耗的是什么。'});

  var list=document.getElementById('actionList');
  if(!list) return;
  list.innerHTML='';
  items.forEach(function(item){
    var el=document.createElement('div');
    el.className='action-item';
    el.innerHTML='<div class="action-tag '+item.tagClass+'">'+item.tag+'</div>'
      +'<div class="action-content"><div class="action-h">'+item.h+'</div><div class="action-b">'+item.b+'</div></div>';
    list.appendChild(el);
  });
}

// ── DIRECTION DETAIL MODAL ──
function openDirModal(dirKey) {
  var d = DIRS[dirKey];
  var dd = DIR_DETAILS[dirKey];
  if (!d) return;

  var domColors = {ai:'var(--ai-color)',cs:'var(--cs-color)',ds:'var(--ds-color)',
                   rb:'var(--rb-color)',or:'var(--or-color)',ee:'var(--ee-color)',ce:'var(--ce-color)'};
  var domLabels = {ai:'AI / ML',cs:'CS',ds:'DS / Stats',rb:'Robotics',or:'Math / OR',ee:'ECE / EE',ce:'CE'};
  var color = domColors[d.domain] || 'var(--accent)';
  var domLabel = domLabels[d.domain] || d.domain;

  document.getElementById('dirModalDomain').innerHTML =
    '<span style="color:'+color+'">'+domLabel+'</span>';
  document.getElementById('dirModalName').textContent = d.name;
  document.getElementById('dirModalEn').textContent = d.en || '';

  if (dd) {
    document.getElementById('dirModalScene').textContent = getDirectionLearnText(dirKey);
    document.getElementById('dirModalExample').textContent = getDirectionProjectText(dirKey);
    var repsEl = document.getElementById('dirModalReps');
    var repsSection = document.getElementById('dirModalRepsSection');
    if (dd.reps) {
      repsEl.innerHTML = renderDirectionToolBlock(dirKey);
      repsSection.style.display = 'block';
    } else {
      repsSection.style.display = 'none';
    }
  } else {
    document.getElementById('dirModalScene').textContent = d.name + ' 方向。';
    document.getElementById('dirModalExample').textContent = '详细介绍即将完善。';
    document.getElementById('dirModalRepsSection').style.display = 'none';
  }

  var sourceSection = document.getElementById('dirModalSourcesSection');
  var sourceEl = document.getElementById('dirModalSources');
  var sourceLinks = renderDirectionSourceLinks(dirKey, 'dir-source-link');
  if (sourceLinks) {
    sourceEl.innerHTML = sourceLinks;
    sourceSection.style.display = 'block';
  } else {
    sourceSection.style.display = 'none';
  }

  var modal = document.getElementById('dirModal');
  modal.classList.add('open');
  modal.style.display = 'flex';
  lockBodyScroll();
  resetEntryScroll(modal.querySelector('.dir-modal-card') || modal);
}

function closeDirModal() {
  var modal = document.getElementById('dirModal');
  modal.classList.remove('open');
  modal.style.display = 'none';
  unlockBodyScroll();
}

// Close on backdrop click
document.addEventListener('DOMContentLoaded', function() {
  normalizeQuestionBanks();
  updateNavState();
  var modal = document.getElementById('dirModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeDirModal();
    });
  }
  var redeem = document.getElementById('redeemOverlay');
  if (redeem) {
    redeem.addEventListener('click', function(e) {
      if (e.target === redeem) closeRedeemOverlay();
    });
  }
});

// Close on Escape
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return;
  closeDirModal();
  closeRedeemOverlay();
});

// ── Make direction detail cards clickable in results ──
var _origBuildDirDetails = buildDirDetails;
buildDirDetails = function(dirEntries) {
  _origBuildDirDetails(dirEntries);
  var cards = document.querySelectorAll('.dir-detail-card');
  cards.forEach(function(card, i) {
    var key = dirEntries.filter(function(e){ return !UMBRELLA_DIRS[e[0]]; })[i];
    if (!key) return;
    card.classList.add('clickable');
    card.style.cursor = 'pointer';
    var trigger = document.createElement('div');
    trigger.className = 'dir-modal-trigger';
    trigger.innerHTML = '了解更多 →';
    card.appendChild(trigger);
    (function(k){ card.addEventListener('click', function(){ openDirModal(k); }); })(key[0]);
  });
};

// ── PHASE TRANSITION OVERLAY ──
var _phaseTransitionInProgress = false;

function showPhaseOverlay(phaseKey, onDone) {
  if (_phaseTransitionInProgress) return;
  _phaseTransitionInProgress = true;
  var info = getPhaseMeta(phaseKey);
  var stageInfo = getStageInfoFromPhase(phaseKey);
  var qArea = document.getElementById('qArea');
  if (!qArea) {
    _phaseTransitionInProgress = false;
    setTimeout(onDone, 0);
    return;
  }
  var phaseCount = qSequence.filter(function(qq){ return qq.phase === phaseKey; }).length;
  var phaseGoal = phaseKey === 'career'
    ? '把主方向和分支兴趣落到“你适合怎样的工作日常与岗位特征”上，开始做人格化职业匹配。'
    : phaseKey === 'deep'
      ? '只围绕你的主方向，继续收窄到最想长期投入的具体研究分支。'
      : '继续把你的专业兴趣从“宽方向”收窄到“更具体的问题”。';
  qArea.innerHTML =
    '<div class="phase-transition-card">' +
      '<div class="phase-transition-kicker">Section Transition</div>' +
      '<div class="phase-transition-part" style="border-color:'+info.color+'33;color:'+info.color+'">' + info.part + ' · ' + info.section + '</div>' +
      '<div class="phase-transition-title">' + info.icon + ' ' + info.short + '</div>' +
      '<div class="phase-transition-desc">' + info.desc + '</div>' +
      '<div class="phase-transition-meta">' +
        '<div class="phase-transition-stat"><span class="phase-transition-label">当前部分题量</span><div class="phase-transition-value">' + phaseCount + ' 题，进度会按这一部分单独计算</div></div>' +
        '<div class="phase-transition-stat"><span class="phase-transition-label">这一部分在做什么</span><div class="phase-transition-value">' + phaseGoal + '</div></div>' +
        '<div class="phase-transition-stat"><span class="phase-transition-label">返回规则</span><div class="phase-transition-value">进入这一部分后，将锁定上一部分，避免来回修改造成结果漂移。</div></div>' +
      '</div>' +
      '<div class="phase-transition-dots" id="phaseTransitionDots"></div>' +
      '<div class="phase-transition-footer">' +
        '<div class="phase-transition-note">' + stageInfo.label + '会单独计数。准备好后再进入，不会自动跳走。</div>' +
        '<div class="phase-transition-actions">' +
          '<button class="phase-transition-btn" id="phaseContinueBtn">进入' + info.short + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  qArea.scrollIntoView({behavior:'smooth', block:'start'});
  var dotsEl = document.getElementById('phaseTransitionDots');
  var totalDots = 4;
  var activeDots = stageInfo.key === 'part2' ? 2 : stageInfo.key === 'part3' ? 3 : stageInfo.key === 'part4' ? 4 : 1;
  for (var i = 0; i < totalDots; i++) {
    var dot = document.createElement('div');
    dot.className = 'phase-dot' + (i < activeDots ? ' active' : '');
    dotsEl.appendChild(dot);
  }
  var btn = document.getElementById('phaseContinueBtn');
  if (btn) {
    btn.onclick = function() {
      _phaseTransitionInProgress = false;
      setTimeout(onDone, 120);
    };
  } else {
    _phaseTransitionInProgress = false;
    setTimeout(onDone, 0);
  }
}

// ── REDEEM CODE / ACCESS GATE ──
// Frontend-only validation is just for local demo. For production sales,
// move code generation and verification to a backend API.
var LOCAL_VALID_CODES = ['0000'];
var ACCESS_SOURCE_LOCAL = 'local-preview';
var ACCESS_SOURCE_LOCAL_CODE = 'local-debug-code';
var ACCESS_SOURCE_CODE = 'redeemed-code';

// Returns true if current time is BEFORE 9:00 AM of the day AFTER the code was issued.
// Since we don't track issue time, we treat any valid code as good until
// the next 9:00 AM from NOW (i.e., if it's after 9am today, valid until 9am tomorrow;
// if before 9am today, valid until 9am today).
function isCodeTimeValid() {
  return true; // time window is enforced per session via codeExpiry in localStorage
}

function getCodeExpiry() {
  // Returns the Unix timestamp of the next 9:00 AM
  var now = new Date();
  var target = new Date(now);
  target.setHours(9, 0, 0, 0);
  // If it's already past 9am, target is 9am TOMORROW
  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }
  return target.getTime();
}

function isLocalPreviewEnv() {
  try {
    var host = window.location.hostname || '';
    return window.location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1';
  } catch(e) { return false; }
}

function getAccessSource() {
  try {
    return localStorage.getItem('quizAccessSource') || '';
  } catch(e) { return ''; }
}

function isSessionValid() {
  try {
    var expiry = parseInt(localStorage.getItem('quizCodeExpiry') || '0');
    return expiry > 0 && Date.now() < expiry;
  } catch(e) { return false; }
}

function canAccessQuiz() {
  return isSessionValid();
}

function grantQuizAccess(source, code) {
  try {
    localStorage.setItem('quizCodeExpiry', String(getCodeExpiry()));
    localStorage.setItem('quizAccessSource', source || ACCESS_SOURCE_CODE);
    if (code) localStorage.setItem('quizCodeUsed', code);
    else localStorage.removeItem('quizCodeUsed');
  } catch(e) {}
}

function clearQuizAccess() {
  try {
    localStorage.removeItem('quizCodeExpiry');
    localStorage.removeItem('quizCodeUsed');
    localStorage.removeItem('quizAccessSource');
  } catch(e) {}
}

function setRedeemError(message) {
  var errEl = document.getElementById('redeemError');
  if (!errEl) return;
  errEl.textContent = message || '';
  errEl.classList.toggle('has-error', !!message);
}

function syncRedeemOverlayState() {
  var title = document.getElementById('redeemTitle');
  var desc = document.getElementById('redeemDesc');
  var localHint = document.getElementById('localPreviewHint');
  var localBtn = document.getElementById('redeemLocalStartBtn');
  var localMode = isLocalPreviewEnv();
  if (title) title.textContent = '输入兑换码';
  if (desc) {
    desc.innerHTML = '兑换码当天有效，兑换后到次日早 9 点前均可重复测试。<br>没有兑换码？前往小红书搜索 <strong style="color:var(--text)">「方向测评」</strong> 购买。';
  }
  if (localHint) localHint.style.display = localMode ? 'block' : 'none';
  if (localBtn) localBtn.style.display = localMode ? 'block' : 'none';
}

function validateRedeemCode(code) {
  if (!code) {
    return { ok: false, message: '请输入兑换码后再开始测试。' };
  }
  if (LOCAL_VALID_CODES.indexOf(code) >= 0) {
    return { ok: true, source: ACCESS_SOURCE_CODE, storedCode: code };
  }
  if (isLocalPreviewEnv() && code.length >= 4) {
    return { ok: true, source: ACCESS_SOURCE_LOCAL_CODE, storedCode: code };
  }
  return { ok: false, message: '兑换码无效。当前本地调试可用测试码 0000；正式上线后建议改成后端校验。' };
}


// ── UPDATE NAV LOGIN STATE ──
function updateNavState() {
  var loggedIn  = document.getElementById('navLoggedIn');
  var loggedOut = document.getElementById('navLoggedOut');
  var badge = document.getElementById('navUserBadge');
  var revokeBtn = document.getElementById('navRevokeBtn');
  var resultsLoggedIn = document.getElementById('resultsNavLoggedIn');
  var resultsLoggedOut = document.getElementById('resultsNavLoggedOut');
  var resultsBadge = document.getElementById('resultsNavUserBadge');
  var source = getAccessSource();
  function setLoggedState(inEl, outEl, badgeEl, isLocal) {
    if (!inEl || !outEl) return;
    if (canAccessQuiz()) {
      inEl.style.display = 'flex';
      outEl.style.display = 'none';
      if (badgeEl) badgeEl.textContent = isLocal ? '本地预览' : '✓ 已兑换';
    } else {
      inEl.style.display = 'none';
      outEl.style.display = 'flex';
    }
  }
  if (!loggedIn || !loggedOut) return;
  if (canAccessQuiz()) {
    loggedIn.style.display  = 'flex';
    loggedOut.style.display = 'none';
    if (source === ACCESS_SOURCE_LOCAL || source === ACCESS_SOURCE_LOCAL_CODE) {
      if (badge) badge.textContent = '本地预览';
      if (revokeBtn) revokeBtn.style.display = 'none';
    } else {
      if (badge) badge.textContent = '✓ 已兑换';
      if (revokeBtn) revokeBtn.style.display = 'inline-flex';
    }
  } else {
    loggedIn.style.display  = 'none';
    loggedOut.style.display = 'flex';
  }
  setLoggedState(
    resultsLoggedIn,
    resultsLoggedOut,
    resultsBadge,
    source === ACCESS_SOURCE_LOCAL || source === ACCESS_SOURCE_LOCAL_CODE
  );
}

function openRedeemOverlay() {
  var overlay = document.getElementById('redeemOverlay');
  if (overlay) {
    syncRedeemOverlayState();
    overlay.classList.add('open');
    overlay.style.display = 'flex';
  }
  lockBodyScroll();
  setTimeout(function(){
    var inp = document.getElementById('redeemInput');
    if (inp) inp.focus();
  }, 100);
  var inp2 = document.getElementById('redeemInput');
  setRedeemError('');
  if (inp2) {
    inp2.value = '';
    inp2.style.borderColor = 'var(--border)';
  }
}

function closeRedeemOverlay() {
  var overlay = document.getElementById('redeemOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    overlay.style.display = 'none';
  }
  unlockBodyScroll();
}

function continueLocalPreview() {
  if (!isLocalPreviewEnv()) return;
  grantQuizAccess(ACCESS_SOURCE_LOCAL, '');
  closeRedeemOverlay();
  updateNavState();
  _startQuizCore();
}

var _modalLockDepth = 0;
var _lockedBodyScrollY = 0;

function lockBodyScroll() {
  if (_modalLockDepth === 0) {
    _lockedBodyScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    document.body.dataset.lockedScrollY = String(_lockedBodyScrollY);
    document.body.style.position = 'fixed';
    document.body.style.top = (-_lockedBodyScrollY) + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.classList.add('modal-open');
  }
  _modalLockDepth += 1;
}

function unlockBodyScroll(force) {
  if (force) {
    _modalLockDepth = 0;
  } else {
    _modalLockDepth = Math.max(0, _modalLockDepth - 1);
  }
  if (_modalLockDepth > 0) return;
  var savedScrollY = parseInt(document.body.dataset.lockedScrollY || String(_lockedBodyScrollY || 0), 10) || 0;
  document.body.classList.remove('modal-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  delete document.body.dataset.lockedScrollY;
  _lockedBodyScrollY = savedScrollY;
  window.scrollTo({ top: savedScrollY, behavior: 'auto' });
}

function goHomeAfterRedeem() {
  hideBlockingLayers();
  var intro = document.getElementById('intro');
  var quiz = document.getElementById('quiz');
  var res = document.getElementById('results');
  if (quiz) quiz.style.display = 'none';
  if (res) res.style.display = 'none';
  if (intro) intro.style.display = 'block';
  document.body.classList.remove('in-quiz', 'in-results');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function revokeRedeem() {
  if (!confirm('确定要退出兑换？退出后需重新输入兑换码才能开始测试。')) return;
  clearQuizAccess();
  goHomeAfterRedeem();
  updateNavState();
}

function checkRedeemCode() {
  var inp = document.getElementById('redeemInput');
  if (!inp) return;
  var code = inp.value.trim().toLowerCase();
  var validation = validateRedeemCode(code);

  if (validation.ok) {
    grantQuizAccess(validation.source, validation.storedCode);
    closeRedeemOverlay();
    updateNavState();
    goHomeAfterRedeem();
  } else {
    setRedeemError(validation.message);
    inp.style.borderColor = '#ef4444';
    setTimeout(function(){
      var i = document.getElementById('redeemInput');
      if (i) i.style.borderColor = 'var(--border)';
    }, 2000);
  }
}

function hideBlockingLayers() {
  ['redeemOverlay','quitDialog','dirModal','careerModal','phaseOverlay'].forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('open', 'show');
    el.style.display = 'none';
  });
  unlockBodyScroll(true);
}

function showQuizLoadingState() {
  var intro = document.getElementById('intro');
  var quiz = document.getElementById('quiz');
  var res = document.getElementById('results');
  var qArea = document.getElementById('qArea');
  var btn = document.getElementById('quizHomeBtn');
  if (intro) intro.style.display = 'none';
  if (res) res.style.display = 'none';
  if (quiz) quiz.style.display = 'block';
  if (btn) btn.classList.add('visible');
  document.body.classList.add('in-quiz');
  document.body.classList.remove('in-results');
  if (qArea) {
    qArea.innerHTML =
      '<div class="q-loading">' +
      '<div class="q-loading-title">正在加载题目…</div>' +
      '<div class="q-loading-desc">如果 1 秒后仍未出现题目，请刷新页面重试。</div>' +
      '</div>';
  }
}

function finalizeQuizRender() {
  var qArea = document.getElementById('qArea');
  if (!qArea) return;
  if (!qArea.textContent || !qArea.textContent.trim()) {
    renderQ();
  }
  // Force viewport to the question area instead of relying on smooth window scroll.
  qArea.scrollIntoView({ block: 'start', behavior: 'auto' });
}


function _startQuizCore() {
  try {
    normalizeQuestionBanks();
    _viewingHistorySnapshot = false;
    _activeHistorySnapshot = null;
    hideBlockingLayers();
    var infoPages = ['directions-page','careers-page','history-page'];
    infoPages.forEach(function(id){
      var el = document.getElementById(id);
      if (el) { el.classList.remove('open'); el.style.display = 'none'; }
    });

    showQuizLoadingState();
    resetAll();
    // Build anchor questions
    qSequence = ANCHOR_Qs.slice();
    curIdx = 0;
    updateProgress();
    renderQ();
    finalizeQuizRender();
    setTimeout(finalizeQuizRender, 80);
  } catch(e) {
    console.error('[_startQuizCore] Error:', e);
    var quiz = document.getElementById('quiz');
    if (quiz) {
      quiz.style.display = 'block';
      var qa = document.getElementById('qArea');
      if (qa) qa.innerHTML = '<div style="padding:40px;color:#ef4444;font-family:monospace;font-size:13px;">启动错误: ' + e.message + '</div>';
    }
  }
}
// ── HISTORY RESULTS ──
function createHistorySnapshot() {
  var ts = Date.now();
  return {
    version: 2,
    ts: ts,
    date: new Date(ts).toLocaleString('zh-CN'),
    topDir: (document.getElementById('heroDir') || {}).textContent || '—',
    topDomains: (document.getElementById('heroDomains') || {}).textContent || '—',
    scores: JSON.parse(JSON.stringify(scores || {})),
    careerScores: JSON.parse(JSON.stringify(careerScores || {})),
    answers: JSON.parse(JSON.stringify(answers || [])),
    qSequenceIds: (qSequence || []).map(function(q) { return q.id; })
  };
}

function saveResultToHistory() {
  if (_viewingHistorySnapshot) return;
  try {
    var snap = createHistorySnapshot();
    var history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift(snap);
    if (history.length > 20) history = history.slice(0, 20);
    localStorage.setItem('quizHistory', JSON.stringify(history));
  } catch(e) { /* localStorage may be unavailable */ }
}

function getHistoryItems() {
  try {
    return JSON.parse(localStorage.getItem('quizHistory') || '[]');
  } catch (e) {
    return [];
  }
}

function restoreHistorySnapshot(index) {
  var history = getHistoryItems();
  var snap = history[index];
  if (!snap) return;
  normalizeQuestionBanks();
  resetAll();
  scores = JSON.parse(JSON.stringify(snap.scores || {}));
  careerScores = JSON.parse(JSON.stringify(snap.careerScores || {}));
  answers = JSON.parse(JSON.stringify(snap.answers || []));
  qSequence = (snap.qSequenceIds || []).map(function(id) {
    var found = null;
    QUESTION_BANKS.some(function(bank) {
      found = bank.find(function(q) { return q.id === id; });
      return !!found;
    });
    return found;
  }).filter(Boolean);
  curIdx = qSequence.length;
  phaseBuilt = true;
  deepBuilt = true;
  careerBuilt = true;
  _viewingHistorySnapshot = true;
  _activeHistorySnapshot = snap;

  var intro = document.getElementById('intro');
  var quiz = document.getElementById('quiz');
  var historyPage = document.getElementById('history-page');
  if (intro) intro.style.display = 'none';
  if (quiz) quiz.style.display = 'none';
  if (historyPage) historyPage.style.display = 'none';
  document.body.classList.remove('in-quiz');
  document.body.classList.add('in-results');
  showResults({ preserveScroll: true });
}

function buildHistoryPage() {
  var el = document.getElementById('historyContent');
  if (!el) return;
  try {
    var history = getHistoryItems();
    if (history.length === 0) {
      el.innerHTML = '<p style="color:var(--muted);font-size:14px;">暂无历史记录。完成测评后结果将自动保存在本设备。</p>';
      return;
    }
    el.innerHTML = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;">' + history.map(function(h, i) {
      var scoreCount = Object.keys(h.scores || {}).filter(function(key) { return DIRS[key]; }).length;
      var badge = h.version >= 2 ? '完整报告' : '旧版摘要';
      return '<div style="background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:20px;display:grid;gap:12px;">'
        + '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">'
        +   '<div style="font-family:var(--font-mono);font-size:10px;color:var(--dim);">' + h.date + '</div>'
        +   '<span style="font-family:var(--font-mono);font-size:10px;padding:4px 8px;border-radius:999px;background:rgba(124,109,250,.12);color:var(--accent);border:1px solid rgba(124,109,250,.18);">' + badge + '</span>'
        + '</div>'
        + '<div style="font-family:var(--font-head);font-size:18px;font-weight:700;line-height:1.35;">' + (h.topDir || '—') + '</div>'
        + '<div style="font-size:12px;color:var(--muted);line-height:1.7;">' + (h.topDomains || '将根据保存的分数重新生成可查看报告。') + '</div>'
        + '<div style="font-family:var(--font-mono);font-size:11px;color:var(--dim);">已记录方向分数 ' + scoreCount + ' 项</div>'
        + '<button class="phase-transition-btn" style="padding:10px 14px;border-radius:10px;" onclick="restoreHistorySnapshot(' + i + ')">查看这份报告</button>'
        + '</div>';
    }).join('') + '</div>';
  } catch(e) {
    el.innerHTML = '<p style="color:var(--dim);">无法读取历史记录。</p>';
  }
}

// Hook into showResults to save
var _origShowResults2 = showResults;
showResults = function() {
  _origShowResults2();
  var heroLabel = document.getElementById('resultHeroLabel');
  if (heroLabel) {
    heroLabel.textContent = _viewingHistorySnapshot ? '历史报告 · 回看模式' : '方向报告 · 综合分析';
  }
  setTimeout(saveResultToHistory, 500);
};

// ── CAREER DETAIL MODAL ──
function openCareerModal(ck) {
  var c = CAREERS[ck];
  if (!c) return;
  var benchmark = getCareerBenchmark(ck);
  var benchmarkFit = getCareerBenchmarkFit(ck);
  var groupLabel = CAREER_GROUP_BY_KEY[ck] || 'Career Track';
  var workParts = getCareerWorkParts(c.work);
  var leafRoles = getCareerLeafRoles(ck);
  document.getElementById('careerModalType').innerHTML =
    '<span style="background:rgba(124,109,250,.12);color:var(--accent);padding:3px 10px;border-radius:6px;font-family:var(--font-mono);font-size:10px;">'
    + groupLabel + '</span>';
  document.getElementById('careerModalName').textContent = c.name;
  document.getElementById('careerModalEn').textContent = c.en || '';
  document.getElementById('careerModalSalary').innerHTML = renderCareerSalaryDetail(ck);
  document.getElementById('careerModalWork').textContent = workParts.intro || c.work;
  document.getElementById('careerModalExample').textContent = workParts.example || c.work;
  document.getElementById('careerModalNext').textContent = c.next;
  var benchmarkSection = document.getElementById('careerModalBenchmarkSection');
  if (benchmark) {
    benchmarkSection.style.display = 'block';
    document.getElementById('careerModalBenchmarkLabel').textContent = benchmark.label;
    document.getElementById('careerModalBenchmarkSub').textContent = benchmark.sourceLabel;
    var fitChip = document.getElementById('careerModalBenchmarkFit');
    fitChip.className = 'career-benchmark-fit career-benchmark-fit-' + benchmarkFit.level;
    fitChip.textContent = benchmarkFit.label;
    document.getElementById('careerModalBenchmarkPay').textContent = benchmark.pay;
    document.getElementById('careerModalBenchmarkOutlook').textContent = benchmark.outlook;
    document.getElementById('careerModalBenchmarkEdu').textContent = benchmark.education;
    document.getElementById('careerModalBenchmarkNote').textContent = benchmarkFit.note + ' ' + benchmark.note + ' ' + CAREER_BLS_NOTE;
    var sourceLink = document.getElementById('careerModalBenchmarkSource');
    sourceLink.href = benchmark.url;
    sourceLink.textContent = '查看来源';
  } else if (benchmarkSection) {
    benchmarkSection.style.display = 'none';
  }
  var leafSection = document.getElementById('careerModalLeafSection');
  if (leafSection && leafRoles.length) {
    leafSection.style.display = 'block';
    document.getElementById('careerModalLeafMeta').textContent =
      '同一条路线在真实招聘里通常会拆成 ' + leafRoles.length + ' 个相近岗位，所以这里继续往下展开这条线下常见的职业出口。';
    document.getElementById('careerModalLeafGrid').innerHTML = renderCareerLeafDetailGrid(ck, {
      limit: leafRoles.length,
      includeBase: true
    });
  } else if (leafSection) {
    leafSection.style.display = 'none';
    document.getElementById('careerModalLeafGrid').innerHTML = '';
  }
  var modal = document.getElementById('careerModal');
  modal.style.display = 'flex';
  lockBodyScroll();
  resetEntryScroll(modal.querySelector('.dir-modal-card') || modal);
}
function closeCareerModal() {
  document.getElementById('careerModal').style.display = 'none';
  unlockBodyScroll();
}
document.addEventListener('DOMContentLoaded', function() {
  var m = document.getElementById('careerModal');
  if (m) m.addEventListener('click', function(e){ if(e.target===m) closeCareerModal(); });
});

function restart(){
  resetAll();
  document.getElementById('results').style.display='none';
  document.getElementById('intro').style.display='block';
  var btn=document.getElementById('quizHomeBtn'); if(btn) btn.classList.remove('visible');
  window.scrollTo({top:0,behavior:'smooth'});
}

function resetEntryScroll(target) {
  if (target && typeof target.scrollTo === 'function') {
    target.scrollTo({ top: 0, behavior: 'auto' });
  }
}

function scrollInfoPageTop(pageId) {
  var page = document.getElementById(pageId);
  if (!page) return;
  page.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── PAGE ROUTING ──
function showPage(page) {
  // Hide all overlayable containers
  ['directions-page','careers-page','history-page'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) { el.classList.remove('open'); el.style.display = 'none'; }
  });

  if (page === 'home') {
    // Show intro, hide quiz/results if visible
    var quiz = document.getElementById('quiz');
    var res  = document.getElementById('results');
    var intro = document.getElementById('intro');
    if (quiz && quiz.style.display !== 'none') { /* stay in quiz */ }
    else if (res && res.style.display !== 'none') { /* stay in results */ }
    else { if (intro) intro.style.display = 'block'; }
    // If called from an info page, just go home regardless
    if (intro) intro.style.display = 'block';
    if (quiz) quiz.style.display = 'none';
    if (res)  res.style.display  = 'none';
    document.body.classList.remove('in-quiz','in-results');
    var btn = document.getElementById('quizHomeBtn');
    if (btn) btn.classList.remove('visible');
    resetEntryScroll(intro);
  } else if (page === 'directions') {
    var dp = document.getElementById('directions-page');
    if (dp) {
      dp.style.display = 'block';
      resetEntryScroll(dp);
      buildDirectionsInfoPage();
    }
  } else if (page === 'careers') {
    var cp = document.getElementById('careers-page');
    if (cp) {
      cp.style.display = 'block';
      resetEntryScroll(cp);
      buildCareersInfoPage();
    }
  } else if (page === 'history') {
    var hp = document.getElementById('history-page');
    if (hp) {
      hp.style.display = 'block';
      resetEntryScroll(hp);
      buildHistoryPage();
    }
  }
  window.scrollTo({top:0, behavior:'auto'});
}

// ── NAVBAR always visible; show start btn after scrolling past hero ──
(function(){
  function onScroll() {
    var hero = document.getElementById('landingHero');
    var navBtn = document.getElementById('navStartBtn');
    var intro = document.getElementById('intro');
    if (!intro || intro.style.display === 'none') return;
    if (!hero || !navBtn) return;
    var heroBottom = hero.getBoundingClientRect().bottom;
    navBtn.style.display = heroBottom < 0 ? 'inline-flex' : 'none';
  }
  window.addEventListener('scroll', onScroll, {passive:true});
})();

// ── QUIT DIALOG ──
function openQuitDialog() {
  var d = document.getElementById('quitDialog');
  if (d) d.style.display = 'flex';
}
function closeQuitDialog() {
  var d = document.getElementById('quitDialog');
  if (d) d.style.display = 'none';
}
function confirmQuit() {
  closeQuitDialog();
  resetAll();
  var quiz = document.getElementById('quiz');
  var res = document.getElementById('results');
  var intro = document.getElementById('intro');
  var btn = document.getElementById('quizHomeBtn');
  if (quiz) quiz.style.display = 'none';
  if (res) res.style.display = 'none';
  if (intro) intro.style.display = 'block';
  if (btn) btn.classList.remove('visible');
  document.body.classList.remove('in-quiz','in-results');
  /* nav stays visible */
  window.scrollTo({top:0,behavior:'smooth'});
}

var CAREER_INFO_GROUPS = {
  'AI / ML 研究与工程': ['career_ml_engineer','career_research_scientist','career_applied_scientist',
    'career_foundation_model','career_llm_engineer','career_nlp_engineer',
    'career_cv_engineer','career_generative_ai','career_rl_engineer','career_efficient_ai'],
  'CS 系统与基础设施': ['career_systems_engineer','career_ml_systems','career_compiler_pl',
    'career_security','career_hci_ux','career_database'],
  'ECE / EE 硬件': ['career_ai_hardware','career_vlsi','career_embedded',
    'career_signal_processing','career_comm_engineer','career_control_systems'],
  'DS / 数据科学': ['career_data_scientist','career_causal_scientist','career_data_engineer',
    'career_mlops','career_domain_ds','career_quant'],
  'Robotics / 机器人': ['career_robotics_engineer','career_robot_learning',
    'career_autonomous_driving','career_perception_engineer','career_hri'],
  'Math / OR': ['career_or_scientist','career_optimization','career_game_theory','career_sci_computing'],
  'CE / 计算机工程': ['career_cpu_architect','career_hw_sw_codesign'],
  '通用路径': ['career_academia','career_tech_pm']
};

var CAREER_GROUP_BY_KEY = (function() {
  var map = {};
  Object.keys(CAREER_INFO_GROUPS).forEach(function(group) {
    CAREER_INFO_GROUPS[group].forEach(function(key) {
      map[key] = group;
    });
  });
  return map;
})();

var CAREER_LEAF_ROLE_TREE = {
  career_ml_engineer: [
    "Machine Learning Engineer",
    "Applied Machine Learning Engineer",
    "AI Engineer",
    "Modeling Engineer",
    "Algorithm Engineer",
    "Predictive Modeling Engineer",
    "Personalization Engineer",
    "Applied Deep Learning Engineer",
    "Model Training Engineer"
  ],
  career_research_scientist: [
    "Research Scientist",
    "Machine Learning Researcher",
    "Theoretical ML Researcher",
    "Statistical ML Researcher",
    "Learning Theory Research Scientist",
    "Generalization Researcher",
    "Probabilistic ML Scientist",
    "Bayesian ML Researcher",
    "Scaling Researcher"
  ],
  career_applied_scientist: [
    "Applied Scientist",
    "Machine Learning Scientist",
    "Applied ML Scientist",
    "Applied Data Scientist",
    "Applied Scientist (NLP)",
    "Applied Scientist (CV)",
    "Applied Scientist (RecSys)",
    "Applied Scientist (GenAI)"
  ],
  career_foundation_model: [
    "Foundation Model Engineer",
    "Foundation Model Research Scientist",
    "Pretraining Engineer",
    "LLM / FM Research Engineer",
    "Foundation Model Researcher",
    "Model Adaptation Engineer",
    "AI Platform Model Engineer",
    "Pretraining Research Engineer"
  ],
  career_llm_engineer: [
    "LLM Engineer",
    "LLM Research Engineer",
    "Prompt Engineer",
    "AI Agent Engineer",
    "RAG Engineer",
    "LLM Application Engineer",
    "LLM Evaluation Engineer",
    "Post-Training Engineer",
    "LLM Safety Engineer",
    "Model Alignment Engineer",
    "Preference Optimization Engineer"
  ],
  career_nlp_engineer: [
    "NLP Engineer",
    "NLP Research Engineer",
    "NLP Scientist",
    "Computational Linguist",
    "Text Mining Engineer",
    "Conversational AI Engineer",
    "Information Retrieval Engineer",
    "Search Engineer",
    "Retrieval Engineer",
    "Ranking Engineer",
    "Recommendation Engineer",
    "ASR Engineer",
    "TTS Engineer",
    "Document AI Engineer",
    "Information Extraction Engineer"
  ],
  career_cv_engineer: [
    "Computer Vision Engineer",
    "Computer Vision Research Engineer",
    "CV Scientist",
    "Perception Engineer",
    "Vision Algorithm Engineer",
    "Imaging AI Engineer",
    "Visual Understanding Researcher",
    "Video AI Engineer",
    "3D Vision Engineer",
    "Medical Vision Engineer",
    "Medical Imaging Scientist",
    "AR/VR Vision Engineer"
  ],
  career_generative_ai: [
    "Generative AI Engineer",
    "Generative Modeling Researcher",
    "Diffusion Model Engineer",
    "Image / Video Generation Researcher",
    "Creative AI Engineer",
    "Content AI Engineer",
    "Creative Tooling Engineer",
    "AI Content Systems Engineer",
    "Creative Technologist",
    "Generative Media Engineer",
    "AI Artist Tools Engineer"
  ],
  career_rl_engineer: [
    "RL Research Scientist",
    "RL Engineer",
    "Decision AI Engineer",
    "Control Learning Engineer",
    "Simulation Learning Engineer",
    "Offline RL Researcher",
    "Sequential Decision Scientist",
    "Applied RL Engineer",
    "Multi-Agent Systems Researcher",
    "MARL Engineer",
    "Agent Planning Engineer"
  ],
  career_efficient_ai: [
    "Efficient ML Engineer",
    "Performance ML Engineer",
    "Inference Engineer",
    "Acceleration Engineer",
    "Model Compression Engineer",
    "Quantization Engineer",
    "Compression Engineer",
    "Deployment Optimization Engineer",
    "Distillation Researcher",
    "Runtime Engineer",
    "Serving Performance Engineer",
    "GPU Performance Engineer",
    "Training Systems Engineer"
  ],
  career_systems_engineer: [
    "Distributed Systems Engineer",
    "Backend Infrastructure Engineer",
    "Platform Engineer",
    "Cloud Systems Engineer",
    "Distributed Storage Engineer",
    "Reliability Engineer",
    "Cloud Engineer",
    "Infrastructure Engineer",
    "Site Reliability Engineer",
    "DevOps Engineer",
    "Storage Engineer",
    "Network Platform Engineer",
    "Edge Systems Engineer"
  ],
  career_ml_systems: [
    "ML Systems Engineer",
    "AI Infrastructure Engineer",
    "Training Systems Engineer",
    "Inference Systems Engineer",
    "Serving Engineer",
    "Platform ML Engineer",
    "ML Infrastructure Engineer",
    "Distributed Training Engineer",
    "AI Systems Performance Engineer"
  ],
  career_compiler_pl: [
    "Compiler Engineer",
    "GPU Compiler Engineer",
    "ML Compiler Engineer",
    "Programming Languages Researcher",
    "Language Runtime Engineer",
    "Static Analysis Engineer",
    "Developer Tools Engineer",
    "Formal Verification Engineer",
    "Software Verification Engineer",
    "Verification Engineer",
    "Toolchain Engineer"
  ],
  career_security: [
    "Security Engineer",
    "Cybersecurity Engineer",
    "Security Researcher",
    "Security Analyst",
    "Product Security Engineer",
    "Threat Detection Engineer",
    "Network Security Engineer",
    "SOC Analyst",
    "Incident Response Engineer",
    "Cloud Security Engineer",
    "Offensive Security Engineer",
    "Cryptography Engineer",
    "Privacy Engineer",
    "Data Privacy Engineer",
    "Confidential Computing Engineer"
  ],
  career_hci_ux: [
    "UX Engineer",
    "UX Researcher",
    "HCI Research Scientist",
    "Product Designer (technical)",
    "Interaction Designer",
    "Human Factors Engineer",
    "Interactive Systems Engineer",
    "Accessibility Engineer",
    "Inclusive Design Specialist",
    "Human-Centered AI Researcher",
    "AI Interaction Designer"
  ],
  career_database: [
    "Database Engineer",
    "Database Administrator",
    "Database Architect",
    "Data Platform Engineer",
    "Query Engine Engineer",
    "Database Research Engineer",
    "Data Management Engineer",
    "Big Data Engineer",
    "Stream Processing Engineer",
    "Warehouse Platform Engineer"
  ],
  career_ai_hardware: [
    "AI Accelerator Engineer",
    "ML Hardware Engineer",
    "NPU Engineer",
    "Accelerator Architect",
    "Hardware Performance Engineer",
    "NPU Architect",
    "NPU Design Engineer",
    "AI SoC Engineer",
    "Inference Hardware Engineer",
    "ML Training Systems Engineer",
    "Quantized Compute Architect",
    "Memory Computing Researcher"
  ],
  career_vlsi: [
    "VLSI Engineer",
    "ASIC Design Engineer",
    "Physical Design Engineer",
    "RTL Engineer",
    "SoC Engineer",
    "Digital IC Engineer",
    "Front-End Design Engineer",
    "FPGA Engineer",
    "DFT Engineer",
    "EDA Engineer",
    "CAD Engineer",
    "Verification Tool Engineer"
  ],
  career_embedded: [
    "Embedded Systems Engineer",
    "Firmware Engineer",
    "Embedded Software Engineer",
    "Real-Time Software Engineer",
    "IoT Engineer",
    "Device Platform Engineer",
    "Connected Devices Engineer",
    "Sensor Systems Engineer",
    "Edge Device Engineer",
    "BSP Engineer",
    "Driver Engineer",
    "Platform Firmware Engineer",
    "Bring-Up Engineer"
  ],
  career_signal_processing: [
    "DSP Engineer",
    "Signal Processing Engineer",
    "Embedded DSP Engineer",
    "ISP Engineer",
    "Camera Algorithm Engineer",
    "Speech DSP Engineer",
    "Audio / Speech Algorithm Engineer",
    "Audio Engineer",
    "Acoustic Signal Processing Engineer",
    "Statistical Signal Processing Scientist",
    "Sensor Fusion Engineer",
    "Radar / Sensor Algorithm Engineer"
  ],
  career_comm_engineer: [
    "Wireless Communications Engineer",
    "RF Engineer",
    "Baseband Engineer",
    "Cellular Systems Engineer",
    "Network Planning Engineer",
    "Mobile Communications Engineer",
    "5G / 6G Engineer",
    "Telecom Systems Engineer",
    "Wireless Protocol Engineer",
    "Network Optimization Engineer",
    "RAN Engineer",
    "Communications Standards Engineer",
    "Channel Coding Engineer"
  ],
  career_control_systems: [
    "Control Engineer",
    "Automation Engineer",
    "Controls Software Engineer",
    "Robotics Controls Engineer",
    "Motion Control Engineer",
    "Autonomous Systems Engineer",
    "State Estimation Engineer",
    "Navigation Engineer",
    "Modeling & Simulation Engineer",
    "Vehicle Controls Engineer",
    "Drone Control Engineer",
    "Embedded Control Engineer",
    "Safety Systems Engineer"
  ],
  career_data_scientist: [
    "Data Scientist",
    "Product Data Scientist",
    "Applied Data Scientist",
    "Research Data Scientist",
    "Business Data Scientist",
    "Analytics Scientist",
    "Predictive Modeler",
    "Statistical Modeler",
    "Forecasting Scientist",
    "Time Series Data Scientist",
    "Decision Scientist"
  ],
  career_causal_scientist: [
    "Causal Inference Scientist",
    "Experimentation Scientist",
    "A/B Testing Scientist",
    "Econometrician",
    "Policy Analyst",
    "Evaluation Scientist",
    "Growth Scientist",
    "Methodologist",
    "Decision Scientist"
  ],
  career_data_engineer: [
    "Data Engineer",
    "Analytics Engineer",
    "Data Platform Engineer",
    "Data Infrastructure Engineer",
    "ETL Engineer",
    "Pipeline Engineer",
    "Workflow Engineer",
    "Data Warehouse Engineer",
    "Data Quality Engineer",
    "Data Governance Engineer",
    "Data Reliability Engineer"
  ],
  career_mlops: [
    "MLOps Engineer",
    "ML Platform Engineer",
    "AI Infrastructure Engineer",
    "ML Reliability Engineer",
    "Model Operations Engineer",
    "ML Deployment Engineer",
    "Production ML Engineer",
    "Model Monitoring Engineer",
    "ML Evaluation Engineer",
    "Feature Platform Engineer",
    "Experimentation Platform Engineer",
    "AI Operations Engineer"
  ],
  career_domain_ds: [
    "Bioinformatician",
    "Computational Biologist",
    "Biomedical Data Scientist",
    "Computational Social Scientist",
    "Social Data Scientist",
    "Policy Data Scientist",
    "Mobility Data Scientist",
    "Geospatial Data Scientist",
    "Environmental Data Scientist",
    "Climate Data Scientist",
    "Industrial Data Scientist",
    "Healthcare Data Scientist"
  ],
  career_quant: [
    "Quantitative Analyst",
    "Quant Researcher",
    "Financial Data Scientist",
    "Risk Modeler",
    "Algorithmic Trading Researcher",
    "Credit Risk Scientist",
    "Fraud Risk Scientist",
    "Financial Economist",
    "Portfolio Scientist",
    "Actuarial Analyst"
  ],
  career_robotics_engineer: [
    "Robotics Engineer",
    "Robotics Research Engineer",
    "Automation Engineer",
    "Mechatronics Engineer",
    "Field Robotics Engineer",
    "Motion Planning Engineer",
    "Path Planning Engineer",
    "UAV Engineer",
    "Aerial Robotics Engineer",
    "Marine Robotics Engineer",
    "Swarm Robotics Engineer"
  ],
  career_robot_learning: [
    "Robot Learning Engineer",
    "Robotics AI Researcher",
    "Embodied AI Engineer",
    "Imitation Learning Researcher",
    "Behavior Cloning Research Engineer",
    "Embodied Systems Research Engineer",
    "World Model Researcher",
    "Language Robotics Engineer",
    "Vision-Language-Action Engineer",
    "Embodied LLM Engineer",
    "Embodied Foundation Model Engineer"
  ],
  career_autonomous_driving: [
    "Autonomous Driving Engineer",
    "AV Perception Engineer",
    "AV Planning Engineer",
    "AV Controls Engineer",
    "Simulation Engineer",
    "Transportation Autonomy Engineer",
    "Mobility Systems Engineer",
    "Smart Mobility Scientist",
    "Intelligent Mobility Systems Engineer"
  ],
  career_perception_engineer: [
    "SLAM Engineer",
    "Localization Engineer",
    "Mapping Engineer",
    "Robotics Perception Engineer",
    "Sensor Fusion Engineer",
    "Radar / LiDAR Fusion Engineer",
    "3D Perception Engineer",
    "Spatial AI Engineer",
    "Visual Navigation Engineer",
    "Spatial Perception Engineer",
    "Geospatial Robotics Engineer"
  ],
  career_hri: [
    "HRI Researcher",
    "Robotics UX Researcher",
    "Assistive Robotics Engineer",
    "Rehabilitation Robotics Engineer",
    "Clinical Robotics Scientist",
    "Cobotics Engineer",
    "Social Robotics Researcher",
    "Interaction Engineer",
    "Robot Product Engineer",
    "UX Robotics Engineer"
  ],
  career_or_scientist: [
    "Operations Research Analyst",
    "OR Scientist",
    "Optimization Consultant",
    "Resource Allocation Analyst",
    "Scheduling Scientist",
    "Supply Chain Analyst",
    "Logistics Scientist",
    "Network Optimization Analyst",
    "Revenue Management Scientist",
    "Pricing Scientist",
    "Marketplace Scientist"
  ],
  career_optimization: [
    "Optimization Scientist",
    "Optimization Researcher",
    "ML Optimization Engineer",
    "Training Optimization Engineer",
    "Numerical Optimization Scientist",
    "Large-Scale Optimization Engineer",
    "Stochastic Optimization Researcher",
    "Solver Engineer",
    "Variational Methods Researcher",
    "Applied Mathematician"
  ],
  career_game_theory: [
    "Quantitative Strategist",
    "Mechanism Design Researcher",
    "Auction Scientist",
    "Marketplace Economist",
    "Platform Strategy Scientist",
    "Economic Research Scientist",
    "Game Theory Researcher"
  ],
  career_sci_computing: [
    "Scientific Programmer",
    "Computational Scientist",
    "Research Software Engineer",
    "HPC Scientist",
    "Numerical Methods Engineer",
    "Computational Mathematician",
    "Simulation Engineer",
    "Modeling Scientist",
    "Uncertainty Quantification Scientist"
  ],
  career_cpu_architect: [
    "Computer Architect",
    "CPU Architect",
    "GPU Architect",
    "Processor Architect",
    "Microarchitecture Engineer",
    "Performance Architect",
    "Memory Architect",
    "Parallel Computing Architect",
    "Heterogeneous Computing Engineer"
  ],
  career_hw_sw_codesign: [
    "HW/SW Co-Design Engineer",
    "Embedded Systems Architect",
    "SoC Integration Engineer",
    "FPGA-Based Computing Engineer",
    "Accelerator Systems Engineer",
    "Domain-Specific Architectures Engineer",
    "Systems Optimization Engineer",
    "Runtime / Compiler / Hardware Engineer",
    "Edge-Cloud Engineer",
    "Sensor-Compute Systems Engineer"
  ],
  career_academia: [
    "PhD Researcher",
    "Postdoctoral Researcher",
    "Assistant Professor",
    "Academic Research Scientist",
    "Research Fellow",
    "Principal Investigator"
  ],
  career_tech_pm: [
    "Technical Product Manager",
    "AI Product Manager",
    "ML Product Manager",
    "Platform Product Manager",
    "Developer Product Manager",
    "Research Product Lead"
  ]
};

(function enhanceCareerLeafTree() {
  var known = {};
  Object.keys(CAREER_LEAF_ROLE_TREE).forEach(function(ck) {
    (CAREER_LEAF_ROLE_TREE[ck] || []).forEach(function(role) {
      known[role] = ck;
    });
  });
  function add(ck, roles) {
    if (!CAREER_LEAF_ROLE_TREE[ck]) CAREER_LEAF_ROLE_TREE[ck] = [];
    roles.forEach(function(role) {
      if (!role || known[role]) return;
      CAREER_LEAF_ROLE_TREE[ck].push(role);
      known[role] = ck;
    });
  }
  add('career_foundation_model', [
    'Multimodal Foundation Model Engineer',
    'VLM Engineer',
    'Vision-Language Research Engineer',
    'VLM Research Scientist',
    'Document & Vision AI Engineer'
  ]);
  add('career_nlp_engineer', [
    'Relevance Engineer',
    'Search Relevance Scientist',
    'Search Infrastructure Engineer',
    'Search Quality Engineer',
    'Recommender Systems Engineer',
    'Recommendation Scientist',
    'Growth ML Engineer',
    'Speech Engineer',
    'Speech Research Scientist',
    'Voice AI Engineer',
    'Spoken Language Understanding Engineer'
  ]);
  add('career_generative_ai', [
    'Language Generation Engineer',
    'LLM Generation Engineer',
    'Controllable Generation Researcher',
    'GenAI Product Engineer',
    'Interactive AI Engineer',
    'Media AI Researcher'
  ]);
  add('career_rl_engineer', [
    'Policy Optimization Scientist'
  ]);
  add('career_efficient_ai', [
    'LLM Inference Engineer',
    'Inference Optimization Engineer',
    'Quantization / Pruning Engineer',
    'Compiler / Runtime Optimization Engineer',
    'Edge AI Engineer'
  ]);
  add('career_systems_engineer', [
    'Systems Research Engineer',
    'Cloud Platform Engineer',
    'Low-Level Software Engineer'
  ]);
  add('career_comm_engineer', [
    'Communications Research Scientist'
  ]);
  add('career_control_systems', [
    'Control Research Scientist',
    'MPC Engineer'
  ]);
  add('career_data_scientist', [
    'Product Analyst'
  ]);
  add('career_causal_scientist', [
    'Experimentation Analyst',
    'Public Sector Data Scientist'
  ]);
  add('career_or_scientist', [
    'Operations Scientist',
    'Industrial Engineer'
  ]);
  add('career_robotics_engineer', [
    'Autonomy Engineer',
    'Industrial Robotics Engineer'
  ]);
  add('career_robot_learning', [
    'Applied Scientist (Robotics)',
    'Robot Instruction-Following Researcher',
    'VLA Engineer'
  ]);
  add('career_autonomous_driving', [
    'Robotics / Autonomy Engineer',
    'Mission Systems Engineer'
  ]);
})();

var CAREER_LEAF_FAMILY_BY_ROLE = (function() {
  var map = {};
  Object.keys(CAREER_LEAF_ROLE_TREE).forEach(function(ck) {
    (CAREER_LEAF_ROLE_TREE[ck] || []).forEach(function(role) {
      if (!map[role]) map[role] = ck;
    });
  });
  return map;
})();

function pickExistingLeafRoles(roles) {
  var seen = {};
  return (roles || []).filter(function(role) {
    var key = String(role || '').trim();
    if (!key || seen[key] || !CAREER_LEAF_FAMILY_BY_ROLE[key]) return false;
    seen[key] = true;
    return true;
  });
}

var CAREER_ROLE_TO_LEAF_ROLES = {
  ml_rs: pickExistingLeafRoles([
    'Research Scientist',
    'Machine Learning Researcher',
    'Statistical ML Researcher',
    'Learning Theory Research Scientist'
  ]),
  ml_theorist: pickExistingLeafRoles([
    'Theoretical ML Researcher',
    'Learning Theory Research Scientist',
    'Generalization Researcher',
    'Assistant Professor'
  ]),
  applied_sci: pickExistingLeafRoles([
    'Applied Scientist',
    'Machine Learning Scientist',
    'Applied ML Scientist',
    'Applied Data Scientist'
  ]),
  fm_researcher: pickExistingLeafRoles([
    'Foundation Model Research Scientist',
    'Foundation Model Researcher',
    'LLM / FM Research Engineer',
    'Pretraining Research Engineer'
  ]),
  optim_researcher: pickExistingLeafRoles([
    'Optimization Researcher',
    'Numerical Optimization Scientist',
    'ML Optimization Engineer',
    'Solver Engineer'
  ]),
  llm_eng: pickExistingLeafRoles([
    'LLM Engineer',
    'LLM Application Engineer',
    'Post-Training Engineer',
    'RAG Engineer',
    'LLM Inference Engineer'
  ]),
  llm_rs: pickExistingLeafRoles([
    'LLM Research Engineer',
    'Foundation Model Research Scientist',
    'Model Alignment Engineer',
    'Preference Optimization Engineer',
    'LLM Safety Engineer'
  ]),
  nlp_eng: pickExistingLeafRoles([
    'NLP Engineer',
    'NLP Research Engineer',
    'Computational Linguist',
    'Conversational AI Engineer'
  ]),
  search_eng: pickExistingLeafRoles([
    'Search Engineer',
    'Information Retrieval Engineer',
    'Retrieval Engineer',
    'Ranking Engineer',
    'Relevance Engineer'
  ]),
  recsys_eng: pickExistingLeafRoles([
    'Recommendation Engineer',
    'Recommender Systems Engineer',
    'Recommendation Scientist',
    'Growth ML Engineer',
    'Personalization Engineer'
  ]),
  agent_eng: pickExistingLeafRoles([
    'AI Agent Engineer',
    'Prompt Engineer',
    'RAG Engineer',
    'LLM Application Engineer'
  ]),
  cv_eng: pickExistingLeafRoles([
    'Computer Vision Engineer',
    'Computer Vision Research Engineer',
    'CV Scientist',
    'Vision Algorithm Engineer'
  ]),
  med_vision_sci: pickExistingLeafRoles([
    'Medical Imaging Scientist',
    'Medical Vision Engineer',
    'Imaging AI Engineer',
    'Document & Vision AI Engineer'
  ]),
  genai_eng: pickExistingLeafRoles([
    'Generative AI Engineer',
    'Diffusion Model Engineer',
    'Image / Video Generation Researcher',
    'Creative AI Engineer',
    'Controllable Generation Researcher'
  ]),
  vlm_eng: pickExistingLeafRoles([
    'VLM Engineer',
    'Vision-Language Research Engineer',
    'VLM Research Scientist',
    'Multimodal Foundation Model Engineer',
    'Document & Vision AI Engineer'
  ]),
  vision3d_eng: pickExistingLeafRoles([
    '3D Vision Engineer',
    'AR/VR Vision Engineer',
    'Spatial AI Engineer',
    'Reconstruction Engineer'
  ]),
  video_ai: pickExistingLeafRoles([
    'Video AI Engineer',
    'Image / Video Generation Researcher',
    'Video Understanding Researcher',
    'Multimodal Video Engineer'
  ]),
  ml_sys_eng: pickExistingLeafRoles([
    'ML Systems Engineer',
    'Training Systems Engineer',
    'Inference Systems Engineer',
    'Platform ML Engineer',
    'ML Infrastructure Engineer'
  ]),
  inf_eng: pickExistingLeafRoles([
    'Inference Engineer',
    'LLM Inference Engineer',
    'Serving Performance Engineer',
    'Runtime Engineer',
    'Inference Optimization Engineer'
  ]),
  dist_sys_eng: pickExistingLeafRoles([
    'Distributed Systems Engineer',
    'Backend Infrastructure Engineer',
    'Cloud Systems Engineer',
    'Site Reliability Engineer',
    'Distributed Storage Engineer'
  ]),
  data_plat: pickExistingLeafRoles([
    'Data Platform Engineer',
    'Query Engine Engineer',
    'Database Architect',
    'Warehouse Platform Engineer',
    'Stream Processing Engineer'
  ]),
  ai_infra: pickExistingLeafRoles([
    'AI Infrastructure Engineer',
    'ML Infrastructure Engineer',
    'AI Systems Performance Engineer',
    'Acceleration Engineer',
    'Platform ML Engineer'
  ]),
  compiler_eng: pickExistingLeafRoles([
    'Compiler Engineer',
    'GPU Compiler Engineer',
    'ML Compiler Engineer',
    'Toolchain Engineer',
    'Compiler / Runtime Optimization Engineer'
  ]),
  ai_hw_eng: pickExistingLeafRoles([
    'AI Accelerator Engineer',
    'ML Hardware Engineer',
    'Hardware Performance Engineer',
    'Inference Hardware Engineer',
    'AI Accelerator Architect'
  ]),
  npu_arch: pickExistingLeafRoles([
    'NPU Architect',
    'Accelerator Architect',
    'NPU Design Engineer',
    'Computer Architect',
    'Microarchitecture Engineer'
  ]),
  vlsi_eng: pickExistingLeafRoles([
    'VLSI Engineer',
    'ASIC Design Engineer',
    'RTL Engineer',
    'Physical Design Engineer',
    'FPGA Engineer'
  ]),
  embedded_eng: pickExistingLeafRoles([
    'Embedded Systems Engineer',
    'Firmware Engineer',
    'Embedded Software Engineer',
    'Edge Device Engineer',
    'Bring-Up Engineer'
  ]),
  dsp_eng: pickExistingLeafRoles([
    'DSP Engineer',
    'Signal Processing Engineer',
    'ISP Engineer',
    'Camera Algorithm Engineer',
    'Speech DSP Engineer'
  ]),
  eda_eng: pickExistingLeafRoles([
    'EDA Engineer',
    'CAD Engineer',
    'Verification Tool Engineer',
    'Physical Design Engineer'
  ]),
  robotics_eng: pickExistingLeafRoles([
    'Robotics Engineer',
    'Motion Planning Engineer',
    'Path Planning Engineer',
    'Autonomy Engineer',
    'Industrial Robotics Engineer'
  ]),
  av_eng: pickExistingLeafRoles([
    'Autonomous Driving Engineer',
    'AV Planning Engineer',
    'AV Controls Engineer',
    'Robotics / Autonomy Engineer',
    'Mission Systems Engineer'
  ]),
  robot_learn: pickExistingLeafRoles([
    'Robot Learning Engineer',
    'Embodied AI Engineer',
    'Vision-Language-Action Engineer',
    'Embodied LLM Engineer',
    'VLA Engineer'
  ]),
  perception_eng: pickExistingLeafRoles([
    'Perception Engineer',
    'Robotics Perception Engineer',
    '3D Perception Engineer',
    'Sensor Fusion Engineer',
    'Radar / LiDAR Fusion Engineer'
  ]),
  hri_researcher: pickExistingLeafRoles([
    'HRI Researcher',
    'Robotics UX Researcher',
    'Social Robotics Researcher',
    'Assistive Robotics Engineer',
    'Interaction Engineer'
  ]),
  slam_eng: pickExistingLeafRoles([
    'SLAM Engineer',
    'Localization Engineer',
    'Mapping Engineer',
    'Visual Navigation Engineer',
    'Spatial Perception Engineer'
  ]),
  data_sci: pickExistingLeafRoles([
    'Data Scientist',
    'Product Data Scientist',
    'Forecasting Scientist',
    'Product Analyst',
    'Decision Scientist'
  ]),
  causal_sci: pickExistingLeafRoles([
    'Causal Inference Scientist',
    'Experimentation Scientist',
    'A/B Testing Scientist',
    'Econometrician',
    'Experimentation Analyst'
  ]),
  data_eng_role: pickExistingLeafRoles([
    'Data Engineer',
    'Data Infrastructure Engineer',
    'Pipeline Engineer',
    'Data Warehouse Engineer',
    'Data Quality Engineer'
  ]),
  mlops_eng: pickExistingLeafRoles([
    'MLOps Engineer',
    'ML Platform Engineer',
    'ML Reliability Engineer',
    'Model Monitoring Engineer',
    'Model Operations Engineer'
  ]),
  domain_ds: pickExistingLeafRoles([
    'Healthcare Data Scientist',
    'Biomedical Data Scientist',
    'Policy Data Scientist',
    'Industrial Data Scientist',
    'Environmental Data Scientist'
  ]),
  quant_ds: pickExistingLeafRoles([
    'Quantitative Analyst',
    'Financial Data Scientist',
    'Credit Risk Scientist',
    'Fraud Risk Scientist',
    'Risk Modeler'
  ]),
  or_sci: pickExistingLeafRoles([
    'Operations Research Analyst',
    'OR Scientist',
    'Operations Scientist',
    'Supply Chain Analyst',
    'Network Optimization Analyst'
  ]),
  quant_researcher: pickExistingLeafRoles([
    'Quant Researcher',
    'Quantitative Researcher',
    'Quantitative Strategist',
    'Algorithmic Trading Researcher',
    'Auction Scientist'
  ]),
  optim_eng: pickExistingLeafRoles([
    'Optimization Scientist',
    'Optimization Researcher',
    'ML Optimization Engineer',
    'Large-Scale Optimization Engineer',
    'Numerical Optimization Scientist'
  ]),
  risk_sci: pickExistingLeafRoles([
    'Risk Modeler',
    'Credit Risk Scientist',
    'Fraud Risk Scientist',
    'Actuarial Analyst',
    'Uncertainty Quantification Scientist'
  ]),
  decision_sci: pickExistingLeafRoles([
    'Decision Scientist',
    'Policy Analyst',
    'Marketplace Scientist',
    'Platform Strategy Scientist',
    'Economic Research Scientist'
  ])
};

(function fillCareerRoleLeafFallbacks() {
  Object.keys(CAREER_ROLE_TO_PATHS).forEach(function(alias) {
    if (CAREER_ROLE_TO_LEAF_ROLES[alias] && CAREER_ROLE_TO_LEAF_ROLES[alias].length) return;
    var roles = [];
    (CAREER_ROLE_TO_PATHS[alias] || []).forEach(function(ck) {
      roles = roles.concat(getCareerLeafRoles(ck).slice(0, 4));
    });
    CAREER_ROLE_TO_LEAF_ROLES[alias] = pickExistingLeafRoles(roles).slice(0, 6);
  });
})();

function getCareerLeafRoles(ck) {
  var seen = {};
  return (CAREER_LEAF_ROLE_TREE[ck] || []).filter(function(role) {
    var key = String(role || '').trim();
    if (!key || seen[key]) return false;
    seen[key] = true;
    return true;
  });
}

function renderCareerLeafPreview(ck, limit, chipClass, includeMore) {
  var roles = getCareerLeafRoles(ck);
  if (!roles.length) return '';
  var max = limit || 4;
  var klass = chipClass || 'career-leaf-chip';
  var out = roles.slice(0, max).map(function(role) {
    return '<span class="'+klass+'">'+escapeHtml(role)+'</span>';
  });
  if (includeMore !== false && roles.length > max) {
    out.push('<span class="'+klass+' career-leaf-chip-more">+'+(roles.length - max)+' 个</span>');
  }
  return out.join('');
}

function renderCareerLeafGrid(ck, limit, chipClass) {
  var roles = getCareerLeafRoles(ck);
  var max = limit || roles.length;
  var klass = chipClass || 'career-leaf-chip';
  return roles.slice(0, max).map(function(role) {
    return '<span class="'+klass+'">'+escapeHtml(role)+'</span>';
  }).join('');
}

function buildCareerLeafBox(careerEntries) {
  var roleEl = document.getElementById('careerRoleBox');
  if (!roleEl) return;
  var topFamilies = (careerEntries || []).filter(function(entry) {
    return getCareerLeafRoles(entry[0]).length > 0;
  }).slice(0, 3).map(function(entry) {
    return entry[0];
  });
  var leafEntries = getRankedCareerLeafEntries({
    familyKeys: topFamilies,
    limit: 6,
    includeBase: true
  });
  if (!leafEntries.length) {
    roleEl.innerHTML = '';
    roleEl.style.display = 'none';
    return;
  }
  var out = '<div class="career-role-box-head">'
    + '<div class="career-role-box-title">你最匹配的具体岗位</div>'
    + '<div class="career-role-box-desc">上面的卡片是职业族，这里继续细化到树上的具体岗位叶子，重点展开每个岗位平时在做什么，以及它最常出现的真实工作场景。</div>'
    + '</div>'
    + '<div class="career-leaf-detail-grid">';
  leafEntries.forEach(function(entry) {
    out += renderCareerLeafDetailCard(entry.role, entry.familyKey, {showFamily:true});
  });
  out += '</div>';
  roleEl.innerHTML = out;
  roleEl.style.display = 'block';
}

var CAREER_BENCHMARKS = {
  software_developers: {
    short: '软件开发',
    label: 'Software Developers',
    pay: '$133,080',
    outlook: '+17%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Software Developers',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
    note: '更接近 LLM / NLP / CV / 生成式 AI / 系统平台 / MLOps / 自动驾驶 / 感知等工程型岗位的官方职业口径。'
  },
  computer_research: {
    short: '计算机科研',
    label: 'Computer & Information Research Scientists',
    pay: '$140,910',
    outlook: '+20%',
    education: '通常硕士',
    sourceLabel: 'BLS OOH · C&I Research Scientists',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm',
    note: '更接近研究科学家、基础模型研究与机器人学习等偏研究岗位的官方职业口径。'
  },
  mathematicians_statisticians: {
    short: '数学统计',
    label: 'Mathematicians and Statisticians',
    pay: '$104,860',
    outlook: '+11%',
    education: '通常硕士',
    sourceLabel: 'BLS OOH · Mathematicians and Statisticians',
    url: 'https://www.bls.gov/ooh/math/mathematicians-and-statisticians.htm',
    note: '更接近量化研究、概率建模、科学计算中偏数学建模与统计推断的岗位口径。'
  },
  data_scientists: {
    short: '数据科学',
    label: 'Data Scientists',
    pay: '$112,590',
    outlook: '+36%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Data Scientists',
    url: 'https://www.bls.gov/ooh/math/data-scientists.htm',
    note: '更接近数据科学、因果推断、领域数据科学等以分析与实验为主的岗位。'
  },
  operations_research: {
    short: '运筹优化',
    label: 'Operations Research Analysts',
    pay: '$91,290',
    outlook: '+23%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · OR Analysts',
    url: 'https://www.bls.gov/ooh/math/operations-research-analysts.htm',
    note: '更接近运筹、调度、优化、决策科学等岗位；量化研究因行业奖金结构特殊，通常会显著高于这一官方口径。'
  },
  information_security: {
    short: '安全分析',
    label: 'Information Security Analysts',
    pay: '$124,910',
    outlook: '+29%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Information Security Analysts',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm',
    note: '适合作为安全工程与隐私工程岗位的官方统计基准。'
  },
  database_architects: {
    short: '数据库',
    label: 'Database Administrators and Architects',
    pay: '$123,100',
    outlook: '+8%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Database Administrators and Architects',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/database-administrators.htm',
    note: '更接近数据库、数据平台、查询引擎等岗位的官方职业口径。'
  },
  hardware_engineers: {
    short: '硬件架构',
    label: 'Computer Hardware Engineers',
    pay: '$155,020',
    outlook: '+7%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Computer Hardware Engineers',
    url: 'https://www.bls.gov/ooh/architecture-and-engineering/computer-hardware-engineers.htm',
    note: '更接近 AI 芯片、CPU / GPU 架构、软硬件协同与 VLSI 等岗位的官方职业口径。'
  },
  ee_engineers: {
    short: '电子工程',
    label: 'Electrical and Electronics Engineers',
    pay: '$118,780',
    outlook: '+9%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Electrical and Electronics Engineers',
    url: 'https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm',
    note: '更接近嵌入式、DSP、通信、控制与一部分机器人系统工程岗位的官方职业口径。'
  },
  project_management: {
    short: '技术 PM',
    label: 'Project Management Specialists',
    pay: '$100,750',
    outlook: '+7%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Project Management Specialists',
    url: 'https://www.bls.gov/ooh/business-and-financial/project-management-specialists.htm',
    note: '更接近技术产品经理 / 技术项目推进类岗位的官方职业口径。'
  },
  ux_designers: {
    short: 'UX / 交互',
    label: 'Web and Digital Interface Designers',
    pay: '$98,670',
    outlook: '+7%',
    education: '通常本科',
    sourceLabel: 'BLS OOH · Web and Digital Interface Designers',
    url: 'https://www.bls.gov/ooh/arts-and-design/web-developers.htm',
    note: '更适合作为 UX / 交互设计，以及 HCI / HRI 中偏人因与交互这一侧岗位的官方职业锚点。'
  },
  postsecondary_teachers: {
    short: '高校教师',
    label: 'Postsecondary Teachers',
    pay: '$83,980',
    outlook: '+7%',
    education: '通常博士',
    sourceLabel: 'BLS OOH · Postsecondary Teachers',
    url: 'https://www.bls.gov/ooh/education-training-and-library/postsecondary-teachers.htm',
    note: '更适合作为高校教职路线的官方统计锚点；如果是博后，薪酬通常会低于这一口径。'
  }
};

var CAREER_BENCHMARK_BY_KEY = {
  career_ml_engineer: 'software_developers',
  career_research_scientist: 'computer_research',
  career_applied_scientist: 'data_scientists',
  career_foundation_model: 'computer_research',
  career_llm_engineer: 'software_developers',
  career_nlp_engineer: 'software_developers',
  career_cv_engineer: 'software_developers',
  career_generative_ai: 'software_developers',
  career_rl_engineer: 'software_developers',
  career_efficient_ai: 'software_developers',
  career_systems_engineer: 'software_developers',
  career_ml_systems: 'software_developers',
  career_compiler_pl: 'software_developers',
  career_security: 'information_security',
  career_hci_ux: 'ux_designers',
  career_database: 'database_architects',
  career_ai_hardware: 'hardware_engineers',
  career_vlsi: 'hardware_engineers',
  career_embedded: 'ee_engineers',
  career_signal_processing: 'ee_engineers',
  career_comm_engineer: 'ee_engineers',
  career_control_systems: 'ee_engineers',
  career_data_scientist: 'data_scientists',
  career_causal_scientist: 'data_scientists',
  career_data_engineer: 'database_architects',
  career_mlops: 'software_developers',
  career_domain_ds: 'data_scientists',
  career_quant: 'mathematicians_statisticians',
  career_robotics_engineer: 'ee_engineers',
  career_robot_learning: 'computer_research',
  career_autonomous_driving: 'software_developers',
  career_perception_engineer: 'software_developers',
  career_hri: 'ux_designers',
  career_or_scientist: 'operations_research',
  career_optimization: 'operations_research',
  career_game_theory: 'operations_research',
  career_sci_computing: 'mathematicians_statisticians',
  career_cpu_architect: 'hardware_engineers',
  career_hw_sw_codesign: 'hardware_engineers',
  career_academia: 'postsecondary_teachers',
  career_tech_pm: 'project_management'
};

var CAREER_BENCHMARK_FIT_BY_KEY = {
  career_ml_engineer: { level: 'medium', label: '匹配度：中', note: 'BLS 没把 Machine Learning Engineer 单列出来，所以这里按更接近“模型工程化、上线与平台实现”的软件工程口径估算。' },
  career_research_scientist: { level: 'high', label: '匹配度：高', note: '这张卡和 C&I Research Scientists 在职责形态、研究导向和常见学历要求上最接近。' },
  career_applied_scientist: { level: 'medium', label: '匹配度：中', note: 'Applied Scientist 通常夹在研究和落地之间，BLS 里没有单列这一层，所以这里更偏向“分析与实验驱动”的 Data Scientists 口径。' },
  career_foundation_model: { level: 'high', label: '匹配度：高', note: '基础模型岗位更接近研究科学家和预训练研究工程师，所以这里采用 C&I Research Scientists 作为最近似官方口径。' },
  career_llm_engineer: { level: 'medium', label: '匹配度：中', note: 'LLM Engineer 的真实工作横跨应用开发、后训练和平台化，BLS 目前通常还是把这类岗位并到更宽的软件工程 occupation 里。' },
  career_nlp_engineer: { level: 'medium', label: '匹配度：中', note: 'NLP Engineer 既有算法也有工程实现，BLS 没有 NLP 同名 occupation，所以这里按更接近工程落地的软件开发口径展示。' },
  career_cv_engineer: { level: 'medium', label: '匹配度：中', note: 'CV Engineer 多数是把视觉模型做成可上线系统，最近似官方统计仍更接近软件开发而不是单独的视觉 occupation。' },
  career_generative_ai: { level: 'medium', label: '匹配度：中', note: '生成式 AI 岗位目前在招聘市场非常新，BLS 还没单独拆出同名 occupation，所以这里只能回到更宽的软件工程口径。' },
  career_rl_engineer: { level: 'medium', label: '匹配度：中', note: 'RL Engineer 现实里常分布在游戏 AI、机器人和对齐训练团队，BLS 没有统一的 RL occupation，所以这里按工程实现更近的软件开发口径处理。' },
  career_efficient_ai: { level: 'medium', label: '匹配度：中', note: '推理优化岗位靠近系统优化和高性能软件工程，但 BLS 没有 Inference Engineer 同名统计项，所以只能取更宽的软件工程口径。' },
  career_systems_engineer: { level: 'medium', label: '匹配度：中', note: '这张卡混合了分布式系统、基础设施和平台工程；BLS 没有完全覆盖这组职责的单一 occupation，所以这里只取最近的软件工程口径。' },
  career_ml_systems: { level: 'medium', label: '匹配度：中', note: 'ML Systems / AI Infra 介于系统工程和机器学习平台之间，BLS 暂无同名 occupation，这里采用更接近工程实现的软件开发口径。' },
  career_compiler_pl: { level: 'medium', label: '匹配度：中', note: '编译器和编程语言岗位非常专业化，BLS 通常还是并入更宽的软件开发职业统计，所以这里展示的是最近似工程口径。' },
  career_security: { level: 'high', label: '匹配度：高', note: 'Security Engineer 和 Information Security Analysts 的职责边界非常接近，是这批卡片里较稳定的一组官方锚点。' },
  career_hci_ux: { level: 'high', label: '匹配度：高', note: '这张卡主要覆盖 UX / 交互 / 人因研究，因此用 Web and Digital Interface Designers 作为官方统计口径最接近。' },
  career_database: { level: 'high', label: '匹配度：高', note: '数据库、数据平台和查询引擎岗位与 Database Administrators and Architects 的职责最接近。' },
  career_ai_hardware: { level: 'high', label: '匹配度：高', note: 'AI 硬件 / NPU / 加速器这类岗位和 Computer Hardware Engineers 的核心职责高度重叠。' },
  career_vlsi: { level: 'high', label: '匹配度：高', note: 'VLSI / ASIC / RTL / 物理设计整体上和 Computer Hardware Engineers 的官方统计口径较为接近。' },
  career_embedded: { level: 'high', label: '匹配度：高', note: '嵌入式与固件岗位在 BLS 里通常归到更宽的电子电气工程实现路线，这里属于较近的一类映射。' },
  career_signal_processing: { level: 'high', label: '匹配度：高', note: 'DSP / ISP / 传感器算法在 BLS 中最接近 Electrical and Electronics Engineers，这组映射整体比较稳定。' },
  career_comm_engineer: { level: 'high', label: '匹配度：高', note: '通信系统、基带、无线研究与 Electrical and Electronics Engineers 的职责关系非常接近。' },
  career_control_systems: { level: 'high', label: '匹配度：高', note: '控制系统、最优控制和嵌入式控制在 BLS 中更接近广义的电子电气工程岗位。' },
  career_data_scientist: { level: 'high', label: '匹配度：高', note: 'Data Scientist 和 Data Scientists 这一路径基本是一一对应，是官方口径匹配度最高的几类之一。' },
  career_causal_scientist: { level: 'medium', label: '匹配度：中', note: '因果推断 / 实验科学家常落在数据科学、计量和政策分析之间，BLS 没有单列 Causal Inference Scientist，所以这里借用更近的 Data Scientists 口径。' },
  career_data_engineer: { level: 'medium', label: '匹配度：中', note: 'Data Engineer 现实里横跨 ETL、数仓、流处理与平台工程；BLS 里更接近“数据存储与平台架构”的 Database Administrators and Architects。' },
  career_mlops: { level: 'medium', label: '匹配度：中', note: 'MLOps / ML 平台岗位跨软件工程、平台与运维自动化，BLS 尚无同名 occupation，所以这里只能取更宽的软件工程口径。' },
  career_domain_ds: { level: 'medium', label: '匹配度：中', note: '领域数据科学横跨医疗、金融、社科等行业，BLS 没有统一的 Domain Data Scientist occupation，因此这里只采用更宽的 Data Scientists 统计口径。' },
  career_quant: { level: 'medium', label: '匹配度：中', note: 'Quant 岗位更靠近数学、概率和统计建模，但真实薪酬往往包含奖金和策略分成，所以官方统计口径通常会明显低于头部量化公司的实际总包。' },
  career_robotics_engineer: { level: 'medium', label: '匹配度：中', note: '机器人岗位把控制、传感器、嵌入式和机械系统揉在一起，BLS 没有完全同名的 Robotics Engineer 口径，所以这里取更接近电子系统工程的一侧。' },
  career_robot_learning: { level: 'medium', label: '匹配度：中', note: 'Robot Learning / Embodied AI 同时踩在机器人和研究科学家两边，BLS 暂无同名 occupation，这里用更接近研究路线的 C&I Research Scientists。' },
  career_autonomous_driving: { level: 'medium', label: '匹配度：中', note: '自动驾驶岗位把感知、规划、控制与软件平台混在一起，BLS 没有 Autonomy Engineer 同名 occupation，所以这里只能回到更宽的软件工程口径。' },
  career_perception_engineer: { level: 'medium', label: '匹配度：中', note: '感知工程师在现实里常做 3D 感知、SLAM 和生产系统部署，BLS 没有单独的 Perception Engineer 口径，所以这里使用更近的软件工程统计。' },
  career_hri: { level: 'low', label: '匹配度：偏弱', note: 'HRI 同时覆盖机器人交互研究、人因和 UX，BLS 目前没有单一 HRI occupation；这里选的是更靠近交互/人因的一侧，所以只能算偏弱的最近似。' },
  career_or_scientist: { level: 'high', label: '匹配度：高', note: '运筹学科学家和 Operations Research Analysts 的职责高度一致，属于匹配度很高的一类。' },
  career_optimization: { level: 'high', label: '匹配度：高', note: '优化工程与研究岗位在工业界多数就落在 Operations Research / Optimization 路线上，这里用 OR Analysts 作为官方口径较稳定。' },
  career_game_theory: { level: 'medium', label: '匹配度：中', note: '机制设计、拍卖和市场博弈常分散在 OR、经济学和平台策略团队里，BLS 没有单列 Game Theory occupation，因此这里只能取最近似的 OR 口径。' },
  career_sci_computing: { level: 'medium', label: '匹配度：中', note: '科学计算岗位更偏数值方法、建模和统计推断，因此这里改用 Mathematicians and Statisticians 作为最近似口径，比纯计算机科研更贴近。' },
  career_cpu_architect: { level: 'high', label: '匹配度：高', note: 'CPU / GPU 架构师与 Computer Hardware Engineers 的职责边界非常接近，是这批卡片里最稳定的官方锚点之一。' },
  career_hw_sw_codesign: { level: 'high', label: '匹配度：高', note: '软硬件协同设计与 SoC / 加速器系统设计在 BLS 中最接近 Computer Hardware Engineers。' },
  career_academia: { level: 'medium', label: '匹配度：中', note: '学术路线同时包含 PhD、博后和教职；BLS 的 Postsecondary Teachers 更接近最终教职阶段，对博后和博士生只能算部分覆盖。' },
  career_tech_pm: { level: 'medium', label: '匹配度：中', note: 'Technical PM 同时带有产品和项目推进属性，BLS 没有完全同名的技术产品经理 occupation，这里取更接近项目推进的 Project Management Specialists。' }
};

var CAREER_CHINA_SOURCES = {
  cn_ml_engineer: {
    label: '机器学习平台专家工程师',
    pay: '￥21,692/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/gw/jqxxptzjgcsv32r/'
  },
  cn_ml_scientist: {
    label: '机器学习科学家',
    pay: '￥32,398/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/zpjqxxkxj6b6a/xinzi/'
  },
  cn_llm_research: {
    label: '大模型算法研究员',
    pay: '25-50k·15薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://www.liepin.com/job/1962835007.shtml'
  },
  cn_nlp: {
    label: '自然语言处理研究员',
    pay: '￥37,422/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/jobszryyclyjy/'
  },
  cn_inference: {
    label: 'AI 加速算法工程师',
    pay: '25-40k·15薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://www.liepin.com/job/1960833081.shtml'
  },
  cn_systems: {
    label: 'Linux 系统稳定性与交付工程师',
    pay: '35-65k·15薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://m.liepin.com/company/9609962/'
  },
  cn_compiler: {
    label: '异构编译器开发工程师',
    pay: '45-75k·15薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://m.liepin.com/company/9609962/'
  },
  cn_hardware_arch: {
    label: 'SoC 架构师（存储系统方向）',
    pay: '60-85k·15薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://m.liepin.com/company/9609962/'
  },
  cn_security: {
    label: '信息安全专员',
    pay: '¥23,800/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/job-titles/4e5b39b2-d855-44fd-b6a7-4754a45bcbcc'
  },
  cn_database: {
    label: '数据库初级开发工程师',
    pay: '￥17,814/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/jobssjkcjkfgcst93s/'
  },
  cn_embedded: {
    label: '嵌入式硬件电子工程师',
    pay: '￥17,858/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/zpqrsyjdzgcsh4p8/xinzi/'
  },
  cn_signal: {
    label: '信号处理工程师（上海）',
    pay: '¥27,900/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/shanghai/272b64ec-41b4-4ac8-9e1f-9f369bacc430/'
  },
  cn_communication: {
    label: '通信研发工程师',
    pay: '¥21,100/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/job-titles/5f85975b-e3f1-4462-bcba-74379c028fec/'
  },
  cn_control: {
    label: '云台控制算法工程师',
    pay: '￥27,515/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/jobsytkzsfgcs/'
  },
  cn_data_scientist: {
    label: '数据科学家',
    pay: '¥30,000/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/job-titles/e9798fe1-1d2a-4747-bbd0-8b794615a2b0/'
  },
  cn_data_engineer: {
    label: '数据工程师',
    pay: '¥15,500/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/job-titles/dbe77b0c-94b2-49fe-9833-0fd215df5c49/'
  },
  cn_quant: {
    label: '量化研究员',
    pay: '¥29,327/月',
    sourceLabel: '猎聘平均月薪',
    url: 'https://m.liepin.com/gw/lhyjya/'
  },
  cn_robotics: {
    label: '机器人算法工程师（深圳）',
    pay: '¥29,000/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/shenzhen/e018f3ed-e32e-4494-a3cf-3c839b62ae4a/'
  },
  cn_autonomous: {
    label: '自动驾驶规控算法工程师',
    pay: '30-60k·15薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://m.liepin.com/city-sh/zpjssfzdjsfxppi9w/'
  },
  cn_perception: {
    label: '感知算法工程师',
    pay: '25-55k·14薪',
    sourceLabel: '猎聘近期岗位',
    url: 'https://m.liepin.com/company/13616447/'
  },
  cn_or: {
    label: '算法优化工程师（北京）',
    pay: '¥31,300/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/beijing/a5bdb46d-b74f-41a0-9481-9a55d87eb6b6/'
  },
  cn_scicomp: {
    label: '仿真算法工程师',
    pay: '30-50K/月',
    sourceLabel: '理聘近期岗位',
    url: 'https://m.lipind.com/position/detail/491173'
  },
  cn_ux: {
    label: '用户研究员',
    pay: '¥15,100/月（3-5年）',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/job-titles/846d70d1-bea7-4c11-9028-5574c301edb0/'
  },
  cn_pm: {
    label: '行业产品经理',
    pay: '¥17,000/月',
    sourceLabel: '谈职职位薪资',
    url: 'https://www.tanzhi.cn/job-titles/a292f7d4-c32a-4aa8-8c0e-1168e92167c1/'
  }
};

var CAREER_CHINA_SOURCE_BY_KEY = {
  career_ml_engineer: 'cn_ml_engineer',
  career_research_scientist: 'cn_ml_scientist',
  career_applied_scientist: 'cn_data_scientist',
  career_foundation_model: 'cn_llm_research',
  career_llm_engineer: 'cn_llm_research',
  career_nlp_engineer: 'cn_nlp',
  career_cv_engineer: 'cn_perception',
  career_generative_ai: 'cn_llm_research',
  career_rl_engineer: 'cn_llm_research',
  career_efficient_ai: 'cn_inference',
  career_systems_engineer: 'cn_systems',
  career_ml_systems: 'cn_systems',
  career_compiler_pl: 'cn_compiler',
  career_security: 'cn_security',
  career_hci_ux: 'cn_ux',
  career_database: 'cn_database',
  career_ai_hardware: 'cn_hardware_arch',
  career_vlsi: 'cn_hardware_arch',
  career_embedded: 'cn_embedded',
  career_signal_processing: 'cn_signal',
  career_comm_engineer: 'cn_communication',
  career_control_systems: 'cn_control',
  career_data_scientist: 'cn_data_scientist',
  career_causal_scientist: 'cn_data_scientist',
  career_data_engineer: 'cn_data_engineer',
  career_mlops: 'cn_ml_engineer',
  career_domain_ds: 'cn_data_scientist',
  career_quant: 'cn_quant',
  career_robotics_engineer: 'cn_robotics',
  career_robot_learning: 'cn_robotics',
  career_autonomous_driving: 'cn_autonomous',
  career_perception_engineer: 'cn_perception',
  career_hri: 'cn_ux',
  career_or_scientist: 'cn_or',
  career_optimization: 'cn_or',
  career_game_theory: 'cn_or',
  career_sci_computing: 'cn_scicomp',
  career_cpu_architect: 'cn_hardware_arch',
  career_hw_sw_codesign: 'cn_hardware_arch',
  career_academia: 'cn_ml_scientist',
  career_tech_pm: 'cn_pm'
};

var CAREER_SECTION_META = {
  'AI / ML 研究与工程': {
    summary: '偏模型、训练、后训练与应用落地，常见出口横跨研究科学家、工程实现和数据科学三条线。',
    benchmarks: ['computer_research','software_developers','data_scientists']
  },
  'CS 系统与基础设施': {
    summary: '偏底层系统、编译、数据库、安全与平台工程，典型价值在规模化、稳定性和性能。',
    benchmarks: ['software_developers','information_security','database_architects']
  },
  'ECE / EE 硬件': {
    summary: '偏芯片、嵌入式、通信、信号与控制，核心是把算法和硬件约束一起落到真实系统里。',
    benchmarks: ['hardware_engineers','ee_engineers']
  },
  'DS / 数据科学': {
    summary: '偏实验设计、统计推断、数据建模与数据基础设施，适合想同时理解业务和方法的人。',
    benchmarks: ['data_scientists','operations_research','software_developers']
  },
  'Robotics / 机器人': {
    summary: '偏感知、定位、规划、控制与 robot learning，常见工作横跨软件、系统与硬件协同。',
    benchmarks: ['software_developers','computer_research','hardware_engineers']
  },
  'Math / OR': {
    summary: '偏优化、博弈、随机过程和科学计算，适合喜欢抽象建模与严谨推导的人。',
    benchmarks: ['operations_research','computer_research']
  },
  'CE / 计算机工程': {
    summary: '偏体系结构、FPGA、SoC 与软硬件协同，强项在于把系统瓶颈精确拆解到实现层。',
    benchmarks: ['hardware_engineers','software_developers']
  },
  '通用路径': {
    summary: '偏长期路线选择与角色迁移，适合思考技术深度、组织影响力与职业节奏之间的平衡。',
    benchmarks: ['computer_research','project_management']
  }
};

var DIR_SECTION_META = {
  ai: '偏模型能力、表征学习、预训练、多模态和 Agent 系统，适合愿意长期和模型边界打交道的人。',
  cs: '偏系统、编译、数据库、安全与云平台，强调可扩展性、性能和工程稳定性。',
  ee: '偏芯片、信号、通信、控制与电子系统，核心是现实约束下的精密实现。',
  ce: '偏体系结构、FPGA、软硬协同与接口层设计，适合喜欢跨层优化的人。',
  ds: '偏统计推断、因果、时间序列、实验设计与数据流水线，强调可验证的结论。',
  rb: '偏感知、SLAM、规划、控制与机器人学习，强调系统闭环与真实世界交互。',
  or: '偏优化、博弈、随机过程与科学计算，适合抽象建模能力强的人。'
};

var DIR_REFERENCE_PACKS = {
  'ai:ml_found': [
    { label: 'Stanford CS229', url: 'https://cs229.stanford.edu/' },
    { label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }
  ],
  'ai:ml_theory': [
    { label: 'Understanding Machine Learning', url: 'https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/' },
    { label: 'mlstory', url: 'https://mlstory.org/' }
  ],
  'ai:lang': [
    { label: 'Stanford CS224N', url: 'https://web.stanford.edu/class/cs224n/' },
    { label: 'Stanford IR Book', url: 'https://nlp.stanford.edu/IR-book/' }
  ],
  'ai:vision': [
    { label: 'Stanford CS231n', url: 'https://cs231n.stanford.edu/' },
    { label: 'PyTorch docs', url: 'https://docs.pytorch.org/docs/stable/index.html' }
  ],
  'ai:multi': [
    { label: 'CLIP paper', url: 'https://arxiv.org/abs/2103.00020' },
    { label: 'LLaVA paper', url: 'https://arxiv.org/abs/2304.08485' }
  ],
  'ai:gen': [
    { label: 'Diffusers docs', url: 'https://huggingface.co/docs/diffusers/index' },
    { label: 'DDPM paper', url: 'https://arxiv.org/abs/2006.11239' }
  ],
  'ai:decision': [
    { label: 'OpenAI Spinning Up', url: 'https://spinningup.openai.com/en/latest/' },
    { label: 'RL textbook', url: 'http://incompleteideas.net/book/the-book-2nd.html' }
  ],
  'ai:efficient': [
    { label: 'llama.cpp', url: 'https://github.com/ggml-org/llama.cpp' },
    { label: 'vLLM docs', url: 'https://docs.vllm.ai/en/latest/' }
  ],
  'ai:trust': [
    { label: 'SHAP docs', url: 'https://shap.readthedocs.io/en/latest/' },
    { label: 'Fairlearn', url: 'https://fairlearn.org/' }
  ],
  'ai:applied': [
    { label: 'Rules of ML', url: 'https://developers.google.com/machine-learning/guides/rules-of-ml' },
    { label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }
  ],
  'cs:sys': [
    { label: 'MIT 6.824', url: 'https://pdos.csail.mit.edu/6.824/' },
    { label: 'DDIA', url: 'https://dataintensive.net/' }
  ],
  'cs:data_sys': [
    { label: 'CMU 15-445', url: 'https://15445.courses.cs.cmu.edu/' },
    { label: 'Kafka docs', url: 'https://kafka.apache.org/documentation/' }
  ],
  'cs:theory': [
    { label: 'MIT 6.006', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/' },
    { label: 'MIT Theory of Computation', url: 'https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/' }
  ],
  'cs:pl': [
    { label: 'LLVM docs', url: 'https://llvm.org/docs/' },
    { label: 'Software Foundations', url: 'https://softwarefoundations.cis.upenn.edu/' }
  ],
  'cs:sec': [
    { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
    { label: 'pwn.college', url: 'https://pwn.college/' }
  ],
  'cs:net': [
    { label: 'Stanford CS144', url: 'https://cs144.github.io/' },
    { label: 'RFC 9000 (QUIC)', url: 'https://www.rfc-editor.org/rfc/rfc9000' }
  ],
  'cs:graphics': [
    { label: 'PBRT book', url: 'https://www.pbr-book.org/' },
    { label: 'libigl tutorial', url: 'https://libigl.github.io/tutorial/' }
  ],
  'cs:hci': [
    { label: 'CMU HCII', url: 'https://www.hcii.cmu.edu/' },
    { label: 'SIGCHI', url: 'https://sigchi.org/' }
  ],
  'cs:vis': [
    { label: 'D3', url: 'https://d3js.org/' },
    { label: 'Vega-Lite', url: 'https://vega.github.io/vega-lite/' }
  ],
  'ee:elec': [
    { label: 'MIT Circuits and Electronics', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' },
    { label: 'MIT Signals and Systems', url: 'https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/' }
  ],
  'ee:signal': [
    { label: 'DSP Guide', url: 'https://www.dspguide.com/' },
    { label: 'MIT Signals and Systems', url: 'https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/' }
  ],
  'ee:comm': [
    { label: '3GPP 5G overview', url: 'https://www.3gpp.org/technologies/5g-system-overview' },
    { label: 'Sionna docs', url: 'https://www.sionna.io/' }
  ],
  'ee:control': [
    { label: 'Underactuated MIT', url: 'https://underactuated.mit.edu/' },
    { label: 'do-mpc docs', url: 'https://www.do-mpc.com/' }
  ],
  'ee:embedded': [
    { label: 'FreeRTOS docs', url: 'https://www.freertos.org/Documentation/00-Overview' },
    { label: 'Zephyr docs', url: 'https://docs.zephyrproject.org/latest/' }
  ],
  'ee:vlsi': [
    { label: 'OpenROAD docs', url: 'https://www.openroad.readthedocs.io/en/latest/' },
    { label: 'Tiny Tapeout', url: 'https://tinytapeout.com/' }
  ],
  'ds:stats': [
    { label: 'Seeing Theory', url: 'https://seeing-theory.brown.edu/' },
    { label: 'PyMC docs', url: 'https://pymc.io/welcome.html' }
  ],
  'ds:ds_anal': [
    { label: 'scikit-learn', url: 'https://scikit-learn.org/stable/' },
    { label: 'statsmodels', url: 'https://www.statsmodels.org/stable/index.html' }
  ],
  'ds:causal': [
    { label: 'Causal Inference Mixtape', url: 'https://mixtape.scunning.com/' },
    { label: 'DoWhy docs', url: 'https://www.pywhy.org/dowhy/main/index.html' }
  ],
  'ds:ds_eng': [
    { label: 'dbt docs', url: 'https://docs.getdbt.com/' },
    { label: 'Great Expectations', url: 'https://docs.greatexpectations.io/docs/' }
  ],
  'ds:mlops': [
    { label: 'MLflow docs', url: 'https://mlflow.org/docs/latest/index.html' },
    { label: 'Kubeflow docs', url: 'https://www.kubeflow.org/docs/' }
  ],
  'ds:domain': [
    { label: 'MIMIC-IV', url: 'https://physionet.org/content/mimiciv/2.2/' },
    { label: 'scverse', url: 'https://scverse.org/' }
  ],
  'rb:rb_found': [
    { label: 'Modern Robotics', url: 'https://modernrobotics.northwestern.edu/' },
    { label: 'ROS 2 docs', url: 'https://docs.ros.org/en/rolling/index.html' }
  ],
  'rb:rb_plan': [
    { label: 'OMPL', url: 'https://ompl.kavrakilab.org/' },
    { label: 'MoveIt 2', url: 'https://moveit.picknik.ai/main/index.html' }
  ],
  'rb:rb_perc': [
    { label: 'ORB-SLAM3', url: 'https://github.com/UZ-SLAMLab/ORB_SLAM3' },
    { label: 'Open3D docs', url: 'https://www.open3d.org/docs/release/' }
  ],
  'rb:embodied': [
    { label: 'RT-2 paper', url: 'https://arxiv.org/abs/2307.15818' },
    { label: 'OpenVLA', url: 'https://openvla.github.io/' }
  ],
  'rb:hri': [
    { label: 'SIGCHI', url: 'https://sigchi.org/' },
    { label: 'HRI community', url: 'https://humanrobotinteraction.org/' }
  ],
  'rb:auto': [
    { label: 'Waymo Open Dataset', url: 'https://waymo.com/open/' },
    { label: 'nuScenes', url: 'https://www.nuscenes.org/' }
  ],
  'or:math_found': [
    { label: 'SciPy docs', url: 'https://docs.scipy.org/doc/scipy/' },
    { label: 'Julia docs', url: 'https://docs.julialang.org/en/v1/' }
  ],
  'or:optim': [
    { label: 'Convex Optimization', url: 'https://web.stanford.edu/~boyd/cvxbook/' },
    { label: 'OR-Tools', url: 'https://developers.google.com/optimization' }
  ],
  'or:or': [
    { label: 'OR-Tools', url: 'https://developers.google.com/optimization' },
    { label: 'QuantEcon', url: 'https://quantecon.org/' }
  ],
  'or:stoch': [
    { label: 'QuantEcon', url: 'https://quantecon.org/' },
    { label: 'UQpy docs', url: 'https://uqpyproject.readthedocs.io/en/latest/' }
  ],
  'or:decision': [
    { label: 'QuantEcon', url: 'https://quantecon.org/' },
    { label: 'Dynamic Programming notes', url: 'https://dp.quantecon.org/' }
  ],
  'or:app_math': [
    { label: 'Bioconductor', url: 'https://www.bioconductor.org/' },
    { label: 'scverse', url: 'https://scverse.org/' }
  ],
  'ce:arch': [
    { label: 'gem5 docs', url: 'https://www.gem5.org/documentation/' },
    { label: 'RISC-V specs', url: 'https://riscv.org/technical/specifications/' }
  ],
  'ce:emb_ce': [
    { label: 'Zephyr docs', url: 'https://docs.zephyrproject.org/latest/' },
    { label: 'FreeRTOS docs', url: 'https://www.freertos.org/Documentation/00-Overview' }
  ],
  'ce:codesign': [
    { label: 'OpenROAD docs', url: 'https://www.openroad.readthedocs.io/en/latest/' },
    { label: 'gem5 docs', url: 'https://www.gem5.org/documentation/' }
  ],
  'ce:ai_hw': [
    { label: 'OpenXLA', url: 'https://openxla.org/' },
    { label: 'Vitis Tutorials', url: 'https://xilinx.github.io/Vitis-Tutorials/' }
  ],
  'ce:dig_sys': [
    { label: 'Verilator docs', url: 'https://verilator.org/guide/latest/' },
    { label: 'Tiny Tapeout', url: 'https://tinytapeout.com/' }
  ]
};

var DIR_REFERENCE_OVERRIDES = {
  repr: [
    { label: 'CLIP paper', url: 'https://arxiv.org/abs/2103.00020' },
    { label: 'SimCLR paper', url: 'https://proceedings.mlr.press/v119/chen20j.html' }
  ],
  ssl: [
    { label: 'SimCLR paper', url: 'https://proceedings.mlr.press/v119/chen20j.html' },
    { label: 'MAE paper', url: 'https://arxiv.org/abs/2111.06377' }
  ],
  transfer: [
    { label: 'LoRA paper', url: 'https://arxiv.org/abs/2106.09685' },
    { label: 'PEFT docs', url: 'https://huggingface.co/docs/peft/index' }
  ],
  foundation: [
    { label: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' },
    { label: 'Chinchilla scaling', url: 'https://arxiv.org/abs/2203.15556' }
  ],
  llm: [
    { label: 'Attention Is All You Need', url: 'https://arxiv.org/abs/1706.03762' },
    { label: 'Stanford CS224N', url: 'https://web.stanford.edu/class/cs224n/' }
  ],
  ir: [
    { label: 'Stanford IR Book', url: 'https://nlp.stanford.edu/IR-book/' },
    { label: 'FAISS', url: 'https://faiss.ai/' }
  ],
  recsys: [
    { label: 'Google Recommendation guide', url: 'https://developers.google.com/machine-learning/recommendation' },
    { label: 'scikit-learn', url: 'https://scikit-learn.org/stable/' }
  ],
  speech: [
    { label: 'Whisper', url: 'https://github.com/openai/whisper' },
    { label: 'wav2vec 2.0', url: 'https://arxiv.org/abs/2006.11477' }
  ],
  med_vision: [
    { label: 'nnU-Net', url: 'https://github.com/MIC-DKFZ/nnUNet' },
    { label: 'MedSAM', url: 'https://github.com/bowang-lab/MedSAM' }
  ],
  video: [
    { label: 'VideoMAE', url: 'https://arxiv.org/abs/2203.12602' },
    { label: 'Kinetics dataset', url: 'https://paperswithcode.com/dataset/kinetics-400' }
  ],
  vision3d: [
    { label: '3D Gaussian Splatting', url: 'https://github.com/graphdeco-inria/gaussian-splatting' },
    { label: 'Open3D docs', url: 'https://www.open3d.org/docs/release/' }
  ],
  vlm: [
    { label: 'LLaVA paper', url: 'https://arxiv.org/abs/2304.08485' },
    { label: 'InternVL paper', url: 'https://arxiv.org/abs/2312.14238' }
  ],
  doc_intel: [
    { label: 'LayoutLM docs', url: 'https://huggingface.co/docs/transformers/model_doc/layoutlm' },
    { label: 'Nougat paper', url: 'https://arxiv.org/abs/2308.13418' }
  ],
  diffusion: [
    { label: 'Diffusers docs', url: 'https://huggingface.co/docs/diffusers/index' },
    { label: 'DDPM paper', url: 'https://arxiv.org/abs/2006.11239' }
  ],
  creative_ai: [
    { label: 'Adobe Firefly', url: 'https://www.adobe.com/products/firefly.html' },
    { label: 'Diffusers docs', url: 'https://huggingface.co/docs/diffusers/index' }
  ],
  offline_rl: [
    { label: 'D4RL benchmark', url: 'https://github.com/Farama-Foundation/D4RL' },
    { label: 'CQL paper', url: 'https://arxiv.org/abs/2006.04779' }
  ],
  planning_ai: [
    { label: 'ReAct paper', url: 'https://arxiv.org/abs/2210.03629' },
    { label: 'LangChain docs', url: 'https://python.langchain.com/docs/introduction/' }
  ],
  quant: [
    { label: 'bitsandbytes docs', url: 'https://huggingface.co/docs/bitsandbytes/index' },
    { label: 'llama.cpp', url: 'https://github.com/ggml-org/llama.cpp' }
  ],
  inf_opt: [
    { label: 'vLLM docs', url: 'https://docs.vllm.ai/en/latest/' },
    { label: 'FlashAttention 2', url: 'https://arxiv.org/abs/2307.08691' }
  ],
  xai: [
    { label: 'SHAP docs', url: 'https://shap.readthedocs.io/en/latest/' },
    { label: 'Captum', url: 'https://captum.ai/' }
  ],
  safety: [
    { label: 'Constitutional AI', url: 'https://arxiv.org/abs/2212.08073' },
    { label: 'NIST AI RMF', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }
  ],
  fairness: [
    { label: 'Fairlearn', url: 'https://fairlearn.org/' },
    { label: 'AI Fairness 360', url: 'https://ai-fairness-360.org/' }
  ],
  cloud: [
    { label: 'Kubernetes docs', url: 'https://kubernetes.io/docs/home/' },
    { label: 'Google SRE book', url: 'https://sre.google/sre-book/table-of-contents/' }
  ],
  stream: [
    { label: 'Kafka docs', url: 'https://kafka.apache.org/documentation/' },
    { label: 'Flink docs', url: 'https://nightlies.apache.org/flink/flink-docs-stable/' }
  ],
  formal: [
    { label: 'Software Foundations', url: 'https://softwarefoundations.cis.upenn.edu/' },
    { label: 'TLA+', url: 'https://lamport.azurewebsites.net/tla/tla.html' }
  ],
  graphics: [
    { label: 'PBRT book', url: 'https://www.pbr-book.org/' },
    { label: 'Blender manual', url: 'https://docs.blender.org/manual/en/latest/' }
  ],
  elec_sys: [
    { label: 'MIT Circuits and Electronics', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/' },
    { label: 'MIT Signals and Systems', url: 'https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/' }
  ],
  info_th: [
    { label: 'MIT Information Theory', url: 'https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/' },
    { label: '3GPP 5G overview', url: 'https://www.3gpp.org/technologies/5g-system-overview' }
  ],
  iot: [
    { label: 'Zephyr docs', url: 'https://docs.zephyrproject.org/latest/' },
    { label: 'AWS IoT Core', url: 'https://aws.amazon.com/iot-core/' }
  ],
  bayes: [
    { label: 'PyMC docs', url: 'https://pymc.io/welcome.html' },
    { label: 'Stan docs', url: 'https://mc-stan.org/docs/' }
  ],
  ts_anal: [
    { label: 'Prophet docs', url: 'https://facebook.github.io/prophet/' },
    { label: 'statsmodels', url: 'https://www.statsmodels.org/stable/index.html' }
  ],
  econom: [
    { label: 'Causal Inference Mixtape', url: 'https://mixtape.scunning.com/' },
    { label: 'QuantEcon', url: 'https://quantecon.org/' }
  ],
  data_qual: [
    { label: 'Great Expectations', url: 'https://docs.greatexpectations.io/docs/' },
    { label: 'dbt docs', url: 'https://docs.getdbt.com/' }
  ],
  motion: [
    { label: 'OMPL', url: 'https://ompl.kavrakilab.org/' },
    { label: 'MoveIt 2', url: 'https://moveit.picknik.ai/main/index.html' }
  ],
  mpc: [
    { label: 'Underactuated MIT', url: 'https://underactuated.mit.edu/' },
    { label: 'do-mpc docs', url: 'https://www.do-mpc.com/' }
  ],
  slam: [
    { label: 'ORB-SLAM3', url: 'https://github.com/UZ-SLAMLab/ORB_SLAM3' },
    { label: 'Open3D docs', url: 'https://www.open3d.org/docs/release/' }
  ],
  vla: [
    { label: 'RT-2 paper', url: 'https://arxiv.org/abs/2307.15818' },
    { label: 'OpenVLA', url: 'https://openvla.github.io/' }
  ],
  autonomous: [
    { label: 'Waymo Open Dataset', url: 'https://waymo.com/open/' },
    { label: 'nuScenes', url: 'https://www.nuscenes.org/' }
  ],
  conv_opt: [
    { label: 'Convex Optimization', url: 'https://web.stanford.edu/~boyd/cvxbook/' },
    { label: 'CVXPY', url: 'https://www.cvxpy.org/' }
  ],
  scheduling: [
    { label: 'OR-Tools', url: 'https://developers.google.com/optimization' },
    { label: 'QuantEcon', url: 'https://quantecon.org/' }
  ],
  uq: [
    { label: 'UQpy docs', url: 'https://uqpyproject.readthedocs.io/en/latest/' },
    { label: 'QuantEcon', url: 'https://quantecon.org/' }
  ],
  comp_bio: [
    { label: 'Bioconductor', url: 'https://www.bioconductor.org/' },
    { label: 'scverse', url: 'https://scverse.org/' }
  ],
  mem_sys: [
    { label: 'gem5 docs', url: 'https://www.gem5.org/documentation/' },
    { label: 'RISC-V specs', url: 'https://riscv.org/technical/specifications/' }
  ],
  soc: [
    { label: 'OpenROAD docs', url: 'https://www.openroad.readthedocs.io/en/latest/' },
    { label: 'Vitis Tutorials', url: 'https://xilinx.github.io/Vitis-Tutorials/' }
  ],
  npu: [
    { label: 'OpenXLA', url: 'https://openxla.org/' },
    { label: 'Vitis Tutorials', url: 'https://xilinx.github.io/Vitis-Tutorials/' }
  ],
  in_mem: [
    { label: 'OpenXLA', url: 'https://openxla.org/' },
    { label: 'OpenROAD docs', url: 'https://www.openroad.readthedocs.io/en/latest/' }
  ],
  fpga: [
    { label: 'Vitis Tutorials', url: 'https://xilinx.github.io/Vitis-Tutorials/' },
    { label: 'Verilator docs', url: 'https://verilator.org/guide/latest/' }
  ]
};

var CAREER_BLS_NOTE = '这里展示的是 BLS 最近似统计归类，不是企业真实岗位名；上面的匹配度表示这张职业卡与该官方 occupation 的接近程度。像 Machine Learning Engineer、RAG Engineer、Prompt Engineer 这类现代岗位，BLS 通常会把它们归到更宽的 occupation 里。';
var CAREER_CN_NOTE = '中国参考来自公开薪资页或近期开放岗位，受城市、级别、年终、股票和 13-16 薪影响较大。';

function summarizeLead(text, fallback, maxLen) {
  var raw = (text || fallback || '').trim();
  if (!raw) return '';
  var first = raw.split('。')[0];
  if (raw.indexOf('。') !== -1) first += '。';
  var limit = maxLen || 96;
  return first.length > limit ? first.substring(0, limit - 1) + '…' : first;
}

function shortenText(text, maxLen) {
  var raw = (text || '').trim();
  if (!raw) return '';
  var limit = maxLen || 96;
  return raw.length > limit ? raw.substring(0, limit - 1) + '…' : raw;
}

function ensureSentence(text) {
  var raw = (text || '').trim();
  if (!raw) return '';
  return /[。！？]$/.test(raw) ? raw : raw + '。';
}

function getCareerWorkParts(text) {
  var raw = (text || '').trim();
  if (!raw) return { intro: '', example: '' };
  var normalized = raw.replace(/^日常：/, '').replace(/^典型一天：/, '').trim();
  var markers = ['典型场景：','典型问题：','典型成果：','典型产出：','生物方向：','金融方向：','ML 方向：','工程方向：','感知：','规划：'];
  var splitIndex = -1;
  markers.forEach(function(marker) {
    var idx = normalized.indexOf(marker);
    if (idx > 0 && (splitIndex === -1 || idx < splitIndex)) splitIndex = idx;
  });
  var intro = splitIndex > 0 ? normalized.slice(0, splitIndex).trim() : normalized;
  var example = splitIndex > 0 ? normalized.slice(splitIndex).trim() : '';
  if (!example) {
    var sentences = normalized.split('。').map(function(item) { return item.trim(); }).filter(Boolean);
    if (sentences.length > 1) {
      example = sentences[sentences.length - 1];
    }
  }
  return {
    intro: ensureSentence(intro),
    example: ensureSentence(example)
  };
}

function extractRepChips(text, limit) {
  if (!text) return [];
  var cleaned = text.replace(/^[^：:]{1,18}[：:]/, '');
  return cleaned
    .split(/[、,，；;/]/)
    .map(function(item) { return item.trim().replace(/^[^：:]{1,18}[：:]/, '').trim(); })
    .filter(function(item) { return item && item.length <= 26; })
    .slice(0, limit || 4);
}

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getDirectionLearnText(dirKey) {
  var dd = DIR_DETAILS[dirKey];
  var d = DIRS[dirKey];
  return dd && dd.scene ? dd.scene : ((d && d.name) ? d.name + ' 方向。' : '');
}

function getDirectionProjectText(dirKey) {
  var dd = DIR_DETAILS[dirKey];
  if (dd && dd.example) return dd.example;
  return '详细项目案例会继续补充。';
}

function getDirectionTools(dirKey, limit) {
  var dd = DIR_DETAILS[dirKey];
  return dd && dd.reps ? extractRepChips(dd.reps, limit || 5) : [];
}

function getDirectionSources(dirKey) {
  if (DIR_REFERENCE_OVERRIDES[dirKey]) return DIR_REFERENCE_OVERRIDES[dirKey];
  var d = DIRS[dirKey];
  if (!d) return [];
  return DIR_REFERENCE_PACKS[d.domain + ':' + d.group] || [];
}

function renderDirectionSourceLinks(dirKey, linkClass) {
  return getDirectionSources(dirKey).map(function(item) {
    return '<a class="'+linkClass+'" href="'+item.url+'" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">'+escapeHtml(item.label)+'</a>';
  }).join('');
}

function renderDirectionToolBlock(dirKey) {
  var dd = DIR_DETAILS[dirKey];
  var full = dd && dd.reps ? dd.reps : '';
  var cleaned = full ? full.replace(/^[^：:]{1,18}[：:]/, '').trim() : '';
  var chips = getDirectionTools(dirKey, 8);
  var out = '';
  if (chips.length) {
    out += '<div class="dir-tool-chip-row">';
    chips.forEach(function(item) {
      out += '<span class="dir-tool-chip">'+escapeHtml(item)+'</span>';
    });
    out += '</div>';
  }
  if (cleaned) out += '<div class="dir-tool-note">'+escapeHtml(cleaned)+'</div>';
  return out || '<div class="dir-tool-note">工具与代表工作将继续补充。</div>';
}

function getCareerBenchmark(ck) {
  return CAREER_BENCHMARKS[CAREER_BENCHMARK_BY_KEY[ck]] || null;
}

function getCareerBenchmarkFit(ck) {
  return CAREER_BENCHMARK_FIT_BY_KEY[ck] || {
    level: 'medium',
    label: '匹配度：中',
    note: '这张职业卡在真实招聘里通常会对应多个相近岗位，BLS 没有完全同名的单一 occupation，所以这里只取最近似统计口径。'
  };
}

function getCareerChinaSource(ck) {
  return CAREER_CHINA_SOURCES[CAREER_CHINA_SOURCE_BY_KEY[ck]] || null;
}

function getCareerSalaryReference(ck) {
  var benchmark = getCareerBenchmark(ck);
  var china = getCareerChinaSource(ck);
  return {
    us: benchmark ? {
      title: '美国基准',
      pay: benchmark.pay + '/年',
      anchor: benchmark.label,
      source: benchmark.sourceLabel,
      url: benchmark.url,
      note: benchmark.note,
      outlook: benchmark.outlook,
      education: benchmark.education
    } : null,
    cn: china ? {
      title: '中国参考',
      pay: china.pay,
      anchor: china.label,
      source: china.sourceLabel,
      url: china.url
    } : null
  };
}

function getCareerSalaryAnchorText(ck) {
  var refs = getCareerSalaryReference(ck);
  var parts = [];
  if (refs.us) parts.push('美国统计口径：' + refs.us.anchor);
  if (refs.cn) parts.push('中国参考：' + refs.cn.anchor);
  return parts.join(' · ');
}

function renderCareerSourceLinks(ck, linkClass) {
  var refs = getCareerSalaryReference(ck);
  var links = [];
  if (refs.us) {
    links.push('<a class="'+linkClass+'" href="'+refs.us.url+'" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">美国来源</a>');
  }
  if (refs.cn) {
    links.push('<a class="'+linkClass+'" href="'+refs.cn.url+'" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">中国来源</a>');
  }
  return links.join('');
}

function renderCareerSalaryPreview(ck, wrapperClass, lineClass) {
  var refs = getCareerSalaryReference(ck);
  var lines = [];
  if (refs.us) lines.push('<div class="'+lineClass+'"><span>美国基准</span><strong>'+refs.us.pay+'</strong></div>');
  if (refs.cn) lines.push('<div class="'+lineClass+'"><span>中国参考</span><strong>'+refs.cn.pay+'</strong></div>');
  return '<div class="'+wrapperClass+'">'+lines.join('')+'</div>';
}

function renderCareerSalaryDetail(ck) {
  var refs = getCareerSalaryReference(ck);
  var cards = [];
  if (refs.us) {
    cards.push(
      '<div class="career-salary-card">'
      + '<div class="career-salary-kicker">'+refs.us.title+'</div>'
      + '<div class="career-salary-pay">'+refs.us.pay+'</div>'
      + '<div class="career-salary-source">'+refs.us.anchor+' · '+refs.us.source+'</div>'
      + '<a class="career-salary-link" href="'+refs.us.url+'" target="_blank" rel="noreferrer">查看美国来源</a>'
      + '</div>'
    );
  }
  if (refs.cn) {
    cards.push(
      '<div class="career-salary-card">'
      + '<div class="career-salary-kicker">'+refs.cn.title+'</div>'
      + '<div class="career-salary-pay">'+refs.cn.pay+'</div>'
      + '<div class="career-salary-source">'+refs.cn.anchor+' · '+refs.cn.source+'</div>'
      + '<a class="career-salary-link" href="'+refs.cn.url+'" target="_blank" rel="noreferrer">查看中国来源</a>'
      + '</div>'
    );
  }
  return '<div class="career-salary-grid">'+cards.join('')+'</div>'
    + '<div class="career-salary-note">'+CAREER_CN_NOTE+'</div>';
}

var CAREER_LEAF_ROLE_OVERRIDES = {
  'LLM Engineer': {
    intro: '更偏把大语言模型做成稳定可用的产品能力，日常会处理模型服务、评测、应用接入和线上稳定性。',
    example: '例如给企业知识库做一个问答助手，让回答必须带引用出处，并把首字响应压到 2 秒内。'
  },
  'Prompt Engineer': {
    intro: '更偏把提示词、工具调用和工作流编排做成可复用的方法，核心是让模型更稳定地完成真实任务。',
    example: '例如把客服问答流程拆成“分类、检索、回答、复核”四步，让不同场景下的回复更稳定。'
  },
  'AI Agent Engineer': {
    intro: '更偏设计多步骤 Agent 流程，让模型能自己规划、调用工具、纠错并完成完整任务。',
    example: '例如做一个自动整理周报的 Agent，先抓取数据，再写摘要，最后自动生成可发给团队的版本。'
  },
  'RAG Engineer': {
    intro: '更偏围绕检索增强生成搭系统，把文档切分、索引、检索、重排和引用链路真正打通。',
    example: '例如给法务团队做一个合同问答系统，要求每个答案都附上原文条款和页码。'
  },
  'LLM Evaluation Engineer': {
    intro: '更偏搭建模型评测体系，定义数据集、指标和失败案例，让模型能力能被稳定比较。',
    example: '例如为一个代码助手设计自动评测集，持续跟踪正确率、幻觉率和回归问题。'
  },
  'LLM Safety Engineer': {
    intro: '更偏做对齐和防护，让模型在真实流量下不容易被诱导、越狱或输出高风险内容。',
    example: '例如为通用聊天模型补一套红队测试与拦截规则，把高风险输出率持续压低。'
  },
  'Search Engineer': {
    intro: '更偏把搜索系统做得更准更快，核心是召回、排序、相关性和延迟之间的平衡。',
    example: '例如优化站内搜索，让用户搜“轻薄电脑”时，真正得到更相关的商品结果。'
  },
  'Recommendation Engineer': {
    intro: '更偏做推荐和个性化，让系统更懂用户兴趣变化，并把好内容及时送到用户面前。',
    example: '例如给短视频首页优化排序，让新用户更快刷到自己真正愿意停留的视频。'
  },
  'Speech Engineer': {
    intro: '更偏处理语音识别、语音合成和语音交互，让机器在真实环境里更会听也更会说。',
    example: '例如给车载语音助手做降噪和识别优化，让高速路上也能较稳定地识别指令。'
  },
  'Computer Vision Engineer': {
    intro: '更偏把图像或视频理解模型落到真实任务里，常见工作是检测、分割、跟踪和部署。',
    example: '例如在工厂产线上做缺陷检测，让系统在高速传送带上稳定找出异常产品。'
  },
  'Medical Imaging Scientist': {
    intro: '更偏把视觉模型用于医疗影像，让图像分析真的能辅助临床判断，而不只是实验室精度高。',
    example: '例如做 CT 或病理切片辅助分析，帮助医生更快定位值得重点查看的区域。'
  },
  '3D Vision Engineer': {
    intro: '更偏从图像、视频或点云恢复空间结构，核心是重建、几何理解和空间表示。',
    example: '例如用多视角照片做三维重建，让机器人或 AR 系统更准确理解空间布局。'
  },
  'Generative AI Engineer': {
    intro: '更偏把生成模型做成真实可用的创作或生产工具，既关心生成质量，也关心可控性和成本。',
    example: '例如为品牌设计一套 AI 视觉生成工具，让营销图产出更快且风格可控。'
  },
  'RL Engineer': {
    intro: '更偏通过奖励信号来训练策略，让系统在长期反馈里学会更好的动作或决策。',
    example: '例如给一个控制系统训练策略，让它在连续试错中学会更稳地完成目标任务。'
  },
  'Inference Engineer': {
    intro: '更偏把模型推理做得更快更稳更省，日常会处理量化、缓存、批处理和服务性能问题。',
    example: '例如把一个 70B 模型的线上延迟压下去，让相同 GPU 预算能服务更多请求。'
  },
  'ML Systems Engineer': {
    intro: '更偏做训练和推理的底层系统，把研究模型真正放到大规模集群和平台里跑起来。',
    example: '例如为分布式训练平台做通信和调度优化，让大模型训练更稳定也更省算力。'
  },
  'Compiler Engineer': {
    intro: '更偏在编译器和运行时层面做优化，让上层代码能更好利用底层硬件特性。',
    example: '例如为一个常见算子做编译优化，让同一段模型代码在 GPU 上跑得明显更快。'
  },
  'AI Accelerator Engineer': {
    intro: '更偏做服务 AI 的专用硬件或系统部件，核心是吞吐、带宽、功耗和算子映射。',
    example: '例如为矩阵乘法和注意力计算设计更高效的数据流，让芯片吞吐更高。'
  },
  'NPU Architect': {
    intro: '更偏定义神经网络芯片的核心架构，决定数据流、存储层次和执行单元怎么协同。',
    example: '例如给端侧 NPU 设计新一代数据流，让 Transformer 推理更省功耗。'
  },
  'FPGA Engineer': {
    intro: '更偏在可重构硬件上快速验证和落地设计，常常承担原型验证、接口联调和加速实验。',
    example: '例如先在 FPGA 上验证一个新的视频处理或加速器设计，再决定是否走 ASIC。'
  },
  'Embedded Systems Engineer': {
    intro: '更偏在资源受限设备上把功能稳定做出来，关注实时性、功耗、驱动和可靠性。',
    example: '例如在 MCU 或边缘设备上跑一个轻量模型，让它在离线场景下也能持续工作。'
  },
  'DSP Engineer': {
    intro: '更偏处理连续信号，把声音、图像、雷达或传感器数据转成稳定可用的信息。',
    example: '例如给相机 ISP 或音频链路做算法优化，让画面更干净、声音更清晰。'
  },
  'Wireless Communications Engineer': {
    intro: '更偏研究或实现无线通信链路，让信息在真实信道里传得更稳、更远或更快。',
    example: '例如为 5G/6G 链路做仿真和算法优化，提升边缘场景下的吞吐表现。'
  },
  'Control Engineer': {
    intro: '更偏设计让系统稳定运行的控制器，核心是反馈、鲁棒性和实际执行效果。',
    example: '例如给无人机或机械臂调控制器，让它在扰动下也能稳定完成动作。'
  },
  'Data Scientist': {
    intro: '更偏用数据建模和分析支持真实决策，既要会找规律，也要会把结论讲清楚。',
    example: '例如分析新功能上线后的留存变化，判断到底是功能本身有效还是时机因素造成。'
  },
  'Causal Inference Scientist': {
    intro: '更偏判断“到底是不是这个因素导致了结果变化”，核心是实验设计和反事实推断。',
    example: '例如分析一个推荐策略改版后 GMV 上升，到底是不是改版本身带来的提升。'
  },
  'Data Engineer': {
    intro: '更偏把数据链路做稳做清楚，让上层分析和模型不用反复被脏数据、坏表或延迟拖住。',
    example: '例如搭一条从埋点到数仓的稳定流水线，让业务每天都能拿到可信指标。'
  },
  'MLOps Engineer': {
    intro: '更偏把模型上线、监控、回滚和迭代流程标准化，让生产 ML 更像一套成熟工程系统。',
    example: '例如给模型平台补监控和回滚机制，让线上模型出问题时能快速止损。'
  },
  'Quant Researcher': {
    intro: '更偏用严谨模型寻找可交易或可决策的信号，核心是建模、回测、风险和执行。',
    example: '例如研究一套市场信号，在历史数据回测有效后，再考虑真实交易可行性。'
  },
  'Operations Research Analyst': {
    intro: '更偏把资源分配、调度、路由这类问题建模成可求解的优化问题，再输出可执行方案。',
    example: '例如给配送网络设计调度方案，在成本、时效和容量之间找到更优平衡。'
  },
  'Robotics Engineer': {
    intro: '更偏把机器人系统真正做起来，日常会同时处理机械、感知、控制和系统集成问题。',
    example: '例如把机械臂抓取、视觉识别和执行控制连起来，让它完成一段真实流程。'
  },
  'Robot Learning Engineer': {
    intro: '更偏让机器人通过数据和学习获得技能，而不是只靠手工规则和固定控制器。',
    example: '例如让机械臂通过示范或强化学习逐步学会更稳地抓取新物体。'
  },
  'Autonomous Driving Engineer': {
    intro: '更偏做自动驾驶整条链路中的一个关键环节，把感知、规划、控制或验证做成可上车能力。',
    example: '例如为城市道路场景做规划或仿真验证，让系统在复杂交通中更稳。'
  },
  'SLAM Engineer': {
    intro: '更偏让机器在陌生环境里一边建图一边定位，是机器人和空间计算里的经典底层能力。',
    example: '例如让清洁机器人或 AR 设备进入新环境后，快速建立可用地图并稳定定位。'
  },
  'HRI Researcher': {
    intro: '更偏研究人和机器人如何一起工作，把安全、信任、可理解性和交互体验做扎实。',
    example: '例如观察护士或工人如何与机器人协作，再反向改机器人的提示与行为设计。'
  },
  'Technical Product Manager': {
    intro: '更偏把技术能力、用户需求和研发节奏串起来，负责定义方向、拆目标和推动落地。',
    example: '例如围绕一个 AI 平台功能，协调算法、后端和前端一起把能力做成能卖的产品。'
  },
  'Assistant Professor': {
    intro: '更偏独立提出研究问题、带学生、申请经费和持续建设一条长期研究路线。',
    example: '例如围绕一个核心研究方向连续几年产出论文、课程和公开项目，慢慢形成自己的学术影响力。'
  }
};

var CAREER_LEAF_FAMILY_FALLBACKS = {
  career_ml_engineer: {
    intro: '更偏把机器学习方法做成稳定可上线的能力，常见工作是处理数据、训练模型、做评估，并把效果真正落到业务指标上。',
    example: '例如为推荐、广告或风控场景做一个预测模型，从样本准备、训练对比到上线监控全链路负责。'
  },
  career_research_scientist: {
    intro: '更偏围绕一个方法问题长期钻研，核心工作是提出假设、设计实验、分析结果，并把结论沉淀成论文或研究报告。',
    example: '例如研究一种新的表征学习方法，连续做消融实验和理论分析，确认它为什么有效、在哪些条件下失效。'
  },
  career_applied_scientist: {
    intro: '更偏站在研究和产品之间，把前沿方法改造成能解决真实业务问题的模型或实验方案。',
    example: '例如把一个学界新方法改到搜索、推荐或内容理解场景里，验证它是否能稳定提升线上核心指标。'
  },
  career_foundation_model: {
    intro: '更偏做基础模型、预训练和模型适配，工作重点是训练策略、数据配比、后训练和模型能力边界。',
    example: '例如围绕预训练数据和训练配方做迭代，让基础模型在代码、多模态或长上下文任务上更强。'
  },
  career_llm_engineer: {
    intro: '更偏把大语言模型做成真实可用的产品能力，日常会处理模型服务、评测、工作流设计和线上稳定性。',
    example: '例如给企业知识库、客服或办公场景做一个 LLM 系统，让回答更稳、更准、也更容易追溯。'
  },
  career_nlp_engineer: {
    intro: '更偏处理文本、检索、问答和对话系统，让机器更好地理解语言、组织信息并生成可用结果。',
    example: '例如做一个搜索、推荐或客服问答系统，让用户输入自然语言后能更快得到相关结果。'
  },
  career_cv_engineer: {
    intro: '更偏把图像、视频或视觉理解模型落到真实任务里，常见工作是识别、定位、跟踪、重建和部署。',
    example: '例如在产线检测、自动驾驶或医疗影像里做视觉模型，让系统稳定识别关键对象或异常区域。'
  },
  career_generative_ai: {
    intro: '更偏把生成模型做成创作或生产工具，核心是生成质量、可控性、工作流体验和实际交付效果。',
    example: '例如给设计、内容或视频团队做一套生成式工具，让素材产出更快，同时保证风格和质量可控。'
  },
  career_rl_engineer: {
    intro: '更偏用奖励信号和长期反馈训练策略，让系统在连续试错里学会更好的动作和决策。',
    example: '例如为智能体、机器人或复杂推荐场景训练策略，让系统在多轮交互中逐步优化最终结果。'
  },
  career_efficient_ai: {
    intro: '更偏把模型训练和推理做得更快、更稳、更省资源，日常常会碰量化、压缩、并行和运行时优化。',
    example: '例如把一个大模型的线上延迟压到可接受范围，让同样的 GPU 预算服务更多请求。'
  },
  career_systems_engineer: {
    intro: '更偏搭建稳定的大规模系统和平台，核心是可靠性、可扩展性、可观测性和高并发下的持续运行能力。',
    example: '例如为云平台、后端基础设施或分布式服务做稳定性治理，让高峰期流量下仍能平稳运行。'
  },
  career_ml_systems: {
    intro: '更偏把模型训练、推理和平台系统真正串起来，让研究模型能在大规模集群和平台里稳定运行。',
    example: '例如搭建一套训练和推理平台，让研究团队能更快实验，业务团队也能更稳上线。'
  },
  career_compiler_pl: {
    intro: '更偏在编译器、语言运行时和验证层面做优化，让软件栈和硬件栈衔接得更高效、更可靠。',
    example: '例如为模型算子做编译优化，或者为工具链补验证能力，让关键代码既快又不容易出错。'
  },
  career_security: {
    intro: '更偏识别、预防和响应系统里的安全风险，让平台、数据和模型不容易被攻击、滥用或泄露。',
    example: '例如为账号、云平台或模型服务做检测和防护链路，把高风险行为尽量挡在真正出事之前。'
  },
  career_hci_ux: {
    intro: '更偏研究人怎么理解系统、怎么和系统交互，再把这些认知变成更好用、更顺手的产品设计。',
    example: '例如观察用户如何使用一个复杂的 AI 功能，再重构交互流程，让它更容易理解也更敢用。'
  },
  career_database: {
    intro: '更偏让数据存储、查询和处理系统更稳更快，核心是数据组织方式、查询效率和系统可靠性。',
    example: '例如为数据库或流式处理系统做优化，让上层业务在更大数据量下仍能稳定查询和写入。'
  },
  career_ai_hardware: {
    intro: '更偏设计服务 AI 计算的硬件与架构，常见工作会围绕吞吐、功耗、带宽和算子执行效率展开。',
    example: '例如围绕注意力或矩阵乘法设计新的硬件执行路径，让模型推理更快也更省电。'
  },
  career_vlsi: {
    intro: '更偏做芯片设计、前后端实现和验证，把架构真正落成可制造、可验证、可量产的电路系统。',
    example: '例如从 RTL、时序、物理设计到验证一路推进，把一个芯片模块真正做成能流片的版本。'
  },
  career_embedded: {
    intro: '更偏在资源受限设备和边缘硬件上把功能稳定做出来，常见工作涉及固件、驱动、实时性和联调。',
    example: '例如给车载设备、工业控制器或消费电子写固件，让设备在复杂现场里持续可靠运行。'
  },
  career_signal_processing: {
    intro: '更偏把声音、图像、雷达或其他传感器信号转成可用信息，核心是滤波、建模、估计和实时效果。',
    example: '例如优化相机 ISP、音频链路或雷达算法，让系统在噪声很大的现实环境里也能工作。'
  },
  career_comm_engineer: {
    intro: '更偏研究和实现通信链路、协议与系统，让信息在真实无线环境下传得更稳、更快、更远。',
    example: '例如为 5G/6G 或无线基带链路做仿真和算法优化，提升边缘场景下的吞吐与覆盖表现。'
  },
  career_control_systems: {
    intro: '更偏设计控制与估计链路，让物理系统在扰动和约束下依然稳定、可控、可预测地运行。',
    example: '例如为无人机、车辆或机械臂调控制器，让系统在复杂动作和扰动下依然稳得住。'
  },
  career_data_scientist: {
    intro: '更偏用统计、建模和分析支持判断与决策，常见工作是发现规律、验证假设、解释结果并推动行动。',
    example: '例如分析新功能上线后的数据，判断指标变化究竟来自策略本身还是其他时机因素。'
  },
  career_causal_scientist: {
    intro: '更偏回答“到底是不是这个因素导致了结果变化”，重点是实验设计、因果识别和反事实推断。',
    example: '例如判断一个推荐改版是否真的提升了用户留存，而不是被季节性或样本偏差误导。'
  },
  career_data_engineer: {
    intro: '更偏把数据链路做稳做清楚，让分析、实验和模型不再被脏数据、坏表或高延迟反复拖住。',
    example: '例如搭好埋点到数仓再到特征平台的流水线，让业务每天都能拿到可直接使用的数据。'
  },
  career_mlops: {
    intro: '更偏把模型上线、监控、回滚和迭代流程工程化，让生产 ML 更像一套成熟的可维护系统。',
    example: '例如为模型平台补实验跟踪、监控告警和自动回滚，让线上模型出问题时更快止损。'
  },
  career_domain_ds: {
    intro: '更偏在医疗、金融、环境、社科等具体领域里做数据分析和建模，强调既懂方法也懂场景。',
    example: '例如围绕临床、金融风控或城市出行数据建模，让分析结果真的能指导该领域的判断。'
  },
  career_quant: {
    intro: '更偏在高不确定性场景下做收益、风险和执行建模，核心是严谨建模、回测、风险控制和策略落地。',
    example: '例如围绕市场信号、风控约束和交易成本设计模型，判断一套策略是否真的能执行。'
  },
  career_robotics_engineer: {
    intro: '更偏把机器人系统真正做起来，日常会同时碰机械结构、感知、控制、集成和现场调试问题。',
    example: '例如把机械臂抓取、视觉识别和动作控制串起来，让它在真实任务里稳定完成一段流程。'
  },
  career_robot_learning: {
    intro: '更偏让机器人通过数据和学习获得技能，而不是只依赖手工规则和固定控制器。',
    example: '例如让机械臂通过示范学习或强化学习，逐渐学会更稳地抓取新的物体和完成新的动作。'
  },
  career_autonomous_driving: {
    intro: '更偏做自动驾驶整条链路中的关键一段，把感知、规划、控制、仿真或验证真正做成可上车能力。',
    example: '例如为城市道路场景做规划或仿真验证，让系统在复杂交通流里更稳、更少犯错。'
  },
  career_perception_engineer: {
    intro: '更偏让机器知道自己在哪、周围有什么、该怎么理解空间，核心是定位、建图、融合和空间表示。',
    example: '例如给机器人、无人机或自动驾驶系统做定位建图，让设备进入陌生环境后也能稳定工作。'
  },
  career_hri: {
    intro: '更偏研究人和机器人如何一起工作，把安全、信任、可理解性和协作体验做得更自然。',
    example: '例如观察人和机器人一起工作的流程，再反向改机器人的提示、动作和交互方式。'
  },
  career_or_scientist: {
    intro: '更偏把调度、分配、路径和运营问题建模成可求解的优化问题，再把结果落成可执行方案。',
    example: '例如为配送、供应链或排班系统设计调度方案，在成本、时效和容量之间找到更优平衡。'
  },
  career_optimization: {
    intro: '更偏研究和实现各种优化方法，让复杂问题能更快、更稳地找到更好的解。',
    example: '例如围绕训练优化、资源分配或数值求解设计新算法，让结果更快收敛或更稳定。'
  },
  career_game_theory: {
    intro: '更偏研究多方博弈、机制设计和激励问题，关注不同参与者在规则下会如何行动。',
    example: '例如为广告竞价、电商平台或资源分配设计机制，让系统整体更公平也更有效率。'
  },
  career_sci_computing: {
    intro: '更偏把数学模型和数值方法做成能跑的大规模计算系统，常见于科研、仿真和高性能计算场景。',
    example: '例如把一个复杂物理或生物模型写成可重复计算的程序，让研究团队能反复模拟与分析。'
  },
  career_cpu_architect: {
    intro: '更偏定义处理器和体系结构层面的关键设计，关注执行单元、存储层次、并行性和整体性能。',
    example: '例如围绕缓存、互连或执行流水线做架构设计，让芯片在典型负载下跑得更高效。'
  },
  career_hw_sw_codesign: {
    intro: '更偏同时理解硬件和软件瓶颈，跨层协同设计，让整套系统而不是单一模块跑得更好。',
    example: '例如同时改编译器、运行时和硬件映射策略，让一个模型或系统在端到端链路上明显提速。'
  },
  career_academia: {
    intro: '更偏围绕一个长期问题做独立研究，兼顾论文、项目、指导学生和研究路线建设。',
    example: '例如几年内持续围绕同一个核心方向产出论文、公开项目和课程，慢慢形成自己的学术影响力。'
  },
  career_tech_pm: {
    intro: '更偏把技术能力、用户需求和研发节奏串起来，负责定方向、拆目标、排优先级并推动落地。',
    example: '例如围绕一个 AI 平台能力协调算法、后端和前端团队，把原型真正做成可上线的产品功能。'
  }
};

function leafDetail(intro, example) {
  return { intro: intro, example: example };
}

function roleText(role) {
  return String(role || '').toLowerCase();
}

var CAREER_LEAF_ROLE_BUILDERS = {
  career_ml_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('personalization') >= 0) return leafDetail(
      '更偏把用户行为和兴趣变化做成个性化模型，核心是理解“这个用户此刻最可能想看什么、买什么或点什么”。',
      '例如给内容流或推荐位做个性化排序，让新用户也能更快刷到真正愿意停留的内容。'
    );
    if (r.indexOf('predictive') >= 0) return leafDetail(
      '更偏围绕预测问题做建模，让系统能提前判断风险、需求、流失或转化等结果会不会发生。',
      '例如做一个流失预测模型，让运营在用户真正离开前就能识别并提前干预。'
    );
    if (r.indexOf('algorithm engineer') >= 0 || r.indexOf('modeling engineer') >= 0) return leafDetail(
      '更偏把核心算法方案做成可持续迭代的模型链路，常见工作是特征设计、训练对比、指标分析和上线迭代。',
      '例如给广告、风控或推荐系统设计一条模型方案，让效果提升不只停留在离线实验里。'
    );
    if (r.indexOf('deep learning') >= 0 || r.indexOf('model training') >= 0) return leafDetail(
      '更偏做深度模型训练和调参，重点是数据配比、训练稳定性、损失设计和最终效果落地。',
      '例如为一个大规模视觉或文本模型调训练策略，让模型在真实任务上继续提分。'
    );
    if (r.indexOf('ai engineer') >= 0) return leafDetail(
      '更偏把 AI 能力接进真实产品流程，不只关心模型效果，也关心接口、延迟、错误处理和业务可用性。',
      '例如把一个文本或图像模型做进办公、客服或审核链路里，让用户真的能长期使用。'
    );
    if (r.indexOf('machine learning engineer') >= 0 || r.indexOf('applied machine learning engineer') >= 0) return leafDetail(
      '更偏把机器学习方法做成真正可上线的能力，常见工作是数据准备、训练对比、效果评估和上线迭代。',
      '例如围绕推荐、广告或风控做一个预测模型，从数据清洗到 A/B 实验都亲自推进。'
    );
    return null;
  },
  career_research_scientist: function(role) {
    var r = roleText(role);
    if (r.indexOf('theoretical') >= 0) return leafDetail(
      '更偏从理论层面解释学习算法为什么有效、什么时候失效，重点是证明、边界条件和数学结构。',
      '例如围绕一个学习算法推一般化误差或收敛界，说明它在什么条件下才值得信任。'
    );
    if (r.indexOf('statistical') >= 0) return leafDetail(
      '更偏用统计学习的视角研究模型行为，关注样本复杂度、偏差方差和学习边界。',
      '例如分析一种模型在有限样本下的表现，判断它靠的是真泛化还是数据巧合。'
    );
    if (r.indexOf('bayesian') >= 0 || r.indexOf('probabilistic') >= 0) return leafDetail(
      '更偏研究不确定性、概率建模和后验推断，让模型不仅给答案，还能说明自己有多确定。',
      '例如给一个风险预测系统补不确定性建模，让团队知道哪些结论可以直接用、哪些还该谨慎。'
    );
    if (r.indexOf('generalization') >= 0) return leafDetail(
      '更偏研究模型为什么能在没见过的数据上继续有效，核心是训练表现和真实泛化之间的差距。',
      '例如分析一个大模型在不同分布下的表现，判断它学到的是规律还是只是记住了训练集。'
    );
    if (r.indexOf('scaling') >= 0) return leafDetail(
      '更偏研究模型能力如何随数据、参数和算力扩张而变化，重点是 scaling law 和能力拐点。',
      '例如比较不同训练规模下的损失曲线，判断继续加数据还是加模型更划算。'
    );
    if (r.indexOf('research scientist') >= 0 || r.indexOf('machine learning researcher') >= 0) return leafDetail(
      '更偏自己提出问题、设计实验和分析结果，用系统研究去推动一个方向的边界。',
      '例如围绕一个新方法连续做实验、消融和分析，最后把结论沉淀成论文或研究报告。'
    );
    return null;
  },
  career_applied_scientist: function(role) {
    var r = roleText(role);
    if (r.indexOf('(nlp)') >= 0) return leafDetail(
      '更偏把语言理解和生成方法接进真实业务，重点是问答、搜索、对话和信息抽取效果是否真能落地。',
      '例如把一个 NLP 方法接进客服或知识库系统，验证它是否真的能减少人工处理量。'
    );
    if (r.indexOf('(cv)') >= 0) return leafDetail(
      '更偏把视觉模型改造成可上线方案，重点是检测、分割、识别等任务在真实图像里的稳定表现。',
      '例如把一个新视觉方法接进产线检测或内容审核流程，判断它是否真的减少误判。'
    );
    if (r.indexOf('(recsys)') >= 0) return leafDetail(
      '更偏把推荐方法落到真实流量里，既要做离线实验，也要盯住线上点击、留存和转化表现。',
      '例如把新的排序特征接进推荐链路，验证它是否真的带来更高的停留和转化。'
    );
    if (r.indexOf('(genai)') >= 0) return leafDetail(
      '更偏把生成式模型改造成真实工具，重点是质量、可控性和用户是否愿意长期用。',
      '例如把一个生成模型接进内容制作流程，验证它是否真的缩短了产出时间。'
    );
    if (r.indexOf('applied data scientist') >= 0) return leafDetail(
      '更偏把建模和实验能力用到真实业务判断里，既看方法，也看业务动作最后能否真正改变结果。',
      '例如围绕营销、增长或风控问题做建模，帮助团队找到更值得执行的策略。'
    );
    if (r.indexOf('applied scientist') >= 0 || r.indexOf('machine learning scientist') >= 0 || r.indexOf('applied ml scientist') >= 0) return leafDetail(
      '更偏把前沿方法快速改造成能解决真实问题的方案，重点是方法有效、实验可信、结果能落地。',
      '例如把一个学界新方法接进搜索、内容理解或推荐场景，验证它是否真能提升线上指标。'
    );
    return null;
  },
  career_foundation_model: function(role) {
    var r = roleText(role);
    if (r.indexOf('pretraining') >= 0) return leafDetail(
      '更偏围绕预训练阶段做数据、配方和训练策略，让模型在大规模通用能力上打好底子。',
      '例如调整数据混合比例和训练节奏，让基础模型在代码、多语言或长上下文能力上更稳。'
    );
    if (r.indexOf('adaptation') >= 0) return leafDetail(
      '更偏把基础模型适配到新领域、新任务或新模态，重点是微调策略、数据构造和迁移效果。',
      '例如把通用模型适配到金融、医疗或企业知识场景，让它说得更准也更符合场景规则。'
    );
    if (r.indexOf('multimodal') >= 0 || r.indexOf('vlm') >= 0 || r.indexOf('vision-language') >= 0 || r.indexOf('document & vision') >= 0) return leafDetail(
      '更偏做能同时理解文字和图像的基础模型，重点是跨模态对齐、视觉理解和多模态推理。',
      '例如训练一个能读图表、文档和图片的模型，让它在复杂多模态任务里也能给出可用答案。'
    );
    if (r.indexOf('research scientist') >= 0 || r.indexOf('researcher') >= 0 || r.indexOf('research engineer') >= 0) return leafDetail(
      '更偏围绕基础模型能力边界做实验，重点是训练数据、配方、架构和评测体系的系统性研究。',
      '例如比较不同训练策略下的模型表现，找出更适合下一代模型扩展的路线。'
    );
    if (r.indexOf('ai platform model engineer') >= 0) return leafDetail(
      '更偏把基础模型能力接进平台层，负责模型接入、版本管理、服务稳定性和上下游协同。',
      '例如为内部模型平台接入多种基础模型，让算法和产品团队都能更方便地调用和迭代。'
    );
    if (r.indexOf('foundation model engineer') >= 0) return leafDetail(
      '更偏把基础模型从训练到服务真正打通，日常会碰训练流程、评测、推理和系统成本问题。',
      '例如围绕一个基础模型做训练和部署，让它既有能力，也能在真实平台里跑得动。'
    );
    return null;
  },
  career_nlp_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('search infrastructure') >= 0) return leafDetail(
      '更偏搭建搜索底层基础设施，负责索引构建、更新链路、召回服务和大规模查询稳定性。',
      '例如把一套搜索索引服务做成分钟级更新，让用户搜到的信息又新又稳。'
    );
    if (r.indexOf('search quality') >= 0 || r.indexOf('search relevance') >= 0 || r.indexOf('relevance engineer') >= 0) return leafDetail(
      '更偏研究搜索结果到底“准不准”，重点是相关性评测、人工标注体系和排序误差分析。',
      '例如分析用户搜“轻薄电脑”时为什么总看到不相关结果，再改评测和排序逻辑。'
    );
    if (r.indexOf('ranking engineer') >= 0 || r.indexOf('retrieval engineer') >= 0 || r.indexOf('information retrieval engineer') >= 0 || r.indexOf('search engineer') >= 0) return leafDetail(
      '更偏围绕搜索召回和排序做系统，把“找到内容”这件事做得更准、更快、更懂用户意图。',
      '例如优化电商或站内搜索，让用户输入一串自然语言后更快得到真正相关的结果。'
    );
    if (r.indexOf('recommendation scientist') >= 0 || r.indexOf('recommender systems engineer') >= 0 || r.indexOf('recommendation engineer') >= 0 || r.indexOf('growth ml engineer') >= 0) return leafDetail(
      '更偏做推荐和个性化模型，重点是理解用户兴趣变化，并把好内容或好商品更及时地送到用户面前。',
      '例如优化首页推荐，让新用户更快刷到愿意停留、收藏或下单的内容。'
    );
    if (r.indexOf('asr') >= 0 || r.indexOf('tts') >= 0 || r.indexOf('speech') >= 0 || r.indexOf('voice') >= 0 || r.indexOf('spoken language') >= 0) return leafDetail(
      '更偏处理语音识别、语音合成和语音交互，让系统在真实环境里更会听也更会说。',
      '例如给车载语音或客服系统做降噪和识别优化，让嘈杂场景下也能稳定交互。'
    );
    if (r.indexOf('computational linguist') >= 0) return leafDetail(
      '更偏用语言学知识改进语言系统，常见工作是定义标注体系、分析语义歧义和提升模型语言表现。',
      '例如分析模型为什么总在代词指代或长句结构上犯错，再反向改进数据和评测。'
    );
    if (r.indexOf('text mining') >= 0 || r.indexOf('information extraction') >= 0 || r.indexOf('document ai') >= 0) return leafDetail(
      '更偏把长文档、票据、合同或网页里的关键信息抽取出来，让机器能真正读懂结构化和半结构化文本。',
      '例如做一个合同或发票抽取系统，把人手录入的字段自动变成可检索、可分析的数据。'
    );
    if (r.indexOf('conversational ai') >= 0) return leafDetail(
      '更偏做多轮对话和智能助理，让系统不只会单次回答，还能在上下文里持续理解和回应。',
      '例如给客服或办公助手做多轮对话能力，让它能顺着上下文把问题处理完。'
    );
    if (r.indexOf('nlp engineer') >= 0 || r.indexOf('nlp scientist') >= 0) return leafDetail(
      '更偏把文本理解、问答、信息抽取或对话系统真正做进产品，重点是语言理解准确、链路稳定、体验自然。',
      '例如给客服、搜索或企业知识库做语言系统，让用户提问后更快得到可靠答案。'
    );
    return null;
  },
  career_cv_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('medical') >= 0) return leafDetail(
      '更偏把视觉模型用到医疗影像和临床辅助分析里，重点是定位高风险区域并帮助医生更快做判断。',
      '例如做 CT、MRI 或病理切片分析，让系统先把值得重点查看的区域圈出来。'
    );
    if (r.indexOf('3d') >= 0 || r.indexOf('ar/vr') >= 0) return leafDetail(
      '更偏从图像、视频或点云恢复空间结构，核心是三维重建、几何理解和空间表示。',
      '例如用多视角图像做三维重建，让 AR、机器人或数字孪生系统更准确理解空间。'
    );
    if (r.indexOf('video') >= 0) return leafDetail(
      '更偏做视频理解，让系统不仅能看一张图，还能理解动作、事件、时序变化和长视频内容。',
      '例如给安防、体育或内容平台做视频分析，让系统自动识别关键动作或事件片段。'
    );
    if (r.indexOf('visual understanding') >= 0) return leafDetail(
      '更偏研究模型如何理解场景、关系和视觉语义，而不只是识别单个目标。',
      '例如分析一张复杂场景图里的物体关系，让模型知道“谁在做什么、和谁有关”。'
    );
    if (r.indexOf('perception engineer') >= 0) return leafDetail(
      '更偏让系统从摄像头或多传感器输入里理解周围环境，重点是稳定识别、跟踪和场景理解。',
      '例如给自动驾驶或机器人做感知模块，让系统知道前方有哪些目标、位置和状态。'
    );
    if (r.indexOf('cv scientist') >= 0) return leafDetail(
      '更偏围绕视觉方法做实验和模型迭代，重点是验证新方法能否在真实图像或视频任务里更稳更强。',
      '例如围绕检测、分割或视觉理解任务做一组实验，找到更适合目标场景的模型方案。'
    );
    if (r.indexOf('computer vision engineer') >= 0 || r.indexOf('vision algorithm engineer') >= 0 || r.indexOf('imaging ai engineer') >= 0) return leafDetail(
      '更偏把视觉模型和图像算法真正做进产品流程，常见工作是检测、分割、识别、跟踪和上线调优。',
      '例如在产线检测、内容审核或智能相机里接入视觉模型，让识别效果稳定落到真实业务上。'
    );
    return null;
  },
  career_generative_ai: function(role) {
    var r = roleText(role);
    if (r.indexOf('diffusion') >= 0 || r.indexOf('image / video generation') >= 0) return leafDetail(
      '更偏围绕扩散和生成模型做训练与调优，重点是画质、稳定性、时序一致性和生成成本。',
      '例如训练一个图像或视频生成模型，让它在商业素材场景里产出更稳、更像样的结果。'
    );
    if (r.indexOf('creative tooling') >= 0 || r.indexOf('ai artist tools') >= 0 || r.indexOf('creative technologist') >= 0 || r.indexOf('generative media') >= 0 || r.indexOf('media ai') >= 0) return leafDetail(
      '更偏把生成模型做成创作者真正愿意用的工具，核心是工作流、控制能力和创作体验。',
      '例如给设计或视频团队做一套生成式工作台，让改图、扩图、改风格都能更快完成。'
    );
    if (r.indexOf('content ai') >= 0 || r.indexOf('genai product') >= 0) return leafDetail(
      '更偏把生成模型变成内容生产工具，重点是把生成能力和真实业务流程接起来。',
      '例如为营销、教育或客服场景做一套自动生成内容的工具，让团队减少大量重复工作。'
    );
    if (r.indexOf('language generation') >= 0 || r.indexOf('llm generation') >= 0) return leafDetail(
      '更偏围绕文本生成本身做优化，关注生成连贯性、风格控制、事实性和长文本质量。',
      '例如优化一个长文案生成器，让它在保持语气一致的同时减少空话和重复。'
    );
    if (r.indexOf('controllable') >= 0) return leafDetail(
      '更偏让生成模型不仅“会生成”，还要能被人精确控制输出的风格、结构和内容边界。',
      '例如做一个可控生成系统，让设计师指定构图、配色和主题后再自动出图。'
    );
    if (r.indexOf('generative ai engineer') >= 0 || r.indexOf('generative modeling researcher') >= 0 || r.indexOf('interactive ai engineer') >= 0) return leafDetail(
      '更偏把生成模型做成真实可用的创作或生产工具，既关心生成质量，也关心可控性和成本。',
      '例如为品牌、设计或内容团队做一套生成式能力，让高频创意任务更快落地。'
    );
    return null;
  },
  career_rl_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('offline rl') >= 0) return leafDetail(
      '更偏在不能随意试错的场景里从历史数据学习策略，重点是离线数据偏差和策略是否真能安全部署。',
      '例如利用历史推荐或控制日志训练一个策略，让它在不直接线上冒险的情况下先学会更优决策。'
    );
    if (r.indexOf('multi-agent') >= 0 || r.indexOf('marl') >= 0) return leafDetail(
      '更偏研究多个智能体如何协作、竞争和形成稳定策略，核心是协同、通信和全局目标。',
      '例如在仿真环境里训练一组智能体协同完成资源分配或对抗任务。'
    );
    if (r.indexOf('agent planning') >= 0) return leafDetail(
      '更偏让智能体在多步骤任务里会拆解目标、制定计划并根据环境变化动态调整。',
      '例如让一个智能体先规划再行动，自动完成“搜集资料、整理、输出结果”的完整流程。'
    );
    if (r.indexOf('policy optimization') >= 0 || r.indexOf('sequential decision') >= 0) return leafDetail(
      '更偏研究长期奖励下的策略优化，核心是怎样在连续决策里逐步做出更好的动作序列。',
      '例如让一个系统在多轮决策中平衡短期收益和长期目标，而不是只看眼前一步。'
    );
    if (r.indexOf('simulation') >= 0) return leafDetail(
      '更偏用仿真环境训练和验证策略，让系统先在可控环境里试错，再逐步迁移到真实场景。',
      '例如在仿真里训练一个控制或交互策略，先把危险和高成本试错都放在虚拟环境里完成。'
    );
    if (r.indexOf('control learning') >= 0) return leafDetail(
      '更偏把学习方法用到控制问题里，让系统不只依赖固定控制器，而是能从反馈中学出更优策略。',
      '例如让控制系统通过学习逐步改进动作选择，在复杂动态环境下也能更稳。'
    );
    if (r.indexOf('rl research scientist') >= 0 || r.indexOf('rl engineer') >= 0 || r.indexOf('applied rl engineer') >= 0 || r.indexOf('decision ai engineer') >= 0) return leafDetail(
      '更偏处理长期反馈下的策略学习和决策问题，让系统不只会判断，还会连续行动。',
      '例如让一个智能体在多步任务里自己规划、尝试、纠错并逐步完成目标。'
    );
    return null;
  },
  career_efficient_ai: function(role) {
    var r = roleText(role);
    if (r.indexOf('training systems') >= 0) return leafDetail(
      '更偏把大规模训练链路做得更顺，重点是并行策略、通信开销、吞吐和训练稳定性。',
      '例如优化分布式训练管线，让同样的集群在更短时间里完成同样规模的训练任务。'
    );
    if (r.indexOf('distillation') >= 0) return leafDetail(
      '更偏把大模型知识压缩到更小模型里，让系统在不牺牲太多效果的前提下更轻、更快、更便宜。',
      '例如把一个大模型蒸馏成端侧模型，让设备本地也能跑出可接受效果。'
    );
    if (r.indexOf('quantization') >= 0 || r.indexOf('compression') >= 0) return leafDetail(
      '更偏用量化、剪枝或压缩手段降低模型成本，让模型在更小算力上也能跑起来。',
      '例如把一个大模型压到更低精度，让线上服务在更少 GPU 下维持可接受延迟。'
    );
    if (r.indexOf('inference') >= 0 || r.indexOf('runtime') >= 0 || r.indexOf('serving') >= 0) return leafDetail(
      '更偏把模型推理做得更快更稳更省，常见工作是性能优化、缓存、批处理和服务链路调优。',
      '例如把线上大模型服务延迟压下来，让同样的硬件预算服务更多请求。'
    );
    if (r.indexOf('performance') >= 0 || r.indexOf('acceleration') >= 0 || r.indexOf('gpu performance') >= 0 || r.indexOf('efficient ml engineer') >= 0) return leafDetail(
      '更偏在训练和推理两端一起做效率优化，让模型在同样资源下跑得更快、更稳、更省钱。',
      '例如同时调整模型结构、并行方式和运行参数，让一套模型服务成本明显下降。'
    );
    if (r.indexOf('edge ai') >= 0) return leafDetail(
      '更偏让 AI 模型在端侧和边缘设备上跑得动，重点是模型尺寸、功耗、时延和现场稳定性。',
      '例如把一个视觉或语音模型压到边缘设备上，让它离线也能完成实时推理。'
    );
    return null;
  },
  career_systems_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('distributed systems') >= 0) return leafDetail(
      '更偏设计多机协作的核心服务，重点是一致性、容错、复制和高并发下的稳定行为。',
      '例如把订单、日志或配置系统拆成分布式服务，让它在机器故障时也能继续工作。'
    );
    if (r.indexOf('backend infrastructure') >= 0) return leafDetail(
      '更偏搭建支撑业务后端的公共基础设施，重点是服务框架、调用链、容量治理和性能基线。',
      '例如做一套统一的后端基础设施，让不同业务线都能更快起服务且更容易排障。'
    );
    if (r.indexOf('cloud systems') >= 0 || r.indexOf('cloud engineer') >= 0 || r.indexOf('cloud platform') >= 0) return leafDetail(
      '更偏做云平台层的计算、存储、网络和调度能力，让资源在大规模环境里稳定供应给上层系统。',
      '例如为容器或云主机平台做资源调度和稳定性治理，让业务高峰时也能平稳运行。'
    );
    if (r.indexOf('distributed storage') >= 0 || r.indexOf('storage engineer') >= 0) return leafDetail(
      '更偏做存储系统和数据持久化能力，重点是副本、一致性、吞吐和恢复能力。',
      '例如优化一套对象存储或日志存储系统，让写入高峰和故障恢复都更可控。'
    );
    if (r.indexOf('site reliability') >= 0 || r.indexOf('reliability engineer') >= 0) return leafDetail(
      '更偏围绕系统稳定性、监控、容量和故障响应工作，让关键服务在真实流量下长期在线。',
      '例如为核心服务建立告警、演练和容量治理流程，把线上事故发生率压下来。'
    );
    if (r.indexOf('devops') >= 0) return leafDetail(
      '更偏把开发、测试、发布和运维流程打通，让软件从写出来到稳定上线这条链路更顺。',
      '例如搭一套 CI/CD 和环境管理流程，让团队发版更快且更少因为流程问题翻车。'
    );
    if (r.indexOf('network platform') >= 0) return leafDetail(
      '更偏做网络层平台能力，重点是服务发现、流量治理、连接管理和网络观测能力。',
      '例如为服务网格或边缘网络做平台层支持，让流量切换和故障定位更可控。'
    );
    if (r.indexOf('edge systems') >= 0) return leafDetail(
      '更偏把系统能力部署到更靠近设备和现场的位置，重点是边缘节点稳定性、同步和远程运维。',
      '例如为门店、工厂或设备侧的边缘节点做部署和治理，让现场系统不靠人盯也能持续运行。'
    );
    if (r.indexOf('low-level software') >= 0) return leafDetail(
      '更偏贴近操作系统、运行时和底层资源管理写代码，关注性能边界和系统行为本身。',
      '例如为一段关键底层模块做内存、线程或 IO 优化，让上层系统整体更稳更快。'
    );
    if (r.indexOf('systems research') >= 0) return leafDetail(
      '更偏围绕系统问题做实验和原型，重点是提出新机制并验证它在真实工作负载里是否值得采用。',
      '例如为新的调度或存储机制做研究系统，比较它在真实负载下是否更优。'
    );
    if (r.indexOf('platform engineer') >= 0 || r.indexOf('infrastructure engineer') >= 0) return leafDetail(
      '更偏把底层平台做稳，让训练、推理或业务系统在大规模场景下也可靠运行。',
      '例如搭一套高可用平台，让系统在高峰流量下还能保持稳定和可观测。'
    );
    return null;
  },
  career_ml_systems: function(role) {
    var r = roleText(role);
    if (r.indexOf('training systems') >= 0 || r.indexOf('distributed training') >= 0) return leafDetail(
      '更偏把模型训练链路做成大规模稳定系统，重点是通信、并行策略、容错和训练吞吐。',
      '例如优化分布式训练框架，让多机多卡训练更少卡住、更容易复现也更省算力。'
    );
    if (r.indexOf('inference systems') >= 0 || r.indexOf('serving engineer') >= 0) return leafDetail(
      '更偏把模型服务链路做成可长期运行的系统，重点是吞吐、延迟、路由、扩缩容和稳定性。',
      '例如为线上模型服务做批处理和缓存优化，让高峰时响应更稳、成本更低。'
    );
    if (r.indexOf('platform ml') >= 0 || r.indexOf('ml infrastructure') >= 0 || r.indexOf('ai infrastructure') >= 0) return leafDetail(
      '更偏搭建机器学习平台和基础设施，把训练、特征、评测、上线这些流程统一成一套平台能力。',
      '例如为团队搭一套模型平台，让研究和业务团队都能更快训练、评估和发布模型。'
    );
    if (r.indexOf('ai systems performance') >= 0) return leafDetail(
      '更偏专门盯住 AI 系统的瓶颈，分析算子、通信、调度和资源使用，让整条链路跑得更有效率。',
      '例如给训练或推理平台做性能剖析，找出真正拖慢系统的关键模块并持续优化。'
    );
    if (r.indexOf('ml systems engineer') >= 0) return leafDetail(
      '更偏把模型训练、推理和平台系统真正串起来，让研究模型能在大规模集群和平台里稳定运行。',
      '例如搭建一套训练和推理平台，让研究团队能更快实验，业务团队也能更稳上线。'
    );
    return null;
  },
  career_compiler_pl: function(role) {
    var r = roleText(role);
    if (r.indexOf('gpu compiler') >= 0 || r.indexOf('ml compiler') >= 0) return leafDetail(
      '更偏让模型或并行程序在目标硬件上编译得更高效，重点是算子融合、调度和硬件映射。',
      '例如为常见深度学习算子做编译优化，让同一段模型代码在 GPU 或加速器上跑得更快。'
    );
    if (r.indexOf('language runtime') >= 0) return leafDetail(
      '更偏做语言运行时，让程序在执行阶段的内存、调度和资源管理更高效、更稳定。',
      '例如优化运行时里的内存管理和执行调度，让上层程序在高负载下也不容易卡住。'
    );
    if (r.indexOf('static analysis') >= 0) return leafDetail(
      '更偏在程序真正运行前分析代码，提前发现类型、资源、安全或逻辑上的潜在问题。',
      '例如做一个静态分析工具，在代码上线前先把常见 bug 和风险点识别出来。'
    );
    if (r.indexOf('developer tools') >= 0) return leafDetail(
      '更偏做提升开发效率的工具，核心是让工程师写、改、测和排错都更顺。',
      '例如给大型工程仓库做代码分析或调试工具，让团队更快找到问题和改动影响。'
    );
    if (r.indexOf('formal verification') >= 0 || r.indexOf('software verification') >= 0 || r.indexOf('verification engineer') >= 0) return leafDetail(
      '更偏证明程序或系统满足某些关键性质，重点是正确性、边界条件和高风险场景下的可验证性。',
      '例如围绕安全关键模块做验证，让系统在极端场景下也尽量不出现危险行为。'
    );
    if (r.indexOf('programming languages researcher') >= 0) return leafDetail(
      '更偏研究语言设计、语义和编程模型，关注语言本身怎样帮助人更安全、更高效地写程序。',
      '例如围绕一种新语言特性做研究，验证它是否真的能减少错误或提升开发效率。'
    );
    if (r.indexOf('toolchain') >= 0 || r.indexOf('compiler engineer') >= 0) return leafDetail(
      '更偏把编译器和工具链真正做成工程可用能力，让代码从源头到目标平台这条链更稳更快。',
      '例如把编译、链接、调试这一整套工具链做顺，让目标平台上的开发体验更好。'
    );
    return null;
  },
  career_security: function(role) {
    var r = roleText(role);
    if (r.indexOf('soc analyst') >= 0) return leafDetail(
      '更偏盯告警、日志和事件流，快速判断哪些是真风险、哪些是误报，并推动应急响应。',
      '例如在一堆安全告警里识别真正值得升级处理的异常行为，避免攻击扩大。'
    );
    if (r.indexOf('product security') >= 0) return leafDetail(
      '更偏把安全要求嵌到产品研发流程里，从设计到上线持续发现并修补高风险点。',
      '例如在新功能开发阶段就审查权限、数据流和攻击面，避免问题等到上线后才爆。'
    );
    if (r.indexOf('threat detection') >= 0) return leafDetail(
      '更偏建立安全检测规则和模型，让异常行为更早被发现，而不是等用户或业务先出问题。',
      '例如围绕账号、流量或模型调用行为建立检测链路，及时识别攻击和滥用。'
    );
    if (r.indexOf('incident response') >= 0) return leafDetail(
      '更偏在安全事件真的发生后组织定位、隔离、止损和复盘，把损害尽快压住并避免复发。',
      '例如处理一次真实入侵事件，快速定位入口、阻断影响并推动后续修补。'
    );
    if (r.indexOf('offensive security') >= 0) return leafDetail(
      '更偏主动站在攻击者视角找系统漏洞，通过渗透、模拟攻击和对抗测试暴露风险。',
      '例如对内部平台做红队测试，尽量在真实攻击者之前先找到薄弱点。'
    );
    if (r.indexOf('cryptography') >= 0) return leafDetail(
      '更偏设计和实现加密、签名和协议，让信息在传输、存储和验证时更难被伪造或窃取。',
      '例如为身份验证或数据交换系统实现加密协议，让核心数据在关键链路上更安全。'
    );
    if (r.indexOf('confidential computing') >= 0) return leafDetail(
      '更偏让数据在使用过程中也受到硬件级保护，重点是可信执行环境、隔离和敏感计算。',
      '例如让一段敏感数据分析任务即使在云上跑，也尽量不暴露给不该看到的人。'
    );
    if (r.indexOf('privacy') >= 0) return leafDetail(
      '更偏围绕数据最小化、权限边界和隐私保护技术做落地，让系统更少因为使用数据而带来风险。',
      '例如为一个推荐或 AI 功能重新设计数据使用方式，让效果和隐私保护尽量同时兼顾。'
    );
    if (r.indexOf('network security') >= 0) return leafDetail(
      '更偏保护网络侧链路和边界，重点是访问控制、流量检测、隔离和异常通信识别。',
      '例如为公司网络或云网络设计检测和防护规则，减少横向移动和异常流量带来的风险。'
    );
    if (r.indexOf('security engineer') >= 0 || r.indexOf('cybersecurity engineer') >= 0 || r.indexOf('security analyst') >= 0 || r.indexOf('security researcher') >= 0) return leafDetail(
      '更偏围绕攻击面、风险链路和防护机制做工作，让系统、数据和模型在真实环境里更不容易出事。',
      '例如为平台补检测与响应链路，或者围绕隐私保护与加密方案做落地，让高风险场景更可控。'
    );
    return null;
  },
  career_hci_ux: function(role) {
    var r = roleText(role);
    if (r.indexOf('ux researcher') >= 0 || r.indexOf('hci research scientist') >= 0) return leafDetail(
      '更偏研究用户是怎样理解系统、怎样犯错、怎样形成信任，再把这些观察变成更好的产品设计依据。',
      '例如观察用户如何使用一个复杂 AI 功能，再把关键阻塞点整理成改版建议。'
    );
    if (r.indexOf('accessibility') >= 0 || r.indexOf('inclusive design') >= 0) return leafDetail(
      '更偏让不同能力、设备和场景下的用户都能顺利使用产品，重点是可访问性、包容性和交互细节。',
      '例如重做一个复杂表单或交互流程，让屏幕阅读器用户和行动不便用户也能顺利完成任务。'
    );
    if (r.indexOf('ai interaction') >= 0) return leafDetail(
      '更偏研究人如何和 AI 系统交互，重点是可解释性、信任感、控制感和错误恢复体验。',
      '例如改一个 AI 助手界面，让用户知道系统依据什么回答、什么时候该人工接管。'
    );
    if (r.indexOf('product designer') >= 0) return leafDetail(
      '更偏在产品设计里理解技术约束，把复杂能力变成用户真能学会和持续使用的功能。',
      '例如把一个技术能力拆成更清楚的界面和流程，让普通用户也能在几分钟内上手。'
    );
    if (r.indexOf('ux engineer') >= 0 || r.indexOf('interaction designer') >= 0 || r.indexOf('human factors') >= 0) return leafDetail(
      '更偏把复杂能力做成更好理解、更顺手、更愿意长期使用的交互和体验。',
      '例如观察用户如何使用一个 AI 功能，再重构流程和界面，让它更容易理解也更敢用。'
    );
    return null;
  },
  career_database: function(role) {
    var r = roleText(role);
    if (r.indexOf('database administrator') >= 0) return leafDetail(
      '更偏维护数据库实例的稳定运行，重点是备份、恢复、权限、性能基线和日常可用性。',
      '例如保证核心交易库在高峰和故障时都能恢复，并且数据不乱、业务不断。'
    );
    if (r.indexOf('query engine') >= 0) return leafDetail(
      '更偏做查询优化器和执行器，让 SQL 或数据查询真正跑得更快、更稳、更省资源。',
      '例如优化一类复杂查询，让原本几十秒的报表查询缩到几秒内完成。'
    );
    if (r.indexOf('database architect') >= 0) return leafDetail(
      '更偏从系统层决定数据库怎么组织数据、怎么扩展和怎么处理一致性与性能取舍。',
      '例如为一套高并发业务选存储结构和架构方案，让系统扩到更大规模时也不容易崩。'
    );
    if (r.indexOf('database research') >= 0) return leafDetail(
      '更偏围绕事务、索引、存储结构或查询机制做实验和原型，验证新设计是否真值得用。',
      '例如尝试一种新的索引或事务机制，比较它在真实工作负载下是不是更高效。'
    );
    if (r.indexOf('stream processing') >= 0) return leafDetail(
      '更偏处理实时数据流，让事件数据能持续被消费、计算并快速反馈到业务或监控系统里。',
      '例如做一个实时风控或监控链路，让异常行为一出现就能被规则或模型及时识别。'
    );
    if (r.indexOf('big data') >= 0) return leafDetail(
      '更偏处理大规模离线或近实时数据任务，重点是批处理效率、数据组织和稳定交付。',
      '例如跑一套大规模数据处理任务，让团队每天准时拿到可直接分析的结果表。'
    );
    if (r.indexOf('data management') >= 0) return leafDetail(
      '更偏让数据可管理、可追踪、可复用，重点是元数据、口径一致性、权限和数据生命周期。',
      '例如把分散的数据表、口径和权限重新整理，让团队更容易找到并正确使用数据。'
    );
    if (r.indexOf('warehouse platform') >= 0 || r.indexOf('data platform engineer') >= 0) return leafDetail(
      '更偏搭数据平台和数仓底座，让上层分析和模型都能在一套稳定的数据底盘上工作。',
      '例如把数仓、调度和权限链路搭起来，让业务分析和建模都不再被底层反复拖慢。'
    );
    if (r.indexOf('database engineer') >= 0) return leafDetail(
      '更偏让数据存储、查询和处理链路更稳更快，核心是系统可靠性、查询效率和数据一致性。',
      '例如为数据库或流式处理系统做结构和性能优化，让业务在更大数据量下也能稳定运行。'
    );
    return null;
  },
  career_ai_hardware: function(role) {
    var r = roleText(role);
    if (r.indexOf('accelerator architect') >= 0 || r.indexOf('npu architect') >= 0) return leafDetail(
      '更偏决定 AI 加速器的关键架构方案，核心是数据流、存储层次、执行单元和功耗性能平衡。',
      '例如为 Transformer 推理设计新的数据流，让芯片在同样功耗下跑得更快。'
    );
    if (r.indexOf('hardware performance') >= 0) return leafDetail(
      '更偏测量和分析硬件在真实工作负载下的瓶颈，找出吞吐、带宽或缓存利用率上的关键问题。',
      '例如用模型工作负载跑一轮性能剖析，定位到底是算力、内存还是调度拖了后腿。'
    );
    if (r.indexOf('inference hardware') >= 0) return leafDetail(
      '更偏围绕推理场景设计或优化硬件，让模型在更低延迟和更低功耗下稳定运行。',
      '例如针对边缘推理场景设计专用硬件路径，让视觉或语言模型更适合上线。'
    );
    if (r.indexOf('quantized compute') >= 0) return leafDetail(
      '更偏围绕低比特计算设计硬件，让量化模型在保证精度可接受的前提下跑得更快更省。',
      '例如为 INT4/INT8 模型设计更合适的计算单元，让压缩后的模型真正把性能优势吃满。'
    );
    if (r.indexOf('memory computing') >= 0) return leafDetail(
      '更偏研究把计算尽量靠近存储做掉，减少数据搬运，让大模型和高带宽任务更高效。',
      '例如尝试一种近存储计算方案，验证它对矩阵运算和能耗是否真的有明显优势。'
    );
    if (r.indexOf('ai soc') >= 0) return leafDetail(
      '更偏把 AI 计算模块集成进更大系统芯片里，重点是和 CPU、内存、总线及其他模块的协同。',
      '例如把 NPU、视频模块和系统总线整合起来，让整颗芯片在端侧 AI 场景里表现更好。'
    );
    if (r.indexOf('ml hardware') >= 0 || r.indexOf('ai accelerator engineer') >= 0 || r.indexOf('npu engineer') >= 0) return leafDetail(
      '更偏做服务 AI 计算的硬件与实现，日常会围绕算子映射、吞吐、带宽和功耗展开。',
      '例如为常见的矩阵运算或注意力计算做硬件实现，让模型推理更快更省电。'
    );
    return null;
  },
  career_vlsi: function(role) {
    var r = roleText(role);
    if (r.indexOf('rtl') >= 0 || r.indexOf('front-end design') >= 0 || r.indexOf('digital ic') >= 0 || r.indexOf('asic') >= 0 || r.indexOf('vlsi engineer') >= 0) return leafDetail(
      '更偏把芯片逻辑真正写出来并验证清楚，常见工作是 RTL 设计、接口定义、功能验证和设计收敛。',
      '例如负责一个计算或控制模块的 RTL 设计，让它从规格说明真正变成可验证的硬件逻辑。'
    );
    if (r.indexOf('physical design') >= 0) return leafDetail(
      '更偏把逻辑设计推进到物理实现，重点是布局布线、时序收敛、功耗和可制造性。',
      '例如把一个芯片模块从综合网表推进到物理版图，让它满足时钟和功耗目标。'
    );
    if (r.indexOf('dft') >= 0) return leafDetail(
      '更偏为芯片加入可测试性设计，让流片后的测试、量产筛查和故障定位更可控。',
      '例如为芯片设计 scan、BIST 等结构，让量产测试更快发现问题。'
    );
    if (r.indexOf('eda') >= 0 || r.indexOf('cad engineer') >= 0 || r.indexOf('verification tool') >= 0) return leafDetail(
      '更偏做芯片设计工具链本身，让设计、验证和物理实现流程更自动化、更高效、更可靠。',
      '例如开发一个验证或时序分析工具，让芯片团队更快发现设计缺陷。'
    );
    if (r.indexOf('fpga') >= 0) return leafDetail(
      '更偏在可重构硬件上快速验证设计，重点是原型搭建、接口联调和硬件加速实验。',
      '例如先在 FPGA 上验证一个视频处理或加速器设计，再决定要不要走 ASIC。'
    );
    return null;
  },
  career_embedded: function(role) {
    var r = roleText(role);
    if (r.indexOf('platform firmware') >= 0 || r.indexOf('firmware') >= 0 || r.indexOf('driver') >= 0 || r.indexOf('bring-up') >= 0 || r.indexOf('bsp') >= 0) return leafDetail(
      '更偏贴着硬件把设备真正带起来，常见工作是写固件、驱动、板级支持和开机初始化链路。',
      '例如让一块新板子从“能上电”走到“能稳定跑系统和关键外设”。'
    );
    if (r.indexOf('real-time') >= 0 || r.indexOf('embedded software') >= 0) return leafDetail(
      '更偏在实时约束下写嵌入式软件，核心是任务调度、时延控制和在有限资源里稳定运行。',
      '例如给电机控制、车载控制或边缘设备写实时软件，让关键任务准时执行。'
    );
    if (r.indexOf('iot') >= 0 || r.indexOf('device platform') >= 0 || r.indexOf('connected devices') >= 0) return leafDetail(
      '更偏让设备接入网络并长期在线，重点是连接管理、远程升级、设备状态和现场可靠性。',
      '例如让一批现场设备能自动上报数据、远程升级，并在掉线后自动恢复。'
    );
    if (r.indexOf('sensor systems') >= 0 || r.indexOf('edge device') >= 0) return leafDetail(
      '更偏把传感器和端侧设备做成稳定可用的产品，重点是采集、功耗、接口和现场表现。',
      '例如给一台边缘设备接入摄像头或传感器，让它在离线条件下也能持续工作。'
    );
    if (r.indexOf('embedded systems engineer') >= 0) return leafDetail(
      '更偏在资源受限设备和边缘硬件上把功能稳定做出来，常见工作涉及固件、驱动、实时性和联调。',
      '例如给车载设备、工业控制器或消费电子写底层系统，让设备在复杂现场里持续可靠运行。'
    );
    return null;
  },
  career_signal_processing: function(role) {
    var r = roleText(role);
    if (r.indexOf('isp') >= 0 || r.indexOf('camera algorithm') >= 0) return leafDetail(
      '更偏围绕相机链路做图像处理，让曝光、降噪、色彩和细节表现更稳定。',
      '例如优化手机或车载相机算法，让夜景、逆光和高速场景下的画面质量更可靠。'
    );
    if (r.indexOf('speech dsp') >= 0 || r.indexOf('audio / speech') >= 0 || r.indexOf('acoustic') >= 0 || r.indexOf('audio engineer') >= 0) return leafDetail(
      '更偏处理声音和语音信号，让系统在嘈杂环境里也能更清晰地识别、增强或合成声音。',
      '例如给耳机、车载语音或客服系统做降噪和增强算法，让用户更容易听清和说清。'
    );
    if (r.indexOf('sensor fusion') >= 0 || r.indexOf('radar') >= 0) return leafDetail(
      '更偏融合不同传感器的信号，让系统在噪声和遮挡条件下仍能得到更稳的环境判断。',
      '例如把雷达、摄像头和其他传感器信息拼起来，让自动驾驶或机器人判断更靠谱。'
    );
    if (r.indexOf('statistical signal') >= 0) return leafDetail(
      '更偏从带噪声的连续信号里估计真实状态，重点是统计建模、估计精度和鲁棒性。',
      '例如从嘈杂的雷达或传感器数据里估计目标位置，让后续决策更可信。'
    );
    if (r.indexOf('dsp engineer') >= 0 || r.indexOf('signal processing engineer') >= 0 || r.indexOf('embedded dsp') >= 0) return leafDetail(
      '更偏从传感器或连续信号里提取稳定有用的信息，让图像、声音或雷达数据更适合后续决策。',
      '例如优化相机、音频或传感器链路，让系统在噪声更大的环境里仍能稳定识别。'
    );
    return null;
  },
  career_comm_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('rf engineer') >= 0 || r.indexOf('baseband') >= 0) return leafDetail(
      '更偏围绕无线链路的物理层实现工作，重点是射频、基带、调制解调和真实设备表现。',
      '例如让一套无线链路在复杂信道里仍能稳定收发，不只是实验室里跑通。'
    );
    if (r.indexOf('5g / 6g') >= 0 || r.indexOf('mobile communications') >= 0 || r.indexOf('cellular systems') >= 0 || r.indexOf('telecom systems') >= 0) return leafDetail(
      '更偏围绕移动通信系统本身做研究和实现，重点是链路吞吐、覆盖、时延和协议协同。',
      '例如优化 5G/6G 场景下的一段链路或协议，让边缘场景下的体验更稳。'
    );
    if (r.indexOf('network optimization') >= 0) return leafDetail(
      '更偏用数据和模型调优通信网络，让容量、覆盖、负载和体验在真实网络里更平衡。',
      '例如分析一片区域的无线网络表现，调整参数和配置，让拥塞时段的网络质量更好。'
    );
    if (r.indexOf('wireless protocol') >= 0 || r.indexOf('communications standards') >= 0 || r.indexOf('ran engineer') >= 0) return leafDetail(
      '更偏围绕协议、标准和无线接入网实现工作，让设备和网络真正能按规则稳定协作。',
      '例如实现或验证一段无线协议流程，让设备接入和切换更稳定。'
    );
    if (r.indexOf('channel coding') >= 0) return leafDetail(
      '更偏通过编码方法提高信息在噪声信道里的可靠传输能力，重点是纠错和链路效率。',
      '例如为一条无线或存储链路设计编码方案，让误码率下降同时吞吐不过度受损。'
    );
    if (r.indexOf('communications research scientist') >= 0 || r.indexOf('wireless communications engineer') >= 0 || r.indexOf('network planning engineer') >= 0) return leafDetail(
      '更偏把通信链路或协议做扎实，让信息在真实信道和设备环境下稳定传输。',
      '例如为 5G/6G 或无线系统做链路仿真和算法优化，提升覆盖或吞吐表现。'
    );
    return null;
  },
  career_control_systems: function(role) {
    var r = roleText(role);
    if (r.indexOf('motion control') >= 0 || r.indexOf('robotics controls') >= 0) return leafDetail(
      '更偏让机器人或机械系统按预期动作稳定执行，重点是轨迹跟踪、误差抑制和执行平滑性。',
      '例如给机械臂或移动机器人调控制器，让它在实际动作里更稳、更准、更少抖动。'
    );
    if (r.indexOf('vehicle controls') >= 0 || r.indexOf('drone control') >= 0 || r.indexOf('autonomous systems') >= 0) return leafDetail(
      '更偏让车、无人机或自主系统在复杂环境里保持稳定控制，重点是实时反馈和安全边界。',
      '例如让无人机在风扰下仍能稳住姿态，或者让车辆在复杂路况下保持平顺控制。'
    );
    if (r.indexOf('state estimation') >= 0 || r.indexOf('navigation') >= 0) return leafDetail(
      '更偏从不完整和带噪声的观测里估计系统真实状态，为后续控制和规划提供可靠输入。',
      '例如结合传感器数据估计车辆或机器人的姿态和位置，让后续动作决策更稳。'
    );
    if (r.indexOf('mpc') >= 0) return leafDetail(
      '更偏用模型预测控制在未来一段时间里提前规划动作，重点是约束、预测和实时求解。',
      '例如让一台机器人在满足速度和安全约束的前提下，提前计算下一段最合适的动作轨迹。'
    );
    if (r.indexOf('automation engineer') >= 0 || r.indexOf('embedded control') >= 0 || r.indexOf('controls software') >= 0) return leafDetail(
      '更偏把控制逻辑真正落到系统里，重点是自动化流程、执行链路和现场稳定性。',
      '例如给生产线、机器人或设备写控制逻辑，让现场动作自动完成且少出错。'
    );
    if (r.indexOf('control research scientist') >= 0 || r.indexOf('modeling & simulation') >= 0) return leafDetail(
      '更偏围绕控制和动态系统做建模、仿真和实验，验证一种控制方案在复杂条件下是否真的可用。',
      '例如为一个复杂动力系统做仿真模型，先在虚拟环境里验证控制策略再落地。'
    );
    if (r.indexOf('safety systems') >= 0) return leafDetail(
      '更偏保证控制系统在异常和极端场景下也尽量安全，重点是边界保护、冗余和失效处理。',
      '例如为一套控制系统设计安全保护逻辑，让异常输入或硬件故障时不至于直接失控。'
    );
    if (r.indexOf('control engineer') >= 0) return leafDetail(
      '更偏设计让系统稳定运行的控制与估计链路，核心是反馈、鲁棒性和实时效果。',
      '例如给无人机、车或机械系统设计控制器，让它在扰动下也能稳住。'
    );
    return null;
  },
  career_data_scientist: function(role) {
    var r = roleText(role);
    if (r.indexOf('product data scientist') >= 0 || r.indexOf('product analyst') >= 0) return leafDetail(
      '更偏围绕产品功能和用户行为做分析，重点是判断哪些功能真的改变了留存、转化和体验。',
      '例如分析一个新推荐功能上线后是否真的让用户看得更久、点得更多。'
    );
    if (r.indexOf('business data scientist') >= 0) return leafDetail(
      '更偏把数据分析变成业务动作建议，重点是把复杂指标翻译成资源配置、策略调整和运营决策。',
      '例如根据各区域表现判断预算该往哪里投、哪些业务动作最值得优先做。'
    );
    if (r.indexOf('research data scientist') >= 0) return leafDetail(
      '更偏围绕一个方法问题做更严谨的数据分析和建模，常见工作是方法评估、实验设计和结果解释。',
      '例如研究一套新的建模方法是否真的优于旧方案，而不是只看单次指标起伏。'
    );
    if (r.indexOf('analytics scientist') >= 0) return leafDetail(
      '更偏把分析做得更系统，关注指标体系、实验结果和复杂业务链路背后的真实原因。',
      '例如为一个复杂业务流程建立分析框架，让团队知道问题到底出在链路哪一段。'
    );
    if (r.indexOf('predictive modeler') >= 0 || r.indexOf('statistical modeler') >= 0) return leafDetail(
      '更偏围绕预测和解释建模，重点是让模型既有区分度，也能说明重要变量和结论依据。',
      '例如做一个违约或流失模型，让团队既能预测风险，也能知道风险来自哪里。'
    );
    if (r.indexOf('forecasting') >= 0 || r.indexOf('time series') >= 0) return leafDetail(
      '更偏做时间序列和趋势预测，重点是季节性、周期性、突发变化和预测误差控制。',
      '例如预测下个月需求或流量，让团队更早安排库存、算力或人力资源。'
    );
    if (r.indexOf('data scientist') >= 0 || r.indexOf('applied data scientist') >= 0 || r.indexOf('decision scientist') >= 0) return leafDetail(
      '更偏用数据和建模支持真实决策，既要会找规律，也要会把结论讲清楚并推动落地。',
      '例如分析新策略上线后的结果，判断它到底值不值得继续扩大。'
    );
    return null;
  },
  career_causal_scientist: function(role) {
    var r = roleText(role);
    if (r.indexOf('experimentation') >= 0 || r.indexOf('a/b testing') >= 0 || r.indexOf('growth scientist') >= 0) return leafDetail(
      '更偏通过实验和评估判断一个策略到底有没有效果，重点是实验设计、统计检验和结果归因。',
      '例如为一个新推荐策略设计 A/B 实验，判断它是否真的提升了留存、转化或收入。'
    );
    if (r.indexOf('econometrician') >= 0) return leafDetail(
      '更偏用经济学和统计方法研究政策或市场变化的因果影响，重点是识别策略而不是只看相关性。',
      '例如分析一个价格、补贴或政策变化后，用户行为到底发生了什么真实变化。'
    );
    if (r.indexOf('policy analyst') >= 0 || r.indexOf('public sector data scientist') >= 0) return leafDetail(
      '更偏评估公共政策或社会项目是否真的有效，重点是识别受影响人群和真实结果变化。',
      '例如评估一个公共服务项目是否真的改善了目标群体，而不是只看报表数字表面上涨。'
    );
    if (r.indexOf('evaluation scientist') >= 0) return leafDetail(
      '更偏设计评估框架，判断一项策略、产品或项目在不同维度上到底产生了哪些真实影响。',
      '例如给一个新项目搭一套评估方法，让团队不只知道“涨了没”，还知道“为什么涨”。'
    );
    if (r.indexOf('methodologist') >= 0) return leafDetail(
      '更偏研究怎样设计更可靠的实验和识别方法，让团队在面对复杂数据时更不容易得出错结论。',
      '例如重新设计一套实验和评估流程，减少样本偏差和错误归因带来的误判。'
    );
    if (r.indexOf('causal inference scientist') >= 0 || r.indexOf('decision scientist') >= 0 || r.indexOf('experimentation analyst') >= 0) return leafDetail(
      '更偏回答“到底是不是这个因素导致了结果变化”，重点是实验设计、因果识别和反事实推断。',
      '例如判断一个推荐改版是否真的提升了用户留存，而不是被季节性或样本偏差误导。'
    );
    return null;
  },
  career_data_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('analytics engineer') >= 0) return leafDetail(
      '更偏把底层数据整理成分析和报表能直接使用的语义层，让业务方看到的是可信、统一的指标定义。',
      '例如把一堆原始表整理成可复用的数据模型，让分析师和产品看到的口径终于一致。'
    );
    if (r.indexOf('workflow engineer') >= 0) return leafDetail(
      '更偏让复杂数据任务按时、按顺序、可恢复地跑起来，重点是调度、依赖和任务稳定性。',
      '例如把一串数据任务编排成稳定流程，让每天凌晨的数据链路不再动不动断掉。'
    );
    if (r.indexOf('etl') >= 0 || r.indexOf('pipeline') >= 0) return leafDetail(
      '更偏把数据从源头稳定搬到可分析的位置，重点是抽取、转换、清洗和链路可靠性。',
      '例如把埋点、业务库和外部数据整合进同一条流水线，让团队每天都能拿到准时数据。'
    );
    if (r.indexOf('warehouse') >= 0) return leafDetail(
      '更偏围绕数仓做结构设计和性能优化，让分析、报表和建模都能在同一套底层上稳定运行。',
      '例如为数仓设计分层和表结构，让大报表和分析任务跑得更稳、更快、更省。'
    );
    if (r.indexOf('quality') >= 0 || r.indexOf('governance') >= 0 || r.indexOf('reliability') >= 0) return leafDetail(
      '更偏保证数据本身可信，重点是数据校验、口径治理、异常监控和问题追踪。',
      '例如给关键指标加质量监控，让一旦数据口径漂了或任务失败就能立刻发现。'
    );
    if (r.indexOf('platform') >= 0 || r.indexOf('infrastructure') >= 0) return leafDetail(
      '更偏搭数据平台底座，让更多分析、实验和模型工作能在一套稳定的数据基础设施上展开。',
      '例如把调度、存储和权限能力统一起来，让数据团队不用每次都重复搭底层。'
    );
    if (r.indexOf('data engineer') >= 0) return leafDetail(
      '更偏把数据链路做稳做清楚，让分析、实验和模型不再被脏数据、坏表或高延迟反复拖住。',
      '例如搭好埋点到数仓再到特征平台的流水线，让业务每天都能拿到可直接使用的数据。'
    );
    return null;
  },
  career_mlops: function(role) {
    var r = roleText(role);
    if (r.indexOf('model monitoring') >= 0) return leafDetail(
      '更偏持续盯线上模型是否漂移、退化或报错，让模型不是“上线即结束”，而是持续可观测。',
      '例如给一个线上推荐模型加漂移和效果监控，一旦数据变了就能及时发现。'
    );
    if (r.indexOf('ml evaluation') >= 0) return leafDetail(
      '更偏建立模型评测体系，重点是基准集、指标、回归检查和发布前的质量守门。',
      '例如给一个模型平台做统一评测流程，让每次上线前都先跑过同一套标准。'
    );
    if (r.indexOf('feature platform') >= 0) return leafDetail(
      '更偏搭建特征平台，让训练和线上推理都能稳定拿到一致的特征定义和计算结果。',
      '例如把一套复杂特征做成统一平台，避免训练时一套、线上又是另一套。'
    );
    if (r.indexOf('experiment') >= 0) return leafDetail(
      '更偏搭建实验追踪和平台能力，让模型、参数、数据和结果都能被完整记录和复现。',
      '例如做一个实验平台，让团队随时能回看“这个结果到底是用什么配置跑出来的”。'
    );
    if (r.indexOf('deployment') >= 0 || r.indexOf('production ml') >= 0 || r.indexOf('model operations') >= 0 || r.indexOf('ai operations') >= 0) return leafDetail(
      '更偏让模型在生产环境里长期稳定运转，既关心上线与监控，也关心回滚、告警和发布节奏。',
      '例如围绕一个线上模型建立发布、评测和回滚流程，让每次更新都更可控。'
    );
    if (r.indexOf('ml platform') >= 0 || r.indexOf('ai infrastructure') >= 0 || r.indexOf('ml reliability') >= 0 || r.indexOf('mlops engineer') >= 0) return leafDetail(
      '更偏把模型上线、监控和迭代流程工程化，让生产 ML 更像一套成熟的可维护系统。',
      '例如给模型平台补实验跟踪、监控告警和自动回滚，让线上模型出问题时更快止损。'
    );
    return null;
  },
  career_domain_ds: function(role) {
    var r = roleText(role);
    if (r.indexOf('bioinformatician') >= 0 || r.indexOf('computational biologist') >= 0) return leafDetail(
      '更偏把算法和统计方法用到生物数据里，重点是基因、单细胞、蛋白或临床实验数据的分析与解释。',
      '例如分析单细胞或测序数据，帮助研究团队更快发现可能的生物机制或候选靶点。'
    );
    if (r.indexOf('biomedical') >= 0 || r.indexOf('healthcare') >= 0) return leafDetail(
      '更偏把数据科学方法用到医疗和健康场景，重点是让模型和分析结果真的能辅助临床或运营决策。',
      '例如基于临床和检查数据做风险评估，让医生或医院更早看到高风险人群。'
    );
    if (r.indexOf('social') >= 0 || r.indexOf('policy') >= 0) return leafDetail(
      '更偏研究人群行为、平台治理和政策效果，把数据分析变成对社会和平台规则更有用的判断。',
      '例如分析内容传播、用户互动或治理策略，判断什么机制更能减少伤害或提升公平。'
    );
    if (r.indexOf('mobility') >= 0 || r.indexOf('geospatial') >= 0) return leafDetail(
      '更偏处理位置和时空数据，重点是轨迹、区域、流动模式和地理条件对结果的影响。',
      '例如分析城市出行或位置分布数据，让交通、配送或选址决策更有依据。'
    );
    if (r.indexOf('environmental') >= 0 || r.indexOf('climate') >= 0) return leafDetail(
      '更偏把数据科学方法用到环境和气候问题，重点是长期趋势、区域差异和不确定性分析。',
      '例如分析空气质量、降雨或气候变化数据，让团队更早识别值得响应的异常趋势。'
    );
    if (r.indexOf('industrial') >= 0) return leafDetail(
      '更偏把数据科学落到工业和制造流程里，重点是质量、效率、设备健康和运营优化。',
      '例如分析工厂或设备数据，提前发现故障征兆并减少停机。'
    );
    return null;
  },
  career_quant: function(role) {
    var r = roleText(role);
    if (r.indexOf('algorithmic trading') >= 0 || r.indexOf('quant researcher') >= 0) return leafDetail(
      '更偏寻找可交易信号和策略，重点是研究市场结构、建模、回测和真实执行可行性。',
      '例如围绕一组市场信号做研究，判断它是否在考虑滑点和成本后仍然值得交易。'
    );
    if (r.indexOf('quantitative analyst') >= 0 || r.indexOf('financial data scientist') >= 0) return leafDetail(
      '更偏用数据和模型解释金融现象，重点是风险、收益、行为和业务决策中的数量化问题。',
      '例如给风控、资产配置或业务团队做建模，让决策更少依赖纯经验。'
    );
    if (r.indexOf('risk') >= 0 || r.indexOf('credit') >= 0 || r.indexOf('fraud') >= 0) return leafDetail(
      '更偏识别和量化金融或交易风险，重点是坏账、欺诈、极端损失和不确定性管理。',
      '例如做一个反欺诈或违约模型，让系统在风险真正爆发前先发出信号。'
    );
    if (r.indexOf('financial economist') >= 0) return leafDetail(
      '更偏从经济机制和市场行为出发分析数据，重点是价格变化背后的结构性原因。',
      '例如研究一种市场规则变化后，参与者行为和收益结构究竟怎么变了。'
    );
    if (r.indexOf('portfolio scientist') >= 0) return leafDetail(
      '更偏围绕投资组合做配置和风险平衡，重点是收益、相关性、波动和长期稳定性。',
      '例如设计一套组合分配方案，在收益目标和回撤约束之间找到更可接受的平衡。'
    );
    if (r.indexOf('actuarial analyst') >= 0) return leafDetail(
      '更偏围绕保险和长期风险做建模，重点是赔付概率、风险定价和长期财务稳健性。',
      '例如根据历史理赔数据调整定价和准备金假设，让产品更稳健。'
    );
    return null;
  },
  career_robotics_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('mechatronics') >= 0) return leafDetail(
      '更偏把机械结构、传感器、执行器和控制系统整合成一台真的能动的设备。',
      '例如把机械臂、驱动、电机和控制板连成一套能稳定完成动作的原型系统。'
    );
    if (r.indexOf('automation') >= 0 || r.indexOf('industrial robotics') >= 0) return leafDetail(
      '更偏让机器人或设备接进实际生产流程，重点是重复任务自动化、稳定执行和现场联调。',
      '例如让机器人在产线里稳定完成搬运、抓取或装配，减少人工反复介入。'
    );
    if (r.indexOf('field robotics') >= 0) return leafDetail(
      '更偏让机器人在户外、工地、农业或巡检等非理想环境里工作，重点是可靠性和环境适应能力。',
      '例如让一台巡检机器人在复杂地形里持续运行，而不是只在实验室里表现好。'
    );
    if (r.indexOf('motion planning') >= 0 || r.indexOf('path planning') >= 0) return leafDetail(
      '更偏给机器人规划从当前位置到目标位置的动作路径，重点是避障、平滑性和可执行性。',
      '例如让机械臂或移动机器人在拥挤环境里仍能找到可安全执行的动作轨迹。'
    );
    if (r.indexOf('uav') >= 0 || r.indexOf('aerial robotics') >= 0) return leafDetail(
      '更偏做无人机和空中机器人，重点是飞行平台、任务执行和空中环境下的稳定性。',
      '例如让一台无人机完成巡检或航测任务，在风扰和复杂地形下依然保持可控。'
    );
    if (r.indexOf('marine robotics') >= 0) return leafDetail(
      '更偏做水下或海洋机器人，重点是通信受限、定位困难和复杂流体环境下的任务执行。',
      '例如让一台水下机器人完成巡检或探测任务，在低可见度环境里也能稳定工作。'
    );
    if (r.indexOf('swarm robotics') >= 0) return leafDetail(
      '更偏研究多机器人协同，让一组机器在没有强中心控制的情况下也能完成共同目标。',
      '例如让多台机器人协同覆盖一个区域，彼此分工又不互相干扰。'
    );
    if (r.indexOf('autonomy engineer') >= 0) return leafDetail(
      '更偏把感知、规划、控制和任务逻辑真正串起来，让系统具备更完整的自主能力。',
      '例如把一台机器人从“会动”推进到“能自己完成一段任务”。'
    );
    if (r.indexOf('robotics engineer') >= 0 || r.indexOf('robotics research engineer') >= 0) return leafDetail(
      '更偏把机器人系统真正做起来，日常会同时碰机械结构、感知、控制、集成和现场调试问题。',
      '例如把机械臂抓取、视觉识别和动作控制串起来，让它在真实任务里稳定完成一段流程。'
    );
    return null;
  },
  career_robot_learning: function(role) {
    var r = roleText(role);
    if (r.indexOf('imitation') >= 0 || r.indexOf('behavior cloning') >= 0) return leafDetail(
      '更偏让机器人从示范数据里学习动作，而不是每件事都靠手工规则来写。',
      '例如给机械臂录一批人类示范，让它逐步学会新抓取动作而不是重新手调控制器。'
    );
    if (r.indexOf('world model') >= 0) return leafDetail(
      '更偏让系统学会预测“如果这样做，接下来世界会怎样”，重点是未来状态建模和长期规划。',
      '例如让一个机器人先在内部模型里“想一遍”后果，再决定下一步动作。'
    );
    if (r.indexOf('language robotics') >= 0 || r.indexOf('vision-language-action') >= 0 || r.indexOf('robot instruction-following') >= 0 || r.indexOf('vla engineer') >= 0) return leafDetail(
      '更偏让机器人真正理解自然语言指令，并把语言、视觉和动作连成一条可执行链路。',
      '例如让机器人听懂“把桌上的红杯子放到右边架子上”，然后自己完成整段动作。'
    );
    if (r.indexOf('embodied llm') >= 0 || r.indexOf('embodied foundation model') >= 0 || r.indexOf('embodied ai') >= 0) return leafDetail(
      '更偏做具身智能模型，让系统不只会看和说，还能把感知、推理和动作结合起来解决真实任务。',
      '例如训练一个能看见环境、理解目标并执行动作的机器人系统，而不是单独优化某个模块。'
    );
    if (r.indexOf('applied scientist (robotics)') >= 0) return leafDetail(
      '更偏把机器人学习方法变成真实可用方案，重点是让学习方法在硬件和任务约束下真的落地。',
      '例如把一个学习方法接进机械臂系统，让它在真实抓取任务里稳定工作。'
    );
    if (r.indexOf('robotics ai researcher') >= 0) return leafDetail(
      '更偏在机器人场景里研究学习方法本身，重点是感知、控制和策略学习如何更好地结合。',
      '例如围绕机器人学习做实验，验证哪种数据、奖励或模型结构更值得继续投入。'
    );
    if (r.indexOf('robot learning engineer') >= 0 || r.indexOf('embodied systems research engineer') >= 0) return leafDetail(
      '更偏让机器人通过数据和学习获得技能，而不是只依赖手工规则和固定控制器。',
      '例如让机械臂通过示范学习或强化学习，逐渐学会更稳地抓取新的物体和完成新的动作。'
    );
    return null;
  },
  career_autonomous_driving: function(role) {
    var r = roleText(role);
    if (r.indexOf('av perception') >= 0) return leafDetail(
      '更偏让自动驾驶系统知道周围有什么，重点是车辆、行人、道路结构和动态目标的稳定识别。',
      '例如让系统在雨夜或复杂路口里仍能较稳识别关键目标和环境边界。'
    );
    if (r.indexOf('av planning') >= 0) return leafDetail(
      '更偏决定车下一步该怎么走，重点是行为规划、轨迹生成和在复杂交通规则下的取舍。',
      '例如让车在拥挤路口既不激进也不犹豫，能平稳完成变道、跟车和避让。'
    );
    if (r.indexOf('av controls') >= 0) return leafDetail(
      '更偏把上层规划变成真实可执行的车辆动作，重点是转向、制动、加速和乘坐平顺性。',
      '例如让车辆按照规划轨迹稳定执行，既不偏离也不出现让人难受的急刹和抖动。'
    );
    if (r.indexOf('simulation') >= 0) return leafDetail(
      '更偏在仿真环境里验证自动驾驶系统，重点是危险场景复现、覆盖度和发布前的可靠评估。',
      '例如把现实中难复现的危险场景搬进仿真，让系统上线前先经历足够多测试。'
    );
    if (r.indexOf('mobility systems') >= 0 || r.indexOf('transportation autonomy') >= 0 || r.indexOf('smart mobility') >= 0 || r.indexOf('intelligent mobility systems') >= 0) return leafDetail(
      '更偏从更大交通系统视角看自主移动，重点是整条出行链路、车路协同和系统级效率。',
      '例如围绕城市出行或车队调度场景设计自主能力，让系统不只单车聪明，还能整体更顺。'
    );
    if (r.indexOf('autonomous driving engineer') >= 0 || r.indexOf('robotics / autonomy engineer') >= 0) return leafDetail(
      '更偏做自动驾驶整条链路中的关键一段，把感知、规划、控制、仿真或验证真正做成可上车能力。',
      '例如为城市道路场景做规划或仿真验证，让系统在复杂交通流里更稳、更少犯错。'
    );
    return null;
  },
  career_perception_engineer: function(role) {
    var r = roleText(role);
    if (r.indexOf('slam') >= 0 || r.indexOf('localization') >= 0 || r.indexOf('mapping') >= 0) return leafDetail(
      '更偏让机器在陌生环境里一边建图一边定位，是机器人和空间计算里的经典底层能力。',
      '例如让清洁机器人、无人机或 AR 设备进入新环境后，快速建立地图并稳定知道自己在哪。'
    );
    if (r.indexOf('sensor fusion') >= 0 || r.indexOf('radar / lidar') >= 0) return leafDetail(
      '更偏把不同传感器的信息融合起来，让系统在遮挡、噪声或单一传感器失效时仍能稳定判断环境。',
      '例如把摄像头、雷达和其他传感器信息拼起来，让自动驾驶或机器人更少“看漏”。'
    );
    if (r.indexOf('3d perception') >= 0) return leafDetail(
      '更偏让系统理解三维空间中的物体、距离和结构，重点是点云、深度和三维场景表示。',
      '例如让机器人或车在三维空间里更准确识别障碍物和可通行区域。'
    );
    if (r.indexOf('visual navigation') >= 0) return leafDetail(
      '更偏依靠视觉信息完成导航，重点是根据摄像头看到的内容来决定下一步该往哪走。',
      '例如让无人机或机器人仅凭视觉在新环境里找到目标位置并一路避障过去。'
    );
    if (r.indexOf('spatial ai') >= 0 || r.indexOf('spatial perception') >= 0 || r.indexOf('geospatial robotics') >= 0) return leafDetail(
      '更偏理解空间关系和环境布局，让机器不仅知道目标在哪，还知道整个空间是怎么组织的。',
      '例如让设备理解一间房间或一段道路的整体布局，从而做出更稳的空间决策。'
    );
    if (r.indexOf('robotics perception') >= 0) return leafDetail(
      '更偏为机器人构建感知链路，把视觉和传感器输入变成可直接供规划和控制使用的环境表示。',
      '例如让机器人实时识别可抓取目标、障碍物和可行动区域，为后续动作提供输入。'
    );
    return null;
  },
  career_hri: function(role) {
    var r = roleText(role);
    if (r.indexOf('assistive') >= 0 || r.indexOf('rehabilitation') >= 0 || r.indexOf('clinical') >= 0) return leafDetail(
      '更偏让机器人在照护、康复或医疗场景里真正帮上人，重点是安全、易用和长期协作体验。',
      '例如让康复机器人在医院或家庭环境里更容易被患者和医护接受并长期使用。'
    );
    if (r.indexOf('cobotics') >= 0 || r.indexOf('interaction engineer') >= 0 || r.indexOf('robot product') >= 0 || r.indexOf('ux robotics') >= 0 || r.indexOf('robotics ux') >= 0) return leafDetail(
      '更偏研究人和机器人怎么一起高效工作，重点是交互提示、协作边界和人机配合感受。',
      '例如改一个协作机器人系统，让工人在同一工位里更自然地和它配合。'
    );
    if (r.indexOf('social robotics') >= 0) return leafDetail(
      '更偏让机器人在社交场景里表现得更自然，重点是语气、动作、反馈时机和人对机器的感受。',
      '例如设计一台服务机器人和人打招呼、回应和陪伴的方式，让它不那么“机械”。'
    );
    if (r.indexOf('hri researcher') >= 0) return leafDetail(
      '更偏研究人和机器人如何一起工作，把安全、信任、可理解性和协作体验做得更自然。',
      '例如观察人和机器人一起工作的流程，再反向改机器人的提示、动作和交互方式。'
    );
    return null;
  },
  career_or_scientist: function(role) {
    var r = roleText(role);
    if (r.indexOf('resource allocation') >= 0) return leafDetail(
      '更偏决定有限资源该分给谁、什么时候分、分多少，重点是把资源配置成可量化的优化问题。',
      '例如为广告库存、算力资源或配送人力做分配模型，让有限资源用得更值。'
    );
    if (r.indexOf('scheduling') >= 0) return leafDetail(
      '更偏安排任务、机器或人员在时间上的顺序，重点是冲突约束、优先级和整体效率。',
      '例如给工厂、仓库或客服排班，让任务按时完成同时减少资源空转。'
    );
    if (r.indexOf('supply chain') >= 0 || r.indexOf('logistics') >= 0 || r.indexOf('network optimization') >= 0) return leafDetail(
      '更偏优化物流和供应链网络，重点是路由、仓储、调度和成本时效之间的平衡。',
      '例如设计一条配送网络，让成本更低、时效更稳、峰值时更不容易爆仓。'
    );
    if (r.indexOf('revenue') >= 0 || r.indexOf('pricing') >= 0 || r.indexOf('marketplace') >= 0) return leafDetail(
      '更偏围绕价格、供需和平台规则做优化，让收入目标和用户体验之间达到更好平衡。',
      '例如给电商或出行平台设计定价和供需匹配方案，让系统整体效率更高。'
    );
    if (r.indexOf('industrial engineer') >= 0) return leafDetail(
      '更偏从整个流程角度优化生产和运营系统，重点是节拍、瓶颈、资源利用和整体效率。',
      '例如分析一条生产或服务流程，找出最拖后腿的环节并持续改进。'
    );
    if (r.indexOf('operations research analyst') >= 0 || r.indexOf('or scientist') >= 0 || r.indexOf('optimization consultant') >= 0 || r.indexOf('operations scientist') >= 0) return leafDetail(
      '更偏把调度、分配、路径和运营问题建模成可求解的优化问题，再把结果落成可执行方案。',
      '例如为配送、供应链或排班系统设计调度方案，在成本、时效和容量之间找到更优平衡。'
    );
    return null;
  },
  career_optimization: function(role) {
    var r = roleText(role);
    if (r.indexOf('stochastic') >= 0) return leafDetail(
      '更偏在不确定环境下做优化，重点是需求波动、随机噪声和决策风险都要一起纳入模型。',
      '例如为库存、调度或策略问题建一个随机优化模型，让方案不只在理想情况里有效。'
    );
    if (r.indexOf('variational') >= 0) return leafDetail(
      '更偏处理连续函数和变分问题，常见于成像、逆问题和需要借助函数空间表达的建模任务。',
      '例如通过变分方法恢复一张退化图像，或者求解一个受约束的连续优化问题。'
    );
    if (r.indexOf('numerical') >= 0 || r.indexOf('solver') >= 0 || r.indexOf('applied mathematician') >= 0) return leafDetail(
      '更偏围绕数值求解本身做工作，重点是收敛、稳定性、误差控制和大规模问题的实现效率。',
      '例如把一个复杂求解器做得更稳、更快，让它在更大规模问题上也能给出可信结果。'
    );
    if (r.indexOf('ml optimization') >= 0 || r.indexOf('training optimization') >= 0) return leafDetail(
      '更偏把优化方法直接用到机器学习训练里，重点是收敛速度、训练稳定性和算力利用效率。',
      '例如改一种训练优化算法，让大模型在同样资源下更快收敛到更好结果。'
    );
    if (r.indexOf('large-scale') >= 0) return leafDetail(
      '更偏处理规模非常大的优化问题，重点是如何把模型拆开、近似或并行，让它仍然算得动。',
      '例如给一个含海量变量的调度问题设计算法，让它在业务需要的时间内给出可执行方案。'
    );
    if (r.indexOf('optimization scientist') >= 0 || r.indexOf('optimization researcher') >= 0) return leafDetail(
      '更偏围绕“怎样更快更稳找到更优解”做工作，重点是求解方法、收敛表现、数值稳定性和工程实现。',
      '例如为训练优化、资源调度或复杂求解问题设计方法，让系统在更短时间内找到更好的结果。'
    );
    return null;
  },
  career_game_theory: function(role) {
    var r = roleText(role);
    if (r.indexOf('auction') >= 0 || r.indexOf('mechanism') >= 0) return leafDetail(
      '更偏设计规则，让不同参与者在竞争和博弈中仍然会做出系统整体更有利的选择。',
      '例如给广告竞价或资源分配系统设计拍卖机制，让效率和激励更合理。'
    );
    if (r.indexOf('marketplace') >= 0 || r.indexOf('platform strategy') >= 0) return leafDetail(
      '更偏研究平台里多方参与者怎么互动，重点是供需匹配、平台规则和长期生态平衡。',
      '例如分析一个交易平台的规则变化会不会让商家、用户和平台三方关系更稳定。'
    );
    if (r.indexOf('economic research') >= 0) return leafDetail(
      '更偏从经济学视角理解行为与机制，重点是规则变化会怎样影响参与者决策和系统结果。',
      '例如研究一种新定价或补贴规则上线后，各方行为会不会发生结构性变化。'
    );
    if (r.indexOf('quantitative strategist') >= 0) return leafDetail(
      '更偏把博弈、策略和数据分析结合起来，帮助系统在竞争和约束里找到更优行动方案。',
      '例如分析平台博弈格局，判断哪种策略调整更可能带来可持续收益。'
    );
    if (r.indexOf('game theory researcher') >= 0) return leafDetail(
      '更偏研究多方互动中的策略结构，重点是均衡、激励和规则设计本身。',
      '例如围绕一个多方竞争问题建立博弈模型，看什么规则会带来更稳定的结果。'
    );
    return null;
  },
  career_sci_computing: function(role) {
    var r = roleText(role);
    if (r.indexOf('scientific programmer') >= 0 || r.indexOf('research software engineer') >= 0) return leafDetail(
      '更偏把科研问题真正写成能跑、能复现、能长期维护的程序，而不是停留在纸面公式上。',
      '例如把一个物理或生物模型写成可复现实验的程序，让团队能持续比较不同方案。'
    );
    if (r.indexOf('hpc') >= 0) return leafDetail(
      '更偏在高性能计算环境里让大规模计算跑得更高效，重点是并行、资源调度和计算瓶颈。',
      '例如把一套大规模仿真或求解任务搬到集群上，让它比单机快得多还更稳定。'
    );
    if (r.indexOf('numerical methods') >= 0) return leafDetail(
      '更偏把数学问题转成稳定可算的数值算法，重点是误差、收敛和实现精度。',
      '例如为一个微分方程或优化问题设计数值方法，让结果又准又算得动。'
    );
    if (r.indexOf('computational scientist') >= 0 || r.indexOf('computational mathematician') >= 0) return leafDetail(
      '更偏用计算方法解决科学问题，重点是把模型、数据和数值方法真正接到一起。',
      '例如围绕一个科学问题做一整套计算实验，比较不同模型和参数假设会带来什么差异。'
    );
    if (r.indexOf('simulation') >= 0) return leafDetail(
      '更偏通过仿真理解系统行为，重点是模型假设、场景构造和结果是否能解释真实现象。',
      '例如构建一个复杂系统的仿真环境，提前观察不同策略可能带来的后果。'
    );
    if (r.indexOf('modeling scientist') >= 0) return leafDetail(
      '更偏把现实问题抽象成可计算模型，重点是模型假设是否合理、能否解释数据以及是否足够可用。',
      '例如把一个能源、物理或工程问题写成模型，再反复校验它和真实世界是否贴近。'
    );
    if (r.indexOf('uncertainty quantification') >= 0) return leafDetail(
      '更偏评估模型和仿真结果到底有多不确定，重点是误差来源、置信区间和结论可靠性。',
      '例如给一套仿真或预测结果补上不确定性分析，让团队知道哪些结论更值得信。'
    );
    return null;
  },
  career_cpu_architect: function(role) {
    var r = roleText(role);
    if (r.indexOf('microarchitecture') >= 0) return leafDetail(
      '更偏设计处理器内部执行细节，重点是流水线、乱序、缓存和关键路径上的性能取舍。',
      '例如调整缓存和执行单元布局，让某类典型负载在芯片上跑得更快。'
    );
    if (r.indexOf('performance architect') >= 0) return leafDetail(
      '更偏用真实工作负载衡量体系结构设计是否值得，重点是瓶颈分析、指标定义和性能权衡。',
      '例如跑一组典型模型或程序，判断下一代架构到底该把预算投到缓存还是互连。'
    );
    if (r.indexOf('memory architect') >= 0) return leafDetail(
      '更偏设计存储层次和数据移动路径，重点是缓存、带宽、延迟和内存一致性取舍。',
      '例如重新设计缓存和内存路径，让大模型推理时的数据搬运成本明显下降。'
    );
    if (r.indexOf('parallel') >= 0 || r.indexOf('heterogeneous') >= 0) return leafDetail(
      '更偏处理多核、多种计算单元协同的问题，重点是并行性利用、任务划分和跨设备调度。',
      '例如让 CPU、GPU 和加速器在同一系统里更合理分工，减少资源浪费。'
    );
    if (r.indexOf('computer architect') >= 0 || r.indexOf('cpu architect') >= 0 || r.indexOf('gpu architect') >= 0 || r.indexOf('processor architect') >= 0) return leafDetail(
      '更偏定义处理器和体系结构层面的关键设计，关注执行单元、存储层次、并行性和整体性能。',
      '例如围绕缓存、互连或执行流水线做架构设计，让芯片在典型负载下跑得更高效。'
    );
    return null;
  },
  career_hw_sw_codesign: function(role) {
    var r = roleText(role);
    if (r.indexOf('embedded systems architect') >= 0) return leafDetail(
      '更偏从系统层把嵌入式硬件、软件和接口一起规划清楚，让整台设备从一开始就更合理。',
      '例如为一款边缘设备定义整套硬件和软件架构，减少后期反复返工。'
    );
    if (r.indexOf('soc integration') >= 0) return leafDetail(
      '更偏把不同硬件模块整合成一颗可工作的 SoC，重点是接口、时序、联调和整体验证。',
      '例如把计算、存储和外设模块接成一个完整系统，让整颗芯片真正跑起来。'
    );
    if (r.indexOf('fpga-based') >= 0) return leafDetail(
      '更偏用 FPGA 快速验证系统方案，重点是原型搭建、接口联调和架构可行性验证。',
      '例如先在 FPGA 上验证一种新加速路径，确认收益后再考虑是否推进更重的实现。'
    );
    if (r.indexOf('accelerator systems') >= 0) return leafDetail(
      '更偏让加速器和软件栈真正协同工作，重点是驱动、运行时、编译和硬件执行链路的配合。',
      '例如把一个 AI 加速器从“硬件能跑”推进到“框架调用顺畅、性能稳定可复现”。'
    );
    if (r.indexOf('domain-specific architectures') >= 0) return leafDetail(
      '更偏围绕特定任务设计专门架构，重点是针对目标负载做最值得的专用优化。',
      '例如为推理、视频或稀疏计算场景设计专门计算路径，让系统效率明显高于通用方案。'
    );
    if (r.indexOf('systems optimization') >= 0) return leafDetail(
      '更偏从整套系统看瓶颈，而不是只看单一模块，重点是跨层找出真正限制性能和效率的地方。',
      '例如同时改数据流、运行时和硬件配置，让一个系统在端到端链路上明显提速。'
    );
    if (r.indexOf('runtime / compiler / hardware') >= 0) return leafDetail(
      '更偏同时改运行时、编译器和硬件接口，让模型和程序真正把底层硬件能力吃满。',
      '例如让一类算子从图优化到编译再到执行全链路都配合起来，跑出明显性能提升。'
    );
    if (r.indexOf('edge-cloud') >= 0) return leafDetail(
      '更偏把设备、边缘节点和云端能力串成一个系统，重点是协同、同步和分工策略。',
      '例如让现场设备和云端模型协同工作，把实时响应留在边缘、重计算放到云上。'
    );
    if (r.indexOf('sensor-compute') >= 0) return leafDetail(
      '更偏把传感器输入和计算链路一起设计，确保数据从采集到处理这条路径尽量高效和稳定。',
      '例如围绕相机或多传感器系统设计采集与计算协同链路，让延迟和功耗都更可控。'
    );
    if (r.indexOf('hw/sw co-design') >= 0) return leafDetail(
      '更偏同时理解硬件和软件瓶颈，跨层协同设计，让整套系统而不是单一模块跑得更好。',
      '例如同时改编译器、运行时和硬件映射策略，让一个模型或系统在端到端链路上明显提速。'
    );
    return null;
  },
  career_academia: function(role) {
    var r = roleText(role);
    if (r.indexOf('phd researcher') >= 0) return leafDetail(
      '更偏在导师带领下围绕一个核心问题长期做研究，重点是学会提问题、做实验、写论文和形成自己的方法判断。',
      '例如用几年时间围绕一个方向持续做实验和写作，最后形成一条完整的博士研究主线。'
    );
    if (r.indexOf('postdoctoral') >= 0) return leafDetail(
      '更偏在博士之后继续做更独立的研究，重点是快速产出、拓展研究方向和积累学术独立性。',
      '例如在一个成熟课题组里快速推进一个新方向，为以后独立带组或转工业研究做准备。'
    );
    if (r.indexOf('assistant professor') >= 0) return leafDetail(
      '更偏独立提出研究问题、带学生、申请经费和持续建设一条长期研究路线。',
      '例如围绕一个核心研究方向连续几年产出论文、课程和公开项目，慢慢形成自己的学术影响力。'
    );
    if (r.indexOf('principal investigator') >= 0) return leafDetail(
      '更偏负责整条研究路线和团队方向，重点是选题、资源争取、团队组织和长期影响力建设。',
      '例如带一个研究团队围绕核心主题长期产出，让方向从个人兴趣成长为一条成熟研究线。'
    );
    if (r.indexOf('academic research scientist') >= 0 || r.indexOf('research fellow') >= 0) return leafDetail(
      '更偏围绕长期研究问题做系统工作，在论文、项目和合作之间持续推动一条方向前进。',
      '例如在研究机构持续做高质量项目，让一个方向从概念验证走向稳定积累。'
    );
    return null;
  },
  career_tech_pm: function(role) {
    var r = roleText(role);
    if (r.indexOf('ai product manager') >= 0) return leafDetail(
      '更偏把 AI 能力变成用户真正会用的产品，重点是能力边界、体验设计和和研发的落地节奏。',
      '例如围绕一个 AI 助手功能排优先级，让模型能力和真实用户场景真正对上。'
    );
    if (r.indexOf('ml product manager') >= 0) return leafDetail(
      '更偏围绕模型和数据能力定义产品路线，重点是把模型效果和业务目标真正绑到一起。',
      '例如为推荐、审核或搜索模型设计产品目标，让研发和业务都围着同一结果推进。'
    );
    if (r.indexOf('platform product manager') >= 0 || r.indexOf('developer product manager') >= 0) return leafDetail(
      '更偏做平台型产品，把复杂技术能力包装成别人愿意接入、愿意持续使用的平台功能。',
      '例如把一个内部平台能力改造成更好接入的产品，让更多团队愿意迁移过来用。'
    );
    if (r.indexOf('research product lead') >= 0) return leafDetail(
      '更偏把研究和产品路线接起来，重点是判断哪些研究方向最值得变成真正的产品能力。',
      '例如在前沿研究和业务需求之间搭桥，让一个研究原型更快长成上线功能。'
    );
    if (r.indexOf('technical product manager') >= 0) return leafDetail(
      '更偏把技术能力、用户需求和研发节奏串起来，负责定方向、拆目标、排优先级并推动落地。',
      '例如围绕一个 AI 平台能力协调算法、后端和前端团队，把原型真正做成可上线的产品功能。'
    );
    return null;
  }
};

var CAREER_LEAF_ROLE_PATTERNS = [
  {
    re: /\b(Machine Learning Engineer|Applied Machine Learning Engineer|AI Engineer|Modeling Engineer|Algorithm Engineer|Predictive Modeling Engineer|Applied Deep Learning Engineer|Model Training Engineer)\b/i,
    intro: '更偏把机器学习方法做成真正可上线的能力，常见工作是数据准备、训练对比、效果评估和上线迭代。',
    example: '例如围绕推荐、广告或风控做一个预测模型，从数据清洗到 A/B 实验都亲自推进。'
  },
  {
    re: /\b(Applied Scientist|Machine Learning Scientist|Applied ML Scientist|Applied Scientist \\(NLP\\)|Applied Scientist \\(CV\\)|Applied Scientist \\(RecSys\\)|Applied Scientist \\(GenAI\\))\b/i,
    intro: '更偏把前沿方法快速改造成能解决真实问题的方案，重点是方法有效、实验可信、结果能落地。',
    example: '例如把一个学界新方法接进搜索、内容理解或推荐场景，验证它是否真能提升线上指标。'
  },
  {
    re: /\b(Foundation Model Engineer|Pretraining Engineer|Model Adaptation Engineer|Multimodal Foundation Model Engineer|VLM Engineer)\b/i,
    intro: '更偏做基础模型、预训练和模型适配，重点是数据、训练策略、模型能力和后训练表现。',
    example: '例如围绕一个基础模型做预训练或适配，让它在代码、多模态或长上下文任务里更强。'
  },
  {
    re: /RAG/i,
    intro: '更偏围绕检索增强生成搭知识系统，把文档切分、索引、检索、重排和引用链路真正打通。',
    example: '例如给法务或客服团队做一个必须附原文出处的知识问答助手。'
  },
  {
    re: /Prompt/i,
    intro: '更偏把提示词、工具调用和工作流设计成稳定可复用的方法，让模型在真实流程里更听话。',
    example: '例如把一个多步骤助手拆成清晰的提示模板和工具链，减少胡乱输出。'
  },
  {
    re: /Safety|Alignment/i,
    intro: '更偏做模型对齐和防护，让系统在真实流量下更安全、边界更清楚、可控性更强。',
    example: '例如持续做红队测试并补策略，让一个通用模型不容易被越狱或诱导。'
  },
  {
    re: /\b(Search|Retrieval|Ranking|Recommendation|Personalization|Relevance|Growth ML)\b/i,
    intro: '更偏让系统更懂用户意图，核心是召回、排序、个性化和相关性之间的平衡。',
    example: '例如优化搜索或推荐链路，让用户更快看到真正想点开的结果。'
  },
  {
    re: /Research Engineer/i,
    intro: '更偏站在研究和工程的交界面，把前沿方法做成能持续实验、稳定迭代的研究系统。',
    example: '例如把一个新方法从论文原型扩成可重复实验的训练流水线，再持续验证它在更多场景下是否成立。'
  },
  {
    re: /Application Engineer/i,
    intro: '更偏把模型或平台能力接进真实业务流程，核心是把“能演示”变成“能长期用”。',
    example: '例如把模型接进客服、办公或搜索链路里，让它真的服务一线场景而不是停留在 demo。'
  },
  {
    re: /Post-Training|Preference Optimization/i,
    intro: '更偏做模型后训练和偏好优化，让模型在真实任务里更听话、更稳定、更符合人类预期。',
    example: '例如围绕一批高质量偏好数据做后训练，让模型回答更稳、更安全、也更贴近用户需求。'
  },
  {
    re: /ASR|Speech|TTS|Voice|Audio|Linguist/i,
    intro: '更偏处理语音和语言信号，让系统在复杂环境下也能听得清、说得顺、理解得准。',
    example: '例如优化车载或客服语音系统，让嘈杂场景下的识别与回答更稳定。'
  },
  {
    re: /\b(NLP Engineer|NLP Scientist|Text Mining Engineer|Conversational AI Engineer|Information Extraction Engineer|Spoken Language Understanding Engineer)\b/i,
    intro: '更偏把文本理解、问答、信息抽取或对话系统真正做进产品，重点是语言理解准确、链路稳定、体验自然。',
    example: '例如给客服、搜索或企业知识库做语言系统，让用户提问后更快得到可靠答案。'
  },
  {
    re: /Vision|Imaging|Video|Perception|OCR|Document/i,
    intro: '更偏把视觉或文档理解模型落到真实任务里，重点是识别、理解、定位和上线表现。',
    example: '例如做影像分析、视频理解或文档抽取，让原本人工处理的流程更快更稳。'
  },
  {
    re: /\b(CV Scientist)\b/i,
    intro: '更偏围绕视觉方法做实验和模型迭代，重点是验证新方法能否在真实图像或视频任务里更稳更强。',
    example: '例如围绕检测、分割或视觉理解任务做一组实验，找到更适合目标场景的模型方案。'
  },
  {
    re: /3D|SLAM|Localization|Mapping|Spatial|Navigation/i,
    intro: '更偏解决空间理解和定位问题，让系统知道自己在哪里、周围是什么、该怎么走。',
    example: '例如为机器人或 AR 设备做建图定位，让它在新环境里也能稳定工作。'
  },
  {
    re: /Generative|Diffusion|Media|Artist|Creative|Controllable/i,
    intro: '更偏把生成模型做成创作工具或生产能力，核心是质量、可控性和使用体验。',
    example: '例如为营销、设计或视频团队做一套能快速出内容的生成式工作流。'
  },
  {
    re: /RL|Policy|Decision|Planning|MARL|Simulation/i,
    intro: '更偏处理长期反馈下的策略学习和决策问题，让系统不只会判断，还会连续行动。',
    example: '例如让一个智能体在多步任务里自己规划、尝试、纠错并逐步完成目标。'
  },
  {
    re: /Inference|Serving|Acceleration|Quantization|Compression|Runtime/i,
    intro: '更偏把模型推理做得更快更稳更省，常见工作是性能优化、量化、批处理和部署细节。',
    example: '例如把线上大模型服务延迟压下来，让同样的硬件预算服务更多请求。'
  },
  {
    re: /\b(Efficient ML Engineer)\b/i,
    intro: '更偏在训练和推理两端一起做效率优化，让模型在同样资源下跑得更快、更稳、更省钱。',
    example: '例如同时调整模型结构、并行方式和运行参数，让一套模型服务成本明显下降。'
  },
  {
    re: /Systems|Infrastructure|Platform|Reliability|DevOps|Cloud|Storage/i,
    intro: '更偏把底层平台做稳，让训练、推理或业务系统在大规模场景下也可靠运行。',
    example: '例如搭一套高可用平台，让系统在高峰流量下还能保持稳定和可观测。'
  },
  {
    re: /Compiler|Kernel|Static Analysis|Toolchain|Verification/i,
    intro: '更偏在编译器、工具链和验证层面做优化，让上层代码和底层硬件配合得更好。',
    example: '例如为常见算子做编译或验证优化，把性能和正确性都往上推一截。'
  },
  {
    re: /\b(Security Engineer|Cybersecurity Engineer|Product Security Engineer|Threat Detection Engineer|Network Security Engineer|Incident Response Engineer|Offensive Security Engineer|Cryptography Engineer|Privacy Engineer|Data Privacy Engineer|Confidential Computing Engineer)\b/i,
    intro: '更偏围绕攻击面、风险链路和防护机制做工作，让系统、数据和模型在真实环境里更不容易出事。',
    example: '例如为平台补检测与响应链路，或者围绕隐私保护与加密方案做落地，让高风险场景更可控。'
  },
  {
    re: /\b(UX Engineer|Product Designer \\(technical\\)|Interaction Designer|Human Factors Engineer|Accessibility Engineer|Inclusive Design Specialist|AI Interaction Designer)\b/i,
    intro: '更偏把复杂能力做成更好理解、更顺手、更愿意长期使用的交互和体验。',
    example: '例如观察用户如何使用一个 AI 功能，再重构流程和界面，让它更容易理解也更敢用。'
  },
  {
    re: /\b(Database Engineer|Database Administrator|Query Engine Engineer|Data Management Engineer|Stream Processing Engineer)\b/i,
    intro: '更偏让数据存储、查询和处理链路更稳更快，核心是系统可靠性、查询效率和数据一致性。',
    example: '例如为数据库或流式处理系统做结构和性能优化，让业务在更大数据量下也能稳定运行。'
  },
  {
    re: /Hardware|NPU|Accelerator|SoC|ASIC|RTL|FPGA|Microarchitecture|Architect/i,
    intro: '更偏在硬件或架构层决定系统怎么实现，核心是数据流、带宽、功耗和性能权衡。',
    example: '例如为 AI 芯片或 SoC 设计更高效的执行路径，让关键模型跑得更快更省电。'
  },
  {
    re: /\b(VLSI Engineer|Physical Design Engineer|Digital IC Engineer|Front-End Design Engineer|DFT Engineer|EDA Engineer|CAD Engineer)\b/i,
    intro: '更偏把芯片设计从逻辑方案推进到可验证、可实现、可流片的工程阶段，重点是时序、布线、验证和工具链。',
    example: '例如负责一个芯片模块从 RTL 到验证再到物理实现的某一段，让它真正满足功耗和时序要求。'
  },
  {
    re: /Embedded|Firmware|Driver|Bring-Up|Device/i,
    intro: '更偏在资源受限设备上把功能稳定做出来，处理实时性、驱动、功耗和硬件联调。',
    example: '例如给边缘设备或传感器平台写固件，让它在真实场景里可靠持续工作。'
  },
  {
    re: /\b(IoT Engineer|BSP Engineer)\b/i,
    intro: '更偏把设备、系统和网络真正接起来，让硬件在现场环境里稳定通信、稳定启动、稳定运行。',
    example: '例如为一批边缘设备做底层适配和接入，让它们能稳定地把数据送上云端并长期在线。'
  },
  {
    re: /Wireless|Telecom|Communication|RF|Baseband|RAN/i,
    intro: '更偏把通信链路或协议做扎实，让信息在真实信道和设备环境下稳定传输。',
    example: '例如为 5G/6G 或无线系统做链路仿真和算法优化，提升覆盖或吞吐表现。'
  },
  {
    re: /\b(Signal Processing Engineer|ISP Engineer|Camera Algorithm Engineer|Acoustic Signal Processing Engineer|Statistical Signal Processing Scientist|Sensor Fusion Engineer|Radar \/ Sensor Algorithm Engineer)\b/i,
    intro: '更偏从传感器或连续信号里提取稳定有用的信息，让图像、声音或雷达数据更适合后续决策。',
    example: '例如优化相机、音频或传感器链路，让系统在噪声更大的环境里仍能稳定识别。'
  },
  {
    re: /\b(5G \/ 6G Engineer|Network Optimization Engineer|Channel Coding Engineer)\b/i,
    intro: '更偏围绕新一代通信系统做链路、编码、网络优化和协议实现，让无线网络在真实约束下更强。',
    example: '例如为 5G/6G 场景做信道编码或网络优化，让边缘场景下的吞吐和覆盖表现更稳。'
  },
  {
    re: /Control|MPC|Estimation|Navigation/i,
    intro: '更偏设计让系统稳定运行的控制与估计链路，核心是反馈、鲁棒性和实时效果。',
    example: '例如给无人机、车或机械系统设计控制器，让它在扰动下也能稳住。'
  },
  {
    re: /Data Scientist|Statistician|Biostatistician|Analyst|Econometrician|Methodologist/i,
    intro: '更偏用数据和统计方法支持判断，核心是建模、分析和把结论说清楚。',
    example: '例如分析新功能上线后的效果，判断变化到底来自策略本身还是其他因素。'
  },
  {
    re: /\b(Analytics Scientist|Predictive Modeler|Statistical Modeler|Forecasting Scientist)\b/i,
    intro: '更偏围绕预测、解释和趋势判断做数据建模，让团队能更早看见风险、机会和变化方向。',
    example: '例如给销售、供应链或用户增长做预测模型，让团队更早做出资源安排。'
  },
  {
    re: /\b(Experimentation Scientist|A\/B Testing Scientist|Evaluation Scientist|Growth Scientist)\b/i,
    intro: '更偏通过实验和评估判断一个策略到底有没有效果，重点是实验设计、统计检验和结果归因。',
    example: '例如为一个新推荐策略设计 A/B 实验，判断它是否真的提升了留存、转化或收入。'
  },
  {
    re: /Data Engineer|ETL|Pipeline|Warehouse|Governance|Quality/i,
    intro: '更偏把数据链路做稳做清楚，让分析、实验和模型不再被脏数据或坏链路拖住。',
    example: '例如把埋点、数仓和特征链路串起来，让业务每天都能拿到可信的数据。'
  },
  {
    re: /MLOps|Monitoring|Deployment|Feature Platform|Operations/i,
    intro: '更偏把模型上线、监控和迭代流程做成稳定工程系统，让生产 ML 更可控。',
    example: '例如给模型平台补回滚、监控和实验跟踪，让线上问题更早暴露也更好处理。'
  },
  {
    re: /\b(Production ML Engineer|ML Evaluation Engineer)\b/i,
    intro: '更偏让模型在生产环境里长期稳定运转，既关心上线与监控，也关心评测、回归和质量守门。',
    example: '例如围绕一个线上模型建立发布、评测和回滚流程，让每次更新都更可控。'
  },
  {
    re: /\b(Bioinformatician|Computational Biologist)\b/i,
    intro: '更偏把数据科学方法用到生物和医学问题里，核心是把复杂实验数据转成可解释的结论。',
    example: '例如分析基因、单细胞或临床数据，帮助研究团队理解疾病机制或筛选更有价值的候选方向。'
  },
  {
    re: /Quant|Risk|Pricing|Revenue|Marketplace|Actuarial|Financial Economist|Portfolio Scientist/i,
    intro: '更偏用严谨模型处理高不确定性问题，把收益、风险和执行限制一起纳入考虑。',
    example: '例如为市场、风控或定价系统设计模型，在不确定环境下做更稳的决策。'
  },
  {
    re: /Robotics|Robot|AV|UAV|Mobility|Autonomy|HRI|Cobotics|Mechatronics|Automation|Embodied|VLA/i,
    intro: '更偏让机器人或自主系统真的在物理世界里工作，日常会碰感知、控制、规划和联调。',
    example: '例如把机器人或自动驾驶系统的一条关键链路做稳，让它在真实场景里更可用。'
  },
  {
    re: /\b(OR Scientist|Optimization Consultant|Scheduling Scientist|Logistics Scientist|Industrial Engineer)\b/i,
    intro: '更偏把运营和资源问题建成可求解的模型，再把求出来的方案变成真实流程里的动作安排。',
    example: '例如给配送、仓储、排班或供应链系统设计方案，让成本、时效和资源利用率同时更优。'
  },
  {
    re: /\b(Optimization Scientist|ML Optimization Engineer|Training Optimization Engineer|Numerical Optimization Scientist|Large-Scale Optimization Engineer|Solver Engineer|Applied Mathematician)\b/i,
    intro: '更偏围绕“怎样更快更稳找到更优解”做工作，重点是求解方法、收敛表现、数值稳定性和工程实现。',
    example: '例如为训练优化、资源调度或复杂求解问题设计方法，让系统在更短时间内找到更好的结果。'
  },
  {
    re: /Professor|Research Scientist|Researcher|Research Fellow|Postdoctoral/i,
    intro: '更偏自己定义问题、做实验或理论验证，用长期研究推进一个方向的边界。',
    example: '例如围绕一个核心问题持续几年做研究，把结论沉淀成论文、报告或公开系统。'
  },
  {
    re: /Manager|Lead/i,
    intro: '更偏把技术、产品和团队节奏拉到一起，把能力真正变成可交付的路线和结果。',
    example: '例如围绕一个新方向组织跨团队协作，让研究原型真正变成能上线的产品能力。'
  }
];

function getCareerLeafRolePattern(role) {
  return CAREER_LEAF_ROLE_PATTERNS.find(function(item) {
    return item.re.test(role);
  }) || null;
}

function getCareerLeafRoleDetail(role, ck) {
  var career = CAREERS[ck] || {};
  var workParts = getCareerWorkParts(career.work);
  var override = CAREER_LEAF_ROLE_OVERRIDES[role] || {};
  var familyBuilder = CAREER_LEAF_ROLE_BUILDERS[ck];
  var familySpecific = familyBuilder ? familyBuilder(role) : null;
  var pattern = getCareerLeafRolePattern(role);
  var familyFallback = CAREER_LEAF_FAMILY_FALLBACKS[ck] || {};
  var intro = override.intro
    || (familySpecific && familySpecific.intro)
    || (pattern && pattern.intro)
    || familyFallback.intro
    || ('这是“'+(career.name || '该职业族')+'”下面更具体的岗位叶子，通常会把这条路线里的关键方法真正做成可复用的成果。');
  var example = override.example
    || (familySpecific && familySpecific.example)
    || (pattern && pattern.example)
    || familyFallback.example
    || workParts.example
    || '例如把一个研究或工程原型打磨到真实可用，真正对用户、指标或实验结果负责。';
  return {
    role: role,
    familyKey: ck,
    familyName: career.name || 'Career Track',
    familyEnglish: career.en || '',
    intro: ensureSentence(intro),
    example: ensureSentence(example)
  };
}

function renderCareerLeafDetailCard(role, ck, options) {
  var opts = options || {};
  var detail = getCareerLeafRoleDetail(role, ck);
  var showFamily = opts.showFamily !== false;
  var familyLine = showFamily ? '<div class="career-leaf-family">'+escapeHtml(detail.familyName)+'</div>' : '';
  return '<article class="career-leaf-card">'
    + '<div class="career-leaf-card-head">'
    +   '<div class="career-leaf-card-title-wrap">'
    +     '<div class="career-leaf-card-name">'+escapeHtml(role)+'</div>'
    +     familyLine
    +   '</div>'
    + '</div>'
    + '<div class="career-leaf-card-copy"><div class="career-leaf-card-label">做什么</div><div class="career-leaf-card-body">'+escapeHtml(detail.intro)+'</div></div>'
    + '<div class="career-leaf-card-copy"><div class="career-leaf-card-label">例子</div><div class="career-leaf-card-body">'+escapeHtml(detail.example)+'</div></div>'
    + '</article>';
}

function getRankedCareerLeafEntries(options) {
  var opts = options || {};
  var familyKeys = opts.familyKeys || null;
  var includeBase = opts.includeBase !== false;
  var scoreMap = getCareerLeafScores({includeBase: includeBase});
  var entries = Object.keys(CAREER_LEAF_FAMILY_BY_ROLE).map(function(role) {
    return {
      role: role,
      familyKey: CAREER_LEAF_FAMILY_BY_ROLE[role],
      score: scoreMap[role] || 0
    };
  }).filter(function(entry) {
    return !familyKeys || familyKeys.indexOf(entry.familyKey) >= 0;
  }).sort(function(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.role.localeCompare(b.role);
  });
  if (opts.limit) entries = entries.slice(0, opts.limit);
  return entries;
}

function renderCareerLeafDetailGrid(ck, options) {
  var opts = options || {};
  var entries = getRankedCareerLeafEntries({
    familyKeys: [ck],
    includeBase: opts.includeBase !== false
  });
  if (opts.limit) entries = entries.slice(0, opts.limit);
  if (!entries.length) {
    return '<div class="career-leaf-empty">这个职业族的具体岗位正在整理中。</div>';
  }
  return '<div class="career-leaf-detail-grid">'
    + entries.map(function(entry) {
      return renderCareerLeafDetailCard(entry.role, entry.familyKey, {showFamily:false});
    }).join('')
    + '</div>';
}

function renderInfoBenchmarkChips(ids) {
  return (ids || []).map(function(id) {
    var bench = CAREER_BENCHMARKS[id];
    if (!bench) return '';
    return '<span class="info-benchmark-chip"><strong>'+bench.short+'</strong><span>'+bench.pay+' · '+bench.outlook+'</span></span>';
  }).join('');
}

function renderInfoSectionHeader(cfg) {
  var out = '<div class="info-section-head">';
  out += '<div class="info-section-kicker">'+cfg.kicker+'</div>';
  out += '<div class="info-section-title-row">';
  out += '<div class="info-section-title"'+(cfg.titleStyle ? ' style="'+cfg.titleStyle+'"' : '')+'>'+cfg.title+'</div>';
  out += '<span class="info-section-count">'+cfg.countText+'</span>';
  out += '</div>';
  if (cfg.desc) out += '<div class="info-section-desc">'+cfg.desc+'</div>';
  if (cfg.benchmarks && cfg.benchmarks.length) {
    out += '<div class="info-section-benchmarks">'+renderInfoBenchmarkChips(cfg.benchmarks)+'</div>';
  }
  out += '</div>';
  return out;
}

// ── DIRECTIONS INFO PAGE ──
function buildDirectionsInfoPage() {
  var el = document.getElementById('dirPageContent');
  if (!el) return;
  var domColors = {ai:'var(--ai-color)',cs:'var(--cs-color)',ds:'var(--ds-color)',
                   rb:'var(--rb-color)',or:'var(--or-color)',ee:'var(--ee-color)',ce:'#818cf8'};
  var domLabels = {ai:'AI / ML',cs:'CS',ds:'DS / Stats',rb:'Robotics',or:'Math / OR',ee:'ECE / EE',ce:'CE'};
  var byDomain = {};
  Object.keys(DIRS).forEach(function(k) {
    var d = DIRS[k];
    if (!byDomain[d.domain]) byDomain[d.domain] = [];
    byDomain[d.domain].push({key:k, dir:d});
  });
  var out = '<div class="info-source-banner">'
    + '<div class="info-source-eyebrow">Reference Notes</div>'
    + '<div class="info-source-body"><strong>学什么</strong>来自每个方向的核心问题和训练重点；<strong>典型项目</strong>来自该方向常见的工程或研究任务；<strong>参考来源</strong>优先放高校课程、官方文档、代表论文和项目主页，方便你继续深挖。</div>'
    + '<div class="info-source-body">方向图谱更偏“判断你会长期投入什么问题”，所以这些来源是入门与延伸阅读，不是唯一学习路径。</div>'
    + '</div>';
  ['ai','cs','ee','ce','ds','rb','or'].forEach(function(dom) {
    var dirs = byDomain[dom] || [];
    var color = domColors[dom] || 'var(--accent)';
    var label = domLabels[dom] || dom;
    out += '<section class="info-section">';
    out += renderInfoSectionHeader({
      kicker: 'Direction Cluster',
      title: label,
      titleStyle: 'color:'+color,
      countText: dirs.length+' 个方向',
      desc: DIR_SECTION_META[dom] || ''
    });
    out += '<div class="dir-info-grid">';
    dirs.forEach(function(item) {
      var learn = shortenText(getDirectionLearnText(item.key), 124);
      var project = shortenText(getDirectionProjectText(item.key), 124);
      var toolChips = getDirectionTools(item.key, 4);
      var sourceLinks = renderDirectionSourceLinks(item.key, 'dic-source-link');
      out += '<div class="dir-info-card clickable" onclick="openDirModal(\''+item.key+'\')">';
      out += '<div class="dic-top"><div class="dic-domain" style="color:'+color+'">'+label+'</div><div class="card-open-cue">详情 →</div></div>';
      out += '<div class="dic-name">'+item.dir.name+'</div>';
      if (item.dir.en) out += '<div class="dic-en">'+item.dir.en+'</div>';
      out += '<div class="dic-copy-grid">';
      out += '<div class="dic-copy"><div class="dic-copy-label">学什么</div><div class="dic-copy-body">'+escapeHtml(learn)+'</div></div>';
      out += '<div class="dic-copy"><div class="dic-copy-label">典型项目</div><div class="dic-copy-body">'+escapeHtml(project)+'</div></div>';
      out += '</div>';
      if (toolChips.length) {
        out += '<div class="dic-tags">';
        toolChips.forEach(function(chip) {
          out += '<span class="dic-tag">'+escapeHtml(chip)+'</span>';
        });
        out += '</div>';
      }
      if (sourceLinks) out += '<div class="dic-sources">'+sourceLinks+'</div>';
      out += '<div class="dic-footer"><span>展开完整方向页</span><span>→</span></div>';
      out += '</div>';
    });
    out += '</div></section>';
  });
  el.innerHTML = out;
}

// ── CAREERS INFO PAGE ──
function buildCareersInfoPage() {
  var el = document.getElementById('careerPageContent');
  if (!el) return;
  var out = '<div class="info-source-banner">'
    + '<div class="info-source-eyebrow">Data Notes</div>'
    + '<div class="info-source-body"><strong>美国基准</strong>采用美国劳工统计局 Occupational Outlook Handbook 的 May 2024 中位年薪与 2024-2034 就业增速；<strong>中国参考</strong>采用公开薪资页或近期岗位页面，帮助你判断本地市场的大致量级。</div>'
    + '<div class="info-source-body">'+CAREER_BLS_NOTE+' '+CAREER_CN_NOTE+'</div>'
    + '<a class="info-source-link" href="https://www.bls.gov/ooh/" target="_blank" rel="noreferrer">查看 BLS Occupational Outlook Handbook →</a>'
    + '</div>';
  Object.keys(CAREER_INFO_GROUPS).forEach(function(gname) {
    var keys = CAREER_INFO_GROUPS[gname];
    var meta = CAREER_SECTION_META[gname] || {};
    var leafTotal = keys.reduce(function(sum, ck) {
      return sum + getCareerLeafRoles(ck).length;
    }, 0);
    out += '<section class="info-section">';
    out += renderInfoSectionHeader({
      kicker: 'Career Cluster',
      title: gname,
      countText: keys.length+' 个职业族 · '+leafTotal+' 个具体岗位',
      desc: meta.summary || '',
      benchmarks: meta.benchmarks || []
    });
    out += '<div class="career-info-grid">';
    keys.forEach(function(ck) {
      var c = CAREERS[ck];
      if (!c) return;
      var workParts = getCareerWorkParts(c.work);
      var refs = getCareerSalaryReference(ck);
      var bench = refs.us;
      var china = refs.cn;
      var leafCount = getCareerLeafRoles(ck).length;
      out += '<div class="career-info-card clickable" onclick="openCareerModal(\''+ck+'\')">';
      out += '<div class="cic-head">';
      out += '<div class="cic-title-wrap">';
      out += '<div class="cic-name">'+(c.icon||'')+' '+c.name+'</div>';
      out += '<div class="cic-en">'+(c.en || '')+'</div>';
      out += '</div>';
      out += '<div class="card-open-cue">详情 →</div>';
      out += '</div>';
      out += '<div class="cic-copy-grid">';
      out += '<div class="cic-copy"><div class="cic-copy-label">做什么</div><div class="cic-copy-body">'+shortenText(workParts.intro || c.name, 120)+'</div></div>';
      out += '<div class="cic-copy"><div class="cic-copy-label">例子</div><div class="cic-copy-body">'+shortenText(workParts.example || c.work, 132)+'</div></div>';
      out += '</div>';
      if (leafCount) {
        out += '<div class="cic-leaf-row">';
        out += '<div class="cic-leaf-head"><div class="cic-leaf-label">树上对应岗位</div><div class="cic-leaf-count">'+leafCount+' 个具体岗位</div></div>';
        out += '<div class="cic-leaf-preview">'+renderCareerLeafPreview(ck, 5, 'career-leaf-chip', true)+'</div>';
        out += '</div>';
      }
      out += '<div class="cic-metrics">';
      out += '<div class="cic-stat cic-stat-primary"><span class="cic-stat-label">美国基准</span><strong class="cic-stat-value">'+(bench ? bench.pay : '待补充')+'</strong></div>';
      out += '<div class="cic-stat"><span class="cic-stat-label">中国参考</span><strong class="cic-stat-value">'+(china ? china.pay : '待补充')+'</strong></div>';
      if (bench) {
        out += '<div class="cic-stat"><span class="cic-stat-label">官方增速</span><strong class="cic-stat-value">'+bench.outlook+'</strong></div>';
      } else {
        out += '<div class="cic-stat"><span class="cic-stat-label">补充说明</span><strong class="cic-stat-value">建议看完整介绍</strong></div>';
      }
      out += '</div>';
      out += '<div class="cic-anchor">'+getCareerSalaryAnchorText(ck)+'</div>';
      out += '<div class="cic-sources">'+renderCareerSourceLinks(ck, 'cic-source-link')+'</div>';
      out += '<div class="cic-footer"><span>查看完整介绍</span><span>→</span></div>';
      out += '</div>';
    });
    out += '</div></section>';
  });
  el.innerHTML = out;
}

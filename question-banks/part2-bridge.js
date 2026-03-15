window.STAGE2_TEMPLATES = [
  {
    id: 's2_01',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果未来两三年主要在一种难题上持续打磨，你更愿意每天盯着哪类问题？',
    hint: '这一部分不再做“广撒网”，而是把你前面最像的 3-4 个方向放在一起比较，看你到底更愿意长期为哪一类难题付出。',
    optionMap: {
      ai: { t: '模型能力为什么会提升、会失真、会失效', sub: '更偏模型研究、表示、生成和多模态能力本身。', d: { repr: 1, llm: 1, vlm: 1, ml_theory: 1 }, domains: { ai: 3 } },
      cs: { t: '系统为什么在规模上来后变慢、变贵、变脆弱', sub: '更偏系统、分布式、数据库和基础设施。', d: { systems: 1, dist_sys: 1, db: 1, cloud: 1 }, domains: { cs: 3 } },
      ds: { t: '数据为什么会误导判断，怎样才能更可信', sub: '更偏统计、因果、实验和数据科学。', d: { stats: 1, causal: 1, ds_sci: 1, econom: 1 }, domains: { ds: 3, or: 0.5 } },
      robotics: { t: '机器怎样在真实环境里看懂、决策并动作', sub: '更偏机器人、感知、规划和自主系统。', d: { robotics: 1, autonomous: 1, perception: 1, motion: 1 }, domains: { robotics: 3, ee: 0.5 } },
      ee: { t: '信号、控制和设备链路怎样更稳、更准、更省', sub: '更偏电子、通信、信号处理和控制。', d: { signal: 1, control: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3, robotics: 0.5 } },
      ce: { t: '芯片、内存和软硬件协同怎样支撑更强计算', sub: '更偏体系结构、AI 硬件和软硬件协同。', d: { arch: 1, hw_sw: 1, ai_hw: 1, mem_sys: 1 }, domains: { ce: 3, cs: 0.5 } },
      or: { t: '约束很多、资源有限时怎样做出更优决策', sub: '更偏优化、运筹、调度和随机决策。', d: { optim: 1, or_ops: 1, scheduling: 1, stoch: 1 }, domains: { or: 3, ds: 0.5 } }
    }
  },
  {
    id: 's2_02',
    phase: 'bridge',
    cat: '交界分流',
    text: '你更愿意被哪种成果形式评价？',
    optionMap: {
      ai: { t: '一个能力明显更强、边界更清楚的模型或方法', sub: '更偏模型能力和研究推进。', d: { foundation: 1, llm: 1, cv: 1, multimodal: 1 }, domains: { ai: 3 } },
      cs: { t: '一套跑得稳、扛得住、大家都敢依赖的系统', sub: '更偏系统工程和基础设施。', d: { dist_sys: 1, systems: 1, cloud: 1, stream: 1 }, domains: { cs: 3, ce: 0.3 } },
      ds: { t: '一份能支撑决策、别人愿意采纳的判断报告', sub: '更偏分析、实验、统计和因果。', d: { ds_sci: 1, causal: 1, stats: 1, domain_ds: 1 }, domains: { ds: 3, or: 0.5 } },
      robotics: { t: '一台机器在真实环境里顺利完成任务', sub: '更偏真机、闭环和真实世界效果。', d: { robotics: 1, motion: 1, autonomous: 1, perception: 1 }, domains: { robotics: 3 } },
      ee: { t: '一条设备/信号链路明显更稳、更准、更低功耗', sub: '更偏信号、控制和电子系统。', d: { signal: 1, comm: 1, control: 1, embedded: 1 }, domains: { ee: 3 } },
      ce: { t: '一个底层架构或加速方案让整套计算快很多', sub: '更偏芯片、内存和加速器。', d: { arch: 1, ai_hw: 1, npu: 1, hw_sw: 1 }, domains: { ce: 3 } },
      or: { t: '一套分配/调度方案让资源利用率明显更高', sub: '更偏优化、运筹和决策系统。', d: { optim: 1, or_ops: 1, scheduling: 1, dynamic_prog: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_03',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果要和一类团队高频合作，你更舒服的是哪种语境？',
    optionMap: {
      ai: { t: '实验、能力、评测、模型行为', sub: '更偏模型研究和应用科学。', d: { llm: 1, foundation: 1, repr: 1, generative: 1 }, domains: { ai: 3 } },
      cs: { t: '架构、状态、容量、故障恢复', sub: '更偏系统、数据库、云和网络。', d: { dist_sys: 1, db: 1, cloud: 1, networks: 1 }, domains: { cs: 3, ce: 0.3 } },
      ds: { t: '样本、指标、偏差、实验设计', sub: '更偏统计、分析和因果评估。', d: { stats: 1, ds_sci: 1, causal: 1, mlops: 1 }, domains: { ds: 3 } },
      robotics: { t: '真机、仿真、任务完成率、场景适应', sub: '更偏机器人、具身、自主系统。', d: { robotics: 1, embodied: 1, autonomous: 1, hri: 1 }, domains: { robotics: 3 } },
      ee: { t: '波形、控制回路、信道、传感器噪声', sub: '更偏信号、通信、控制和电子。', d: { signal: 1, control: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3 } },
      ce: { t: '缓存、带宽、算子、存储层级、协同设计', sub: '更偏体系结构和软硬件协同。', d: { arch: 1, mem_sys: 1, hw_sw: 1, ai_hw: 1 }, domains: { ce: 3 } },
      or: { t: '约束、目标函数、稳健性、求解器', sub: '更偏优化、运筹和不确定决策。', d: { optim: 1, stoch: 1, or_ops: 1, uq: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_04',
    phase: 'bridge',
    cat: '交界分流',
    text: '哪种“出问题的方式”最像你愿意长期对付的对象？',
    optionMap: {
      ai: { t: '模型会答错、学偏、迁移失败或对齐失真', sub: '更偏 AI 能力和模型边界。', d: { safety: 1, transfer: 1, repr: 1, llm: 1 }, domains: { ai: 3 } },
      cs: { t: '请求一多就卡、状态一乱就挂、容量一上就抖', sub: '更偏系统和基础设施。', d: { systems: 1, dist_sys: 1, cloud: 1, stream: 1 }, domains: { cs: 3 } },
      ds: { t: '数据分布变了、结论不稳、实验设计有偏', sub: '更偏数据科学、统计和因果。', d: { causal: 1, stats: 1, ds_sci: 1, data_qual: 1 }, domains: { ds: 3 } },
      robotics: { t: '环境一变、传感器一脏、动作一复杂就失手', sub: '更偏机器人、自主系统。', d: { robotics: 1, perception: 1, autonomous: 1, motion: 1 }, domains: { robotics: 3 } },
      ee: { t: '噪声、抖动、时延或反馈回路让系统不稳', sub: '更偏控制、信号和通信。', d: { signal: 1, control: 1, comm: 1, opt_ctrl: 1 }, domains: { ee: 3 } },
      ce: { t: '算不快、存不下、搬不动，硬件资源总不够', sub: '更偏体系结构和加速器。', d: { arch: 1, mem_sys: 1, ai_hw: 1, npu: 1 }, domains: { ce: 3 } },
      or: { t: '目标太多、约束太多，方案总顾此失彼', sub: '更偏优化和运筹。', d: { optim: 1, scheduling: 1, or_ops: 1, comb_opt: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_05',
    phase: 'bridge',
    cat: '交界分流',
    text: '你最想精进的“核心手感”是哪一种？',
    optionMap: {
      ai: { t: '把模型能力做得更强、更稳、更可迁移', sub: '更偏 AI 方向里的能力推进。', d: { foundation: 1, llm: 1, cv: 1, multimodal: 1 }, domains: { ai: 3 } },
      cs: { t: '把复杂系统拆清楚并长期治理好', sub: '更偏 CS 里的系统与平台。', d: { systems: 1, dist_sys: 1, db: 1, pl: 1 }, domains: { cs: 3 } },
      ds: { t: '把复杂数据说清楚并支撑判断', sub: '更偏 DS 的分析与实验能力。', d: { ds_sci: 1, stats: 1, causal: 1, vis: 1 }, domains: { ds: 3 } },
      robotics: { t: '让机器在真实世界里更聪明也更可靠', sub: '更偏 Robotics 的闭环能力。', d: { robotics: 1, autonomous: 1, perception: 1, embodied: 1 }, domains: { robotics: 3 } },
      ee: { t: '让物理链路和控制系统更稳定更可控', sub: '更偏 EE 的信号与控制。', d: { control: 1, signal: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3 } },
      ce: { t: '让计算路径从底层开始更高效', sub: '更偏 CE 的体系结构与协同设计。', d: { arch: 1, hw_sw: 1, ai_hw: 1, fpga: 1 }, domains: { ce: 3 } },
      or: { t: '在复杂约束里找到高质量方案', sub: '更偏 Math/OR 的建模与求解。', d: { optim: 1, or_ops: 1, stoch: 1, dynamic_prog: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_06',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果只能保留一种工作反馈机制，你更想要哪一种？',
    optionMap: {
      ai: { t: '模型能力、评测结果和新方法不断刷新上限', sub: '更偏 AI 的能力反馈。', d: { llm: 1, foundation: 1, generative: 1, safety: 1 }, domains: { ai: 3 } },
      cs: { t: '系统更稳、更快、更能扛，团队明显感知到变化', sub: '更偏 CS 的工程反馈。', d: { dist_sys: 1, systems: 1, cloud: 1, db: 1 }, domains: { cs: 3 } },
      ds: { t: '判断更准、实验更稳、决策效果更清晰', sub: '更偏 DS 的分析反馈。', d: { causal: 1, ds_sci: 1, stats: 1, econom: 1 }, domains: { ds: 3 } },
      robotics: { t: '机器在真实场景里完成了以前做不到的任务', sub: '更偏 Robotics 的任务反馈。', d: { robotics: 1, autonomous: 1, motion: 1, hri: 1 }, domains: { robotics: 3 } },
      ee: { t: '链路更稳、控制更准、误差更小', sub: '更偏 EE 的物理反馈。', d: { control: 1, signal: 1, comm: 1, opt_ctrl: 1 }, domains: { ee: 3 } },
      ce: { t: '吞吐更高、延迟更低、资源利用率更漂亮', sub: '更偏 CE 的底层反馈。', d: { arch: 1, mem_sys: 1, ai_hw: 1, npu: 1 }, domains: { ce: 3 } },
      or: { t: '同样资源下方案更优、成本更低、约束更稳', sub: '更偏 OR 的决策反馈。', d: { optim: 1, or_ops: 1, scheduling: 1, uq: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_07',
    phase: 'bridge',
    cat: '交界分流',
    text: '你更愿意把时间花在什么样的“细节”上？',
    optionMap: {
      ai: { t: '模型行为、数据表示、评测边界和能力差异', sub: '更偏 AI。', d: { repr: 1, llm: 1, vlm: 1, diffusion: 1 }, domains: { ai: 3 } },
      cs: { t: '状态流转、资源调度、故障恢复和一致性', sub: '更偏 CS。', d: { dist_sys: 1, systems: 1, db: 1, networks: 1 }, domains: { cs: 3 } },
      ds: { t: '样本构成、变量选择、偏差来源和解释口径', sub: '更偏 DS。', d: { stats: 1, ds_sci: 1, causal: 1, data_qual: 1 }, domains: { ds: 3 } },
      robotics: { t: '感知误差、动作延迟、闭环稳定和场景变化', sub: '更偏 Robotics。', d: { perception: 1, control: 1, autonomous: 1, motion: 1 }, domains: { robotics: 3 } },
      ee: { t: '信号噪声、控制参数、链路时延和物理约束', sub: '更偏 EE。', d: { signal: 1, control: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3 } },
      ce: { t: '缓存命中、存算搬运、时序和协同路径', sub: '更偏 CE。', d: { mem_sys: 1, arch: 1, ai_hw: 1, hw_sw: 1 }, domains: { ce: 3 } },
      or: { t: '约束表达、求解效率、稳健性和资源配置', sub: '更偏 OR。', d: { optim: 1, or_ops: 1, stoch: 1, comb_opt: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_08',
    phase: 'bridge',
    cat: '交界分流',
    text: '哪种“好问题”的味道最像你会一直追下去的？',
    optionMap: {
      ai: { t: '能力边界还没摸清，但一旦突破会带来通用提升', sub: '更偏 AI 的前沿能力问题。', d: { foundation: 1, llm: 1, multimodal: 1, rl: 1 }, domains: { ai: 3 } },
      cs: { t: '规模和复杂度上去后，很多经典做法不再好使', sub: '更偏 CS 的系统问题。', d: { dist_sys: 1, cloud: 1, db: 1, stream: 1 }, domains: { cs: 3 } },
      ds: { t: '看起来都对，但到底哪个因素真的起作用', sub: '更偏 DS 的因果与实验问题。', d: { causal: 1, econom: 1, stats: 1, ds_sci: 1 }, domains: { ds: 3 } },
      robotics: { t: '现实世界太脏太变，系统怎样还能稳稳完成任务', sub: '更偏 Robotics 的真实部署问题。', d: { autonomous: 1, perception: 1, robotics: 1, hri: 1 }, domains: { robotics: 3 } },
      ee: { t: '受物理限制但又必须稳定工作的链路和控制问题', sub: '更偏 EE。', d: { control: 1, signal: 1, comm: 1, embedded: 1 }, domains: { ee: 3 } },
      ce: { t: '硬件和软件都没错，但放在一起还不够好', sub: '更偏 CE 的协同设计问题。', d: { hw_sw: 1, arch: 1, ai_hw: 1, soc: 1 }, domains: { ce: 3 } },
      or: { t: '问题本身充满约束、权衡和不确定性', sub: '更偏 OR。', d: { or_ops: 1, optim: 1, stoch: 1, dynamic_prog: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_09',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果项目失败了，你最想先追问哪件事？',
    optionMap: {
      ai: { t: '能力是不是没学到位，泛化边界在哪', sub: '更偏 AI。', d: { transfer: 1, repr: 1, safety: 1, llm: 1 }, domains: { ai: 3 } },
      cs: { t: '架构和工程流程哪里没顶住', sub: '更偏 CS。', d: { systems: 1, dist_sys: 1, cloud: 1, mlops: 1 }, domains: { cs: 3 } },
      ds: { t: '数据、样本和结论链条哪里出了偏差', sub: '更偏 DS。', d: { stats: 1, causal: 1, data_qual: 1, ds_sci: 1 }, domains: { ds: 3 } },
      robotics: { t: '感知、决策还是动作闭环出了问题', sub: '更偏 Robotics。', d: { perception: 1, motion: 1, control: 1, autonomous: 1 }, domains: { robotics: 3 } },
      ee: { t: '控制回路、信号链路或设备约束哪里先失稳', sub: '更偏 EE。', d: { control: 1, signal: 1, elec_sys: 1, comm: 1 }, domains: { ee: 3 } },
      ce: { t: '瓶颈到底在算、存、传还是协同路径上', sub: '更偏 CE。', d: { arch: 1, mem_sys: 1, ai_hw: 1, hw_sw: 1 }, domains: { ce: 3 } },
      or: { t: '建模是不是漏了关键约束或权衡没表达对', sub: '更偏 OR。', d: { or_ops: 1, optim: 1, comb_opt: 1, uq: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_10',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果未来的岗位要你在“技术深度”和“现实落地”之间找平衡，你更想站哪一侧？',
    optionMap: {
      ai: { t: '更偏能力和方法本身的推进', sub: '更像 AI 里的模型与研究。', d: { foundation: 1, repr: 1, llm: 1, cv: 1 }, domains: { ai: 3 } },
      cs: { t: '更偏把大规模系统真正做成公共能力', sub: '更像 CS 的系统与平台。', d: { systems: 1, dist_sys: 1, db: 1, stream: 1 }, domains: { cs: 3 } },
      ds: { t: '更偏用数据和实验让决策变好', sub: '更像 DS 的分析与实验。', d: { causal: 1, ds_sci: 1, stats: 1, domain_ds: 1 }, domains: { ds: 3 } },
      robotics: { t: '更偏把真实机器做得可靠可用', sub: '更像 Robotics 的系统落地。', d: { robotics: 1, autonomous: 1, perception: 1, hri: 1 }, domains: { robotics: 3 } },
      ee: { t: '更偏把物理系统、设备和链路做到可控', sub: '更像 EE 的控制与电子。', d: { signal: 1, control: 1, comm: 1, embedded: 1 }, domains: { ee: 3 } },
      ce: { t: '更偏从底层算力组织上做出代差', sub: '更像 CE 的体系结构与硬件。', d: { arch: 1, ai_hw: 1, npu: 1, soc: 1 }, domains: { ce: 3 } },
      or: { t: '更偏把复杂约束下的决策系统做得更优', sub: '更像 OR 的建模与优化。', d: { optim: 1, or_ops: 1, scheduling: 1, game_th: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_11',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果你未来做的东西会被很多人依赖，你更想负责哪一层价值？',
    optionMap: {
      ai: { t: '能力层——让系统本身更会理解、生成和推理', sub: '更偏模型与能力推进。', d: { foundation: 1, llm: 1, multimodal: 1, generative: 1 }, domains: { ai: 3 } },
      cs: { t: '平台层——让服务、数据和系统稳定地对外提供能力', sub: '更偏系统与平台。', d: { systems: 1, dist_sys: 1, cloud: 1, db: 1 }, domains: { cs: 3 } },
      ds: { t: '判断层——让数据分析和实验真正影响决策', sub: '更偏数据与因果判断。', d: { ds_sci: 1, causal: 1, stats: 1, domain_ds: 1 }, domains: { ds: 3 } },
      robotics: { t: '执行层——让机器在真实现场稳定完成任务', sub: '更偏机器人与自主系统。', d: { robotics: 1, autonomous: 1, motion: 1, hri: 1 }, domains: { robotics: 3 } },
      ee: { t: '链路层——让信号、控制和设备真正可控可靠', sub: '更偏 EE。', d: { signal: 1, control: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3 } },
      ce: { t: '算力层——让底层计算组织方式整体变强', sub: '更偏 CE。', d: { arch: 1, ai_hw: 1, npu: 1, hw_sw: 1 }, domains: { ce: 3 } },
      or: { t: '决策层——让资源配置和调度整体更优', sub: '更偏 OR。', d: { optim: 1, or_ops: 1, scheduling: 1, stoch: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_12',
    phase: 'bridge',
    cat: '交界分流',
    text: '你更想把自己训练成哪种“核心型选手”？',
    optionMap: {
      ai: { t: '能力推进型——做出更强的模型和方法', sub: '更偏 AI 研究和应用科学。', d: { foundation: 1, llm: 1, cv: 1, repr: 1 }, domains: { ai: 3 } },
      cs: { t: '系统治理型——把复杂服务长期管稳', sub: '更偏 CS 系统。', d: { systems: 1, dist_sys: 1, cloud: 1, stream: 1 }, domains: { cs: 3 } },
      ds: { t: '证据判断型——从数据中给出可信结论', sub: '更偏 DS。', d: { stats: 1, causal: 1, ds_sci: 1, econom: 1 }, domains: { ds: 3 } },
      robotics: { t: '真实闭环型——让机器在环境里稳稳跑通', sub: '更偏 Robotics。', d: { robotics: 1, perception: 1, autonomous: 1, control: 1 }, domains: { robotics: 3 } },
      ee: { t: '物理系统型——把设备和链路调到稳定可靠', sub: '更偏 EE。', d: { signal: 1, control: 1, comm: 1, embedded: 1 }, domains: { ee: 3 } },
      ce: { t: '底层架构型——把计算通路和硬件组织做好', sub: '更偏 CE。', d: { arch: 1, mem_sys: 1, ai_hw: 1, soc: 1 }, domains: { ce: 3 } },
      or: { t: '建模优化型——在复杂约束下持续求更优', sub: '更偏 OR。', d: { optim: 1, or_ops: 1, dynamic_prog: 1, comb_opt: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_13',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果你未来的价值要通过“别人少踩坑”体现，你更希望帮他们少踩哪种坑？',
    optionMap: {
      ai: { t: '模型看起来会，但其实没真正学会', sub: '更偏 AI 的能力与泛化问题。', d: { repr: 1, transfer: 1, llm: 1, safety: 1 }, domains: { ai: 3 } },
      cs: { t: '系统上线后才发现撑不住或恢复不了', sub: '更偏 CS 的稳定性和架构问题。', d: { dist_sys: 1, systems: 1, cloud: 1, mlops: 1 }, domains: { cs: 3 } },
      ds: { t: '结论看起来合理，但其实是被偏差带歪了', sub: '更偏 DS 的统计与因果问题。', d: { stats: 1, causal: 1, data_qual: 1, ds_sci: 1 }, domains: { ds: 3 } },
      robotics: { t: '仿真里可行，到了真实世界就处处失手', sub: '更偏 Robotics 的真机问题。', d: { robotics: 1, autonomous: 1, motion: 1, embodied: 1 }, domains: { robotics: 3 } },
      ee: { t: '控制、链路和噪声叠在一起后系统失稳', sub: '更偏 EE 的控制与信号问题。', d: { control: 1, signal: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3 } },
      ce: { t: '明明模型没问题，结果底层算力路径拖了后腿', sub: '更偏 CE 的算力与架构问题。', d: { ai_hw: 1, arch: 1, mem_sys: 1, hw_sw: 1 }, domains: { ce: 3 } },
      or: { t: '方案看起来精巧，但一加真实约束就没法执行', sub: '更偏 OR 的建模与稳健性问题。', d: { or_ops: 1, optim: 1, uq: 1, scheduling: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_14',
    phase: 'bridge',
    cat: '交界分流',
    text: '你更容易对哪类“规模”产生职业兴趣？',
    optionMap: {
      ai: { t: '模型规模和能力尺度一起变大的规模', sub: '更偏 AI。', d: { foundation: 1, scaling: 1, llm: 1, efficient: 1 }, domains: { ai: 3 } },
      cs: { t: '用户、请求和服务节点暴涨后的系统规模', sub: '更偏 CS。', d: { dist_sys: 1, cloud: 1, systems: 1, db: 1 }, domains: { cs: 3 } },
      ds: { t: '样本、实验和业务变量越来越复杂的数据规模', sub: '更偏 DS。', d: { ds_sci: 1, stats: 1, causal: 1, mlops: 1 }, domains: { ds: 3 } },
      robotics: { t: '环境和任务组合越来越复杂的场景规模', sub: '更偏 Robotics。', d: { autonomous: 1, robotics: 1, perception: 1, hri: 1 }, domains: { robotics: 3 } },
      ee: { t: '物理链路、设备和控制对象越来越多的工程规模', sub: '更偏 EE。', d: { comm: 1, control: 1, signal: 1, embedded: 1 }, domains: { ee: 3 } },
      ce: { t: '算力资源、内存层级和硬件协同越来越大的规模', sub: '更偏 CE。', d: { arch: 1, mem_sys: 1, ai_hw: 1, npu: 1 }, domains: { ce: 3 } },
      or: { t: '约束、资源、路径和方案空间一起膨胀的规模', sub: '更偏 OR。', d: { optim: 1, or_ops: 1, comb_opt: 1, stoch: 1 }, domains: { or: 3 } }
    }
  },
  {
    id: 's2_15',
    phase: 'bridge',
    cat: '交界分流',
    text: '如果以后你的工作很难被一句话概括，你最希望“复杂”体现在哪？',
    optionMap: {
      ai: { t: '能力很复杂，但核心是在让模型更会理解和生成', sub: '更偏 AI。', d: { llm: 1, multimodal: 1, generative: 1, foundation: 1 }, domains: { ai: 3 } },
      cs: { t: '链路很复杂，但核心是在让系统长期稳定运行', sub: '更偏 CS。', d: { systems: 1, dist_sys: 1, cloud: 1, networks: 1 }, domains: { cs: 3 } },
      ds: { t: '因素很复杂，但核心是在让判断更可信', sub: '更偏 DS。', d: { causal: 1, stats: 1, ds_sci: 1, domain_ds: 1 }, domains: { ds: 3 } },
      robotics: { t: '场景很复杂，但核心是在让机器在现实里做对事', sub: '更偏 Robotics。', d: { robotics: 1, autonomous: 1, embodied: 1, motion: 1 }, domains: { robotics: 3 } },
      ee: { t: '物理条件很复杂，但核心是在让系统可控可靠', sub: '更偏 EE。', d: { control: 1, signal: 1, comm: 1, elec_sys: 1 }, domains: { ee: 3 } },
      ce: { t: '软硬件关系很复杂，但核心是在让计算真正高效', sub: '更偏 CE。', d: { arch: 1, hw_sw: 1, ai_hw: 1, fpga: 1 }, domains: { ce: 3 } },
      or: { t: '约束和权衡很复杂，但核心是在让方案最优可行', sub: '更偏 OR。', d: { optim: 1, or_ops: 1, scheduling: 1, dynamic_prog: 1 }, domains: { or: 3 } }
    }
  }
];

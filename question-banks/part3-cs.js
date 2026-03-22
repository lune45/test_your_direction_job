window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.cs = [
  {
    id: 's3_cs_01',
    phase: 'deep',
    cat: 'CS 深挖 / 系统骨架',
    triggerDirs: ['storage_sys', 'dist_sys', 'cloud', 'data_mgmt'],
    text: '如果以后一直在 CS 这边打转，你最想把哪种“骨架型能力”搭出来？',
    opts: [
      { t: '让底层存储、恢复和持久化能力更稳、更抗折腾', d: { storage_sys: 3, db: 1, data_mgmt: 1 } },
      { t: '让很多机器一起工作时仍然可靠一致', d: { dist_sys: 3, systems: 1, storage_sys: 1 } },
      { t: '让云平台和大规模服务更会扩、更会恢复', d: { cloud: 3, networks: 1, systems: 1 } },
      { t: '让数据从采集、组织到使用的整条治理链路更清楚', d: { data_mgmt: 3, db: 1, storage_sys: 1 } }
    ]
  },
  {
    id: 's3_cs_02',
    phase: 'deep',
    cat: 'CS 深挖 / 语言与正确性',
    triggerDirs: ['pl', 'formal', 'security', 'systems'],
    text: '如果你更想让“软件本身”变得更可靠，最想往哪条线深挖？',
    opts: [
      { t: '设计更好的语言、编译器和开发工具', d: { pl: 3, formal: 1, systems: 1 } },
      { t: '用形式化方法把正确性真的证明清楚', d: { formal: 3, pl: 1, security: 1 } },
      { t: '从系统和软件层面减少漏洞和攻击面', d: { security: 3, systems: 1, formal: 1 } },
      { t: '把这些能力做进工程系统，让团队长期受益', d: { systems: 2, pl: 1, formal: 1 } }
    ]
  },
  {
    id: 's3_cs_03',
    phase: 'deep',
    cat: 'CS 深挖 / 理论到算法',
    triggerDirs: ['theory', 'algo', 'complexity', 'security'],
    text: '如果你愿意为抽象问题花很多年，最想钻哪类？',
    opts: [
      { t: '找出问题背后的共性结构和一般性规律', d: { theory: 3, algo: 1, complexity: 1 } },
      { t: '把问题从“能做”改成“做得足够快”', d: { algo: 3, theory: 1, optim: 1 } },
      { t: '搞清哪些问题本质上就是难、快不了', d: { complexity: 3, theory: 1, formal: 1 } },
      { t: '把理论工具真正用到安全和验证问题上', d: { security: 2, formal: 2, theory: 1 } }
    ]
  },
  {
    id: 's3_cs_04',
    phase: 'deep',
    cat: 'CS 深挖 / 网络与流',
    triggerDirs: ['networks', 'stream', 'cloud', 'dist_sys'],
    text: '如果你更关注“东西怎样流动起来”，哪类问题最吸引你？',
    opts: [
      { t: '让网络在复杂环境里保持低延迟和稳定连接', d: { networks: 3, wireless_net: 1, systems: 1 } },
      { t: '让实时数据进来就能马上被处理和使用', d: { stream: 3, db: 1, big_data: 1 } },
      { t: '让云上的服务、资源和容量能更聪明地协同', d: { cloud: 3, networks: 1, systems: 1 } },
      { t: '让多组件、多节点的协作链路更稳更可恢复', d: { dist_sys: 3, storage_sys: 1, systems: 1 } }
    ]
  },
  {
    id: 's3_cs_05',
    phase: 'deep',
    cat: 'CS 深挖 / 图形与交互',
    triggerDirs: ['graphics', 'geo_proc', 'hci', 'vis'],
    text: '如果你更在意“人怎样看见、理解、使用技术”，会更想深挖哪类方向？',
    opts: [
      { t: '把视觉世界渲染得更真实、更快、更可交互', d: { graphics: 3, geo_proc: 1, hci: 1 } },
      { t: '处理三维几何、形状和空间结构', d: { geo_proc: 3, rendering: 1, computational_imaging: 1 } },
      { t: '研究人和界面怎样协作得更顺手、更自然', d: { hci: 3, interactive_sys: 1, human_ai: 1 } },
      { t: '把复杂信息变成别人一眼能看懂的图和界面', d: { vis: 2, info_vis: 1, hci: 1 } }
    ]
  },
  {
    id: 's3_cs_06',
    phase: 'deep',
    cat: 'CS 深挖 / 数据基础设施',
    triggerDirs: ['db', 'stream', 'storage_sys', 'data_mgmt'],
    text: '如果你继续往“数据系统”这条线走，最想长期攻哪类问题？',
    opts: [
      { t: '让查询更快、存储更稳、事务更靠谱', d: { db: 3, storage_sys: 1, data_mgmt: 1 } },
      { t: '让实时数据流在大规模下仍然顺畅', d: { stream: 3, big_data: 1, db: 1 } },
      { t: '让持久化、恢复和副本机制在大规模下依然靠谱', d: { storage_sys: 3, db: 1, systems: 1 } },
      { t: '让数据目录、血缘、口径和访问方式真正清楚统一', d: { data_mgmt: 3, db: 1, storage_sys: 1 } }
    ]
  },
  {
    id: 's3_cs_07',
    phase: 'deep',
    cat: 'CS 深挖 / 工程重心',
    triggerDirs: ['systems', 'pl', 'security', 'cloud'],
    text: '如果你未来几年只能把“独特深度”押在一件事上，会更想押哪类能力？',
    opts: [
      { t: '把大系统拆清楚、守住稳定性和恢复力', d: { systems: 3, storage_sys: 1, security: 1 } },
      { t: '把语言、编译和工具链做得更聪明', d: { pl: 3, formal: 1, systems: 1 } },
      { t: '把安全、验证和正确性能力做扎实', d: { security: 3, formal: 1, systems: 1 } },
      { t: '把多机协作和大规模工程做成公共底座', d: { dist_sys: 3, storage_sys: 1, systems: 1 } }
    ]
  },
  {
    id: 's3_cs_08',
    phase: 'deep',
    cat: 'CS 深挖 / 安全与可信系统',
    triggerDirs: ['security', 'systems', 'formal', 'networks'],
    text: '如果你更担心“系统被攻击或失控”，最想长期钻哪类问题？',
    opts: [
      { t: '把系统和基础设施本身做得更难被攻破', d: { security: 3, systems: 1, networks: 1 } },
      { t: '让协议、规则和实现之间更难出现逻辑漏洞', d: { formal: 2, security: 2, pl: 1 } },
      { t: '让网络、边界和连接链路在复杂环境里更可信', d: { networks: 3, security: 1, cloud: 1 } },
      { t: '做能长期守住正确性和恢复力的可信系统工程', d: { systems: 3, security: 1, formal: 1 } }
    ]
  },
  {
    id: 's3_cs_09',
    phase: 'deep',
    cat: 'CS 深挖 / 开发者效率',
    triggerDirs: ['pl', 'net_measure', 'vis', 'hci'],
    text: '如果你更在意“人怎样把软件做得更快更少错”，最想长期做哪类问题？',
    opts: [
      { t: '让语言、编译器和类型系统提前拦住错误', d: { pl: 3, formal: 1, systems: 1 } },
      { t: '让调试、性能定位和可观测性更顺手', d: { net_measure: 3, systems: 1, vis: 1 } },
      { t: '让复杂数据和系统状态更容易被人理解', d: { vis: 3, hci: 1, systems: 1 } },
      { t: '研究开发者与工具如何形成更好的协作方式', d: { hci: 3, pl: 1, vis: 1 } }
    ]
  },
  {
    id: 's3_cs_10',
    phase: 'deep',
    cat: 'CS 深挖 / 服务与平台边界',
    triggerDirs: ['cloud', 'db', 'stream', 'data_mgmt'],
    text: '如果你长期在“服务平台”这条线上，你最想守住哪类核心能力？',
    opts: [
      { t: '服务弹性和故障恢复，让高峰和异常都不慌', d: { cloud: 3, systems: 1, networks: 1 } },
      { t: '数据一致性和查询能力，让底层存取更可靠', d: { db: 3, storage_sys: 1, systems: 1 } },
      { t: '流式与实时链路，让数据进来就能马上产生价值', d: { stream: 3, db: 1, big_data: 1 } },
      { t: '跨团队、跨系统的数据定义和治理方式始终说得清', d: { data_mgmt: 3, db: 1, privacy_eng: 1 } }
    ]
  },
  {
    id: 's3_cs_11',
    phase: 'deep',
    cat: 'CS 深挖 / 隐私与移动环境',
    triggerDirs: ['privacy_eng', 'wireless_net', 'mobile_sys', 'networks'],
    text: '如果你更在意“系统到了真实网络和用户环境里会发生什么”，最想长期做哪类问题？',
    opts: [
      { t: '在保护隐私的前提下，仍然让数据和系统能持续产生价值', d: { privacy_eng: 3, security: 1, data_mgmt: 1 } },
      { t: '让无线链路在复杂环境下仍然稳定、低延迟、不断连', d: { wireless_net: 3, networks: 1, mobile_sys: 1 } },
      { t: '让移动端和边缘设备在受限资源下也能长期顺畅运行', d: { mobile_sys: 3, systems: 1, networks: 1 } },
      { t: '把网络边界、协议和测量链路做得更可控、更透明', d: { networks: 3, net_measure: 1, wireless_net: 1 } }
    ]
  },
  {
    id: 's3_cs_12',
    phase: 'deep',
    cat: 'CS 深挖 / 人与信息呈现',
    triggerDirs: ['accessibility', 'human_ai', 'sci_vis', 'explain_vis'],
    text: '如果你更关心“技术最终怎样被人看懂、用好、信任”，最想长期走哪条线？',
    opts: [
      { t: '让产品和系统对不同能力、不同处境的人都真正可用', d: { accessibility: 3, hci: 1, interactive_sys: 1 } },
      { t: '让 AI 系统更符合人的理解方式、决策节奏和使用习惯', d: { human_ai: 3, hci: 1, explain_vis: 1 } },
      { t: '把科学、工程或系统状态转成真正能支持判断的图景', d: { sci_vis: 3, info_vis: 1, vis: 1 } },
      { t: '把复杂信息压缩成结构清楚、解释力强的可视化表达', d: { explain_vis: 3, info_vis: 1, vis: 1 } }
    ]
  },
  {
    id: 's3_cs_13',
    phase: 'deep',
    cat: 'CS 深挖 / 研究重心再分流',
    triggerDirs: ['sys_ai', 'algo', 'graphics', 'hci'],
    text: '如果你在 CS 里继续往深走，更想把哪类“核心问题”慢慢坐成主线？',
    opts: [
      { t: '让 AI 系统、训练服务和推理平台在真实规模下真正站住', d: { sys_ai: 4, cloud: 1, dist_sys: 1 } },
      { t: '把算法设计、复杂度和求解策略做得更漂亮、更有边界感', d: { algo: 4, theory: 1, complexity: 1 } },
      { t: '把图形、几何和视觉计算做成真正有表现力的技术能力', d: { graphics: 4, geo_proc: 1, rendering: 1 } },
      { t: '让系统更符合人的使用方式、理解方式和协作节奏', d: { hci: 4, human_ai: 1, interactive_sys: 1 } }
    ]
  },
  {
    id: 's3_cs_14',
    phase: 'deep',
    cat: 'CS 深挖 / 数据系统与其他路线分离',
    triggerDirs: ['db', 'dist_sys', 'pl', 'security'],
    text: '如果未来几年只想在一条 CS 主线里持续积累，你更希望它最后长成哪种日常？',
    opts: [
      { t: '围绕事务、索引、查询和一致性，把数据底座做得又稳又快', d: { db: 4, storage_sys: 1, data_mgmt: 1 } },
      { t: '围绕分布式协同、容错和扩展性，把多机系统长期做深', d: { dist_sys: 4, cloud: 1, systems: 1 } },
      { t: '围绕语言、编译和程序本体，把软件表达和执行方式做深', d: { pl: 5, formal: 1 } },
      { t: '围绕攻击面、验证和防护，把可信系统这套本事慢慢坐实', d: { security: 4, privacy_eng: 1, formal: 1 } }
    ]
  },
  {
    id: 's3_cs_branch_01',
    phase: 'deep',
    cat: 'CS 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '如果以后一直留在 CS 里，你更想把哪类计算机科学能力磨成自己的底牌？',
    opts: [
      { t: '大系统、云平台和分布式协同，重点是稳定、扩展和恢复', d: { systems: 2, dist_sys: 2, cloud: 2, storage_sys: 1 } },
      { t: '数据库、数据链路和实时处理，重点是数据怎样被稳稳组织起来', d: { db: 2, data_mgmt: 2, stream: 2, storage_sys: 1 } },
      { t: '算法、理论、复杂度和求解边界，重点是问题本身的结构', d: { algo: 2, theory: 2, complexity: 2, formal: 1 } },
      { t: '语言、编译、验证和正确性，重点是程序本体怎样更可靠', d: { pl: 4, formal: 2, systems: 1 } },
      { t: '安全、隐私和可信系统，重点是系统怎样更难出错或被攻破', d: { security: 2, privacy_eng: 2, formal: 1, networks: 1 } },
      { t: '网络、交互、图形和可视化，重点是信息怎样被传、被看见、被使用', d: { networks: 2, hci: 1, graphics: 1, vis: 1, wireless_net: 1 } }
    ]
  },
  {
    id: 's3_cs_branch_02',
    phase: 'deep',
    cat: 'CS 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 2,
    text: '如果你以后长期待在 CS 里，更希望别人最先想到你擅长的是哪类难题？',
    opts: [
      { t: '多机系统怎么协同、容错和扩展，服务怎样一直稳定在线', d: { systems: 2, dist_sys: 2, cloud: 2, storage_sys: 1 } },
      { t: '数据怎样被组织、查询和实时处理，底层链路怎样越跑越顺', d: { db: 2, data_mgmt: 2, stream: 2, storage_sys: 1 } },
      { t: '复杂问题怎样被抽象、建模并找到可证明的更优算法', d: { algo: 2, theory: 2, complexity: 2, online_algo: 1 } },
      { t: '程序语言、编译器和正确性工具怎样让软件表达得更清楚、执行得更可靠', d: { pl: 4, formal: 2, testing: 1 } },
      { t: '系统怎样更安全、更有隐私边界，并且能在攻击下保持可信', d: { security: 2, privacy_eng: 2, networks: 1, formal: 1 } },
      { t: '信息怎样被连接、展示和交互，让人和系统协作得更顺畅', d: { networks: 1, hci: 2, graphics: 1, vis: 2, interactive_sys: 1 } }
    ]
  },
  {
    id: 's3_cs_branch_03',
    phase: 'deep',
    cat: 'CS 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 3,
    text: '如果未来几年你只能把一条 CS 主线做深，你更希望它一直围着哪类核心对象展开？',
    opts: [
      { t: '服务、节点和算力资源，让大系统长时间稳定运转', d: { sys_ai: 2, cloud: 2, dist_sys: 2, systems: 1 } },
      { t: '数据表、查询、流式链路和存储介质，让数据底座始终可靠', d: { db: 2, data_mgmt: 2, stream: 2, storage_sys: 1 } },
      { t: '问题结构、算法边界和求解策略，让复杂问题被真正拆开', d: { algo: 2, theory: 2, complexity: 2, online_algo: 1 } },
      { t: '程序语言、编译过程和形式化规则，让软件本身更可信', d: { pl: 4, formal: 2, testing: 1 } },
      { t: '攻击面、协议边界和真实网络环境，让系统更难被搞坏', d: { security: 2, privacy_eng: 2, networks: 1, wireless_net: 1, mobile_sys: 1 } },
      { t: '界面、图形和信息表达，让人更自然地理解和使用系统', d: { hci: 2, graphics: 1, vis: 2, accessibility: 1, human_ai: 1 } }
    ]
  }
];

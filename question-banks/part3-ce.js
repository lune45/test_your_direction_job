window.STAGE3_BANKS = window.STAGE3_BANKS || {};

window.STAGE3_BANKS.ce = [
  {
    id: 's3_ce_01',
    phase: 'deep',
    cat: 'CE 深挖 / 主线选择',
    triggerDirs: ['processor_arch', 'co_optimization', 'accelerator_arch', 'firmware_sys'],
    text: '如果以后一直在 CE 这边打转，你最想把哪条线一直做下去？',
    opts: [
      { t: '让处理器和计算架构本身更合理、更高效', d: { processor_arch: 3, parallel_arch: 1, hetero_arch: 1 } },
      { t: '让软件和硬件彼此更懂对方、协同更顺', d: { co_optimization: 3, hw_sw: 1, device_edge_cloud: 1 } },
      { t: '让 AI 在专用加速器上跑得更快更省', d: { accelerator_arch: 3, efficient_inference_hw: 1, npu: 1 } },
      { t: '让固件、驱动和启动链路真正长期稳定工作', d: { firmware_sys: 3, realtime_embedded: 1, lowlevel_integration: 1 } }
    ]
  },
  {
    id: 's3_ce_02',
    phase: 'deep',
    cat: 'CE 深挖 / 体系结构',
    triggerDirs: ['mem_sys', 'processor_arch', 'system_integration', 'digital_system_design'],
    text: '如果你更偏体系结构，最想长期攻哪类瓶颈？',
    opts: [
      { t: '算得再快也没用，真正卡住的是数据搬运', d: { mem_sys: 3, processor_arch: 1, accelerator_arch: 1 } },
      { t: '执行路径怎样设计，才能把周期尽量吃满', d: { processor_arch: 3, parallel_arch: 1, hetero_arch: 1 } },
      { t: '越来越多模块放进一颗平台后怎样别互相堵', d: { system_integration: 4, computer_interfacing: 1, device_edge_cloud: 1 } },
      { t: '把数字逻辑本身组织得更清楚、更可验证', d: { digital_system_design: 4, logic_des: 1, processor_arch: 1 } }
    ]
  },
  {
    id: 's3_ce_03',
    phase: 'deep',
    cat: 'CE 深挖 / AI 计算',
    triggerDirs: ['accelerator_arch', 'npu', 'in_mem', 'co_optimization'],
    text: '如果你更偏 AI 计算平台，最想长期解决哪类问题？',
    opts: [
      { t: '让专用执行单元真正适配主流模型的计算特征', d: { accelerator_arch: 3, npu: 1, efficient_inference_hw: 1 } },
      { t: '让数据尽量少搬、多在靠近计算的地方完成处理', d: { in_mem: 3, mem_sys: 1, accelerator_arch: 1 } },
      { t: '让编译器、运行时和硬件自动配合起来', d: { co_optimization: 3, hw_sw: 1, accelerator_systems: 1 } },
      { t: '让 AI 计算平台更适合真实端侧和部署场景', d: { npu: 3, efficient_inference_hw: 1, edge_hw_platform: 1 } }
    ]
  },
  {
    id: 's3_ce_04',
    phase: 'deep',
    cat: 'CE 深挖 / 芯片平台',
    triggerDirs: ['system_integration', 'fpga_compute', 'firmware_sys', 'device_edge_cloud'],
    text: '如果你更偏系统级平台，最想长期做哪类事情？',
    opts: [
      { t: '把很多模块、接口和功能真正集成成一个平台', d: { system_integration: 3, device_edge_cloud: 1, firmware_sys: 1 } },
      { t: '用 FPGA 或原型快速验证新思路和新路径', d: { fpga_compute: 3, accelerator_systems: 1, processor_arch: 1 } },
      { t: '把固件、驱动和底层软件栈真正打通', d: { firmware_sys: 3, lowlevel_integration: 1, realtime_embedded: 1 } },
      { t: '把端、边、云三段平台协同成一个长期可维护的体系', d: { device_edge_cloud: 4, edge_hw_platform: 1, computer_interfacing: 1 } }
    ]
  },
  {
    id: 's3_ce_05',
    phase: 'deep',
    cat: 'CE 深挖 / 运行路径',
    triggerDirs: ['co_optimization', 'accelerator_systems', 'firmware_sys', 'parallel_arch', 'efficient_inference_hw'],
    text: '如果你更在意“程序怎样真正跑起来”，更想长期研究哪类路径？',
    opts: [
      { t: '从编译、调度到执行，把整条软件到硬件路径做顺', d: { co_optimization: 3, hw_sw: 1, accelerator_systems: 1 } },
      { t: '从启动、驱动到设备管理，把底层软件做稳', d: { firmware_sys: 3, lowlevel_integration: 1, realtime_embedded: 1 } },
      { t: '从很多核心并行协作的角度把执行路径吃满', d: { parallel_arch: 3, processor_arch: 1, hetero_arch: 1 } },
      { t: '从模型、算子和部署限制出发，把推理硬件平台做强', d: { efficient_inference_hw: 3, accelerator_arch: 1, sparse_hw: 1 } }
    ]
  },
  {
    id: 's3_ce_06',
    phase: 'deep',
    cat: 'CE 深挖 / 数据流',
    triggerDirs: ['mem_sys', 'device_edge_cloud', 'in_mem', 'sensor_compute'],
    text: '如果你更着迷于“数据在系统里怎么走”，最想长期做哪类问题？',
    opts: [
      { t: '缓存和内存层级怎样别拖慢整机表现', d: { mem_sys: 3, processor_arch: 1, accelerator_arch: 1 } },
      { t: '端、边、云之间怎样协同，别让数据和计算断层', d: { device_edge_cloud: 4, computer_interfacing: 1, edge_hw_platform: 1 } },
      { t: '把数据尽量留在靠近计算的位置，减少搬运成本', d: { in_mem: 3, mem_sys: 1, accelerator_arch: 1 } },
      { t: '让传感器、计算单元和设备平台之间的数据衔接更顺', d: { sensor_compute: 3, edge_hw_platform: 1, firmware_sys: 1 } }
    ]
  },
  {
    id: 's3_ce_07',
    phase: 'deep',
    cat: 'CE 深挖 / 长期标签',
    triggerDirs: ['processor_arch', 'co_optimization', 'accelerator_arch', 'fpga_compute'],
    text: '几年后你更希望别人因为你哪类 CE 能力而来找你？',
    opts: [
      { t: '因为你特别会看穿处理器和数据通路真正卡在哪一层', d: { processor_arch: 3, parallel_arch: 1, hetero_arch: 1 } },
      { t: '因为你特别会把软件和硬件一起调顺', d: { co_optimization: 3, hw_sw: 1, accelerator_systems: 1 } },
      { t: '因为你特别会把 AI 计算平台做强做稳', d: { accelerator_arch: 3, efficient_inference_hw: 1, npu: 1 } },
      { t: '因为你特别会把想法先做成原型，再快速验证迭代', d: { fpga_compute: 4, accelerator_systems: 1, reconfigurable_compute: 1 } }
    ]
  },
  {
    id: 's3_ce_08',
    phase: 'deep',
    cat: 'CE 深挖 / 系统瓶颈',
    triggerDirs: ['mem_sys', 'co_optimization', 'hetero_arch', 'efficient_inference_hw'],
    text: '如果你总在查“为什么整机没跑满”，最想长期攻哪类瓶颈？',
    opts: [
      { t: '数据在不同层级之间搬来搬去，真正慢的是访存', d: { mem_sys: 3, processor_arch: 1, accelerator_arch: 1 } },
      { t: '上层软件和下层硬件脱节，整条执行路径不顺', d: { co_optimization: 3, hw_sw: 1, firmware_sys: 1 } },
      { t: '不同类型计算单元搭在一起后，协同方式反而成了瓶颈', d: { hetero_arch: 3, parallel_arch: 1, processor_arch: 1 } },
      { t: 'AI 算子在硬件上总有浪费，性能和功耗都不理想', d: { efficient_inference_hw: 3, sparse_hw: 1, accelerator_arch: 1 } }
    ]
  },
  {
    id: 's3_ce_09',
    phase: 'deep',
    cat: 'CE 深挖 / 工程落点',
    triggerDirs: ['system_integration', 'firmware_sys', 'fpga_compute', 'co_optimization'],
    text: '如果你长期待在工程一线，最想把哪类活磨成自己最稳的本事？',
    opts: [
      { t: '把复杂平台各模块真正集成为能用的系统', d: { system_integration: 4, computer_interfacing: 1, firmware_sys: 1 } },
      { t: '把固件、驱动、启动链和底层软件栈打磨扎实', d: { firmware_sys: 3, lowlevel_integration: 1, realtime_embedded: 1 } },
      { t: '把新硬件思路先快速做成原型并验证', d: { fpga_compute: 3, accelerator_systems: 1, processor_arch: 1 } },
      { t: '把编译、运行时和平台一起调到更匹配', d: { co_optimization: 3, hw_sw: 1, efficient_inference_hw: 1 } }
    ]
  },
  {
    id: 's3_ce_10',
    phase: 'deep',
    cat: 'CE 深挖 / 长期作品',
    triggerDirs: ['parallel_arch', 'accelerator_arch', 'system_integration', 'firmware_sys'],
    text: '如果多年后别人提起你做过的东西，你更希望他们先想到哪一类？',
    opts: [
      { t: '一套明显提高某类并行计算效率的新平台或新架构', d: { parallel_arch: 3, processor_arch: 1, hetero_arch: 1 } },
      { t: '一套把 AI 负载真正跑顺跑稳的专用计算平台', d: { accelerator_arch: 3, efficient_inference_hw: 1, npu: 1 } },
      { t: '一套从设备到平台都能稳定交付的复杂系统', d: { system_integration: 4, computer_interfacing: 1, firmware_sys: 1 } },
      { t: '一套长期可靠的底层软件与设备协同体系', d: { firmware_sys: 3, realtime_embedded: 1, lowlevel_integration: 1 } }
    ]
  },
  {
    id: 's3_ce_11',
    phase: 'deep',
    cat: 'CE 深挖 / 架构分化',
    triggerDirs: ['processor_arch', 'parallel_arch', 'hetero_arch', 'accelerator_arch'],
    text: '如果你更偏“计算架构的分工方式”，最想长期深挖哪类设计？',
    opts: [
      { t: '把处理器本身的执行节奏、流水和控制路径做得更合理', d: { processor_arch: 3, arch: 1, microprocessor_sys: 1 } },
      { t: '让很多计算单元并行起来时仍然能把吞吐吃满', d: { parallel_arch: 3, hetero_arch: 1, arch: 1 } },
      { t: '让不同类型的核心和部件各司其职，整体协同更顺', d: { hetero_arch: 3, parallel_arch: 1, arch: 1 } },
      { t: '围绕特定负载设计专门的加速器体系结构', d: { accelerator_arch: 3, ai_hw: 1, domain_arch: 1 } }
    ]
  },
  {
    id: 's3_ce_12',
    phase: 'deep',
    cat: 'CE 深挖 / 设备世界接口',
    triggerDirs: ['firmware_sys', 'realtime_embedded', 'edge_hw_platform', 'device_edge_cloud'],
    text: '如果你更想把计算能力真正带到设备世界，最想长期做哪类问题？',
    opts: [
      { t: '把固件、启动链和底层 bring-up 做稳，让设备先可靠地活起来', d: { firmware_sys: 3, lowlevel_integration: 1, emb_sw: 1 } },
      { t: '让实时嵌入式系统在严格时限下依然稳定、安全、可控', d: { realtime_embedded: 3, emb_sw: 1, edge_hw_platform: 1 } },
      { t: '把边缘硬件平台和智能设备做成真正可部署、可维护的底座', d: { edge_hw_platform: 3, smart_devices: 1, device_edge_cloud: 1 } },
      { t: '把端、边、云之间的数据和计算协同接起来，不让系统断层', d: { device_edge_cloud: 4, computer_interfacing: 1, edge_hw_platform: 1 } }
    ]
  },
  {
    id: 's3_ce_13',
    phase: 'deep',
    cat: 'CE 深挖 / 设备与底层分化',
    triggerDirs: ['embedded_computing', 'firmware_sys', 'realtime_embedded', 'lowlevel_integration'],
    text: '如果你更想把“设备真的跑起来”这条线做深，最想长期盯哪一层？',
    opts: [
      { t: '把嵌入式计算平台本身做稳，资源紧也能长期工作', d: { embedded_computing: 3, edge_hw_platform: 1, emb_sw: 1 } },
      { t: '把固件、启动、驱动和底层软件链路打磨扎实', d: { firmware_sys: 3, lowlevel_integration: 1, embedded_computing: 1 } },
      { t: '把实时性、安全性和确定性要求都守住', d: { realtime_embedded: 3, firmware_sys: 1, edge_hw_platform: 1 } },
      { t: '把 bring-up、接口打通和低层系统衔接做成强项', d: { lowlevel_integration: 3, firmware_sys: 1, computer_interfacing: 1 } }
    ]
  },
  {
    id: 's3_ce_14',
    phase: 'deep',
    cat: 'CE 深挖 / 数字实现分化',
    triggerDirs: ['accelerator_systems', 'fpga_compute', 'logic_des', 'digital_system_design', 'microprocessor_sys'],
    text: '如果你更偏数字实现和可重构路径，最想长期把哪类能力做深？',
    opts: [
      { t: '用 FPGA 或可重构平台快速试新结构、验证新思路', d: { fpga_compute: 3, reconfigurable_compute: 1, accelerator_systems: 1 } },
      { t: '把逻辑电路本身设计得更清楚、更稳、更可验证', d: { logic_des: 3, digital_system_design: 1, system_integration: 1 } },
      { t: '把数字系统从模块到数据通路组织成更完整的实现体系', d: { digital_system_design: 3, logic_des: 1, microprocessor_sys: 1 } },
      { t: '把处理器和微处理器系统真正做成能长期演进的平台', d: { microprocessor_sys: 3, processor_arch: 1, firmware_sys: 1 } }
    ]
  },
  {
    id: 's3_ce_15',
    phase: 'deep',
    cat: 'CE 深挖 / 系统边界分化',
    triggerDirs: ['computer_interfacing', 'sensor_compute', 'smart_devices', 'edge_hw_platform'],
    text: '如果你更在意“计算系统怎样和真实设备世界接上”，最想长期做哪类边界问题？',
    opts: [
      { t: '把接口、外设和不同模块之间的连接真正做顺', d: { computer_interfacing: 4, lowlevel_integration: 1, sensor_compute: 1 } },
      { t: '把传感器、计算单元和设备平台之间的数据闭环接顺', d: { sensor_compute: 3, edge_hw_platform: 1, firmware_sys: 1 } },
      { t: '把智能设备做成既能跑能力、又能长期被人正常使用的产品', d: { smart_devices: 4, edge_hw_platform: 1, computer_interfacing: 1 } },
      { t: '把边缘硬件平台做成稳定可部署的底座，而不只是 demo 板', d: { edge_hw_platform: 4, embedded_computing: 1, firmware_sys: 1 } }
    ]
  },
  {
    id: 's3_ce_16',
    phase: 'deep',
    cat: 'CE 深挖 / AI 硬件路线细分',
    triggerDirs: ['accelerator_systems', 'npu', 'efficient_inference_hw', 'training_hw', 'sparse_hw'],
    text: '如果你长期留在 AI 硬件这条线，更想把哪类能力磨成别人第一个想到你的地方？',
    opts: [
      { t: '把 NPU 这类专用单元设计成真正适配主流模型的执行核心', d: { npu: 4, accelerator_arch: 1, ai_hw: 1 } },
      { t: '把推理硬件做成低延迟、低功耗、适合真实部署的平台', d: { efficient_inference_hw: 4, npu: 1, edge_hw_platform: 1 } },
      { t: '把训练集群和训练硬件做成更稳、更快、更能扛规模', d: { training_hw: 4, parallel_arch: 1, accelerator_arch: 1 } },
      { t: '围绕稀疏、量化和特殊数据流把硬件利用率逼上去', d: { sparse_hw: 4, efficient_inference_hw: 1, accelerator_arch: 1 } }
    ]
  },
  {
    id: 's3_ce_17',
    phase: 'deep',
    cat: 'CE 深挖 / 设备边界细分',
    triggerDirs: ['computer_interfacing', 'sensor_compute', 'smart_devices', 'edge_hw_platform'],
    text: '如果你长期做“设备世界的计算边界”，更想把哪类问题做到最强？',
    opts: [
      { t: '把接口、外设和不同模块之间的连接时序全部接顺', d: { computer_interfacing: 4, lowlevel_integration: 1, sensor_compute: 1 } },
      { t: '把传感器、计算链路和平台之间的数据闭环做得更稳', d: { sensor_compute: 4, edge_hw_platform: 1, firmware_sys: 1 } },
      { t: '把智能设备做成真正长期能被人使用和维护的产品', d: { smart_devices: 4, edge_hw_platform: 1, computer_interfacing: 1 } },
      { t: '把边缘硬件平台打磨成可部署、可迭代、可维护的底座', d: { edge_hw_platform: 4, embedded_computing: 1, firmware_sys: 1 } }
    ]
  },
  {
    id: 's3_ce_18',
    phase: 'deep',
    cat: 'CE 深挖 / 底层系统协同细分',
    triggerDirs: ['embedded_computing', 'device_edge_cloud', 'system_integration', 'lowlevel_integration'],
    text: '如果你长期做“系统真正从底层跑起来”，更想把哪类协同问题做深？',
    opts: [
      { t: '把嵌入式计算平台本身做稳，资源紧也能长期可靠工作', d: { embedded_computing: 4, firmware_sys: 1, edge_hw_platform: 1 } },
      { t: '把端、边、云之间的数据与计算协同做成长期可维护的体系', d: { device_edge_cloud: 4, computer_interfacing: 1, edge_hw_platform: 1 } },
      { t: '把复杂模块真正集成为一个能交付、能演进、能定位问题的平台', d: { system_integration: 4, computer_interfacing: 1, firmware_sys: 1 } },
      { t: '把 bring-up、驱动、接口和底层链路打磨成自己的强项', d: { lowlevel_integration: 4, firmware_sys: 1, embedded_computing: 1 } }
    ]
  },
  {
    id: 's3_ce_19',
    phase: 'deep',
    cat: 'CE 深挖 / 芯片平台实现细分',
    triggerDirs: ['soc', 'fpga', 'reconfigurable_compute', 'lowlevel_computer_design'],
    text: '如果你长期做“芯片平台如何被真正实现”，更想把哪类能力做成自己最熟的一手活？',
    opts: [
      { t: '把 SoC 平台上的模块、总线和协同关系做成长期可演进体系', d: { soc: 4, co_optimization: 1, processor_arch: 1 } },
      { t: '把 FPGA 路线做成原型验证和工程落地的核心能力', d: { fpga: 4, fpga_compute: 1, reconfigurable_compute: 1 } },
      { t: '围绕可重构计算，把结构和负载适配做得更灵活更高效', d: { reconfigurable_compute: 4, fpga_compute: 1, accelerator_systems: 1 } },
      { t: '把低层计算机设计做扎实，从板级到系统级都真正说得清楚', d: { lowlevel_computer_design: 4, lowlevel_integration: 1, computer_interfacing: 1 } }
    ]
  },
  {
    id: 's3_ce_20',
    phase: 'deep',
    cat: 'CE 深挖 / 专用系统路线细分',
    triggerDirs: ['domain_arch', 'training_hw', 'cps_computer', 'soc'],
    text: '如果你长期做“面向场景的计算平台”，更想把哪类专用路线做深？',
    opts: [
      { t: '围绕某一类工作负载设计专门的架构，而不是做通用解法', d: { domain_arch: 4, accelerator_arch: 1, ai_hw: 1 } },
      { t: '把训练硬件和训练系统做成真正能扛规模的底座', d: { training_hw: 4, parallel_arch: 1, accelerator_arch: 1 } },
      { t: '把感知、计算、控制与物理世界一起组织成真正的计算机化 CPS 平台', d: { cps_computer: 4, sensor_compute: 1, edge_hw_platform: 1 } },
      { t: '把 SoC 级的平台能力做深，让硬件与软件协同从一开始就更顺', d: { soc: 4, co_optimization: 1, firmware_sys: 1 } }
    ]
  },
  {
    id: 's3_ce_21',
    phase: 'deep',
    cat: 'CE 深挖 / 加速器系统细分',
    triggerDirs: ['accelerator_systems', 'accelerator_arch', 'efficient_inference_hw', 'fpga_compute'],
    text: '如果你长期做“加速器怎样真正成为可用系统”，更想把哪类能力磨成硬本事？',
    opts: [
      { t: '把加速器和主系统之间的接口、调度和协同做顺，不让好硬件卡在系统里', d: { accelerator_systems: 4, co_optimization: 1, computer_interfacing: 1 } },
      { t: '把加速器架构本身做强，让核心数据通路和执行单元更适配目标负载', d: { accelerator_arch: 4, accelerator_systems: 1, npu: 1 } },
      { t: '把推理场景里的硬件效率、延迟和功耗压到真正可部署的水平', d: { efficient_inference_hw: 4, accelerator_systems: 1, sparse_hw: 1 } },
      { t: '用 FPGA 或原型平台快速验证新型加速器思路，再推向更正式实现', d: { fpga_compute: 4, accelerator_systems: 1, reconfigurable_compute: 1 } }
    ]
  },
  {
    id: 's3_ce_22',
    phase: 'deep',
    cat: 'CE 深挖 / 设备产品与平台边界细分',
    triggerDirs: ['smart_devices', 'computer_interfacing', 'edge_hw_platform', 'system_integration'],
    text: '如果你长期做“设备世界里的计算平台”，更想把哪类问题磨成熟手？',
    opts: [
      { t: '把智能设备真正做成用户会长期使用、维护成本可控的产品', d: { smart_devices: 4, edge_hw_platform: 1, computer_interfacing: 1 } },
      { t: '把接口、外设和各种模块之间的连接与时序全部接顺', d: { computer_interfacing: 4, lowlevel_integration: 1, sensor_compute: 1 } },
      { t: '把边缘硬件平台做成稳定、可部署、可扩展的底座', d: { edge_hw_platform: 4, embedded_computing: 1, firmware_sys: 1 } },
      { t: '把复杂模块真正整合为一个长期可交付、可迭代的平台系统', d: { system_integration: 4, device_edge_cloud: 1, firmware_sys: 1 } }
    ]
  },
  {
    id: 's3_ce_23',
    phase: 'deep',
    cat: 'CE 深挖 / 平台实现路线细分',
    triggerDirs: ['soc', 'fpga', 'reconfigurable_compute', 'lowlevel_computer_design'],
    text: '如果你长期做“平台怎样从设计变成真正可运行的系统”，更想把哪条路线做深？',
    opts: [
      { t: '把 SoC 级平台做深，让很多模块从一开始就更好协同', d: { soc: 4, processor_arch: 1, co_optimization: 1 } },
      { t: '把 FPGA 路线做成原型验证和工程落地的硬本事', d: { fpga: 4, fpga_compute: 1, reconfigurable_compute: 1 } },
      { t: '围绕可重构计算，把结构与负载适配做得更灵活高效', d: { reconfigurable_compute: 4, fpga_compute: 1, accelerator_systems: 1 } },
      { t: '把低层计算机设计做扎实，从板级到系统级都真正说得清楚', d: { lowlevel_computer_design: 4, lowlevel_integration: 1, computer_interfacing: 1 } }
    ]
  },
  {
    id: 's3_ce_branch_01',
    phase: 'deep',
    cat: 'CE 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 1,
    text: '如果以后一直留在 CE 里，你更想把哪类计算机工程能力慢慢坐成主线？',
    opts: [
      { t: '处理器和体系结构，重点是计算单元、数据通路和内存层级怎样组织', d: { processor_arch: 2, mem_sys: 2, parallel_arch: 1, hetero_arch: 1 } },
      { t: '嵌入式和固件，重点是设备怎样从底层稳定地活起来并长期运行', d: { embedded_computing: 2, firmware_sys: 2, realtime_embedded: 1, lowlevel_integration: 1 } },
      { t: '软硬件协同，重点是编译、运行时和硬件怎样真正配合', d: { co_optimization: 2, hw_sw: 2, accelerator_systems: 1, soc: 1 } },
      { t: '系统集成和设备边界，重点是端侧平台、接口和整机协同怎样做顺', d: { system_integration: 2, device_edge_cloud: 1, computer_interfacing: 2, edge_hw_platform: 1 } },
      { t: 'AI 硬件和加速器，重点是专用执行、推理和训练平台', d: { accelerator_arch: 2, npu: 1, efficient_inference_hw: 2, training_hw: 1 } },
      { t: '数字实现和 FPGA 路线，重点是逻辑、可重构和原型验证', d: { digital_system_design: 2, logic_des: 1, fpga: 1, fpga_compute: 1, reconfigurable_compute: 1 } }
    ]
  },
  {
    id: 's3_ce_branch_02',
    phase: 'deep',
    cat: 'CE 深挖 / 必问分叉',
    mustBranch: true,
    branchOrder: 2,
    text: '如果你继续在 CE 里往深走，你更想先把哪类最容易混在一起的硬本事分清？',
    opts: [
      { t: '把缓存、内存和数据通路做顺，让系统别总卡在搬数据上', d: { mem_sys: 2, processor_arch: 1, accelerator_arch: 1 } },
      { t: '把 SoC 和复杂平台集成做好，让很多模块从一开始就更协同', d: { soc: 2, system_integration: 2, co_optimization: 1 } },
      { t: '把固件、启动、bring-up 和底层链路打磨成强项', d: { firmware_sys: 2, lowlevel_integration: 2, embedded_computing: 1 } },
      { t: '把端、边、云和设备平台的协同做成可长期维护的体系', d: { device_edge_cloud: 2, edge_hw_platform: 2, computer_interfacing: 1 } },
      { t: '把 NPU、推理硬件和专用 AI 平台做成真正可部署的能力', d: { npu: 2, efficient_inference_hw: 2, accelerator_systems: 1 } },
      { t: '把 FPGA、可重构和快速原型验证这条路走成别人先想到你的本事', d: { fpga: 2, fpga_compute: 2, reconfigurable_compute: 1 } }
    ]
  }
];

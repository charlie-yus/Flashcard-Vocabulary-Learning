import React from 'react';
import { Flashcard, Category } from './types';

export const flashcardsData: Flashcard[] = [
  // --- 第一模块：基石篇 ---
  {
    id: 'c1',
    category: Category.CORNERSTONE,
    question: '质量 (Quality)',
    answer: '客体的一组固有特性满足要求的程度。',
    memory: (
      <div>
        <div className="font-bold mb-1">口诀：客固要度</div>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>客体：</strong>一杯奶茶</li>
          <li><strong>固有特性：</strong>茶底口感、珍珠Q弹度、温度</li>
          <li><strong>要求：</strong>你点的单</li>
          <li><strong>满足...程度：</strong>喝第一口的瞬间感受</li>
        </ul>
      </div>
    )
  },
  {
    id: 'c2',
    category: Category.CORNERSTONE,
    question: '质量管理 (Quality Management)',
    answer: '在质量方面指挥和控制组织的协调的活动。',
    memory: (
      <div>
        <div className="font-bold mb-1">场景：指挥家带团演出</div>
        <ul className="list-disc pl-4 space-y-1">
          <li><strong>组织：</strong>台下的乐手们</li>
          <li><strong>目标：</strong>演奏完美乐章（在质量方面）</li>
          <li><strong>指挥：</strong>挥棒指引方向（指挥）</li>
          <li><strong>控制：</strong>纠正跑调（控制）</li>
          <li><strong>结果：</strong>配合天衣无缝（协调的活动）</li>
        </ul>
      </div>
    )
  },
  {
    id: 'c3',
    category: Category.CORNERSTONE,
    question: '质量管理的原则',
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>一个中心：</strong>持续改进</li>
        <li><strong>两个基本点：</strong>
          <ul className="list-circle pl-4 mt-1">
            <li>内部：领导作用、全员参与</li>
            <li>外部：以顾客为关注焦点、关系管理</li>
          </ul>
        </li>
        <li><strong>两种方法：</strong>过程方法、循证决策</li>
      </ul>
    ),
    memory: (
      <div className="space-y-2">
        <p><strong>餐厅经营法：</strong></p>
        <p><strong>中心：</strong>这口汤要一直熬，味道要一直精进（持续改进）。</p>
        <p><strong>基本点：</strong>厨房里要有领导和全员帮忙（内部）；外面要盯着顾客（外部）。</p>
        <p><strong>方法：</strong>炒菜流程不能乱（过程方法）；咸不咸拿糖度计测（循证决策）。</p>
      </div>
    )
  },
  {
    id: 'c4',
    category: Category.CORNERSTONE,
    question: '现代质量管理理论的发展历程',
    answer: (
      <ol className="list-decimal pl-4 space-y-1">
        <li>质量检验阶段</li>
        <li>统计质量控制阶段</li>
        <li>全面质量管理阶段</li>
      </ol>
    ),
    supplementary: (
      <div className="space-y-3 mt-2">
        <div>
          <span className="font-bold block">1. 质量检验阶段 (存在问题)</span>
          <ul className="list-disc pl-4 text-xs text-gray-600">
            <li>事后检验：无预防作用</li>
            <li>全数检验不合理：增加成本</li>
            <li>破坏性实验：无法全数检验</li>
          </ul>
          <div className="text-xs bg-gray-100 p-1 mt-1 rounded">记忆：事后才知破坏大，全数累死没办法。</div>
        </div>
        <div>
          <span className="font-bold block">2. 统计质量控制阶段 (存在问题)</span>
          <ul className="list-disc pl-4 text-xs text-gray-600">
            <li>难度大，偏重工序，忽视全过程</li>
            <li>忽视组织管理，不以满足消费者为目的</li>
          </ul>
          <div className="text-xs bg-gray-100 p-1 mt-1 rounded">记忆：统计难，工序偏，忽视管理客不欢。</div>
        </div>
        <div>
          <span className="font-bold block">3. 全面质量管理阶段 (进步)</span>
          <ul className="list-disc pl-4 text-xs text-gray-600">
            <li>全员、全过程、多样化手段</li>
            <li>综合考虑质量、价格、交货期、服务</li>
          </ul>
          <div className="text-xs bg-gray-100 p-1 mt-1 rounded">记忆：全员全程搞多样，综合考虑客至上。</div>
        </div>
      </div>
    )
  },
  {
    id: 'c5',
    category: Category.CORNERSTONE,
    question: '质量管理重要思想家',
    answer: '休哈特、费根堡姆、戴明、石川馨、朱兰、田口玄一、克劳士比',
    memory: (
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>休哈特：</strong>控制图 → <span className="text-gray-500">休想乱动，画图控制。</span></li>
        <li><strong>费根堡姆：</strong>全面质量控制 → <span className="text-gray-500">全面管理，特别费劲。</span></li>
        <li><strong>戴明：</strong>14要点 → <span className="text-gray-500">戴着皇冠，14点光明。</span></li>
        <li><strong>石川馨：</strong>石川图 (鱼骨图) → <span className="text-gray-500">石川河里漂鱼骨。</span></li>
        <li><strong>朱兰：</strong>质量三部曲 (策划/控制/改进)、关键少数 → <span className="text-gray-500">朱唱三部曲，篮装关键果。</span></li>
        <li><strong>田口玄一：</strong>田口方法</li>
        <li><strong>克劳士比：</strong>零缺陷 → <span className="text-gray-500">克服困难，做到零错。</span></li>
      </ul>
    )
  },

  // --- 第二模块：流程篇 (PDCA) ---
  {
    id: 'p1',
    category: Category.PROCESS,
    question: '质量策划的要求 (Plan)',
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>充分考虑质量策划的所有<strong>输入条件</strong></li>
        <li>充分征求<strong>意见</strong>、集思广益</li>
        <li>注重质量策划的<strong>落实</strong></li>
        <li>实施质量策划的<strong>评审</strong></li>
      </ul>
    ),
    memory: (
      <div>
        <div className="font-bold">口诀：苏毅落平阳</div>
        <p className="text-xs text-gray-500 mt-1">想象一个叫苏毅的大将军，虎落平阳被犬欺。</p>
        <ul className="flex gap-2 mt-2 text-sm font-semibold">
          <li className="bg-gray-200 px-2 py-1 rounded">输 (输入)</li>
          <li className="bg-gray-200 px-2 py-1 rounded">意 (意见)</li>
          <li className="bg-gray-200 px-2 py-1 rounded">落 (落实)</li>
          <li className="bg-gray-200 px-2 py-1 rounded">评 (评审)</li>
        </ul>
      </div>
    )
  },
  {
    id: 'p2',
    category: Category.PROCESS,
    question: '质量控制 (Control)',
    answer: '致力于满足质量要求的活动。',
    memory: (
      <div>
         <p>这你要是记不住，过年吃饭和小孩坐一桌。</p>
      </div>
    )
  },
  {
    id: 'p3',
    category: Category.PROCESS,
    question: '控制点设置要注意的问题',
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>有<strong>计划</strong>、有目的地设置</li>
        <li>以质量特性为<strong>对象</strong></li>
        <li>突出<strong>重点</strong>管理</li>
        <li>尽<strong>量</strong>定量表达</li>
        <li>明确<strong>责</strong>任单位</li>
      </ul>
    ),
    memory: (
      <div>
        <div className="font-bold">口诀：计对重，量责</div>
        <div className="text-xs text-gray-500 mt-1">计划、对象、重点、定量、责任</div>
      </div>
    )
  },
  {
    id: 'p4',
    category: Category.PROCESS,
    question: '过程能力',
    answer: '指过程在一定时间处于控制状态（稳定状态）下的实际加工能力。',
    memory: (
      <p><strong>“稳住才能看实力”</strong><br/>稳住 = 控制状态；看实力 = 实际加工能力。</p>
    )
  },
  {
    id: 'p5',
    category: Category.PROCESS,
    question: '质量评价 (Check)',
    answer: '为达到特定目的，评价主体采用相应的标准与方法评判特定对象（如组织的质量体系、过程或产品）的一组固有特性并得出评价结果的过程。',
    memory: (
      <div>
        <div className="font-bold mb-1">场景：《厨神争霸》决赛</div>
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li><strong>特定目的：</strong>选出冠军</li>
          <li><strong>评价主体：</strong>毒舌评委</li>
          <li><strong>标准方法：</strong>米其林评分表</li>
          <li><strong>特定对象：</strong>正在吃的一道菜</li>
          <li><strong>评判内容：</strong>菜的咸淡火候（固有特性）</li>
          <li><strong>评价结果：</strong>举牌打分</li>
        </ul>
      </div>
    )
  },
  {
    id: 'p6',
    category: Category.PROCESS,
    question: '审核 (Audit)',
    answer: '为了获得客观证据，并对其进行客观的评价，以确定满足审核准则的程度所进行的系统的、独立的、形成文件的过程。',
    memory: (
      <div className="font-mono text-sm bg-gray-100 p-2 rounded">
        审核 = (找证据 + 做评价 + 对准则) × (系 + 独 + 文)
      </div>
    )
  },
  {
    id: 'p7',
    category: Category.PROCESS,
    question: '企业开展内部审核',
    answer: (
      <div className="space-y-4">
        <div>
          <strong className="block mb-1">主要原因：</strong>
          <ul className="list-disc pl-4 text-sm">
             <li>满足内部管理需要</li>
             <li>持续改进需要</li>
             <li>确保符合国际标准</li>
             <li>为外部审核做准备</li>
          </ul>
          <div className="text-xs text-gray-500 mt-1 bg-white border border-gray-200 p-1 inline-block rounded">口诀：内管进，外标审</div>
        </div>
        <div>
          <strong className="block mb-1">审核原则：</strong>
          <p className="text-sm">客观性、系统性、独立性、抽样原则、保密原则、采信原则、正面证实原则。</p>
        </div>
      </div>
    ),
    memory: (
      <div>
        <div className="font-bold mb-1">特工 007 (代号七匹狼)</div>
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li><strong>人设：</strong>独立、客观、诚信(采信)</li>
          <li><strong>手段：</strong>系统计划、随机抽样(不能全查)、绝对保密</li>
          <li><strong>目标：</strong>正面证实(证明你是好人，不是找茬)</li>
        </ul>
      </div>
    )
  },
  {
    id: 'p8',
    category: Category.PROCESS,
    question: '质量改进的障碍 (Act)',
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>对自身质量水平认识的局限性</li>
        <li>对失败没有正确的认识</li>
        <li>错误认为“高质量意味着高成本”</li>
        <li>管理者对权力下放的错误认识</li>
        <li>员工的顾虑</li>
      </ul>
    ),
    memory: (
      <div className="text-sm">
        “老板觉得自己牛(认识局限)，怕花钱(高质量=高成本)，出错就骂(失败认识错)。结果不放权，员工不敢说话(顾虑)。这怎么改？”
      </div>
    )
  },

  // --- 第三模块：服务质量篇 ---
  {
    id: 's1',
    category: Category.SERVICE,
    question: '服务 (Service)',
    answer: '至少一项活动必须为在组织和顾客之间进行的组织的输出。',
    memory: '记不住就去和小孩坐一桌。'
  },
  {
    id: 's2',
    category: Category.SERVICE,
    question: '服务金三角',
    answer: (
      <div className="flex flex-col items-center py-2">
        <div className="text-center font-bold mb-2">顾客 (核心)</div>
        <div className="flex justify-between w-full max-w-xs px-4">
            <span>服务组织</span>
            <span>服务人员</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">连接线：互动营销、外部营销、内部营销</div>
      </div>
    )
  },
  {
    id: 's3',
    category: Category.SERVICE,
    question: '服务质量差距模型 (GAP 1)',
    answer: (
      <div>
        <div className="font-bold text-lg mb-2">GAP1：管理者理解的差距</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>没有需求分析</li>
          <li>对市场研究信息不准确</li>
          <li>对期望的解释信息不准确</li>
          <li>管理者获取的信息失真</li>
          <li>组织层次阻碍信息传递</li>
        </ul>
      </div>
    ),
    memory: (
      <div>
        <div className="font-bold">记忆：传声筒断了</div>
        <p className="text-sm text-gray-500">没做、做错、解错、丢了、层级挡</p>
      </div>
    )
  },
  {
    id: 's4',
    category: Category.SERVICE,
    question: '服务质量差距模型 (GAP 2)',
    answer: (
      <div>
        <div className="font-bold text-lg mb-2">GAP2：质量标准的差距</div>
        <ul className="list-disc pl-4 space-y-1">
          <li>计划得不到最高管理层支持</li>
          <li>计划管理混乱</li>
          <li>组织无明确目标</li>
          <li>计划失误或不充分</li>
        </ul>
      </div>
    ),
    memory: (
      <div>
        <div className="font-bold">记忆：无能的规划师</div>
        <ul className="list-disc pl-4 text-sm text-gray-500">
          <li>笔没水 (无支持)</li>
          <li>脑子乱 (管理乱)</li>
          <li>眼神散 (无目标)</li>
          <li>手抖写错 (计划失误)</li>
        </ul>
      </div>
    )
  },
  {
    id: 's5',
    category: Category.SERVICE,
    question: 'SERVQUAL 模型的优缺点',
    answer: (
      <div className="space-y-4">
        <div>
          <strong className="text-green-700">优点：</strong>
          <ul className="list-disc pl-4 text-sm">
            <li>提供有价值信息</li>
            <li>把握真实看法</li>
            <li>理解期望与感知</li>
          </ul>
        </div>
        <div>
          <strong className="text-red-700">缺点：</strong>
          <ul className="list-disc pl-4 text-sm">
            <li>项目多，操作复杂</li>
            <li>权重/顺序影响大</li>
            <li>感知滞后性</li>
            <li>行业局限性</li>
          </ul>
        </div>
      </div>
    ),
    memory: (
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <strong className="block mb-1">优点：金牌侦探</strong>
          <p>多 (信息)、真 (看法)、深 (理解)</p>
        </div>
        <div>
          <strong className="block mb-1">缺点：怪人</strong>
          <p>繁 (操作)、敏 (权重)、慢 (滞后)、挑 (局限)</p>
        </div>
      </div>
    )
  },

  // --- 第四模块：进阶与变革篇 ---
  {
    id: 'a1',
    category: Category.ADVANCE,
    question: '卓越质量经营模式与企业绩效',
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>引导企业追求相关方<strong>利益平衡</strong></li>
        <li>引导企业与竞争对手进行<strong>比较</strong></li>
        <li>引导企业树立<strong>前瞻意识</strong>，保持领先</li>
        <li>引导企业建设<strong>可持续</strong>经营绩效的企业文化</li>
      </ul>
    ),
    memory: (
      <div className="space-y-1">
        <p><strong>横轴 (空间)：</strong>对外盯对手(比较)，对内建文化(可持续)</p>
        <p><strong>纵轴 (时间)：</strong>未来有前瞻，当下搞平衡。</p>
      </div>
    )
  },
  {
    id: 'a2',
    category: Category.ADVANCE,
    question: 'ISO 9000族标准的意义',
    answer: (
      <ul className="list-disc pl-4 space-y-1">
        <li>对内：提高运作能力、利于持续改进、提高产品质量</li>
        <li>对外：消除贸易壁垒、满足顾客需求、保护消费者利益</li>
      </ul>
    ),
    memory: (
      <div>
        <div className="font-bold">口诀：运改质，顾外贸 (护照隐喻)</div>
        <p className="text-sm text-gray-500">
          对内：练好内功 (运作、改进、质量)<br/>
          对外：拿着护照出国 (无壁垒)，老百姓敢买 (顾客/利益)
        </p>
      </div>
    )
  },
  {
    id: 'a3',
    category: Category.ADVANCE,
    question: '业务流程重组 (BPR)',
    answer: '对企业的生产流程做根本性的思考和彻底重建，使产品在成本、质量和生产速度等方面取得显著改善。',
    memory: (
      <div>
        <ul className="list-disc pl-4 space-y-1">
           <li><strong>2个动作：</strong>根本性 (思考)、彻底 (重建)</li>
           <li><strong>3个指标：</strong>成本、质量、速度</li>
           <li><strong>1个结果：</strong>显著改善</li>
        </ul>
      </div>
    )
  },
  {
    id: 'a4',
    category: Category.ADVANCE,
    question: '六西格玛流程 (DMAIC)',
    answer: (
      <div className="flex gap-2 font-bold text-center justify-center">
        <span>定义<br/>D</span>
        <span>→</span>
        <span>评估<br/>M</span>
        <span>→</span>
        <span>分析<br/>A</span>
        <span>→</span>
        <span>改进<br/>I</span>
        <span>→</span>
        <span>控制<br/>C</span>
      </div>
    ),
    memory: (
      <p><strong>口诀：定平分改空</strong> (想象改卷子：定标准、评分、分析错题、改正、控制分数)</p>
    )
  },
];
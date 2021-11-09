<template>
    <div id='test1ResultContainer'>
        <div id="test1ResultTop">
            <div id="theName">{{name}},</div>
            <div id="theTitle">你的人格测试结果</div>
            <div id="block1">
                <div class="resultA">{{resA}}</div>
                <div class="resultB">开放性</div>
                <div class="resultC">开放性意味着你是否愿意接受新兴事物</div>
            </div>
            <div id="block2">
                <div class="resultA">{{resB}}</div>
                <div class="resultB">严谨性</div>
                <div class="resultC">尽责性意味着你的自律和责任感</div>
            </div>
            <div id="block3">
                <div class="resultA">{{resC}}</div>
                <div class="resultB">外倾性</div>
                <div class="resultC">外倾性代表你是否喜欢与人们一起</div>
            </div>
            <div id="block4">
                <div class="resultA">{{resD}}</div>
                <div class="resultB">宜人性</div>
                <div class="resultC">宜人性考察你对其他人的亲和力</div>
            </div>
            <div id="block5">
                <div class="resultA">{{resE}}</div>
                <div class="resultB">情绪稳定性</div>
                <div class="resultC">情绪稳定性是代表你控制情绪的能力</div>
            </div>
            <div id="testDes">　
                你比较安静，谨慎，不喜欢与外界过多接触，不喜欢与人接触不能被解释为害羞或者抑郁，这仅仅是因为比起高外向的人，他们不需要那么多的刺激，因此喜欢一个人独处，这种特点有时会被人误认为是傲慢或者不友好，其实一旦和他接触你经常会发现他是一个非常和善的人。你是善解人意的、友好的、慷慨大方的、乐于助人的，愿意为了别人放弃自己的利益。宜人性高的人对人性持乐观的态度，相信人性本善。高尽责的人容易避免麻烦，能够获得更大的成功。人们一般认为高尽责的人更加聪明和可靠，但是高尽责的人可能是一个完美主义者或者是一个工作狂。极端尽责的个体让人觉得单调、乏味、缺少生气。你有较少烦恼，较少情绪化，比较平静，但这并不表明他们经常会有积极的情绪体验。
            </div>
        </div>
        <div id="aboutContainer">
            <div id="aboutTitle">关于五大人格</div>
            <div class="about">
                <div id="line1"></div>
                <Test1ResultDes :text1='text1' :text2='text2' :text3='text3' :text4='text4' :text5='text5'
                    :text6='text6' :text7='text7' :text8='text8' :text9='text9' :text10='text10' :text11='text11'
                    :num='num1' :title='title1'>
                </Test1ResultDes>
            </div>
            <div class="about">
                <div id="line2"></div>
                <Test1ResultDes :text1='text12' :text2='text13' :text3='text14' :text4='text15' :text5='text16'
                    :text6='text17' :text7='text18' :text8='text19' :text9='text20' :text10='text21' :text11='text22'
                    :text12='text23' :text13='text24' :num='num2' :title='title2'>
                </Test1ResultDes>
            </div>
            <div class="about">
                <div id="line3"></div>
                <Test1ResultDes :text1='text25' :text2='text26' :text3='text27' :text4='text28' :text5='text29'
                    :text6='text30' :text7='text31' :text8='text32' :text9='text33' :text10='text34' :text11='text35'
                    :text12='text36' :text13='text37' :num='num3' :title='title3'>
                </Test1ResultDes>
            </div>
            <div class="about">
                <div id="line4"></div>
                <Test1ResultDes :text1='text38' :text2='text39' :text3='text40' :text4='text41' :text5='text42'
                    :text6='text43' :text7='text44' :text8='text45' :text9='text46' :text10='text47' :text11='text48'
                    :text12='text49' :text13='text50' :num='num4' :title='title4'>
                </Test1ResultDes>
            </div>
            <div class="about">
                <div id="line5"></div>
                <Test1ResultDes :text1='text51' :text2='text52' :text3='text53' :text4='text54' :text5='text55'
                    :text6='text56' :text7='text57' :text8='text58' :text9='text59' :text10='text60' :text11='text61'
                    :text12='text62' :text13='text63' :num='num5' :title='title5'>
                </Test1ResultDes>
            </div>
        </div>
        <Foot id="test1ResultFoot"></Foot>
    </div>
</template>

<script>
    import Test1ResultDes from '@/components/TestCom/Test1ResultDes.vue'
    export default {
        data() {
            return {
                name: this.cookie.getCookie('userName'),
                num1: '01',
                title1: '开放性',
                text1: '开放性描述一个人的认知风格。对经验的开放性被定义为：为了自身的缘故对经验的前摄（proactive）寻求和对的理解，以及对陌生情境的容忍和探索。这个维度将那些好奇的、新颖的、非传统的以及有创造性的个体与那些传统的、无艺术兴趣的、无分析能力的个体做比较。开放性的人偏爱抽象思维，兴趣广泛。封闭性的人讲求实际，偏爱常规，比较传统和保守。开放性的人适合教授等职业，封闭性的人适合警察、销售、服务性职业等。',
                text2: '想象力',
                text3: '对想象开放的人有生动的想象和活跃的幻想生活。他们的白日梦不仅仅只是一种逃避，而更是一种创造有趣的内心世界的方式。他们详尽描述和展开他们的幻想，并相信想象对丰富多彩的、有创造性的生活功不可没。低分者更单调乏味，喜欢把注意力放在手头的任务上。',
                text4: '审美',
                text5: '高分者对艺术和美有很深刻的理解。他们被诗歌感动、陶醉于音乐之中，为艺术所触动。他们不一定有艺术的天赋，甚至不必和许多人认为的那样有高品位，但他们中的大多数人对艺术感兴趣，这使得他们比常人发展更广泛的知识和欣赏能力。低分者相对来说，对艺术和美不那么敏感和感兴趣。',
                text6: '感受丰富',
                text7: '表示对自己的内心感受的接纳能力，把情绪评价为生活中的重要组成部分。高分者能体验到更深的情绪状态，并能不同的情绪状态区分开来，他们比其他人更强烈地体验到开心和不开心。低分者感情较迟钝，不认为感受状态有多重要。',
                text8: '尝新',
                text9: '开放性在行为上被视为愿意尝试不同的活动、去新的地方、吃不寻常的食物。高分者更喜欢新奇和多样性的事物，而不是熟悉和常规的事物。在一段时间内，他可能有一系列不同的爱好。低分者发现改变有困难，宁可坚持已尝试过的、可靠的活动',
                text10: '思辨',
                text11: '求知欲是开放性的一个方面，不仅体现在为了他们自身的缘故而积极追求理智上的兴趣（intellectual interests），而且表现为思路开阔、愿意思考新的、非常规的观点。高分者喜欢哲学的辩论和“头脑风暴”（brain-teasers）。低分者的求知欲有限，如果他们是聪明的，也只是将他们的资源狭窄地集中于有限地几个主题上。',
                num2: '02',
                title2: '严谨性',
                text12: '严谨性指我们控制、管理和调节自身冲动的方式，评估个体在目标导向行为上的组织、坚持和动机。它把可信赖的、讲究的个体和懒散的、马虎的个体作比较。同时反映个体自我控制的程度以及推迟需求满足的能力。冲动并不一定就是坏事，有时候环境要求我们能够快速决策。冲动的个体常被认为是快乐的、有趣的、很好的玩伴。但是冲动的行为常常会给自己带来麻烦，虽然会给个体带来暂时的满足，但却容易产生长期的不良后果，比如攻击他人，吸食毒品等。',
                text13: '能力',
                text14: '表示对某人有能力的、明智的、深谋远虑的、高效的感觉。高分者感到对应付生活有很充分的准备。低分者对自己的能力看法较低，他们承认自己常常准备补充，而且无能。',
                text15: '条理性',
                text16: '高分者整齐、整洁、组织得很有条理，他们把东西摆放在恰当的地方。低分者不能很好地组织，认为自己很没有条理。',
                text17: '责任感',
                text18: '从某方面来说，责任心意味着受良心的支配，而那是由尽责这一子维度来评估的。高分者严格遵守他们的道德原则，一丝不苟地完成他们的道德义务。低分者在这些事情上是漫不经心的，多少不可信赖或不可靠。',
                text19: '追求成就',
                text20: '高分者有较高的抱负水平，并努力工作以实现他们的目标。他们勤奋、有目标、有生活方向感。低分者懒散，甚至可能懒惰，他们没有追求成功的动力，缺乏抱负，可能看起来毫无目标，但他们常常对自己低水平的成就感到非常满意。',
                text21: '自律',
                text22: '指即使枯燥乏味或有其它干扰，也能执行任务并将其完成。高分者有激励自己把工作完成的能力。低分者拖延例行工作开始的时间，容易丧失信心并放弃。',
                text23: '审慎',
                text24: '这个子维度评估行动前是否仔细考虑的倾向。高分者谨慎、深思熟虑。低分者草率、说话做事不计后果。',
                num3: '03',
                title3: '外倾性',
                text25: '外向性来表示人际互动的数量和密度、对刺激的需要以及获得愉悦的能力。这个维度将社会性的、主动的、个人定向的个体和沉默的、严肃的、腼腆的、安静的人作对比。这个方面可由两个品质加以衡量：人际的卷入水平和活力水平。前者评估个体喜欢他人陪伴的程度，而后者反映了个体个人的节奏和活力水平。外向的人喜欢与人接触，充满活力，经常感受到积极的情绪。他们热情，喜欢运动，喜欢刺激冒险。在一个群体当中，他们非常健谈，自信，喜欢引起别人的注意。内向的人比较安静，谨慎，不喜欢与外界过多接触。他们不喜欢与人接触不能被解释为害羞或者抑郁，这仅仅是因为比起外向的人，他们不需要那么多的刺激，因此喜欢一个人独处。内向人的这种特点有时会被人误认为是傲慢或者不友好，其实一旦和他接触你经常会发现他是一个非常和善的人',
                text26: '热情',
                text27: '它和人际亲密问题最相关。热情的人富有感情、友好。他们真心地喜欢他人，并很容易和别人形成亲密的关系。低分者并不是怀有敌意或一定缺少同情心，而是更正式、沉默、在行为举止上比高分者冷淡。',
                text28: '乐群性',
                text29: '指偏爱有他人的陪伴。合群的人喜欢他人的陪同，人越多他就越开心。低分者往往是孤独者，他不寻求甚至主动避免社会刺激。',
                text30: '独断性',
                text31: '高分者有支配性、有说服力、在社会上有支配力的。他们说话毫不犹豫，通常成为群体的领导。低分者宁愿躲在幕后，让他人谈论。',
                text32: '活力',
                text33: '在这项上得高分被视为快节奏和激烈的运动，有活力感，有保持忙碌的需要，忙碌的人过着快节奏的生活。低分者更悠闲和放松，但不一定懒惰或行动迟缓。',
                text34: '寻求刺激',
                text35: '高分者渴望得到兴奋和刺激，喜欢鲜亮的（bright color）、喧闹的环境。寻求刺激类似于寻找感觉的一些方面。低分者几乎对兴奋没有什么需要，喜欢那种被高分者看来是枯燥的生活。',
                text36: '积极情绪',
                text37: '表示体验积极情绪（如喜悦、快乐、爱和兴奋）的倾向。',
                num4: '04',
                title4: '宜人性',
                text38: '宜人性是评估个体喜欢与他人一同出现的程度，而宜人性则考察个体对其他人所持的态度，这些态度一方面包括亲近人的、有同情心的、信任他人的、宽大的、心软的，另一方面包括敌对的、愤世嫉俗的、爱摆布人的、复仇心重的、无情的。这里所说的广义的人际定向范围。宜人性代表了“爱”，对合作和人际和谐是否看重。宜人性高的人是善解人意的、友好的、慷慨大方的、乐于助人的，愿意为了别人放弃自己的利益。宜人性高的人对人性持乐观的态度，相信人性本善。宜人性低的人则把自己的利益放在别人的利益之上。本质上，他们不关心别人的利益，因此也不乐意去帮助别人。有时候，他们对别人是非常多疑的，怀疑别人的动机。对于某些职位来说，太高的宜人性是没有必要的，尤其是需要强硬和客观判断的场合，例如科学家、评论家和士兵。',
                text39: '信任',
                text40: '高分者认为他人是诚实的、是心怀善意的。低分者往往愤世嫉俗、有疑心，认为他人不诚实、是危险的。',
                text41: '坦诚',
                text42: '高分者为人坦率、真挚、老实。低分者更愿意通过奉承、诡辩、欺骗来操纵别人。他们认为这是必要的社会技能，认为直率的人很天真。',
                text43: '利他',
                text44: '高分者主动关心别人的幸福，表现在对他人的慷慨和关心上以及在别人需要帮助时提供帮助的意愿上。低分者多少有点自我中心，不愿意卷入别人的麻烦中去。',
                text45: '顺从',
                text46: '表示与人际冲突有关的性格。高分者往往尊重服从他人，克制攻击性、宽恕和遗忘的。顺从的人很温顺、温和。低分者有攻击性，更喜欢竞争而不是合作，在必要时毫不客气地表示愤怒',
                text47: '谦逊',
                text48: '高分者很谦逊，不爱出风头（self-effacing）。低分者认为自己高人一等，其他人可能认为他们自负、傲慢',
                text49: '同理心',
                text50: '这是测量对他人的同情心和关心的态度。高分者为他人的需要所动，强大社会政策中人道的部分。低分者更铁石心肠，很少为恳求所打动而产生怜悯之感。他们将自己视为现实主义者，在冷静的逻辑推理的基础上做出理性的决策。',
                num5: '05',
                title5: '情绪稳定性',
                text51: '神经质反映个体情感调节过程，反映个体体验消极情绪的倾向和情绪不稳定性。高神经质个体倾向于有心理压力，不现实的想法、过多的要求和冲动，更容易体验到诸如愤怒、焦虑、抑郁等消极的情绪。他们对外界刺激反应比一般人强烈，对情绪的调节、应对能力比较差，经常处于一种不良的情绪状态下。并且这些人思维、决策、以及有效应对外部压力的能力比较差。相反，神经质维度得分低的人较少烦恼，较少情绪化，比较平静。神经质有六个子维度，对于每个子维度都有一些说明性的形容词',
                text52: '焦虑',
                text53: '焦虑的个体忧虑、恐惧、容易担忧、紧张、神经过敏。得高分的人更可能有自由浮动的焦虑和恐惧。低分的人则是平静的、放松的。他们不会总是担心事情可能会出问题。',
                text54: '愤怒和敌意',
                text55: '反映的是体验愤怒以及有关状态（如挫折、痛苦）的倾向，测量个体体验愤怒的容易程度。',
                text56: '抑郁',
                text57: '测量正常个体在体验抑郁情感时的不同倾向。高分者容易感到内疚、悲伤、失望和孤独。他们容易受打击，经常情绪低落。低分者很少有这种情绪体验。',
                text58: '自我意识',
                text59: '核心部分是害羞和尴尬情绪体验。这样的个体在人群中会感到不舒服、对嘲弄敏感、容易产生自卑感。自我意识类似于害羞和社交焦虑。低分者不一定有优雅良好的社会技能，他们只是较少被一些难堪的社会情景所扰乱。',
                text60: '冲动性',
                text61: '指个体对冲动和渴望的控制。个体对欲望的觉察太强烈（如对食物、香烟和财产）以致不能抗拒，虽然事后他们也会为他们的行为后悔。低分者更易抵挡这些诱惑，对挫折有更高的容忍力。',
                text62: '脆弱性',
                text63: '指在遭受压力时的脆弱性。高分者应付压力能力差，遇到紧急情况时变得依赖、失去希望、惊慌失措。低分者认为他们自己能正确处理困难情况。',
                result1A: 0,
                result1B: 0,
                result1C: 0,
                result1D: 0,
                result1E: 0,
                resA: '',
                resB: '',
                resC: '',
                resD: '',
                resE: '',
            }
        },
        components: {
            Test1ResultDes,
        },
        created() {
            this.result1A = this.$route.query.result1A;
            this.result1B = this.$route.query.result1B;
            this.result1C = this.$route.query.result1C;
            this.result1D = this.$route.query.result1D;
            this.result1E = this.$route.query.result1E;
            console.log(this.result1A);
            console.log(this.result1B);
            console.log(this.result1C);
            console.log(this.result1D);
            console.log(this.result1E);
            if (this.result1A <= 12) {
                this.resA = '低';
            } else {
                this.resA = '高';
            }
            if (this.result1B <= 12) {
                this.resB = '低';
            } else {
                this.resB = '高';
            }
            if (this.result1C <= 12) {
                this.resC = '低';
            } else {
                this.resC = '高';
            }
            if (this.result1D <= 12) {
                this.resD = '低';
            } else {
                this.resD = '高';
            }
            if (this.result1E <= 12) {
                this.resE = '低';
            } else {
                this.resE = '高';
            }
        }
    }
</script>

<style lang="less" scoped>
    #test1ResultContainer {
        width: 1920px;
    }

    #test1ResultTop {
        height: 900px;
        width: 1920px;
    }

    #theName {
        position: absolute;
        left: 260px;
        top: 157px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 36px;

    }

    #theTitle {
        position: absolute;
        left: 260px;
        top: 212px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 48px;
    }

    #block1 {
        position: absolute;
        top: 329px;
        left: 260px;
        width: 305px;
        height: 185px;
        border-left: 1px solid black;
    }

    #block2 {
        position: absolute;
        top: 329px;
        left: 565px;
        width: 305px;
        height: 185px;
        border-left: 1px solid black;
    }

    #block3 {
        position: absolute;
        top: 329px;
        left: 870px;
        width: 305px;
        height: 185px;
        border-left: 1px solid black;
    }

    #block4 {
        position: absolute;
        top: 329px;
        left: 1175px;
        width: 305px;
        height: 185px;
        border-left: 1px solid black;
    }

    #block5 {
        position: absolute;
        top: 329px;
        left: 1480px;
        width: 305px;
        height: 185px;
        border-left: 1px solid black;
    }

    .resultA {
        position: absolute;
        top: 22px;
        left: 34px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 36px;
    }

    .resultB {
        position: absolute;
        top: 72px;
        left: 34px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 24px;
    }

    .resultC {
        position: absolute;
        top: 121px;
        left: 31px;
        height: 50px;
        width: 170px;
        color: rgb(85, 77, 77);
        line-height: 150%;
        font-family: PingFangSC-regular;
        font-size: 18px;
    }

    #testDes {
        position: absolute;
        left: 284px;
        top: 640px;
        width: 1352px;
        height: 328px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 22px;
        line-height: 233.265615%;
    }

    #aboutContainer {
        width: 1920px;

        margin-top: 200px;
    }

    #aboutTitle {
        margin-left: 852px;
        color: rgba(0, 0, 0, 1);
        font-family: FZBaoSong-Z04S;
        font-size: 36px;
        line-height: 178.765619%;
    }

    .about {
        margin-left: 260px;
        margin-top: 80px;
    }

    #line1 {
        position: absolute;
        left: 550px;
        width: 1px;
        height: 1050px;
        background-color: dimgray;
    }

    #line2 {
        position: absolute;
        left: 550px;
        width: 1px;
        height: 1030px;
        background-color: dimgray;
    }

    #line3 {
        position: absolute;
        left: 550px;
        width: 1px;
        height: 1170px;
        background-color: dimgray;
    }

    #line4 {
        position: absolute;
        left: 550px;
        width: 1px;
        height: 1140px;
        background-color: dimgray;
    }

    #line5 {
        position: absolute;
        left: 550px;
        width: 1px;
        height: 1100px;
        background-color: dimgray;
    }

    #test1ResultFoot {
        margin-top: 300px;
        border-top: 1px solid black;
    }
</style>
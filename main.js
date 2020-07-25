let quiz = [
    {   
        id:1,
        header: 'My parrot … speak.',
        answers: [
            {text: 'can'},
            {text: 'may', isTrue:true},
        ]
    },{
        id:2,
        header: '… I borrow your pen?',
        answers: [
            {text: 'can'},
            {text: 'may', isTrue:true},
        ]
    },{
        id:3,
        header: 'You … be very careful crossing the road.',
        answers: [
            {text: 'must', isTrue:true},
            {text: 'may'},
        ]
    },{
        id:4,
        header: 'They … leave their son at home as he was not quite well',
        answers: [
            {text: 'have to', isTrue:true},
            {text: 'had to'}
        ]
    },{
        id:5,
        header: 'When our grandpa was a boy, he … sing very well.',
        answers: [
            {text: 'could', isTrue:true},
            {text: 'had to'}
        ]
    },{
        id:6,
        header: 'Tom … soccer every Friday.',
        answers: [
            {text: 'don`t play'},
            {text: 'plays', isTrue:true}
        ]
    },{
        id:7,
        header: '… Lima and her parents often go to the park together?',
        answers: [
            {text: 'does'},
            {text: 'do', isTrue:true}
        ]
    },{
        id:8,
        header: 'Kerry … like broccoli.',
        answers: [
            {text: 'isn`t like'},
            {text: 'doesn`t like', isTrue:true}
        ]
    },{
        id:9,
        header: 'They usually … out their dog in the afternoon',
        answers: [
            {text: 'walk', isTrue:true},
            {text: 'walks'},
        ]
    },{
        id:10,
        header: 'Where … Lima usually buy bread?',
        answers: [
            {text: 'do'},
            {text: 'does', isTrue:true},
        ]
    },{
        id:11,
        header: 'Jerry … call Lima yesterday.',
        answers: [
            {text: 'didn`t', isTrue:true},
            {text: 'doesn`t'}
        ]
    },{
        id:12,
        header: 'We … to Sochi last summer.',
        answers: [
            {text: 'go'},
            {text: 'went', isTrue:true}
        ]
    },{
        id:13,
        header: 'Where … you an hour ago?',
        answers: [
            {text: 'did'},
            {text: 'were', isTrue:true}
        ]
    },{
        id:14,
        header: 'How old … your son when he won his first prize?',
        answers: [
            {text: 'is'},
            {text: 'was', isTrue:true}
        ]
    },{
        id:15,
        header: 'He didn`t … TV in the morning.',
        answers: [
            {text: 'watch', isTrue:true},
            {text: 'watched'},
        ]
    },{
        id:16,
        header: '… Lima … her friends last night?',
        answers: [
            {text: 'did … met'},
            {text: 'did … meet', isTrue:true}
        ]
    },{
        id:17,
        header: 'What … you do next week?',
        answers: [
            {text: 'do'},
            {text: 'will', isTrue:true}
        ]
    },{
        id:18,
        header: 'Tom … go to school tomorrow. He is ill.',
        answers: [
            {text: 'will'},
            {text: 'won`t', isTrue:true},
        ]
    },{
        id:19,
        header: '… you close the window? It is getting cold.',
        answers: [
            {text: 'will', isTrue:true},
            {text: 'do'}
        ]
    },{
        id:20,
        header: 'If we … enough time, we … all the words.',
        answers: [
            {text: 'will have ... will learn'},
            {text: 'have ... will learn', isTrue:true}
        ]
    }

]

let vict = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        quiz: quiz,
        userAnswer: Array(quiz.length).fill(false)
    },
    methods: {
        score(){
            let count = this.userAnswer.filter(el=>el).length;
            count = ((count / this.quiz.length)*100).toFixed(0);
            return count+'%';
        },
        next(){
            this.currentIndex++;
        },
        again(){
            this.currentIndex = 0;
            this.userAnswer = this.userAnswer.fill(false);
        }
    }
})
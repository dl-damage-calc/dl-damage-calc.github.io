var app = new Vue({
    el: '#app',
    data: {
        adv_str: 0,
        adv_color: 0,
        en_color: 2,
        en_def: 10,
        en_def_ch: 0,
        spread: 1,
        modifer: 1,
        crit: 1,
        pun: 1,
        cut: 0,
        damage: 0
    },
    watch: {
        adv_str () {
            this.count()
        },
        adv_color () {
            this.count()
        },
        en_color () {
            this.count()
        }
    },
    computed: {
        adv () {
            return this.adv_list[this.adv_adv][this.en_adv]
        }
    },
    methods: {
        count () {
            this.damage = 4 / 3 * ((1 - this.cut) * this.modifer * this.spread * this.adv_str * this.crit * this.pun) / (0.8 * (this.en_def - this.en_def_ch))
            console.log(this.damage)
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        adv_str: 0,
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
        adv_def () {
            this.count()
        },
        en_def () {
            this.count()
        },
        en_def_ch () {
            this.count()
        },
        spread () {
            this.count()
        },
        modifer () {
            this.count()
        },
        crit () {
            this.count()
        },
        pun () {
            this.count()
        },
        cut () {
            this.count()
        }
    },
    methods: {
        count () {
            this.damage = 4 / 3 * ((1 - this.cut) * this.modifer * this.spread * this.adv_str * this.crit * this.pun) / (0.8 * (this.en_def - this.en_def_ch))
        }
    }
})
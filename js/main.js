// VUE VERSION

Vue.component('book', {
    props: ['item'],
    template: '<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img class="smallImage" :src="item.portada"></div><div class="flip-card-back"><h2>{{item.titulo}}</h2><p>{{item.descripcion}}</p><a :href="item.detalle" data-fancybox><button class="button" type="button">More Info</button></a></div></div></div>'
})
var myVue = new Vue({
    el: "#versionVue",
    data: {
        search: '',
        books: [],
        lang: []
    },
    methods: {
        getBooks() {
            fetch("https://api.myjson.com/bins/1h3vb3")
                .then(res => res.json())
                .then(json => myVue.books = json.books)
        }
    },
    created() {
        this.getBooks();
    },
    computed: {
        filteredBooks() {
            return this.langFilter.filter(book => {
                var allText = book.titulo + book.descripcion;
                return allText.toLowerCase().includes(this.search.toLowerCase())
            })
        },
        langFilter() {
            return this.books.filter(book => this.lang.includes(book.idioma) || this.lang.length === 0)
        }
    }
})



const vm = new Vue({
    el: "#app",
    data : {
        mensagem: 'Ok',
        produtos: [],
        produto: false,
        
    },
    filters: {
        numeroPreco(valor) {
           return valor.toLocaleString("pt-BR", {
            style:"currency",
            currency: "BRL"
           })
        }
    },
    methods: {
        fetchProdutos() {
            fetch("./api/produtos.json")
            .then(r => r.json())
            .then(r => {
                this.produtos = r;
                console.log(this.produtos);
            })
        },
        fetchProduto(id) {
            fetch(`./api/produtos/${id}/dados.json`)
            .then(r => r.json())
            .then(r => {
                this.produto = r
            })
        }
    },
    created() {
        this.fetchProdutos();
    }
})
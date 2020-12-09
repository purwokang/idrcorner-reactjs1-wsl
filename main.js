class App extends React.Component {
    state = {
        produk: 'Sepatu',
        harga: 300000,
        stok: 50
    }

    klikEven = (e) => {
        console.log(`Posisi X: ${e.pageX}, Posisi Y: ${e.pageY}`);
    }

    tampilProduk = () => {
        console.log(this.state);
    }

    gantiHarga = () => {
        this.setState({
            harga: 500000
        })
    }

    gantiProduk = (e) => {
        this.setState({
            produk: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Hallo dunia!</h1>
                <p>Ini paragraph</p>
                <Garis />
                <h2>{Date()}</h2>
                <Garis />
                <h2>{this.state.produk}</h2>
                <h2>Harga: {this.state.harga}</h2>
                <button onClick={this.klikEven} >Klik Me</button>
                <br />
                <button onClick={this.tampilProduk} >Tampilkan Produk</button>
                <br />
                <button onClick={this.gantiHarga}>Ganti Harga</button>
                <br />
                <input onChange={this.gantiProduk} type="text" />
            </div>
        )
    }
}

class Garis extends React.Component {
    render() {
        return (
            <hr />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root')
);

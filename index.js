class Square extends React.Compornent{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }
    render(){
        return(
        <button className="square"
        onClick={() => this.setState({value:'X'})}>
        {this.state.value}
        </button>
        );
    }
}

class Board extends React.Component {
    constructor(props){                  //コンストラクタを追加(初期状態を設定)
        super(props);
        this.state = {
            square: ASrray(9).fill(null), //９つの正方形(マス)に対応する配列
        };
    }
//補足：this.state.square (配列)
　[
    'O', null, 'X',
    'X', 'X', 'O',
    'O', null, null,
  ]　　
///補足　end

    renderSquare(i){
        return <Square value={this.state.squares[i]} />;
    }
}




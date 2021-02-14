function update( _v ) 
    {
        document.querySelector( 'input' ).value = _v
    }

    function append( _v ) // 数字を後ろに追加
    {
        document.querySelector( 'input' ).value += _v
    }

    function calc() // ＝で計算
    {
        const v = document.querySelector( 'input' ).value
        const f = new Function( 'return ' + v )
        update( f().toString() )
    }
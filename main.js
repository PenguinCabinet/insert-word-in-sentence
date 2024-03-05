

function one_make_str(input_text,first_word,insert_word,last_word){
    let input_data=input_text.split('');
    let output_data=[first_word];
    let input_length_only_words=input_data.length-1;
    while(
        (
        input_data[input_length_only_words]==" "
        )&&input_length_only_words>=0
    ){
        input_length_only_words--;
    }
    input_data.forEach((e,i)=>{
        output_data.push(e);
        if(
            e==" "||
            i==input_length_only_words
        )
            return;
        output_data.push(insert_word);
    });
    output_data.push(last_word);
    return output_data.join("");
}

function make_str(input_text,first_word,insert_word,last_word){
    if(input_text=="")
        return "";
    console.log(input_text.split("\n"));
    return input_text.split('\n').map(e=>{
        return one_make_str(e,first_word,insert_word,last_word)
    }).join("\n");
}

function make_str_wrapper(){
    let out_text=make_str(
        document.getElementById("input_text").value,
        document.getElementById("first_word").value,
        document.getElementById("insert_word").value,
        document.getElementById("last_word").value
    );
    document.getElementById("out_text").value =out_text;
}

["input_text","first_word","insert_word","last_word"]
.forEach(e => {
    document.getElementById(e).addEventListener(
        'keydown', 
        make_str_wrapper 
    );
    document.getElementById(e).addEventListener(
        'change', 
        make_str_wrapper 
    );
    
});


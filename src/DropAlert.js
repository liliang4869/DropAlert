import React,{Component} from 'react'
import {Animated,View,Text,Dimensions} from 'react-native'
var {height,width}=Dimensions.get('window');

export default class DropAlert extends Component{
    constructor(props)
    {

        super(props);
                this.height=this.props.style.height==undefined?0:this.props.style.height;
        this.state={
            visiable:false,
            msg:this.props.message,
            showLocation:this.props.location,
            offset:new Animated.Value(0)
        }
    }
    render(){
        console.log(this.state.offset)
        return(this.state.visiable?<Animated.View style={[{borderRadius:5,backgroundColor:'#ff00007f'},this.props.style,{
            transform:[
                {translateY:this.state.offset}
                ],
            position:'absolute',left:0,top:0,width:width}]}>
        <Text style={this.props.textStyle}>{this.state.msg}</Text>
        </Animated.View>:null)
    }
    show(){
        if(this.state.showLocation == 'bottom'){
            this.state.offset.setValue(height);
            this.setState({visiable:true});
            Animated.spring(this.state.offset,{toValue:height-this.props.style.height}).start()
        }
        else{
            this.state.offset.setValue(-1*this.props.style.height);
            this.setState({visiable:true});
            Animated.spring(this.state.offset,{toValue:0}).start();
        }
    }
    dismiss(){
        this.setState({visiable:false});
        this.state.offset.setValue(-9999);
    }
    changeVisiable(){
        if(this.state.visiable)this.dismiss();
        else this.show();
    }
}
DropAlert.defaultProps={
    message:'DropAlert Test',
    location:'bottom',
    style:{height:100,backgroundColor:'#789456'},
    fontColor:'white',
    textStyle:{color:'white',textAlign:'center'}
}
var React=require("react");
var ReactDOM=require("react-dom");
var HomeHeader;
var Home;
var KindHeader;
var KindHome;
var ShirtHeader;
var ShirtHome;
var CartHeader;
var CartHome;
var PersonHeader;
var PersonHome;
var FooterNav=React.createClass({
    getInitialState:function(){
        var items=["凡客","分类","购物车","我的","更多"];
        localStorage.setItem("current","0");
        return {
            items:items,
            current:0
        }
    },
    componentWillMount:function(){

    },
    clickHandle:function(){

        this.setState({
            current:event.target.title
        })

        switch(event.target.title){
            case "0":
                Home=require("./Home");
                HomeHeader=require("./HomeHeader");
                localStorage.setItem("current","0");
                ReactDOM.unmountComponentAtNode(document.getElementById("header"));
                ReactDOM.render(<HomeHeader/>,document.getElementById("header"));
                ReactDOM.unmountComponentAtNode(document.getElementById("section"));
                ReactDOM.render(<Home/>,document.getElementById("section"));
                break;
            case "1":
                KindHeader=require("./KindHeader");
                KindHome=require("./KindHome");
                localStorage.setItem("current","1");
                ReactDOM.unmountComponentAtNode(document.getElementById("header"));
                ReactDOM.render(<KindHeader/>,document.getElementById("header"));
                ReactDOM.unmountComponentAtNode(document.getElementById("section"));
                ReactDOM.render(<KindHome/>,document.getElementById("section"));
                break;
            case "2":
                ShirtHome=require("./ShirtHome");
                ShirtHeader=require("./ShirtHeader");
                localStorage.setItem("current","2");
                ReactDOM.unmountComponentAtNode(document.getElementById("header"));
                ReactDOM.render(<ShirtHeader/>,document.getElementById("header"));
                ReactDOM.unmountComponentAtNode(document.getElementById("section"));
                ReactDOM.render(<ShirtHome/>,document.getElementById("section"));
                break;
            case "3":
                CartHeader=require("./CartHeader");
                CartHome=require("./CartHome");
                localStorage.setItem("current","3");
                ReactDOM.unmountComponentAtNode(document.getElementById("header"));
                ReactDOM.render(<CartHeader/>,document.getElementById("header"));
                ReactDOM.unmountComponentAtNode(document.getElementById("section"));
                ReactDOM.render(<CartHome/>,document.getElementById("section"));
                break;
            case "4":
                PersonHeader=require("./PersonHeader");
                PersonHome=require("./PersonHome");
                localStorage.setItem("current","4");
                ReactDOM.unmountComponentAtNode(document.getElementById("header"));
                ReactDOM.render(<PersonHeader/>,document.getElementById("header"));
                ReactDOM.unmountComponentAtNode(document.getElementById("section"));
                ReactDOM.render(<PersonHome/>,document.getElementById("section"));
                break;
            default:
                break;
        }
    },
    render:function(){

        return (
            <div className="nav">
                <a href="" onClick={this.clickHandle()} className={localStorage.getItem("current")*1==0 ? "active": ""}>
                    <span>
                        <div className="iconfont icon-zhuye"></div>
                        凡客

                    </span>
                </a>
                <a href="" onClick={this.clickHandle()} className={localStorage.getItem("current")*1==1 ? "active": ""}>
                    <span>
                        <div className="iconfont icon-igood"></div>
                        分类
                    </span>
                </a>
                <a href="" onClick={this.clickHandle()} className={localStorage.getItem("current")*1==2 ? "active": ""}>
                    <span>
                        <div className="iconfont icon-chenshanzhuanhuan"></div>
                        衬衫
                    </span>
                </a>
                <a href="" onClick={this.clickHandle()} className={localStorage.getItem("current")*1==3 ? "active": ""}>
                    <span>
                        <div className="iconfont icon-gouwuche"></div>
                        购物车
                    </span>
                </a>
                <a href="" onClick={this.clickHandle()} className={localStorage.getItem("current")*1==4 ? "active": ""}>
                    <span>
                        <div className="iconfont icon-wode"></div>
                        我的
                    </span>
                </a>
            </div>
        )
    }
})
module.exports=FooterNav;

const HtmlWebpackPlugin=require('html-webpack-plugin')
const path=require('path')

module.exports={
    mode:'development',
    entry:'./index.js', //参照当前webconfig文件所在的位置，./意思是引入当前目录下的
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist'),
    },
<<<<<<< HEAD
    // mode:devMode?'development':'production',
=======
>>>>>>> c85d8ed8af4e254b532e36e75f91d1f2f0c56f72
    devtool:'inline-source-map',
    devServer:{
        static:'./dist',
        compress:true,
        liveReload:false,
        open:true,
        port:8080,
        hot:true,
        proxy:{
            '/':{
                target:'http://localhost:8080',
            },
        },
    },
    watchOptions:{
        aggregateTimeout:300,
        poll:1000,
    },
    resolve:{
        extensions:['','.js','.jsx'],
    },
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:false
                        }
                    }
                ]
            },
            {
                test:/\.jsx?$/,
                exclude:'/node_modules',
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env']
                        }
                    }
                   
                ]
            
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            inject:'body'
        })
    ]
}
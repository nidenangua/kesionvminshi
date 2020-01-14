export default [{
    path:'/distribute',
    name:'Distribute',
    component:resolve =>{
        require(['@/pages/distribute/Index'],resolve)
    },
    children:[
        {
            path:'/distribute/list',
            name:'PromoterList',
            component:resolve =>{
                require(['@/pages/distribute/PromoterList'],resolve)
            },
        },
        {
            path:'/distribute/goods',
            name:'GoodsList',
            component:resolve =>{
                require(['@/pages/distribute/GoodsList'],resolve)
            }
        },
        {
            path:'/distribute/setup',
            name:'DistributeSetUp',
            component:resolve =>{
                require(['@/pages/distribute/SetUp'],resolve)
            }
        },
        {
            path:'/distribute/record',
            name:'DistributeRecord',
            component:resolve =>{
                require(['@/pages/distribute/Record'],resolve)
            }
        }
    ]
},
{
    path:'/distribute/detail',
    name:'DistributeDetail',
    component:resolve =>{
        require(['@/pages/distribute/Detail'],resolve)
    }
}]
const CheckAll = {
    data(){
        return {
            checkAll:false,
            checkedData:[]
        }
    },
    watch:{
        list:{
            handler(data){
                let checkedData = data.filter(item=>(item.checked))
                this.checkAll = checkedData.length === data.length
                this.checkedData = checkedData
            },
            deep:true
        }
    },
    methods:{
        onCheckAllChange(){
            let data = this.list
            data.map(item=>{
                item.checked = this.checkAll
            })
            this.checkedData = this.checkAll ? data : []
        }
    }
}
export default CheckAll
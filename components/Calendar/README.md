# country组件

国家选择

## 调用方式

    template:

        <Country @onCountry="onCountry" format="MM-DD" />

        format 格式参考 https://day.js.org/docs/zh-CN/display/format

    js:

        import Country from '@/components/Country'

        data() {
            return {
                country: {}
            }
        },
        methods: {
            onCountry(val) {
                this.country = val
            }
        }
        

## 需要注意的事项

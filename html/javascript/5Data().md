# Date()

## 创建日期格式。

var now = new Date();

### 想根据特定的日期和时间创建日期对象
+ Date.parse()
    - 接收一个表示日期的字符串参数，然后尝试根据这个字符串返回相应日期的毫秒数
+ Date.UTC()
    - Date.UTC()的参数分别是年份、基于 0 的月份（一月是 0，二月是 1，以此类推）、月中的哪一天（1 到 31）、小时数（0 到 23）、分钟、秒以及毫秒数。
+ Date.now()
    - 返回表示调用这个方法时的日期和时间的毫秒数。

## 继承的方法

### 日期格式化方法
#### Date 类型还有一些专门用于将日期格式化为字符串的方法，这些方法如下。
* toDateString()——以特定于实现的格式显示星期几、月、日和年；
* toTimeString()——以特定于实现的格式显示时、分、秒和时区；
* toLocaleDateString()——以特定于地区的格式显示星期几、月、日和年；
* toLocaleTimeString()——以特定于实现的格式显示时、分、秒；
* toUTCString()——以特定于实现的格式完整的 UTC 日期。 

### 日期/时间组件方法

方 法|说 明|
:----|:----:|
getTime() | 返回表示日期的毫秒数；与valueOf()方法返回的值相同
setTime(毫秒) |  以毫秒数设置日期，会改变整个日期
getFullYear() |  取得4位数的年份（如2007而非仅07）
getUTCFullYear() |  返回UTC日期的4位数年份
setFullYear(年)  | 设置日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
setUTCFullYear(年) |  设置UTC日期的年份。传入的年份值必须是4位数字（如2007而非仅07）
getMonth()  | 返回日期中的月份，其中0表示一月，11表示十二月
getUTCMonth()  | 返回UTC日期中的月份，其中0表示一月，11表示十二月
setMonth(月)  | 设置日期的月份。传入的月份值必须大于0，超过11则增加年份
setUTCMonth(月)  | 设置UTC日期的月份。传入的月份值必须大于0，超过11则增加年份
getDate() |  返回日期月份中的天数（1到31）
getUTCDate() |  返回UTC日期月份中的天数（1到31）
setDate(日)  | 设置日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
setUTCDate(日)  | 设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数，则增加月份
getDay() |  返回日期中星期的星期几（其中0表示星期日，6表示星期六）
getUTCDay() |  返回UTC日期中星期的星期几（其中0表示星期日，6表示星期六）
getHours()  | 返回日期中的小时数（0到23）
getUTCHours()  | 返回UTC日期中的小时数（0到23）
setHours(时)  | 设置日期中的小时数。传入的值超过了23则增加月份中的天数
setUTCHours(时)  | 设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数
getMinutes()  | 返回日期中的分钟数（0到59）
getUTCMinutes()  | 返回UTC日期中的分钟数（0到59）
setMinutes(分)  | 设置日期中的分钟数。传入的值超过59则增加小时数
setUTCMinutes(分)  | 设置UTC日期中的分钟数。传入的值超过59则增加小时数
getSeconds()  | 返回日期中的秒数（0到59）
getUTCSeconds()  | 返回UTC日期中的秒数（0到59）
setSeconds(秒)  | 设置日期中的秒数。传入的值超过了59会增加分钟数
setUTCSeconds(秒)  | 设置UTC日期中的秒数。传入的值超过了59会增加分钟数
getMilliseconds()  | 返回日期中的毫秒数
getUTCMilliseconds()  | 返回UTC日期中的毫秒数
setMilliseconds(毫秒)  | 设置日期中的毫秒数
setUTCMilliseconds(毫秒) | 设置UTC日期中的毫秒数
getTimezoneOffset() | 返回本地时间与UTC时间相差的分钟数。
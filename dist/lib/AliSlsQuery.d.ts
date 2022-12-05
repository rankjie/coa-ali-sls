export declare class AliSlsQuery {
    private readonly _column;
    private readonly _where;
    private readonly _groupBy;
    private readonly _orderBy;
    private _limit;
    constructor();
    /**
     * 数据列
     * @param field 列名
     * @param alias 输出别名
     */
    column(field: string, alias?: string): this;
    /**
     * 查询时间列
     * @param field 列名
     * @param format 格式化
     * @param alias 输出别名
     */
    dateFormat(field: string, format: string, alias?: string): this;
    /**
     * 估算field列的唯一值的个数
     * @param field 列名
     * @param alias 输出别名
     */
    approxDistinct(field: string, alias?: string): this;
    /**
     * 时序函数
     * @param grainSize 时间粒度，比如1m,1d
     * @param format 时间格式化
     * @param padding 补全的数据
     * @param field 列名
     * @param alias 输出别名
     */
    timeSeries(field: string, alias: string, grainSize: string, format?: string, padding?: number): this;
    /**
     * 等于
     * @param field 字段名
     * @param value 值
     * @param checkEmpty true进行空值检查，为空的不查询 false 不进行空值检查
     */
    eq(field: string, value: string, checkEmpty?: boolean): this;
    /**
     * 不等于
     * @param field 字段名
     * @param value 值
     * @param checkEmpty true进行空值检查，为空的不查询 false 不进行空值检查
     */
    ne(field: string, value: string, checkEmpty?: boolean): this;
    /**
     * 不在当前数组中
     * @param field 字段名
     * @param values 字符串数组
     */
    notIn(field: string, values: string[]): this;
    /**
     * 不相似
     * @param field 字段名
     * @param likes 带%的数据库语句
     * @param checkEmpty true进行空值检查，为空的不查询 false 不进行空值检查
     */
    notLike(field: string, likes: string, checkEmpty?: boolean): this;
    /**
     * 根据字段分组
     * @param fields 字段名
     */
    groupBy(...fields: string[]): this;
    /**
     * 根据字段排序
     * @param fields 字段名
     */
    orderBy(...fields: string[]): this;
    /**
     * 获取前n条记录
     * @param count 前n项记录
     */
    limit(count: number): this;
    /**
     * 获取sql语句
     */
    toQuery(): string;
    /**
     * 计数方法
     * @param field  字段名
     * @param alias 输出别名
     */
    count(field?: string, alias?: string): this;
    /**
     *
     * @param field  字段名
     * @param operate 操作符
     * @param value 对比的值
     * @param wrapValue 是否把值当作字符串处理 是：在查询值两边添加单引号 否：不添加单引号
     * @param checkEmpty true进行空值检查，false不进行空值检查
     */
    private where;
}

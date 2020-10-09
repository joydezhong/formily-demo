## formily尝鲜demo应用

### formily的几个概念

---

1、JOSN Schema描述

2、表单的生命周期/状态

3、表单操作actions/effects

4、表单的路径系统

5、x-linkages属性简单联动

6、表单的扩展机制（UI扩展，vertical扩展，effect扩展）



<!-- q: 切换就得清空(编辑下) 有组合切换到无组合的清空（编辑下）

基本
isUpdateAttribute
getBasicFormParamsByEdit（brand、name、slogan、sellingPoint、commodityAreaList、customerCategory）

选择货品
unitPriceAndPicList  
brand?.id  
customerCategory?.id

商品属性
commodityAttributeList
isUpdateAttribute
getProductAttributeFormParamsByEdit（commodityAttributeList）

价格属性
priceType
minOrder
unitPriceAndPicList
getPriceAttributeFormParamsByEdit（unitId、unitName、minOrder、isMemberPrice、priceType）

商品图片
isAllAttributePic
unitPriceAndPicList

商品描述
commodityRemark{}

物流 logistics
其他 getOtherFormParamsByEdit（isInvoice、marks、packing、afterService） -->
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// 扩展过渡效果到 jQuery
jQuery.extend(jQuery.easing,{
        def : "easeOutQuad",
        swing : function(c, a, b, d, e) {
            return jQuery.easing[jQuery.easing.def](c, a, b, d, e)
        },
        easeOutBounce: function(c, a, b, d, e) {
            return (a /= e) < 1 / 2.75 ? d * 7.5625 * a * a + b: a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b: a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b: d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
        }
});
// 实现动画
$(function(){
    var springSpeed = 600; // 动画速度
    var theSpringHeight = $('.button').offset().top;
    $('.spring').css({marginTop: -theSpringHeight});
    $('.button').toggle(function(){
        $('.spring').animate({marginTop: 0}, springSpeed, 'easeOutBounce');
    }, function(){
        $('.spring').animate({marginTop: -theSpringHeight}, springSpeed, 'easeOutBounce');
    });
});
var listCreated = false;

function appendToList(){

if(!listCreated){
    $("#items").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
    listCreated = true;
    $("#items").trigger("create");
}
var value = $("#item").val();
var listItem = "<li>" + value + "</li>";
$("#list").append(listItem);

}
require(["config"],function(){require(["jquery","arttemplate","include"],function(n,o){n(function(){n.ajax({type:"get",url:"mock/listdata.json",datatype:"json",success:function(t){var e={products:t.res_body.data},a=o("prod_template",e);n(".list").html(a)}})})})});
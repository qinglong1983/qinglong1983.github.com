/*
 * 顶部小菜单
 */
var topMenuData = {
    "list": [
        {
            "url": "#",
            "title": "在线办公"
        },
        {
            "url": "#",
            "title": "加入收藏"
        }
    ]
};

/*
 * 导航菜单列表
 */
var navMenuData = {
    "list": [
	    {
            "url": "#",
            "title": "首页",
			"class": "current"
        },
		{
            "url": "#",
            "title": "大学奖项",
			"class": "none"
        },
        {
            "url": "#",
            "title": "助学贷款",
			"class": "none"
        },
        {
            "url": "#",
            "title": "生源地贷款",
			"class": "none"
        },
        {
            "url": "#",
            "title": "资助项目",
			"class": "none"
        },
        {
            "url": "#",
            "title": "勤工助学",
			"class": "none"
        },
        {
            "url": "#",
            "title": "医疗保险",
			"class": "none"
        },
        {
            "url": "#",
            "title": "工作动态",
			"class": "none"
        },
        {
            "url": "#",
            "title": "在线问答",
			"class": "none"
        },
    ]
};

function menuRender (divId, scriptId, data) {
	var html = template.render(scriptId, data);
	document.getElementById(divId).innerHTML = html;
}
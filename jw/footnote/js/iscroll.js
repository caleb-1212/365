//����ˢ�£��Զ���ʵ�ִ˷�����
function pullDownAction () {
    setTimeout(function () {        //ģ���������, �����ӳ�
        var el, li, i;
        el = document.getElementById('thelist');

        for (i=0; i<3; i++) {
            li = document.createElement('li');
            li.innerHTML = '1';
            el.insertBefore(li, el.childNodes[0]);
        }
        myScroll.refresh();        //���ݼ�����ɺ󣬵��ý�����·��� (ie: on ajax completion)
    }, 1000);    
}

function pullUpAction () {
    setTimeout(function () {   
        var el, li, i;
        el = document.getElementById('thelist');
        for (i=0; i<3; i++) {
            li = document.createElement('li');
            li.innerHTML = '111';
            el.appendChild(li, el.childNodes[0]);
        }    
        myScroll.refresh();        // ���ݼ�����ɺ󣬵��ý�����·��� (ie: on ajax completion)
    }, 1000);    
}
// 網頁都載入完畢後才會執行
$(document).ready(function(){
	// 由 Local Storage 取出聯絡簿，不存在就建立資料庫    
	var jsonString = window.localStorage.getItem('myContacts');    
	var contacts = JSON.parse(jsonString);    
	if (contacts===null || typeof(contacts)!=='object') {        
		// 輸出 Log 與建立資料庫        
		console.log('Create Local Storage.');        
		var contacts = [];        
		var jsonString = JSON.stringify(contacts);        
		window.localStorage.setItem('myContacts', jsonString);    }
	getPhoneData();
	// 重新讀取手機聯絡簿    
	$('#refresh_btn').click(function(){
		getPhoneData();
	} );     
	// 建立新人員    
	$('#create_btn').click(function(){        
		var newContact = {};        
		newContact.displayName = $('#name_txt').val();        
		newContact.phoneNumber = $('#tel_txt').val();         
		// 由 Local Storage 取出聯絡簿       
		var jsonString = window.localStorage.getItem('myContacts');        
		var contacts = JSON.parse(jsonString);         
		// 新增後回存        
		contacts.push(newContact);        
		window.localStorage.setItem('myContacts', JSON.stringify(contacts));        
		$('#name_txt').val('');        
		$('#tel_txt').val('');
		$('#contact_body').append('<tr><td>'+newContact.displayName+'</td><td>'+newContact.phoneNumber+'</td></tr>');		
		});
	});
function getPhoneData() {
	// 先清空table        
	$('#contact_body').children().remove();         
	//由 Local Storage 抓資料回填       
	var jsonString = window.localStorage.getItem('myContacts');        
	var contacts = JSON.parse(jsonString);
	for (i in contacts) {            
		$('#contact_body').append('<tr><td>'+contacts[i].displayName+'</td><td>'+contacts[i].phoneNumber+'</td></tr>');
		}    
    }
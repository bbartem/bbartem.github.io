var xmlHttp;
function showHint(str)
{
    if(str.length==0)
    {
        document.getElementById("txtHint").innerHTML="";
        return;
    }
    xmlHttp=GetXmlHttpObject();
    if (xmlHttp==null)
    {
        alert ("Your browser does not support AJAX!");
        return;

    }
    var url = "ghint.php";
    url=url + "?q=" + str;
    url= url + "&sid=" + Math.random();
    xmlHttp.onreadystatechange =stateChanged;
    xmlHttp.open("Get", url, true);
    xmlHttp.send(null);
}
 function stateChanged()
 {
    if (xmlHttp.readyState==4){
        document.getElementById("txtHint").innerHTML = xmlHttp.responseText;
    }

 }

 function GetXmlHttpObject(){
    var xmlHttp=null;
    try{
        //Firefox, Opera 8.0+, Safary
        xmlHttp=new XMLHttpRequest();
    }
    catch (e){
        //Internet Explorer
        try{
            xmlHttp=new ActiveXObject("Msxm12.XMLHTTP");
        }
        catch (e){
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
 }
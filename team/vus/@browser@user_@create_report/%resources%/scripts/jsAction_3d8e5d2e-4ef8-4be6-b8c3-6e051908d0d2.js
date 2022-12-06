var OrderID = context.variableManager.getValue("nl_token");
var writer = new java.io.FileWriter("C:\\Users\\chire\\OneDrive - TRICENTIS\\Desktop\\API_Testing\\OrderID.txt",true);
writer.write(OrderID);
writer.write("\r\n");
writer.close();
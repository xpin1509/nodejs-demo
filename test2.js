<%}else if(2 < curentPage < totalPage-2){%>
								<li><a>...</a></li>
								<li><a href="/?page=<%= curentPage-1%>"><%= curentPage-1%></a></li>
								<li><a href="/?page=<%= curentPage%>"><%= curentPage%></a></li>
								<li class="active"><a href="/?page=<%= curentPage+1%>"><%= curentPage+1%></a></li>
								<li><a href="/?page=<%= curentPage+2%>"><%= curentPage+2%></a></li>
								<li><a href="/?page=<%= curentPage+3%>"><%= curentPage+3%></a></li>
								<li><a>...</a></li>
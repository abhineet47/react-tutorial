import {fetchRepos} from '../api.js';

export const selectedFilterChange = (selectedFilter)=>{
		return (disptach)=>{
			disptach({'type':'SELECTFILTER','payload':selectedFilter})
			fetchRepos(selectedFilter).then((response)=>{
				disptach({'type':'LOADREPO','payload':response.data.items})


			})


		}


}
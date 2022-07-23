import { defineStore } from 'pinia'
import { KeepAliveRoutes } from './interface'

export const useKeepAliveRoutes = defineStore('keepAliveRoutes', {
	state: () : KeepAliveRoutes => ({
		keepAliveRoute: [],
		cacheViews: []
	}),
	actions: {}
})

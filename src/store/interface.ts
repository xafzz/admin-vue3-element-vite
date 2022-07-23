//route缓存
export interface KeepAliveRoutes {
	keepAliveRoute : string[],
	cacheViews : string[]
}

//配置相关
export interface stateConfigures {
	config: configuresState;
}
export interface configuresState{
	isDrawer:boolean,
	primary: string,
	isIsDark: boolean,
	isFixedHeader:boolean,
	iconColor:string,

}

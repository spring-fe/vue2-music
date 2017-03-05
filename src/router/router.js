import App from '../App'


export default [
{
    path: '/',
    component: App,
    children: [
    {
         path: '',
         redirect: '/center'
    },
    {
    	path: '/my',
        component: r => require.ensure([], () => r(require('../page/home/my')), 'my')
    },
    {
    	path: '/center',
        component: r => require.ensure([], () => r(require('../page/home/center')), 'center')
    }]
    
},
{
	path:'/detail',
	component: r => require.ensure([], () => r(require('../page/detail/detail')), 'detail')
}]

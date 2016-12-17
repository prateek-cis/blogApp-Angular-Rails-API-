blogApp.controller('aboutController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $rootScope.loading = false;
    $scope.teamMembers = [
    	{
    		name: "Vaibhav Upadhyay",
    		jobTitle: "Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t31.0-1/c41.41.517.517/192264_146950428705518_2018260_o.jpg?oh=0d83803f81bf64d0d534dd32e0e82aa5&oe=58B3B1C5"
    	},
    	{
    		name: "Sameer Talegaonkar",
    		jobTitle: "Senior Tester",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/12289594_10208579343659941_7229152109297506540_n.jpg?oh=7f3969574a7bdd3f75ff31f6d4cf292f&oe=58ECDF3B"
    	},
    	{
    		name: "Sourabh Upadhyay",
    		jobTitle: "Senior Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/12928325_968202693235355_8787827035194793690_n.jpg?oh=1de635b43ddaef91456b6806d1921242&oe=58F05852"
    	},
    	{
    		name: "Prateek Sahu",
    		jobTitle: "Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/15032144_1382019121808995_3452234742386409814_n.jpg?oh=1681c58f5c22b77bbfb5937c92bf995c&oe=58F3A0D7"
    	},
    	{
    		name: "Sabahat Ansari",
    		jobTitle: "Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "http://erp.cisin.com/img/998.jpg"
    	},
    	{
    		name: "Manish Prajapat",
    		jobTitle: "Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/13690625_1041993999203678_1958863592591734486_n.jpg?oh=b2f10f3ea382ce95b1ddc6124623b480&oe=58FA7CC8"
    	},
    	{
    		name: "Nusrat Baig",
    		jobTitle: "Junior Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/11863209_926094717456654_976768731652133905_n.jpg?oh=dde7abeae2e3259d2cdbe719d7d673d6&oe=58F4725E"
    	},
    	{
    		name: "Suyash Nikte",
    		jobTitle: "Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "http://erp.cisin.com/img/915.jpg"
    	},
    	{
    		name: "Surbhi Shrivastava",
    		jobTitle: "Trainee Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "http://erp.cisin.com/img/1260.jpg"
    	},
    	{
    		name: "Aditya Gaur",
    		jobTitle: "Trainee Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/12249982_910914908991329_2053594249072563935_n.jpg?oh=d2b9c8b22dfe3c18cb84f3174f153514&oe=58E66C7A"
    	},
    	{
    		name: "Kuldeep Mishra",
    		jobTitle: "Trainee Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/12654274_962602247150542_7245538072104352501_n.jpg?oh=0b6da19e05f5bffebe0eedbda0ae3582&oe=58B5ACE8"
    	},
    	{
    		name: "Jeetendra Singh",
    		jobTitle: "Trainee Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/11144790_836165809823779_3900591028362744241_n.jpg?oh=df6bce63ed51d0967a3a5d8078e7f9df&oe=58B85AFF"
    	},
    	{
    		name: "Aditya Rajak",
    		jobTitle: "Trainee Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/13450727_789572074475549_6213906227779938619_n.jpg?oh=401a7e46d46b3488541f33d385d0f4b5&oe=58EFE63F"
    	},
    	{
    		name: "Ayushi Gupta",
    		jobTitle: "Trainee Developer",
    		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    		image: "http://erp.cisin.com/img/1380.jpg"
    	}
    ];
}]);
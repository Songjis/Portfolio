var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "송지연";
        $rootScope.content1="[입사후 포부]저는 에너제틱한 웹 개발자가 되고싶습니다. 저는 매일 아침 밝게 인사하는 둥근 해같은 신입사원이 되겠습니다. 하루의 시작을 어떻게 하느냐에 따라 하루의 기분이 달라질 것이라고 생각합니다. 누군가가 저로 인해 기분 좋게 웃으면서 하루를 시작할 수 있다면 저는 더 즐거운 하루를 보낼 수 있을 것 같습니다. 그렇기 때문에 저는 매일 아침 밝게 웃으면서 인사하는 둥근 해 같은 사원의 모습을 보여드리도록 하겠습니다. 저는 제 강점인 꼼꼼함으로 매일 그날의 하루 계획을 꼼꼼하게 세우고, 저의 할 일들을 빼먹지 않을 것입니다. 아마 신입으로서 처음 입사를 하면 공부해야하거나 숙지해야할 내용들이 많을 것이라고 생각합니다. 저는 꼼꼼한 메모 습관으로 그것들을 잊지않도록 적어가며 익혀나갈 것 입니다. 또한 70%가 남자개발자라는 IT분야에서 저는 여자개발자로서의 장점을 충분히 발휘할 수 있는 사원이 되겠습니다. 그리하여 다른 팀원들과 협업시에 시너지를 낼 수 있는 개발자가 되겠습니다.마지막으로 저는 문화생활을 즐김으로 사고의 폭과 넓이를 확장하는 개발자가 될 것입니다. 웹개발자가되면 항상 앉아서 컴퓨터를 보는 시간이 많아지는데 이럴 때 기분전환으로 문화 생활을 해야 된다고 생각합니다. 다양한 경험을 통해 사고의 틀이 확장될 수 있다고 믿기 때문입니다. 그렇기 때문에 저는 쉬는 날에도 집에서 시간을 보내기 보다는 문화생활을 즐기며 팀원들과 공감대를 형성하고 항상 에너지가 넘치는 에너제틱한 사원이 될 것 입니다. 또한 더 나아가 팀원들과 그런 문화를 나눌 수 있는 시간들도 많이 갖겠습니다. 이와 같이 언제나 에너지가 넘치고 보고만 있어도 웃음이 나게 하는 그런 에니제틱한 신입개발자를 원하신다면 제게 꼭 기회를 주시기 바랍니다. 감사합니다.";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
			 type : true, 
			 contents: "이번에 팀프로젝트를하면서 저는 백엔드와 데이터베이스를 맡게 되었습니다. 팀프로젝트로 공공기관을 벤치마킹해서 만들면서 평소에 교육을 받으면서 익혔던 데이터베이스 구문들이 많은 도움이 되었고 홈페이지에 특히 기능을 추가하는 작업을 하면서 어려움을 겪을 때가 종종 있었지만 동료들의 도움으로 끝까지 마칠 수 있었던 것 같습니다. 마지막으로 팀프로젝트를 하면서 저의 백엔드와 데이터베이스의 실력을 더 쌓을수 있었고 끝까지 열심히 팀프로젝트를 한 팀원들에게 고마운 마음이 듭니다. "
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression.png",
			 type : false,
			 contents: " 저는 교육받은 내용으로 개인프로젝트를 만들면서 모든 구상과 결정을 혼자서 해야한다는 막막함이 초반에 있었습니다. 저는 전부터 쇼핑몰 웹 사이트를 만들고 싶었고 쇼핑몰은 기능이 많아서 웹사이트의 주제를 바꿀까도 고민을 많이 했지만 그래도 개인프로젝트인데 하고싶은 것을 내가 할 수 있는 한 다하자라는 마음을 갖고 만들었습니다. 프로젝트를 만들면서 한달 정도 걸렸는데 만드는 과정에서 막히는 부분이 많았고 그때마다 주변 사람들에게 물어보고 저 혼자서 찾아보면서 프로젝트를 해나갔습니다. 그리고 프로젝트를 만들면서 저번에 팀플 때 했던 코드들이 도움이 되었습니다. 또, 개인프로젝트를 하면서 부분적으로 새로운 방법을 배워서 구현을 해봐서 좋았던 것 같고, 시간을 맞춰야해서 기능을 뺀 부분들이 좀 있고 추가로 예외처리해야할 부분들도 있어서 아쉽지만 부족한 부분은 나중에 보충해서 웹사이트를 꼭 완성시키고 싶다는 생각이 들었습니다. "
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
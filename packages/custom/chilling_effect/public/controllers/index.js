'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
  function ($scope, Global) {
    $scope.global = Global;
    $scope.features = [{icon: 'fa-shield', title: 'Safe', description:'PureVPN encrypts your Internet connection to prevent hackers from accessing your IMs, e-mails and personal information'},
                               {icon: 'fa-globe', title: 'Safe', description:'PureVPN encrypts your Internet connection to prevent hackers from accessing your IMs, e-mails and personal information'},
                               {icon: 'fa-rocket', title: 'Safe', description:'PureVPN encrypts your Internet connection to prevent hackers from accessing your IMs, e-mails and personal information'},
                               {icon: 'fa-user-secret', title: 'Safe', description:'PureVPN encrypts your Internet connection to prevent hackers from accessing your IMs, e-mails and personal information'}];
    $scope.targetAudiences = [{icon: 'fa-film', title: 'Movie Lovers', description: 'Watch your favourite movies over the world.'},
                              {icon: 'fa-suitcase', title: 'Travellers', description: 'View your favourite web site wherever you are.'},
                              {icon: 'fa-gamepad', title: 'Gamers', description: 'Watch your favourite movies over the world.'},
                              {icon: 'fa-lock', title: 'The Security Aware', description: 'Watch your favourite movies over the world.'},
                              {icon: 'fa-id-badge', title: 'The Privacy Minded', description: 'Watch your favourite movies over the world.'},
                              {icon: 'fa-puzzle-piece', title: 'Webmasters', description: 'Watch your favourite movies over the world.'}];
    $scope.footerIcons = ['fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-github'];
  }
]);

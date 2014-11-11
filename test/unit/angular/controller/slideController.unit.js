describe('$ionSlide controller', function() {
  beforeEach(module('ionic'));

  function makeCtrl() {
    var ctrl;
    inject(function($rootScope, $controller) {
      ctrl = $controller('$ionSlide', {
        $scope: $rootScope.$new(),
        $element: angular.element('<div>')
      });
    });
    return ctrl;
  }

  it('#setState()', function() {
    var ctrl = makeCtrl();

    ctrl.setState('selected');
    expect(ctrl.element.attr('slide-state')).toBe('selected');
    expect(ctrl.element.attr('slide-previous-state')).toBe('detached');

    ctrl.setState('previous');
    expect(ctrl.element.attr('slide-state')).toBe('previous');
    expect(ctrl.element.attr('slide-previous-state')).toBe('selected');

    ctrl.setState('detached');
    expect(ctrl.element.attr('slide-state')).toBe('detached');
    expect(ctrl.element.attr('slide-previous-state')).toBe('previous');

    ctrl.setState('next');
    expect(ctrl.element.attr('slide-state')).toBe('next');
    expect(ctrl.element.attr('slide-previous-state')).toBe('detached');

  });
});

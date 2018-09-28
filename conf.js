//conf.js
exports.config = {
    Framework: 'jasmine',
    seleniumAddress:'http://localhost:4444/wd/hub' ,
    specs: ['spec1.js'],
    
    };

//spec1.js
describe('launching brower', function(){

it('entering URL', function(){

    browser.get('http://qaexercise.envalfresco.com/settings');
    
    element(by.css('#adf-provider-selector > div > div.mat-select-value')).click();
    element(by.css('#mat-option-1 > span')).click();
    element(by.xpath("//span[contains(text(),'APPLY')]")).click();
    element(by.id('username')).sendKeys('guest@example.com');
    element(by.id('password')).sendKeys('Password');
    var text = element(by.xpath('/html/body/app-root/ng-component/adf-sidenav-layout/div/adf-layout-container/mat-sidenav-container/mat-sidenav/mat-nav-list/a[1]/div/div[3]'));
    element(by.id('login-button')).click();
    expect(text.getText()).toEqual('Home');
    

  
});

function create_folder(){
    //element(by.model('_ngcontent-c30')).click();
    element(by.xpath('//*[@id="document-list-container"]/adf-upload-drag-area/div/adf-toolbar/mat-toolbar/div/button[2]/span/mat-icon')).click();
    element(by.id('adf-folder-name-input')).sendKeys('a');
    element(by.xpath("//span[text()=' Create ']")).click();

}

it('Creating Folder', function() {

    browser.get('http://qaexercise.envalfresco.com/files');
    var folder = element(by.xpath("//span[@class='adf-app-title']"));
    expect(folder.getText()).toEqual('ADF Demo Application');
    create_folder();
    create_folder();
    var duplicate = element(by.xpath("/html/body/div[3]/div[3]"));
    expect(duplicate.getText()).toEqual("There's already a folder with this name. Try a different name.");
});


    });

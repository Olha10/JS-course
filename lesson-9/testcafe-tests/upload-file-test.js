import { Selector } from 'testcafe';
fixture('File uploading flow')
.page('https://the-internet.herokuapp.com/upload');

test('User should be able to upload file', async(testController) => {
    await testController.click('#file-upload');
    await testController.setFilesToUpload('input#file-upload', 'package.json');
    await testController.click('#file-submit');
    await testController.expect(Selector("[id='uploaded-files']").innerText).eql('package.json', 'Invalid file name'); 
    await testController.wait(5000);
})
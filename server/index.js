const express = require('express');

const app = express();


app.get('/maps', (req, res) => {
    res.json([
      {
        geocode: [0.5047645894433976, 101.44403971349406],
        popUp: "LKP KIMMI"
      },
      {
        geocode: [0.48929208420131204, 101.45606138964368],
        popUp: "LKP LP3I Business College Pekanbaru"
      },
      {
        geocode: [0.4911308473423968, 101.43615620673118],
        popUp: "LKP PUSAT PENDIDIKAN TEKNIK RIAU CIPTA MEKANIK"
      },
      {
        geocode: [0.5010333919043679, 101.42171472575454],
        popUp: "LKP Riau International College (RIC)"
      },
      {
        geocode: [0.5235338016202273, 101.43855927604866],
        popUp: "PKM ARSAKHA GEMILANG"
      },
      {
        geocode: [0.4328116462163542, 101.43299566403742],
        popUp: "PKBM BINTANG ALIF"
      },
	    {
        geocode: [0.4931040572618708, 101.44904021274303],
        popUp: "PKBM FATMA VISI SUKSES"
      },
	    {
        geocode: [0.42198570178641187, 101.43061318718948],
        popUp: "PKBM INSAN MULIA"
      },
	    {
        geocode: [0.48930708312184024, 101.51569153773505],
        popUp: "PKBM KUSUMA"
      },
      {
        geocode: [0.49212229447655464, 101.43178538888414],
        popUp: "PPS Al-Furqon"
      },
	    {
        geocode: [0.5009424110056053, 101.4255619853759],
        popUp: "PPS. ASH HABUL QUR`AN AL HARAMAIN"
      },
	    {
        geocode: [0.49644058432724575, 101.45206952443071],
        popUp: "PPS. MARDHIYYA AL ISLAMI"
      },
	    {
        geocode: [0.4225800749298964, 101.44533917741758],
        popUp: "PPs. Tahfizh Quran Hadits International"
      },
	    {
        geocode: [0.4903481281862612, 101.48037123206959],
        popUp: "Ulya Al-Munawwarah"
      },
	{
        geocode: [0.4992331453452445, 101.44581228165222],
        popUp: "PDF Wustho Al-Munawwarah"
      },
	{
        geocode: [0.5236005811753058, 101.46963491277187],
        popUp: "PKBM ASMIDA LEARNING CENTER"
      },
	{
        geocode: [0.4893001369171038, 101.51569507358619],
        popUp: "PKBM BAITUL FAJAR"
      },
	{
        geocode: [0.4975066168522252, 101.48855660218557],
        popUp: "PKBM BINA KREASI"
      },
	{
        geocode: [0.5279029846474202, 101.4372269449161],
        popUp: "PKBM NUSANTARA"
      },
	{
        geocode: [0.4787928375013714, 101.51055755958261],
        popUp: "PKBM TAHFIZH AT TAMAM"
      },
	{
        geocode: [0.4733362346023889, 101.48697431815079],
        popUp: "PP Al Quds"
      },
	{
        geocode: [0.4706661524340586, 101.55680232460752],
        popUp: "PP Imam Nawawi"
      },
	{
        geocode: [0.45419389920457437, 101.55959927406094],
        popUp: "PPS Daarut Taukhid Al Maktub"
      },
	{
        geocode: [0.49293455723158325, 101.48792606906845],
        popUp: "PPS Putri Ummu Sulaim"
      },
	{
        geocode: [0.5275569134688133, 101.47620339086342],
        popUp: "PPS. KAHIRUL UMMAH 2"
      },
	{
        geocode: [0.5422200052527792, 101.41593080003214],
        popUp: "LKP. JR EDUCATION"
      },
	{
        geocode: [0.5073481243067289, 101.42755432598803],
        popUp: "PKBM CENDIKIA ALHARAMAIN INDONESIA"
      },
	{
        geocode: [0.4937717045455779, 101.35300885569839],
        popUp: "Ponpes Al Baidha"
      },
	{
        geocode: [0.46804659547826133, 101.38719985035048],
        popUp: "PPS. TAHFIDZ AL-MASHURAH PEKANBARU"
      },
	{
        geocode: [0.4481558705953631, 101.39024765443612],
        popUp: "PPS. AL-HUJJAH RIAU"
      },
	{
        geocode: [0.5285550353543501, 101.43973442772952],
        popUp: "LKP CEMPAKA KOMPUTER"
      },
	{
        geocode: [0.5618765442371834, 101.43280878152439],
        popUp: "LKP LP3I Course Center Rumbai"
      },
	{
        geocode: [0.5698120468010961, 101.41577343148667],
        popUp: "LKP. SANGGAR SENAM SARI KENCANA AYU"
      },
	{
        geocode: [0.5842767917126548, 101.39120979755728],
        popUp: "PKBM VERLENEN EDUCATION"
      },
	{
        geocode: [0.573895531169931, 101.44820986620196],
        popUp: "PPS. ASHABUL QUR`AN RIAU"
      },
	{
        geocode: [0.5762223747361838, 101.39417200670067],
        popUp: "PPS. MA`HAD DARUSSALAM AL-ISLAMI"
      },
	{
        geocode: [0.4649284257951849, 101.38620908385067],
        popUp: "INTERNATIONAL CAREER COLLEGE"
      },
	{
        geocode: [0.47943268775868036, 101.36612704949279],
        popUp: "LKP GARUDA GIVER"
      },
	{
        geocode: [0.46535685180942943, 101.40369818560501],
        popUp: "LKP Senam Pesona"
      },
	{
        geocode: [0.4643616976050162, 101.39858367347449],
        popUp: "LKP SMART FAST GLOBAL EDUCATION"
      },
	{
        geocode: [0.43714174741693185, 101.40211216809617],
        popUp: "LKP THEELHAWI PEKANBARU"
      },
	{
        geocode: [0.4307299474683658, 101.41607884654242],
        popUp: "PKBM AR ROYYAN PEKANBARU"
      },
	{
        geocode: [0.4714485762976506, 101.39343339122368],
        popUp: "PKBM BERJAYA"
      },
	{
        geocode: [0.4512610080755392, 101.38595487073782],
        popUp: "PKBM CAHAYA ILMU"
      },
	{
        geocode: [0.44569291616597545, 101.38984567308111],
        popUp: "PKBM INSAN CENDEKIA"
      },
	{
        geocode: [0.45513282623733, 101.4092371234899],
        popUp: "PKBM INTAN PAYUNG"
      },
	{
        geocode: [0.4697489886680233, 101.4041569712548],
        popUp: "PKBM KHOIRU UMMAH PEKANBARU"
      },
	{
        geocode: [0.46747642588500254, 101.38719083298263],
        popUp: "PKBM MAHAD TAHFIDZ AL-MISYKAAH"
      },
	{
        geocode: [0.46698118042079895, 101.3869676955499],
        popUp: "PKBM MAHAD TAHFIZH ABU AD DARDA"
      },
	{
        geocode: [0.45110449387169543, 101.3859718475975],
        popUp: "PKBM RIAU CEKATAN"
      },
	{
        geocode: [0.4657661119141368, 101.36404586960307],
        popUp: "PKBM TAHFIZH DARUSSALAM"
      },
	{
        geocode: [0.5413824541550909, 101.41059745427384],
        popUp: "PKBM TAMPAN"
      },
	{
        geocode: [0.5265262683719943, 101.48426500218321],
        popUp: "PP BAITUL QURAN RIAU"
      },
	{
        geocode: [0.6331716641897566, 101.3907452906334],
        popUp: "PP Tahariyah Musthafawiyah"
      },
	{
        geocode: [0.4995982312182164, 101.37712502697909],
        popUp: "PP. Ummul Quro"
      },
	{
        geocode: [0.46902563697898186, 101.3846681071994],
        popUp: "PPS Al Uswah"
      },
	{
        geocode: [0.44852963163297765, 101.39022731156349],
        popUp: "PPS Tahfidz Quran Al-Kahfi"
      },
	{
        geocode: [0.4784852554933698, 101.40517989453127],
        popUp: "PPS Umar Bin Khattab"
      },
	{
        geocode: [0.4688750460292807, 101.40872490967224],
        popUp: "PPS. TAHFIZH QURAN HAYATUDDI YAR"
      },
	{
        geocode: [0.44013466233293663, 101.41657764378596],
        popUp: "PPS. UMMAHATUL MUKMININ"
      },
	{
        geocode: [0.5933792146732213, 101.50208006773163],
        popUp: "Darul Qur`an Was Sunnah"
      },
	{
        geocode: [0.5691582277958112, 101.44312343873436],
        popUp: "LKP DARA"
      },
	{
        geocode: [0.5639868065015848, 101.43355051851496],
        popUp: "LKP Menjahit Boutiqe Farida & Frida"
      },
	{
        geocode: [0.5622551908738915, 101.44214479741956],
        popUp: "LKP Rina"
      },
	{
        geocode: [0.5358309507354427, 101.44784277716685],
        popUp: "LKP SURYA INDAH"
      },
	{
        geocode: [0.4451894287563731, 101.43622806101182],
        popUp: "PKBM HANG NADIM"
      },
	{
        geocode: [0.4451894287563731, 101.43622806101182],
        popUp: "PKBM HANG NADIM"
      },
	{
        geocode: [0.5646655429819813, 101.44633812060728],
        popUp: "PKBM PELITA RIAU"
      },
	{
        geocode: [0.5621672311794663, 101.44212868655754],
        popUp: "PKBM SARI"
      },
	{
        geocode: [0.5282870552572143, 101.42878934157481],
        popUp: "LKP Eastern Language Learning Center"
      },
	{
        geocode: [0.5242673479527664, 101.44472335926275],
        popUp: "LKP Permata Bunda"
      },
	{
        geocode: [0.46555049339668275, 101.38592484815508],
        popUp: "LKP SAHABAT PRESTASI"
      },
	{
        geocode: [0.5092481371786566, 101.43491295939991],
        popUp: "LKP. A PLUS"
      },
	{
        geocode: [0.5137495208085988, 101.43523540029788],
        popUp: "LKP. HOMIE ENGLISH"
      },
	{
        geocode: [0.5126693672318055, 101.43862736672621],
        popUp: "LKP. LIBERTY KAMPUNG INGGRIS PEKANBARU"
      },
	{
        geocode: [0.5219608567438724, 101.43890332018711],
        popUp: "PKBM DAHLIA"
      },
	{
        geocode: [0.5193324946995674, 101.44447579997986],
        popUp: "LKP EF ENGLISH FIRST PEKANBARU"
      },
	{
        geocode: [0.5215661980767545, 101.44380197909558],
        popUp: "LKP GENTA MANDIRI RAYA"
      },
	{
        geocode: [0.524298975162814, 101.44469295385993],
        popUp: "LKP Pekanbaru Hospitality Institute"
      },
	{
        geocode: [0.5257756654544704, 101.44220999996146],
        popUp: "LKP STEPHEN KOMPUTER PEKANBARU"
      },
	{
        geocode: [0.5356974640580803, 101.43647861666783],
        popUp: "LKP UNIVERSAL SKILL"
      },
	{
        geocode: [0.524558050294341, 101.44264635818378],
        popUp: "PKBM PRIMATRAIN"
      },
	{
        geocode: [0.46376981777700793, 101.45217050942787],
        popUp: "LKP Access Riau Indonesia"
      },
	{
        geocode: [0.4898030425158914, 101.46559233999461],
        popUp: "LKP BRUCKE RIAU JERMAN (STUDY CONSULTAN)"
      },
	{
        geocode: [0.4749313591163684, 101.48466338809384],
        popUp: "LKP COSTUM YOPI"
      },
	{
        geocode: [0.4902649292307241, 101.50020671150615],
        popUp: "LKP PEKANBARU LAB SCHOOL"
      },
	{
        geocode: [0.4874567966270293, 101.46760083423867],
        popUp: "LKP Rini Handayani"
      },
	{
        geocode: [0.49164537986033574, 101.46322503232057],
        popUp: "LKP Sanggar Rias Tisia"
      },
	{
        geocode: [0.4986529065688006, 101.45529620932136],
        popUp: "LKP VISION TRAINING CENTRE PEKANBARU"
      },
	{
        geocode: [0.5017326439643982, 101.45983240711665],
        popUp: "LKP YULIANA COSTUME"
      },
	{
        geocode: [0.49779994376561526, 101.47527622794925],
        popUp: "LKP. LEMBAGA DIKLAT NASIONAL"
      },
	{
        geocode: [0.5040815393435513, 101.47810052668858],
        popUp: "PKBM PAYUNG NEGERI"
      },
	{
        geocode: [0.5131602929438009, 101.46737670349884],
        popUp: "LKP LEMBAGA PENDIDIKAN KETERAMPILAN"
      },
	{
        geocode: [0.5182947874071394, 101.45856847006023],
        popUp: "PKBM KAK SETO PROGRAM HOMESCHOOLING"
      },
	{
        geocode: [0.5182947874071394, 101.45856847006023],
        popUp: "PKBM KAK SETO PROGRAM HOMESCHOOLING"
      },

    ]
      );
});

app.post('/maps/', (req, res) => {
    res.send('Hello POST')
});

app.listen(5000, () => {
    console.log('listening on port 5000' );
});


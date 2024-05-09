<template>
  <div class="bj" id="eng_zytj">
    <Title :name="title"></Title>
    <div class="contentCenter">
      <div class="pinkBj">
        <div>所有摘要和全文必须通过以下链接提交</div>
        <div><a href="https://www.actahort.org/members/symposiar?nr=744" target="_blank" class="redBtn">摘要提交</a></div>
      </div>
      <div class="mb40">
        <a
          href="https://www.ishs.org/sites/default/files/page-documents/onlinesubmissionauthorsguide.pdf"
          target="_blank"
          class="redBtn"
          >国际园艺学会在线提交程序</a
        >
        <a href="https://www.ishs.org/authors" target="_blank" class="redBtn"
          >Acta Horticulturae指南</a
        >
      </div>
      <RedTitle :titleCont="title3"></RedTitle>
      <div class="flexBox">
        <div class="wid30">
          <div class="descBox">
            <p class="mb20">
              提交报告的作者需首先注册，并完成缴费。我们仅接受完成注册并缴费的作者，已完成注册但不打算作报告的人员，也需要尽快完成支付。
            </p>
          </div>
        </div>
        <div class="wid68">
          <table class="jjrqTable">
            <tr>
              <td>Start of abstract submission</td>
              <td>May 1st, 2024</td>
            </tr>
            <tr>
              <td>Deadline for abstract submission</td>
              <td>Dec 15th, 2024</td>
            </tr>
            <tr>
              <td>Deadline for abstract modification</td>
              <td>Jan 15th, 2025</td>
            </tr>
            <tr>
              <td>Deadline for fulltext paper submission</td>
              <td>Apr 10th, 2025</td>
            </tr>
            <tr>
              <td>Deadline for full text manuscript modification</td>
              <td>Jun 30th, 2025</td>
            </tr>
          </table>
        </div>
      </div>
     
      <RedTitle :titleCont="title2"></RedTitle>
      <div class="descBox">
        <p class="mb20"> Abstract</p>
        <p class="mb20"> All abstracts and manuscripts must be submitted through ROSA (Responsive Online System for Acta Horticulturae submission and review)</p>
        <p class="mb20"> ISHS online submission procedures:</p>
        <p class="mb20">https://www.ishs.org/sites/default/files/page-documents/onlinesubmissionauthorsguide.pdf</p>
        <p class="mb20">Acta Horticulturae guidelines: https://www.ishs.org/authors</p>

        <p class="mb20">● Only abstracts submitted in English will be reviewed.</p>
        <p class="mb20">● Abstracts must not exceed 300 words.</p>
        <p class="mb20">● Abstracts must not contain tables, pictures or graphs.</p>
        <p class="mb20">● All abbreviations must be spelled out on first use.</p>
        <p class="mb20">● Abstracts should be thoroughly checked for spelling and grammar.</p>
        <p class="mb20">
          ●
          An abstract submission charge is due upon submission of an abstract and applies to the presenting author only. For ISHS Individual members, the abstract submission charge is fully waived. Those who do not hold a user account with ISHS yet: create an ISHS user account first at International Society for Horticultural Science. After payment and activation of your user account, you can start your abstract submission.
        </p>
        <p class="mb20">
          ●
          Abstracts must always be submitted by the presenting author, using their own personal ISHS user account. Submitting an abstract on behalf of or using the ISHS user account of another author is strictly not permitted.
        </p>
        <p class="mb20">
          ●
          All oral presenters, must submit a manuscript for Acta Horticulturae according to the Acta Horticulturae guidelines (https://www.ishs.org/authors) by March 1ST, 2025 and will also be notified if the abstract has been selected for an oral or poster presentation. Authors of posters are strongly encouraged to prepare and submit a manuscript for Acta Horticulturae.
        </p>
        <p class="mb20">
          ● All oral presenters, including invited and keynote speakers, must submit a manuscript for Acta Horticulturae according to the Acta Horticulturae guidelines (https://www.ishs.org/authors) by 10 April 2025. Oral presenters who fail to submit a manuscript for publication in Acta Horticulturae or the ISHS Scientific Journal may be refused the floor for making their oral presentation. Authors of posters are strongly encouraged to prepare and submit a manuscript for Acta Horticulturae.
        </p>
        <p class="mb20">
          ●
          Presenting authors of abstracts accepted for presentation (both oral/poster) must register for the symposium by December 31th, 2024. Failing to register for the symposium will result in your abstract being withdrawn from the symposium program and your manuscript being withdrawn from the Acta Horticulturae symposium proceedings.
        </p>

        <h3>Failing to present (oral/poster) at the symposium will result in your manuscript being withdrawn from the Acta Horticulturae symposium proceedings.</h3>
        <p class="mb60">
          ISHS Young Minds Award
        </p>
        <p class="mb20">Two Young Mind Awards for junior scientists will be given:</p>
        <p class="mb20">1. One award for the best oral presentation given by a junior scientist who is in the same time the presenter and first author of the submitted manuscript</p>
        <p class="mb20">2. One award for the best poster presented by a junior scientist who is first author of the work</p>
        <p class="mb20">A special committee, set up by the symposium convener and an ISHS representative, will be responsible for selecting the awardees. Junior scientists to be eligible for this award must be the lead and presenting author of the submission and should be enrolled in a university or college. He/she can be undergraduate, graduate or postgraduate (limited to 6 months after finishing the program of study), and with an age limit of 35. (https://www.ishs.org/young-minds-award)</p>
        <p class="mb20">Language</p>
        <p class="mb20">The official language of the Symposium is English. However, simultaneous interpretation between English and Chinese will be available at the Opening and Closing ceremonies. All the other sessions are in English.</p>

      </div>

     
    </div>
  </div>
</template>
  
  <script>
import Title from "@/components/Title.vue";
import RedTitle from "@/components/RedTitle.vue";
export default {
  data() {
    return {
      title: "submit",
      title2: "Abstract/Full text",
      title3: "Important Dates",
    };
  },
  components: {
    Title,
    RedTitle,
  },
};
</script>
  
  <style scoped>
.mb20 {
  margin-bottom: 20px;
}
.mb40 {
  margin-bottom: 40px;
}
.mb60 {
  margin-bottom: 80px;
}
.bj {
  background: #fff;
  padding: 50px 0 65px 0;
}
.contentCenter {
  width: 1200px;
  margin: 0 auto;
}
.redTxt {
  font-size: 16px;
  color: #d0031f;
  margin-bottom: 70px;
}
.redBtn {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0px 15px;
  color: #fff;
  background: #d0031f;
  margin-left: 10px;
  border-radius: 15px;
}
table.jjrqTable {
  width: 100%;
  border-collapse: collapse;
  border: none;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
table.jjrqTable tr td:first-child {
  font-weight: bold;
  color: #4a4a4a;
}
table.jjrqTable tr td {
  font-weight: normal;
  color: #4a4a4a;
  padding: 0 40px 0 40px;
  border: 1px solid #a3a3a3;
  height: 50px;
  line-height: 50px;
  text-align: left;
}


.descBox {
  font-size: 16px;
  line-height: 2em;
}
.descBox h3 {
  font-weight: bold;
  color: #000;
}
.descBox p {
  color: #4a4a4a;
  text-indent: 2em;
}
.descBox p a {
  text-indent: 0em;
}

.flexBox {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.wid30 {
  width: 35%;
}
.wid68 {
  width: 63%;
}
.pinkBj{width:100%;padding:30px;background-color: #fcf2f3;text-align: center;color:#d0031f;line-height:2.5em;font-size:24px;margin-bottom:20px;}
.pinkBj a{  display:block;margin:0 auto;width:8em;text-align: center;
  height: 40px;
  line-height: 40px;
  padding: 0px 20px;
  color: #fff;
  background: #d0031f;
  font-size:20px;
  border-radius: 20px;}
</style>
<template>
  <div
    id="detailsModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLongTitle" class="modal-title">Document updates</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><font-awesome-icon icon="x" /></span>
          </button>
        </div>
        <div class="modal-body">
          <dl>
            <dt>28th January 2022</dt>
            <dd>ESSR requirement added to 2021 Curriculum section.</dd>
            <dt>3rd December 2021</dt>
            <dd>
              Complete rewrite of the undelying codebase (using Vue for those interested) following agreement of
              requirements for those on the 2021 curriculum.
            </dd>
            <dt>14th January 2021</dt>
            <dd>
              Audit and Clinical Governance requirements during COVID-19 pandemic adjusted: ES is required to comment on
              ESSR if no activity undertaken.
            </dd>
            <dt>20th June 2020</dt>
            <dd>
              Reduced ARCP requirements due to COVID-19 pandemic: a special section has been added for ARCPs conducted
              under the extraordinary circumstances.
            </dd>
            <dt>10th December 2019</dt>
            <dd>
              Reflection guidance changed for both FT and LTFT trainees. Clarification about 'Non-Clinical' modules
              added to CUT form section and new line to introduction to clarify that the ARCP is
              <strong>annual</strong>
              and occurs per calendar year, regardless of progression through the stages of training.
            </dd>
            <dt>5th June 2019</dt>
            <dd>
              New version of RCoA CPD Guidance published. The wording around CPD points for consultants has been changed
              to reflect this and the link is to the new document.
            </dd>
            <dt>14th March 2019</dt>
            <dd>ESSR titles for whole and less than full time trainees clarified.</dd>
            <dt>29th November 2018</dt>
            <dd>
              Rewrite of the user interface. Changes made across the recommendations to account for introduction of the
              RCoA's Lifelong Learning platform in August 2018.
            </dd>
            <dt>13th July 2018</dt>
            <dd>Links to external documents updated.</dd>
            <dt>1st November 2017</dt>
            <dd>Feedback link changed to MMACC system.</dd>
            <dt>4th April 2017</dt>
            <dd>
              Academic Progress Report and ARCP Panel Feedback Form information added to the Research tab for those:
              <ul>
                <li>in an Academic Clinical Fellowship or Clinical Lecturer post; or</li>
                <li>registered for MD(res), MPhil or PhD; or</li>
                <li>
                  undertaking any training, trust grade or fellowship post with ≥25% WTE (usually 12 hours per week)
                  dedicated to research; or
                </li>
                <li>out of programme for research (OOPR) or OOPE with ≥25% WTE research</li>
              </ul>
            </dd>
            <dt>8th September 2016</dt>
            <dd>
              <ol>
                <li>
                  Perioperative medicine requirements included for new CCT curriculum update from the RCoA as of 1st
                  August 2016.
                </li>
                <li>The nomenclature at core level has been updated to reflect new terminology.</li>
                <li>
                  The decision tool used by panels for CT has been updated (the ST3+ versions will be available soon).
                </li>
                <li>All links to external documents verified - let us know if any are not working!.</li>
              </ol>
            </dd>
            <dt>10th September 2015</dt>
            <dd>
              <ol>
                <li>
                  Terminology updated to include the new Completion of Unit of Training (CUT) forms &amp; trainer
                  feedback requirement as part of this process added. Links to College guidance on new assessment.
                </li>
                <li>The decision tool used by panels has been updated.</li>
                <li>
                  Probity &amp; health declarations form part of ESSR, so these have been removed as being required as
                  separate LLP entries to avoid duplication.
                </li>
              </ol>
            </dd>
            <dt>6th May 2015</dt>
            <dd>
              Placement feedback is now compulsory and evidence of completion is required at your ARCP. The Feedback
              section has been updated to reflect this
            </dd>
            <dt>6th April 2015</dt>
            <dd>Specific LTFT requirements added.</dd>
            <dt>29th November 2014</dt>
            <dd>A few links have been tidied up as a result of some documents moving around on the RCoA website.</dd>
            <dt>29th August 2014</dt>
            <dd>
              Following the summer ARCPs, explicit clarification has been added that:
              <ul>
                <li>
                  Acting as a local co-ordinator of a regional/national audit is not sufficient to satisfy audit and
                  clinical governance requirements.
                </li>
                <li>Form Rs should be uploaded to the LLP</li>
                <li>
                  Form R is a part of the GMC's Revalidation requirements so will still be required if a trainee has
                  been out of programme.
                </li>
              </ul>
            </dd>
            <dt>9th June 2014</dt>
            <dd>
              Feedback process has changed and is now an online process making the ARCP entirely paperless for trainees.
              The feedback can be completed online or at your ARCP on a tablet.
            </dd>
            <dt>19 Feb 2014</dt>
            <dd>
              New Deanery online Form R now replaces the version previously expected to be uploaded to LLP. The proforma
              used by ARCP panels has been added for reference.
            </dd>
            <dt>4 September 2013</dt>
            <dd>Minor tweak to ensure Intensive Care Medicine Annex F information shown for all grades.</dd>
            <dt>23 May 2013</dt>
            <dd>
              Workaround to allow people using very old web browsers (Internet Explorer 7, Firefox 3) to download the
              files referenced. Thanks to Amy Stocks and Allan Monks for their assistance.
            </dd>
            <dt>1 May 2013</dt>
            <dd>
              Revalidation notes for College Tutors and Educational Supervisors added to the ESSR section. New site
              feature to be added to an email list to be informed of major updates to this document.
            </dd>
            <dt>12 Mar 2013</dt>
            <dd>Feedback section added.</dd>
            <dt>14 Feb 2013</dt>
            <dd>Purely cosmetic - the site should now look better (and be easier to browse) on mobile phones.</dd>
            <dt>11 Feb 2013</dt>
            <dd>
              Updated 'Revalidation' section, removing the requirement for a hard-copy of the Enhanced Form R, adding
              the notes for completion and updating the links to the forms &amp; example.
            </dd>
            <dt>27 Dec 2012</dt>
            <dd>
              As the North West School of Anaesthesia is trialling the ESSR (Educational Supervisor's Structured
              Report), the appropriate section of the document has been updated to reflect this.
            </dd>
            <dt>20 Dec 2012</dt>
            <dd>Version history displayed.</dd>
            <dt>14 Dec 2012</dt>
            <dd>Revalidation requirements added in view of Deanery plans discussed at School Board meeting.</dd>
            <p></p>
            <dd>Initial public release of this document.</dd>
          </dl>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>
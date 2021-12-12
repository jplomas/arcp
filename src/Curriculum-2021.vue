<template>
  <div id="NW" class="container-fluid">
    <div id="accordion">
      <div id="accordionExample" class="accordion">
        <!-- HALO -->
        <div class="card">
          <div id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                HALOs
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div v-if="toShow('CT1 CT2 ST4 ST6')" class="CT1 CT2 ST4 ST6">
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <br />
                <br />
                Evidence is required of HALO progress in each of the seven GPC and seven specialty-specific clinical
                domains. The same evidence can be referenced to multiple domains. Examples of the possible types of
                evidence are detailed below and additional information is available within the LLP.
                <div class="table-responsive">
                  <table class="table mt-3">
                    <thead>
                      <tr class="table-primary">
                        <td>GPC Domains</td>
                        <td>Evidence</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1. Professional Behaviours & Communication</td>
                        <td>
                          <ul>
                            <li>SLE</li>
                            <li>Personal Activity</li>
                            <li>Personal Reflection</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>2. Management / Professional / Regulatory Requirements</td>
                        <td>
                          <ul>
                            <li>SLE</li>
                            <li>Personal Activity</li>
                            <li>Personal Reflection</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>3. Team Working</td>
                        <td>
                          <ul>
                            <li>
                              SLE [
                              <strong>
                                one ALMAT per year
                                <span style="text-decoration: underline">MUST</span>
                                be completed
                              </strong>
                              ]
                            </li>
                            <li>Personal Activity</li>
                            <li>Personal Reflection</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>4. Safety & Quality Improvement</td>
                        <td>See below</td>
                      </tr>
                      <tr>
                        <td>5. Safeguarding</td>
                        <td>
                          <ul>
                            <li>SLE</li>
                            <li>Personal Activity</li>
                            <li>Personal Reflection</li>
                          </ul>
                          Trust mandatory training is acceptable evidence for this domain and certificates of completion
                          can be uploaded for:
                          <ul>
                            <li>Safeguarding adults</li>
                            <li>Safeguarding children</li>
                            <li>MCA</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>6. Education & Training</td>
                        <td>
                          <li>SLE</li>
                          <li>Personal Activity</li>
                        </td>
                      </tr>
                      <tr>
                        <td>7. Research & Managing Data</td>
                        <td>
                          <ul>
                            <li>SLE</li>
                            <li>Personal Activity</li>
                            <li>Personal Reflection</li>
                          </ul>
                        </td>
                      </tr>
                      <thead>
                        <tr class="table-primary">
                          <td>Speciality-specific domains</td>
                          <td>Evidence</td>
                        </tr>
                      </thead>
                      <tr>
                        <td>
                          <ul>
                            <li>Perioperative Medicine and Health Promotion</li>
                            <li>General Anaesthesia</li>
                            <li>Regional Anaesthesia</li>
                            <li>Resuscitation and Transfer</li>
                            <li>Procedural Sedation</li>
                            <li>Pain</li>
                            <li>Intensive Care</li>
                          </ul>
                        </td>
                        <td>
                          For each Domain there should be evidence of:
                          <ul>
                            <li>SLE</li>
                            <li>Personal Reflection</li>
                            <li>Personal Activity</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <strong>4. Safety &amp; Quality Improvement GPC</strong>
                <br />
                At a minimum, there must be evidence in your LLP that you have actively participated and significantly
                contributed to one of the following per year:
                <table class="table mt-3">
                  <thead>
                    <tr class="table-primary">
                      <td>Option</td>
                      <td>Evidence to upload</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Audit with recognisable standards (eg. audit recipe book)</td>
                      <td>AQIPAT form</td>
                    </tr>

                    <tr>
                      <td>2. Re-audit to close the audit loop</td>
                      <td>AQIPAT form</td>
                    </tr>

                    <tr>
                      <td>3. Contribution to development of new clinical guidelines</td>
                      <td>Your guidelines</td>
                    </tr>

                    <tr>
                      <td>4. Contribution to quality assurance/improvement programs</td>
                      <td>AQIPAT form</td>
                    </tr>

                    <tr>
                      <td>5. Major reviews of clinical effectiveness/outcomes in a local Trust</td>
                      <td>Summary of review</td>
                    </tr>

                    <tr>
                      <td>6. Completion of incident forms</td>
                      <td>Reflections</td>
                    </tr>
                  </tbody>
                </table>
                <div v-if="toShow('CT1 CT2 CT3')" class="bg-light p-3 mb-3 mt-3">
                  Based on shortlisting for national ST4 jobs, It is
                  <strong>strongly</strong>
                  recommended that
                  <strong>at least one audit or QI project</strong>
                  (with associated AQIPAT form) is completed
                  <strong>per year</strong>
                  of training.
                </div>
                <br />
                <br />
              </div>
              <div v-if="toShow('CT3 ST5 ST7')" class="CT3 ST5 ST7">
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Completed HALOs</strong>
                <br />
                <br />
                14 HALO forms [7 x Clinical, 7 x GPC] are required to be completed on the LLP prior to the end of each
                stage of training.
                <div class="bg-light p-3 mb-3 mt-3">
                  <strong>
                    Stage of training sign off will be completed
                    <em>at ARCP</em>
                    and does not need to be undertaken beforehand
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /HALO -->

        <!-- EPAs -->
        <div v-if="toShow('CT1 CT2 CT3')" class="card">
          <div id="headingEPAs" data-bs-toggle="collapse" data-bs-target="#collapseEPAs" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEPAs"
                aria-expanded="false"
                aria-controls="collapseEPAs"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                EPAs
              </button>
            </h5>
          </div>
          <div id="collapseEPAs" class="collapse" aria-labelledby="headingEPAs" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div v-if="toShow('CT1 CT2 CT3')" class="CT1 CT2 ST4 ST6">
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <br />
                <br />
                <strong>Requirement</strong>
                <blockquote>
                  <ul>
                    <li v-if="toShow('CT1')">EPA 1 / EPA 2 (IAC) should be completed by the end of CT1</li>
                    <li v-if="toShow('CT2 CT3')">EPA 3 / EPA 4 (IAOC) should be completed by the end of CT1</li>
                  </ul>
                </blockquote>
                <strong>Format</strong>
                <blockquote>Summative assessment via LLP</blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /EPAs -->

        <!-- MTR -->
        <div class="card">
          <div id="headingOneBee" data-bs-toggle="collapse" data-bs-target="#collapseOneBee" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOneBee"
                aria-expanded="false"
                aria-controls="collapseOneBee"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Multi-Trainer Reports
              </button>
            </h5>
          </div>
          <div id="collapseOneBee" class="collapse" aria-labelledby="headingOneBee" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    As per full-time requirements.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Format</strong>
                <blockquote>
                  May be generated on LLP
                  <strong>or</strong>
                  where the same information is gathered by a College Tutor / Educational Supervisor via an alternate
                  method (paper forms, surveys, QR codes, etc.).
                  <div class="bg-light p-3 mb-3 mt-3">
                    When not undertaken via the LLP platform, the MTR report should be added as a Personal Activity to
                    the LLP for review by the ARCP panel.
                  </div>
                </blockquote>
                <strong>Frequency</strong>
                <blockquote>
                  One per ARCP as baseline.
                  <span v-if="toShow('CT1 CT2 CT3')">
                    <strong>plus additional</strong>
                    MTRs for:
                    <ul>
                      <li>EPA1-2 (IAC - the Initial Assessment of Competency)</li>
                      <li>EPA3-4 (IAOC - the Initial Assessment of Obstetric Competency)</li>
                    </ul>
                  </span>
                  <span v-if="!toShow('CT1 CT2 CT3')">
                    <br />
                    <br />
                  </span>
                  <p>
                    You may
                    <strong>also</strong>
                    be requested to undertake additional MTRs at the request of your College Tutor or Lead Trainers for
                    some modules.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /MTR -->

        <!-- CME -->
        <div class="card">
          <div id="headingEight" data-bs-toggle="collapse" data-bs-target="#collapseEight" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                CPD Activity
              </button>
            </h5>
          </div>
          <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    LTFT trainees should accumulate CME points pro rata as follows:
                    <br />
                    <br />
                    <table class="table table-condensed table-bordered">
                      <thead>
                        <tr>
                          <th>Proportion of full time training</th>
                          <th>Internal CME/CPD points per ARCP</th>
                          <th>External CME/CPD points per ARCP</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1.0</td>
                          <td>25</td>
                          <td>25</td>
                        </tr>
                        <tr>
                          <td>0.9</td>
                          <td>23</td>
                          <td>23</td>
                        </tr>
                        <tr>
                          <td>0.8</td>
                          <td>20</td>
                          <td>20</td>
                        </tr>
                        <tr>
                          <td>0.7</td>
                          <td>18</td>
                          <td>18</td>
                        </tr>
                        <tr>
                          <td>0.6</td>
                          <td>15</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>0.5</td>
                          <td>13</td>
                          <td>13</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <blockquote v-if="toShow('CT1 CT2 CT3')">
                  <code v-if="toShow('CT1')" class="year">CT1</code>
                  <code v-if="toShow('CT2')" class="year">CT2</code>
                  <code v-if="toShow('CT3')" class="year">CT3</code>
                  <br />
                  <strong>Items</strong>
                  <ol>
                    <li>
                      STEP workbook detailing internal CPD points: &nbsp;
                      <a
                        href="Stage%20One%20(STEP)%20Workbook%20-%20DE%20JPL.xlsx"
                        class="btn btn-outline-secondary btn-sm"
                      >
                        <i class="icon-download-alt"></i>
                        .xlsx
                      </a>
                    </li>
                    <li>
                      Summary document totalling external CPD points: &nbsp;
                      <a href="CME%20summary%20External.doc" class="btn btn-outline-secondary btn-sm">
                        <i class="icon-download-alt"></i>
                        .doc
                      </a>
                      &nbsp;
                      <a href="CME%20summary%20External.pdf" class="btn btn-outline-secondary btn-sm">
                        <i class="icon-download-alt"></i>
                        .pdf
                      </a>
                      <em class="p-3">Remember to fill in the totals!</em>
                    </li>
                    <li>CME/CPD certificates, certificates and records of attendance.</li>
                  </ol>
                </blockquote>
                <strong v-if="toShow('CT1 CT2 CT3')">Titles</strong>
                <blockquote v-if="toShow('CT1 CT2 CT3')">
                  <ol>
                    <li>
                      <em>STEP workbook:</em>
                      Named with the year & month of your ARCP in the format:
                      <br />
                      <code>Evidence - STEP CME Workbook - 2022 August</code>
                    </li>
                    <li>
                      <em>Summary:</em>
                      Named with the year & month of your ARCP in the format:
                      <br />
                      <code>Evidence - CME External Summary - 2022 August</code>
                    </li>
                    <li>
                      <em>Individual documents:</em>
                      Named with year & month activity undertaken in the format:
                      <br />
                      <code>Evidence - Certificate - 2022 August - Title of Course</code>
                    </li>
                  </ol>
                </blockquote>
                <blockquote v-if="toShow('ST4 ST5')">
                  <code v-if="toShow('ST4')" class="year">ST4</code>
                  <code v-if="toShow('ST5')" class="year">ST5</code>
                  <br />
                  <strong>Items</strong>
                  <ol>
                    <li>
                      STOP workbook detailing internal CPD points: &nbsp;
                      <a
                        href="Stage%20Two%20(STOP)%20Workbook%20-%20DE%20JPL.xlsx"
                        class="btn btn-outline-secondary btn-sm"
                      >
                        <i class="icon-download-alt"></i>
                        .xlsx
                      </a>
                    </li>
                    <li>
                      Summary document totalling external CPD points: &nbsp;
                      <a href="CME%20summary%20External.doc" class="btn btn-outline-secondary btn-sm">
                        <i class="icon-download-alt"></i>
                        .doc
                      </a>
                      &nbsp;
                      <a href="CME%20summary%20External.pdf" class="btn btn-outline-secondary btn-sm">
                        <i class="icon-download-alt"></i>
                        .pdf
                      </a>
                      <em class="p-3">Remember to fill in the totals!</em>
                    </li>
                    <li>CME/CPD certificates, certificates and records of attendance.</li>
                  </ol>
                </blockquote>
                <strong v-if="toShow('ST4 ST5')">Titles</strong>
                <blockquote v-if="toShow('ST4 ST5')">
                  <ol>
                    <li>
                      <em>STOP workbook:</em>
                      Named with the year & month of your ARCP in the format:
                      <br />
                      <code>Evidence - STOP CME Workbook - 2022 August</code>
                    </li>
                    <li>
                      <em>Summary:</em>
                      Named with the year & month of your ARCP in the format:
                      <br />
                      <code>Evidence - CME External Summary - 2022 August</code>
                    </li>
                    <li>
                      <em>Individual documents:</em>
                      Named with year & month activity undertaken in the format:
                      <br />
                      <code>Evidence - Certificate - 2022 August - Title of Course</code>
                    </li>
                  </ol>
                </blockquote>
                <blockquote v-if="toShow('ST6 ST7')">
                  <code v-if="toShow('ST6')" class="year">ST6</code>
                  <code v-if="toShow('ST7')" class="year">ST7</code>
                  <br />
                  <strong>Items</strong>
                  <ol>
                    <li>
                      Summary document totalling internal &amp; external CPD points: &nbsp;
                      <a href="CME%20summary.doc" class="btn btn-outline-secondary btn-sm">
                        <i class="icon-download-alt"></i>
                        .doc
                      </a>
                      &nbsp;
                      <a href="CME%20summary.pdf" class="btn btn-outline-secondary btn-sm">
                        <i class="icon-download-alt"></i>
                        .pdf
                      </a>
                      <em class="p-3">Remember to fill in the totals!</em>
                    </li>
                    <li>CME/CPD certificates, certificates and records of attendance.</li>
                  </ol>
                </blockquote>
                <strong v-if="toShow('ST6 ST7')">Titles</strong>
                <blockquote v-if="toShow('ST6 ST7')">
                  <ol>
                    <li>
                      <em>Summary:</em>
                      Named with the year & month of your ARCP in the format:
                      <br />
                      <code>Evidence - CME Summary - 2022 August</code>
                    </li>
                    <li>
                      <em>Individual documents:</em>
                      Named with year & month activity undertaken in the format:
                      <br />
                      <code>Evidence - Certificate - 2022 August - Title of Course</code>
                    </li>
                  </ol>
                </blockquote>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <strong>Format</strong>
                <blockquote>PDFs, Word documents or Spreadsheet</blockquote>
                <strong>Frequency</strong>
                <blockquote>One summary per ARCP period.</blockquote>
                <strong>CPD Point Requirements</strong>
                <blockquote>
                  There are no longer any numerical points requirements for North West trainees. For revalidation
                  purposes, 25 internal and 25 external CPD/CME points per year are recommended.
                </blockquote>
                <strong>Guidance</strong>
                <blockquote>
                  Internal CME is anything undertaken within your base hospital: eg. attending teaching & audit
                  meetings,
                  <strong>formal</strong>
                  teaching sessions of junior trainees/medical students (note this does not include informal theatre or
                  ward-based teaching). It also includes any self-directed online learning activity with accredited
                  CME/CPD points.
                  <br />
                  <br />
                  External CME is any regional or national teaching or course undertaken away from your base hospital.
                  <br />
                  <br />
                  Points are awarded as follows:
                  <ul>
                    <li>1 point per hour of activity</li>
                    <li>Maximum of 5 points per whole day</li>
                    <li>Maximum of 3 points per half day</li>
                  </ul>
                  For consultants, the RCoA used to recommend limits on the number of points claimed for attending or
                  teaching courses. This has now been replaced by a recommendation of a "balanced CPD programme" (for
                  more details see this
                  <a
                    href="https://www.rcoa.ac.uk/system/files/CPDguidelines2018.pdf"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    <i class="icon-arrow-right"></i>
                    &nbsp;RCoA CPD document
                  </a>
                  ). There are no limitations on CPD points applied to North West trainees and external points for ALS,
                  APLS and ATLS can be listed in the same year.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /CME -->

        <!-- MSF -->
        <div class="card">
          <div id="headingEleven" data-bs-toggle="collapse" data-bs-target="#collapseEleven" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Multi-Source Feedback
              </button>
            </h5>
          </div>
          <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    One per training year (not calendar year) or more frequently at your College Tutor's request. In
                    addition a separate MSF must be completed for each ICM module.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Frequency</strong>
                <blockquote>
                  Minimum of once per year
                  <strong>plus</strong>
                  once per ICU placement. ie. if you do 3 months ICU and 9 months anaesthetics in a year, you will need
                  to undertake two MSFs in this period.
                  <br />
                  <br />
                  <em>
                    This is a
                    <strong>minimum:</strong>
                    the School, your College Tutor, or Educational Supervisor may require you to undertake more.
                  </em>
                </blockquote>
                <strong>Format</strong>
                <blockquote>Via LLP</blockquote>
                <strong>Number of responders</strong>
                <blockquote>
                  Please send requests from the LLP system to
                  <strong>15</strong>
                  people. A minimum number of
                  <strong>10</strong>
                  replies are required. It is advised that an MSF is undertaken early to ensure it is completed in time
                  for your ARCP.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /MSF -->

        <!-- Reflective Practice -->
        <div class="card">
          <div id="headingThirteen" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Reflective Practice
              </button>
            </h5>
          </div>
          <div
            id="collapseThirteen"
            class="collapse"
            aria-labelledby="headingThirteen"
            data-bs-parent="#accordionExample"
          >
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    Same requirements as full-time colleagues.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Requirements</strong>
                <blockquote>
                  There is no minimum requirement for number of reflections. The School, College and GMC emphasise the
                  importance of reflection for professional development and it is a requirement for revalidation
                  throughout your career. There needs to be evidence within your ePortfolio that reflection has occurred
                  and discussed with your educational supervisor. There should be specific reflections within your
                  ePortfolio for any Serious Untoward Incidents (SUIs) in which you are named and anything referenced on
                  your Form R. Remember reflections could include 'positive' events: compliments, thank-you cards and
                  stand-out educational experiences. For more information, see the
                  <!-- eslint-disable -->
          <a
            href="http://www.aomrc.org.uk/wp-content/uploads/2018/09/the_reflective_practioner_guidance_single_page.pdf"
          >
          <!-- eslint-enable -->
                    <i class="icon-arrow-right"></i>
                    AoMRC reflective toolkit
                  </a>
                </blockquote>
                <strong>Format</strong>
                <blockquote>Via LLP only.</blockquote>
                <strong>Note</strong>
                <blockquote>
                  It is recommended that you follow a recognised framework for reflection in entering your items. eg:
                  <ul class="double">
                    <li>
                      <strong>S</strong>
                      ituation
                    </li>
                    <li>
                      <strong>T</strong>
                      ask
                    </li>
                    <li>
                      <strong>A</strong>
                      ction
                    </li>
                    <li>
                      <strong>R</strong>
                      esults
                    </li>
                  </ul>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /Reflective Practice -->
        <!-- Logbook -->
        <div class="card">
          <div id="headingSeven" data-bs-toggle="collapse" data-bs-target="#collapseSeven" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Logbook Summary
              </button>
            </h5>
          </div>
          <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    One per ARCP (this will enable the panel to ensure that your training is comparable to the full-time
                    trainees in all ways except the number of hours worked/proportion of training achieved per week).
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>Summary from LLP or your logbook software</blockquote>
                <strong>Format</strong>
                <blockquote>PDF or Word document</blockquote>
                <strong>Title</strong>
                <blockquote>
                  Named with the year & month of your ARCP in the format:
                  <br />
                  <code>Evidence - Logbook - 2022 January</code>
                </blockquote>
                <strong>Frequency</strong>
                <blockquote>One summary per ARCP period.</blockquote>
                <strong>Notes</strong>
                <p class="tight-b">The Logbook Summary should:</p>
                <ol>
                  <li>Cover the whole year, not the individual modules.</li>
                  <li>Show numbers of cases in the year by specialty and level of supervision</li>
                </ol>
                <p class="tight-b">
                  The Logbook Summary should
                  <strong>not</strong>
                  :
                </p>
                <ol>
                  <li>Be a list of cases</li>
                  <li>Cover more than the year being reviewed by the ARCP panel</li>
                </ol>
                <div class="bg-light p-3 mb-3 mt-3">
                  <i class="icon icon-warning-sign"></i>
                  Remember to backup your logbook regularly!
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Logbook -->
        <!-- CV -->
        <div v-if="toShow('ST6 ST6')" class="card">
          <div id="headingSix" data-bs-toggle="collapse" data-bs-target="#collapseSix" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                CV
              </button>
            </h5>
          </div>
          <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    Your up-to-date CV must be uploaded prior to each ARCP.
                  </div>
                </div>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>Your up-to-date CV</blockquote>
                <strong>Format</strong>
                <blockquote>
                  PDF or Word document uploaded to the LLP.
                  <br />
                  <br />
                  <em>
                    It is recommended that all documentation uploaded to the LLP for review by the ARCP panel is added
                    as a 'Personal Activity'.
                  </em>
                  <br />
                  <div class="ST7 bg-light p-3 mb-3 mt-3">
                    <i class="icon-warning-sign"></i>
                    For your final ARCP, it is strongly advised that you bring a paper copy of your CV in order to fill
                    in the Completion of Training form.
                  </div>
                </blockquote>
                <strong>Title</strong>
                <blockquote>
                  Named with the year of update in the format:
                  <code>Evidence - CV - 2021</code>
                </blockquote>
                <strong>Frequency</strong>
                <blockquote>Once per year.</blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /CV -->
        <!-- Research -->
        <div class="card">
          <div id="headingTen" data-bs-toggle="collapse" data-bs-target="#collapseTen" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Research
              </button>
            </h5>
          </div>
          <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div class="LTFT" style="display: none">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    Same requirements as full-time colleagues.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <strong>
                  This section is only applicable if you are being given research days. You
                  <em>do not</em>
                  have to submit a research summary if you are required to submit an Academic Progress Report and ARCP
                  Panel Feedback Form (see below).
                </strong>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>
                  Research summary, containing:
                  <ul>
                    <li>List of projects and their current status</li>
                    <li>Narrative summary of research activity since the last ARCP.</li>
                  </ul>
                </blockquote>
                <strong>Frequency</strong>
                <blockquote>One summary per year, updated prior to your ARCP.</blockquote>
                <strong>Format</strong>
                <blockquote>
                  Template document:
                  <a href="Research%20Summary.doc" class="btn btn-outline-secondary btn-sm">
                    <i class="icon-download-alt"></i>
                    .doc
                  </a>
                  &nbsp;
                  <a href="Research%20Summary.pdf" class="btn btn-outline-secondary btn-sm">
                    <i class="icon-download-alt"></i>
                    .pdf
                  </a>
                </blockquote>
                <strong>Title</strong>
                <blockquote>
                  Named with the month and year of your ARCP in the format:
                  <br />
                  <code>Evidence - Research Summary - July 2012</code>
                </blockquote>
                <br />
                <br />
                <div class="well">
                  <h5>Academic Progress Report and ARCP Panel Feedback Form</h5>
                  An
                  <strong>Academic Progress Report and ARCP Panel Feedback Form</strong>
                  should be submitted to the ARCP panel by any trainee who at any time since their previous ARCP has
                  been:
                  <ul>
                    <li>in an Academic Clinical Fellowship or Clinical Lecturer post; or</li>
                    <li>registered for MD(res), MPhil or PhD; or</li>
                    <li>
                      undertaking any training, trust grade or fellowship post with ≥25% WTE (usually 12 hours per week)
                      dedicated to research; or
                    </li>
                    <li>out of programme for research (OOPR) or OOPE with ≥25% WTE research</li>
                  </ul>
                  Guidance for ARCP panels for trainees undertaking research placements is available from the NIAA
                  website
                  <a
                    href="https://www.niaa.org.uk/download.php/?fn=Supporting%20document%20for%20academic%20ARCP%20review.pdf&mime=application/pdf&pureFn=Supporting%20document%20for%20academic%20ARCP%20review.pdf"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    <i class="icon-share-alt"></i>
                    here
                  </a>
                  <br />
                  <br />
                  <strong>Item</strong>
                  <blockquote>NIAA Academic Progress Report and ARCP Panel Feedback Form</blockquote>
                  <strong>Frequency</strong>
                  <blockquote>One summary per year, updated prior to your ARCP.</blockquote>
                  <strong>Format</strong>
                  <blockquote>
                    NIAA ARCP Academic Progress Report
                    <a
                      href="https://www.niaa.org.uk/download.php/?fn=ARCP_Academic%20Progress%20Report_FINAL%2016022017.doc&mime=application/msword&pureFn=ARCP_Academic%20Progress%20Report_FINAL%2016022017.doc"
                      class="btn btn-outline-secondary btn-sm"
                    >
                      <i class="icon-download-alt"></i>
                      .doc
                    </a>
                    uploaded as evidence to LLP.
                    <br />
                    &nbsp; &nbsp;
                    <em>
                      It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal
                      Activity'. Using the 'Document Store' does not link to units of training and may mean the files
                      are unavailable at ARCP.
                    </em>
                  </blockquote>
                  <strong>Title</strong>
                  <blockquote>
                    Named with the month and year of your ARCP in the format:
                    <br />
                    <code>Evidence - Academic Progress Report - July 2017</code>
                  </blockquote>
                  <strong>Important</strong>
                  <blockquote>
                    A copy should also be emailed to
                    <code>Emma.Woods@hee.nhs.uk</code>
                    to allow a copy to be printed and signed by the ARCP panel.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Research -->
        <!-- OOPE -->
        <div class="card">
          <div id="headingTwelve" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Overseas Out-of-programme Experience/Training
              </button>
            </h5>
          </div>
          <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    Same requirements as full-time colleagues.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>This section is only applicable if you are being given time out of programme</strong>
                <br />
                <br />
                <i class="icon icon-warning-sign"></i>
                Remember that as Revalidation is GMC-driven, you will still need to complete a Form R if you have been
                engaged in Out of Programme activity since your last ARCP: see the Revalidation section below.
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>
                  Out-of-programme (OOP) summary, containing a brief description of work undertaken. This should include
                  level of supervision, number of patients and case mix.
                  <br />
                  <br />
                  <i class="icon icon-check"></i>
                  &nbsp;NB. If your OOP time has been approved for training by the RCoA, it is acceptable to upload a
                  copy of the report sent to the college as evidence.
                </blockquote>
                <strong>Frequency</strong>
                <blockquote>One summary per period out of programme.</blockquote>
                <strong>Format</strong>
                <blockquote>
                  Word or PDF Document uploaded to LLP.
                  <div class="bg-light p-3 mb-3 mt-3">
                    It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal
                    Activity'. Using the 'Document Store' does not link to units of training and may mean the files are
                    unavailable at ARCP.
                  </div>
                </blockquote>
                <strong>Title</strong>
                <blockquote>
                  Named with the year of your OOPE activity in the format:
                  <br />
                  <code>Evidence - OOPE - 2021</code>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- / OOPE -->
        <!-- Revalidation -->
        <div class="card">
          <div id="headingTwelve" data-bs-toggle="collapse" data-bs-target="#collapseFifty" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFifty"
                aria-expanded="false"
                aria-controls="collapseFifty"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Revalidation
              </button>
            </h5>
          </div>
          <div id="collapseFifty" class="collapse" aria-labelledby="headingFifty" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div>
                <div class="LTFT" style="display: none">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    One Enhanced Form R for Doctors In Training (Self-Declaration) per ARCP. See below for further
                    details.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <p>
                  All trainees attending an ARCP will need to complete an
                  <em>Enhanced Form R for Doctors In Training (Self-Declaration)</em>
                  form as part of the revalidation process. This is now available as an online form at the Deanery
                  website.
                </p>
                <strong>Item</strong>
                <blockquote>
                  <a href="https://www.nwpgmd.nhs.uk/form-r-part-a" class="btn btn-outline-secondary btn-sm">
                    <i class="icon-arrow-right"></i>
                    Part A
                  </a>
                  and
                  <a href="https://www.nwpgmd.nhs.uk/form-r-part-b" class="btn btn-outline-secondary btn-sm">
                    <i class="icon-arrow-right"></i>
                    Part B
                  </a>
                  at the Deanery website.
                </blockquote>
                <strong>Frequency</strong>
                <blockquote>
                  One per ARCP
                  <br />
                  <i class="icon icon-warning-sign"></i>
                  Remember that as Revalidation is GMC-driven, you will still need to complete this Form R if you have
                  been engaged in Out of Programme activity since your last ARCP.
                </blockquote>
                <strong>Format</strong>
                <blockquote>
                  Proof of completion (downloaded form, email confirmation or screenshot) uploaded to LLP as PDF, Word
                  document or image.
                  <br />
                  &nbsp; &nbsp;
                  <em>
                    It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal
                    Activity'. Using the 'Document Store' does not link to units of training and may mean the files are
                    unavailable at ARCP.
                  </em>
                </blockquote>
                <strong>Title</strong>
                <blockquote>
                  Named with the year of your ARCP in the format:
                  <br />
                  <code>Revalidation - 2014 - Form R</code>
                </blockquote>
                <strong>Notes for Completion</strong>
                <blockquote>
                  The Form R must cover your most recent placement and have been completed
                  <strong>no earlier than one month prior to your ARCP</strong>
                  .
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /Revalidation -->
        <!-- Feedback -->
        <div class="card">
          <div id="headingSixteen" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed p-0 text-left nti"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSixteen"
                aria-expanded="false"
                aria-controls="collapseSixteen"
              >
                <span class="when-opened">
                  <font-awesome-icon icon="caret-down" />
                </span>
                <span class="when-closed">
                  <font-awesome-icon icon="caret-right" />
                </span>
                Feedback
              </button>
            </h5>
          </div>
          <div
            id="collapseSixteen"
            class="collapse"
            aria-labelledby="headingSixteen"
            data-bs-parent="#accordionExample"
          >
            <div class="card-body">
              <div>
                <div v-if="ltft">
                  <div class="alert alert-success">
                    <strong>LTFT</strong>
                    <br />
                    One per hospital placement since your last ARCP.
                  </div>
                </div>
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>Placement Feedback</blockquote>
                <strong>Frequency</strong>
                <blockquote>One per hospital placement since your last ARCP.</blockquote>
                <strong>Format</strong>
                <blockquote>
                  Completed
                  <a href="https://mmacc.uk/data/index.php/545614?lang=en" class="btn btn-outline-secondary btn-sm">
                    <i class="icon-arrow-right"></i>
                    online here
                  </a>
                  with evidence of completion uploaded to LLP (pdf or screenshot).
                  <div class="bg-light p-3 mb-3 mt-1">
                    It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal
                    Activity'. Using the 'Document Store' does not link to units of training and may mean the files are
                    unavailable at ARCP.
                  </div>
                  <div class="bg-light p-3 mb-3 mt-3">
                    The feedback system may not run on some Trust computers and networks. If you need technical support
                    with using the system email
                    <a href="mailto:jp.lomas@gmail.com">jp.lomas@gmail.com</a>
                  </div>
                </blockquote>
                <strong>Title</strong>
                <blockquote>
                  Named with the name of the Trust and the year of your ARCP in the format:
                  <br />
                  <code>Evidence - Feedback - MRI - 2021</code>
                </blockquote>
                <strong>Note</strong>
                <blockquote>
                  All placement feedback is confidential and will be used to improve the quality of training in the
                  North West.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <!-- /Feedback -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {
      name: 'Curriculum2021',
      props: { ltft: { type: Boolean } },
    };
  },
  data() {
    return {
      ltft: false,
    };
  },
  methods: {
    toShow(years) {
      let show = false;
      const yearsArray = years.split(' ');
      yearsArray.forEach((year) => {
        if (
          (this.$store.state.items === 1 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT1'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 2 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT2'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 3 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT3'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 4 || this.$store.state.items === 200 || this.$store.state.items === 0) &&
          year === 'ST4'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 5 || this.$store.state.items === 200 || this.$store.state.items === 0) &&
          year === 'ST5'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 6 || this.$store.state.items === 300 || this.$store.state.items === 0) &&
          year === 'ST6'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 7 || this.$store.state.items === 300 || this.$store.state.items === 0) &&
          year === 'ST7'
        ) {
          show = true;
        }
      });
      return show;
    },
  },
};
</script>
<style scoped>
.tight-b {
  margin-bottom: 0;
}
</style>
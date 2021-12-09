<template>
  <div id="NW" class="container-fluid">
    <div id="accordion">
      <div id="accordionExample" class="accordion">
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
                CUT forms &amp; WPBAs
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="card-body">
              <div class="bg-light p-3 mb-3">
                <strong>Trainer feedback</strong>
                <br />
                <br />
                Trainer feedback is required for the Completion of Unit of Training form to be signed on the LLP. It
                <strong>is the trainer/educational supervisor's responsibility</strong>
                to seek this and the trainee's responsibility to ensure this is uploaded to the LLP (see next tab).
                <br />
                <br />
                The assessment guidance for trainees and trainers is available at the RCoA website
                <a
                  href="https://www.rcoa.ac.uk/system/files/AssessmentGuidance2018.pdf"
                  class="btn btn-outline-secondary btn-sm"
                >
                  <font-awesome-icon icon="arrow-right" />
                  here.
                </a>
              </div>
              <div v-if="ltft">
                <div class="alert alert-success">
                  <strong>LTFT</strong>
                  <br />
                  The number accrued should show adequate progression reflecting the proportion of the training year
                  (not calendar year) which has been completed since the last ARCP.
                </div>
              </div>
              <div v-if="toShow('CT1 CT2 CT3')" class="CT1 CT2 CT3">
                <strong>Completion of Unit of Training Format</strong>
                <blockquote>Only via LLP</blockquote>
              </div>
              <div v-if="toShow('CT1')" class="CT1">
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <h3>IAC</h3>
                Successful completion of the Initial Assessment of Competency (IAC) requires the completion of the
                following Workplace Based Assessments (WBAs) from page B-94 of
                <a
                  href="https://www.rcoa.ac.uk/system/files/TRG-CCT-ANNEXB.pdf"
                  class="btn btn-outline-secondary btn-sm"
                >
                  <font-awesome-icon icon="share" />
                  <em>CCT in Anaesthetics - Annex B</em>
                </a>
                :
                <br />
                <br />
                <ul class="double">
                  <li>
                    5 x A-CEX
                    <table class="table table-condensed table-bordered table-striped">
                      <thead>
                        <th>Code&nbsp;Number</th>
                        <th>&nbsp;</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>IAC_A01</td>
                          <td>
                            Preoperative assessment of a patient who is scheduled for a routine operating list [not
                            urgent or emergency]
                          </td>
                        </tr>
                        <tr>
                          <td>IAC_A02</td>
                          <td>Manage anaesthesia for a patient who is not intubated and is breathing spontaneously</td>
                        </tr>
                        <tr>
                          <td>IAC_A03</td>
                          <td>Administer anaesthesia for acute abdominal surgery</td>
                        </tr>
                        <tr>
                          <td>IAC_A04</td>
                          <td>Demonstrate Rapid Sequence Induction</td>
                        </tr>
                        <tr>
                          <td>IAC_A05</td>
                          <td>Recover a patient from anaesthesia</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    8 x CBD
                    <table class="table table-condensed table-bordered table-striped">
                      <thead>
                        <th>Code&nbsp;Number</th>
                        <th>&nbsp;</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>IAC_C01</td>
                          <td>
                            Discuss the steps taken to ensure correct identification of the patient, the operation and
                            the side of operation
                          </td>
                        </tr>
                        <tr>
                          <td>IAC_C02</td>
                          <td>
                            Discuss how the need to minimise postoperative nausea and vomiting influenced the conduct of
                            the anaesthetic
                          </td>
                        </tr>
                        <tr>
                          <td>IAC_C03</td>
                          <td>Discuss how the airway was assessed and how difficult intubation can be predicted</td>
                        </tr>
                        <tr>
                          <td>IAC_C04</td>
                          <td>Discuss how the choice of muscle relaxants and induction agents was made</td>
                        </tr>
                        <tr>
                          <td>IAC_C05</td>
                          <td>Discuss how the trainee’s choice of post-operative analgesics was made</td>
                        </tr>
                        <tr>
                          <td>IAC_C06</td>
                          <td>Discuss how the trainee’s choice of post-operative oxygen therapy was made</td>
                        </tr>
                        <tr>
                          <td>IAC_C07</td>
                          <td>
                            Discuss the problems emergency intra-abdominal surgery causes for the anaesthetist and how
                            the trainee dealt with these
                          </td>
                        </tr>
                        <tr>
                          <td>IAC_C08</td>
                          <td>Discuss the routine to be followed in the case of failed intubation</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    6 x DOPS
                    <table class="table table-condensed table-bordered table-striped">
                      <thead>
                        <th>Code&nbsp;Number</th>
                        <th>&nbsp;</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>IAC_D01</td>
                          <td>Demonstrate functions of the anaesthetic machine</td>
                        </tr>
                        <tr>
                          <td>IAC_D02</td>
                          <td>
                            Transfer a patient onto the operating table and position them for surgery [lateral, Lloyd
                            Davis or lithotomy position]
                          </td>
                        </tr>
                        <tr>
                          <td>IAC_D03</td>
                          <td>Demonstrate cardio-pulmonary resuscitation on a manikin</td>
                        </tr>
                        <tr>
                          <td>IAC_D04</td>
                          <td>Demonstrates technique of scrubbing up and donning gown and gloves</td>
                        </tr>
                        <tr>
                          <td>IAC_D05</td>
                          <td>
                            Basic Competencies for Pain Management – manages PCA including prescription and adjustment
                            of machinery
                          </td>
                        </tr>
                        <tr>
                          <td>IAC_D06</td>
                          <td>Demonstrates the routine for dealing with failed intubation on a manikin</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
                <h3>Introduction to Anaesthetic Practice</h3>
                In addition to the IAC,
                <em>Introduction to anaesthetic practice</em>
                portion of the curriculum should be completed during CT1. This requires 8 Completion of Unit of Training
                (CUT) forms in:
                <ul class="double">
                  <li>Pre-operative assessment</li>
                  <li>Premedication</li>
                  <li>Induction of general anaesthesia</li>
                  <li>Intra-operative care</li>
                  <li>Post-operative and recovery room care</li>
                  <li>Perioperative management of emergency patients</li>
                  <li>Management of cardiac arrest in adults and children</li>
                  <li>Infection control</li>
                </ul>
                Each of these units of training (UoTs) need 1 x DOPS, 1 x A-CEX and 1 x CBD, although the same WBA can
                be allocated to multiple UoTs where appropriate, including WBAs performed as part of the IAC.
                <br />
                <br />
              </div>
              <div v-if="toShow('CT1 CT2 CT3')" class="CT1 CT2 CT3">
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
              </div>
              <div v-if="toShow('CT1 CT2 CT3')" class="CT1 CT2 CT3">
                <h3>Core Anaesthesia</h3>
                Over the course of core training (CT1, CT2 and CT3 if necessary), a total of 16 Completion of Unit of
                Training (CUT) forms are needed in:
                <ul class="double">
                  <li>Airway management</li>
                  <li>Critical incidents</li>
                  <li>Day surgery</li>
                  <li>General, urological and gynaecological surgery</li>
                  <li>Head, neck, maxillo-facial and dental surgery</li>
                  <li>Intensive care medicine</li>
                  <li>Non-theatre</li>
                  <li>Obstetrics</li>
                  <li>Orthopaedic surgery</li>
                  <li>Paediatrics (including Child Protection)</li>
                  <li>Pain medicine</li>
                  <li>Perioperative medicine</li>
                  <li>Regional</li>
                  <li>Sedation</li>
                  <li>Transfer medicine</li>
                  <li>Trauma and stabilisation</li>
                </ul>
                As per page B-98 of
                <a
                  href="https://www.rcoa.ac.uk/system/files/TRG-CCT-ANNEXB.pdf"
                  class="btn btn-outline-secondary btn-sm"
                >
                  <font-awesome-icon icon="share" />
                  <em>CCT in Anaesthetics - Annex B</em>
                </a>
                , each of these units of training (UoTs) requires 1 x DOPS, 1 x A-CEX and 1 x CBD except for
                <em>General, urological and gynaecological surgery</em>
                , which requires 1 x ALMAT in addition; and
                <em>Intensive care medicine</em>
                , which requires WBAs as determined by your module supervisor.
                <h3>Intensive care medicine</h3>
                <blockquote>
                  <a
                    href="https://www.rcoa.ac.uk/system/files/TRG-CCT-ANNEXF.pdf"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    <font-awesome-icon icon="share" />
                    <em>CCT in Anaesthetics - Annex F</em>
                  </a>
                  states that for ARCP, trainees should submit:
                  <ul class="double">
                    <li>WBAs</li>
                    <li>Evidence of number of procedures performed</li>
                    <li>
                      Evidence to demonstrate that the unit can provide and trainee has been exposed to a suitable
                      variety of experience, including details of patients trainee has played a significant part in
                      managing (similar to anaesthetic logbook data)
                    </li>
                    <li>Information from unit data collection (eg ICNARC)</li>
                    <li>Evidence of attendance at at least 1 Morbidity and Mortality meeting and 1 journal club.</li>
                    <li>A satisfactory educational supervisor/faculty tutors report</li>
                  </ul>
                </blockquote>
              </div>
              <div v-if="toShow('ST3 ST4')" class="ST3 ST4">
                <code v-if="toShow('ST3')" class="year">ST3</code>
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <br />
                <br />
                <strong>Items</strong>
                <blockquote>
                  Over the course of intermediate training (ST3 and ST4), a total of 19 Completion of Unit of Training
                  (CUT) forms are needed in:
                  <ul class="double">
                    <li>Airway Management</li>
                    <li>Anaesthesia for neurosurgery, neuroradiology and neurocritical care</li>
                    <li>Cardiothoracic anaesthesia and cardiothoracic critical care</li>
                    <li>Critical incidents</li>
                    <li>Day surgery</li>
                    <li>General, urological and gynaecological surgery</li>
                    <li>Head, neck, maxillo-facial and dental surgery</li>
                    <li>Intensive care medicine</li>
                    <li>Management of respiratory and cardiac arrest</li>
                    <li>Non-theatre</li>
                    <li>Obstetrics</li>
                    <li>Orthopaedic surgery</li>
                    <li>Paediatric</li>
                    <li>Pain medicine</li>
                    <li>Perioperative medicine</li>
                    <li>Regional</li>
                    <li>Sedation</li>
                    <li>Trauma and stabilisation</li>
                    <li>Transfer medicine</li>
                  </ul>
                </blockquote>
                <strong>CUT form Format</strong>
                <blockquote>Only via LLP</blockquote>
                <strong>WBA Guidance</strong>
                <br />
                <blockquote>
                  <a
                    href="https://www.rcoa.ac.uk/system/files/TRG-CCT-ANNEXC.pdf"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    <font-awesome-icon icon="share" />
                    <em>CCT in Anaesthesia: Annex C, page C-76</em>
                  </a>
                  details the WBA requirements for each of these modules:
                  <table class="table table-condensed table-bordered table-striped mt-2">
                    <thead>
                      <th width="40%">Module</th>
                      <th>WBAs</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Airway Management
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD, 1 x DOPS and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>Anaesthesia for neurosurgery, neuroradiology and neurocritical care</td>
                        <td>1 x A-CEX, 1 x DOPS and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>Cardiothoracic anaesthesia and cardiothoracic critical care</td>
                        <td>1 x A-CEX, 1 x DOPS and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>
                          Critical incidents
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>1 x CBD</td>
                      </tr>
                      <tr>
                        <td>
                          Day surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          General, urological and gynaecological surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Head, neck, maxillo-facial and dental surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>Intensive Care Medicine</td>
                        <td>As determined by your module supervisor. See below.</td>
                      </tr>
                      <tr>
                        <td>
                          Management of respiratory and cardiac arrest
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          [
                          <strong>either</strong>
                          1 x DOPS
                          <strong>or</strong>
                          current ALS/ATLS/APLS]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Non-theatre
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>1 x CBD and 1 x A-CEX</td>
                      </tr>
                      <tr>
                        <td>Obstetrics</td>
                        <td>1 x A-CEX, 1 x DOPS and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>
                          Orthopaedic surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>Paediatric</td>
                        <td>1 x A-CEX, 1 x DOPS and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>Pain medicine</td>
                        <td>1 x A-CEX, 1 x DOPS and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>
                          Perioperative medicine
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Regional
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD, 1 x DOPS and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sedation
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Transfer medicine
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Trauma and stabilisation
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <font-awesome-icon icon="asterisk" />
                  These modules form
                  <em>General Duties</em>
                  . For the whole of General Duties, a minimum of 3 x CBD are required.
                </blockquote>
              </div>
              <div v-if="toShow('ST5 ST6 ST7')" class="ST5 ST6 ST7">
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Items</strong>
                <blockquote>
                  One electronic Completion of Unit of Training (CUT) form for each module undertaken in period since
                  last ARCP. Over the course of higher training (ST5 to ST7), mandatory CUT forms are required for:
                  <ul class="double">
                    <li>
                      Airway Management (part of
                      <em>General duties</em>
                      )
                    </li>
                    <li>Anaesthesia for neurosurgery, neuroradiology and neurocritical care</li>
                    <li>Cardiothoracic anaesthesia and cardiothoracic critical care</li>
                    <li>Intensive care medicine</li>
                    <li>
                      Management of respiratory and cardiac arrest (part of
                      <em>General duties</em>
                      )
                    </li>
                    <li>Paediatric</li>
                    <li>
                      Perioperative medicine (part of
                      <em>General duties</em>
                      )
                    </li>
                  </ul>
                  In addition, then a minimum of six of the following
                  <em>General duties</em>
                  modules must be completed:
                  <ul class="double">
                    <li>Day surgery</li>
                    <li>General, urological and gynaecological surgery</li>
                    <li>Head, neck, maxillo-facial and dental surgery</li>
                    <li>Non-theatre</li>
                    <li>Obstetrics</li>
                    <li>Orthopaedic surgery</li>
                    <li>Sedation</li>
                    <li>Transfer medicine</li>
                    <li>Trauma and stabilisation</li>
                    <li>Vascular surgery</li>
                    <li>Regional</li>
                  </ul>
                  Also, the following units of training (found in the ‘Advanced’ section of the LLP) covering the Annex
                  E advanced training domains of the Curriculum are expected to be completed over the course of higher
                  and advanced training and a CUT form is required for each:
                  <ul class="double">
                    <li>Domain 1 - Clinical Practice</li>
                    <li>Domain 2 - Team working</li>
                    <li>Domain 3 - Leadership</li>
                    <li>Domain 4 - Innovation</li>
                    <li>Domain 5 - Management</li>
                    <li>Domain 6 - Education</li>
                  </ul>
                  CUT forms are
                  <strong>not</strong>
                  required from the 'Non-Clinical' tab within the LLP unless you have specifically been given time out
                  of clinical training to undertake these modules (i.e. academic &amp; research, improvement science,
                  teaching & learning and management).
                </blockquote>
                <strong>CUT form Format</strong>
                <blockquote>Only via LLP</blockquote>
                <strong>WBA Guidance</strong>
                <br />
                <blockquote>
                  <a
                    href="https://www.rcoa.ac.uk/system/files/TRG-CCT-ANNEXD.pdf"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    <font-awesome-icon icon="share" />
                    <em>CCT in Anaesthesia: Annex D, page D-62</em>
                  </a>
                  details the WBA requirements for each of these modules:
                  <table class="table table-condensed table-bordered table-striped mt-2">
                    <thead>
                      <th width="40%">Module</th>
                      <th>WBAs</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Airway Management
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x DOPS and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>Anaesthesia for neurosurgery, neuroradiology and neurocritical care</td>
                        <td>1 x A-CEX and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>Cardiothoracic anaesthesia and cardiothoracic critical care</td>
                        <td>1 x A-CEX, 1 x CBD and 1 x DOPS</td>
                      </tr>
                      <tr>
                        <td>
                          Day surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          General, urological and gynaecological surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Head, neck, maxillo-facial and dental surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>Intensive care medicine</td>
                        <td>As determined by your module supervisor. See below.</td>
                      </tr>
                      <tr>
                        <td>
                          Management of respiratory and cardiac arrest
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>1 x A-CEX and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>
                          Non-theatre
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>1 x A-CEX and 1 x CBD</td>
                      </tr>
                      <tr>
                        <td>
                          Obstetrics
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Orthopaedic surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>Paediatric</td>
                        <td>1 x A-CEX, 1 x CBD and 1 x DOPS</td>
                      </tr>
                      <tr>
                        <td>
                          Perioperative medicine
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Regional
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD, 1 x DOPS and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sedation
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Transfer medicine
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Trauma and stabilisation
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Vascular surgery
                          <font-awesome-icon icon="asterisk" />
                        </td>
                        <td>
                          1 x CBD and [
                          <strong>either</strong>
                          1 x A-CEX
                          <strong>or</strong>
                          1 x ALMAT]
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <font-awesome-icon icon="asterisk" />
                  These modules form
                  <em>General Duties</em>
                  . For the whole of General Duties, a minimum of 3 x CBD are required.
                </blockquote>
                <div v-if="toShow('CT1 CT2 CT3 ST3 ST4 ST5 ST6 ST7')" class="CT1 CT2 CT3 ST3 ST4 ST5 ST6 ST7">
                  <strong>Intensive care medicine</strong>
                  <blockquote>
                    <a
                      href="https://www.rcoa.ac.uk/system/files/TRG-CCT-ANNEXF.pdf"
                      class="btn btn-outline-secondary btn-sm"
                    >
                      <font-awesome-icon icon="share" />
                      <em>CCT in Anaesthetics - Annex F</em>
                    </a>
                    states that for ARCP, trainees should submit:
                    <ul class="double">
                      <li>WBAs</li>
                      <li>Evidence of number of procedures performed</li>
                      <li>
                        Evidence to demonstrate that the unit can provide and trainee has been exposed to a suitable
                        variety of experience, including details of patients trainee has played a significant part in
                        managing (similar to anaesthetic logbook data)
                      </li>
                      <li>Information from unit data collection (eg ICNARC)</li>
                      <li>Evidence of attendance at at least 1 Morbidity and Mortality meeting and 1 journal club.</li>
                      <li>A satisfactory educational supervisor/faculty tutors report</li>
                    </ul>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo" class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed p-0 text-left nti"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span class="when-opened">
                <font-awesome-icon icon="caret-down" />
              </span>
              <span class="when-closed">
                <font-awesome-icon icon="caret-right" />
              </span>
              Feedback from Trainers
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="card-body">
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
            <code v-if="toShow('ST3')" class="year">ST3</code>
            <code v-if="toShow('ST4')" class="year">ST4</code>
            <code v-if="toShow('ST5')" class="year">ST5</code>
            <code v-if="toShow('ST6')" class="year">ST6</code>
            <code v-if="toShow('ST7')" class="year">ST7</code>
            <br />
            <br />
            <p>
              It is the educational supervisor's responsibility to co-ordinate this feedback and the trainee's
              responsibility to ensure it is uploaded to the LLP for ARCP.
            </p>
            <div class="alert alert-info">
              <strong>Resources for College Tutors and Educational Supervisors</strong>
              <br />
              <br />
              Feedback form
              <a href="Consultant Feedback Form.docx" class="btn btn-outline-secondary btn-sm">.docx</a>
              &nbsp;
              <a href="Consultant Feedback Form.pdf" class="btn btn-outline-secondary btn-sm">.pdf</a>
              <br />
              <br />
              Summary of feedback proforma
              <a href="Consultant Feedback Summary.docx" class="btn btn-outline-secondary btn-sm">.docx</a>
              &nbsp;
              <a href="Consultant Feedback Summary.pdf" class="btn btn-outline-secondary btn-sm">.pdf</a>
            </div>
            <strong>Item</strong>
            <blockquote>Feedback summary document from educational supervisor</blockquote>
            <strong>Format</strong>
            <blockquote>
              Uploaded as .pdf or .doc to LLP
              <br />
              &nbsp; &nbsp;
              <em>
                It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                Using the 'Document Store' does not link to units of training and may mean the files are unavailable at
                ARCP.
              </em>
            </blockquote>
            <strong>Frequency</strong>
            <blockquote>
              <strong>Minimum</strong>
              of one feedback summary per hospital placement since last ARCP. Total number will depend on module
              supervisors' requirements for Completion of Unit of Training: all summary documents should be uploaded to
              the LLP for review by the ARCP panel.
            </blockquote>
          </div>
        </div>
      </div>
      <div class="card">
        <div id="headingThree" data-bs-toggle="collapse" data-bs-target="#collapseThree" class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed p-0 text-left nti"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span class="when-opened">
                <font-awesome-icon icon="caret-down" />
              </span>
              <span class="when-closed">
                <font-awesome-icon icon="caret-right" />
              </span>
              Educational Supervisor's Structured Report
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="card-body">
            <div>
              <div v-if="ltft">
                <div class="alert alert-success">
                  <strong>LTFT</strong>
                  <br />
                  One ESSR or interim training report per calendar year immediately prior to ARCP. College Tutors may
                  elect to submit an interim progress report rather than an ESSR depending on the progress in training
                  made by the trainee since the previous ARCP e.g. an interim training report may be more appropriate
                  for trainees attending ARCP whilst on maternity/ sickness leave.
                </div>
              </div>
              <code v-if="toShow('CT1')" class="year">CT1</code>
              <code v-if="toShow('CT2')" class="year">CT2</code>
              <code v-if="toShow('CT3')" class="year">CT3</code>
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
              <br />
              <strong>Item</strong>
              <blockquote>Educational Supervisor's Structured Report (ESSR) document via the LLP system</blockquote>
              <strong>Format</strong>
              <blockquote>
                Only via LLP
                <!--  - training video [here] soon! -->
              </blockquote>
              <strong>Title</strong>
              <blockquote>
                The ESSR prior to your ARCP should be labelled with the dates covered and the year of training assessed:
                <br />
                <code>ESSR August 2018 - August 2019 ST5</code>
              </blockquote>
              <blockquote class="LTFT alert alert-success">
                For LTFT, please note this along with the WTE in the title (e.g. for 60% in ST4):
                <br />
                <code>ESSR August 2018 - August 2019 LTFT 0.6 ST4</code>
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>
                <em>Always</em>
                immediately prior to ARCP
                <br />
                <em>&nbsp; &nbsp; and</em>
                <br />
                <em>Always</em>
                immediately prior to leaving a Trust.
                <br />
                <em>&nbsp; &nbsp; and</em>
                <br />
                <em>Sometimes</em>
                on completion of a training module, depending on how training is set up in your hospital (check with
                College Tutor).
              </blockquote>
              <div class="bg-light p-3 mb-3">
                <strong>Important note for College Tutors and Educational Supervisors</strong>
                <br />
                <br />
                ARCP panels will be involved in making recommendations for revalidation.
                <br />
                <br />
                In order to make these annual recommendations, the ARCP panel will be specifically reviewing the ESSR
                and Enhanced Form R along with reports from the Lead Employing Organisation and Trust HR departments.
                <br />
                <br />
                It is therefore important that Educational Supervisors are recording the following in the
                <em>Other Outcomes</em>
                section of the ESSR:
                <ul>
                  <li>Any conduct or capability issues</li>
                  <li>
                    Whether the trainee has been involved in any Serious Untoward Incidents or Significant Event
                    Investigations
                  </li>
                  <li>If the trainee has been named in any complaint.</li>
                </ul>
                If any of these are applicable, additional comments should state:
                <ul>
                  <li>Whether they have been resolved satisfactorily</li>
                  <li>If any unresolved concerns about a trainee's conduct or fitness to practice persist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div id="headingFour" data-bs-toggle="collapse" data-bs-target="#collapseFour" class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed p-0 text-left nti"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span class="when-opened">
                <font-awesome-icon icon="caret-down" />
              </span>
              <span class="when-closed">
                <font-awesome-icon icon="caret-right" />
              </span>
              Audit/Clinical Governance Summary
            </button>
          </h5>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
          <div class="card-body">
            <div>
              <div v-if="ltft">
                <div class="alert alert-success">
                  <strong>LTFT</strong>
                  <br />
                  There must be evidence in your LLP that you have actively participated and significantly contributed
                  to
                  <strong>one</strong>
                  of the activities listed below per training year (not calendar year).
                  <br />
                  <br />
                  It is sensible to produce an audit/clinical governance summary once per ARCP to easily describe your
                  audit/clinical governance activity within that training year, even if the work was done in a previous
                  calendar year.
                </div>
              </div>
              <code v-if="toShow('CT1')" class="year">CT1</code>
              <code v-if="toShow('CT2')" class="year">CT2</code>
              <code v-if="toShow('CT3')" class="year">CT3</code>
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
              <br />
              <strong>Items</strong>
              <blockquote>
                There must be evidence in your LLP that you have actively participated and significantly contributed to
                <strong>one</strong>
                of the following per year:
                <ul class="double">
                  <li>Audit with recognisable standards (eg. audit recipe book)</li>
                  <li>Re-audit to close the audit loop</li>
                  <li>Contribution to development of new clinical guidelines</li>
                  <li>Contribution to quality assurance/improvement programs</li>
                  <li>Major reviews of clinical effectiveness/outcomes in a local Trust</li>
                </ul>
                <font-awesome-icon icon="triangle-exclamation" />
                Acting as a local data collector for a regional/national audit (eg. SNAP) does
                <strong>not</strong>
                class as a significant contribution to audit as this only entails a small portion of the audit cycle.
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>One summary per year.</blockquote>
              <strong>Format</strong>
              <blockquote>
                Summary of Audit and Clinical Governance activity as a Word or PDF document uploaded to LLP.
                <br />
                &nbsp; &nbsp;
                <em>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </em>
              </blockquote>
              <strong>Template</strong>
              <blockquote>
                Audit and Clinical Governance: &nbsp;
                <a href="Audit%20and%20Clinical%20Governance.doc" class="btn btn-outline-secondary btn-sm">
                  <font-awesome-icon icon="download" />
                  .doc
                </a>
                &nbsp;
                <a href="Audit%20and%20Clinical%20Governance.pdf" class="btn btn-outline-secondary btn-sm">
                  <font-awesome-icon icon="download" />
                  .pdf
                </a>
              </blockquote>
              <strong>Title</strong>
              <blockquote>
                Document should be named with the month and year of the ARCP in the format:
                <br />
                <code>Evidence - Audit and Governance - July 2012</code>
              </blockquote>
              <strong>Notes</strong>
              <blockquote>
                It is recommended that you upload the individual projects (or summaries) to the LLP as evidence. For
                example, audit presentations or guidelines you contribute to developing. The ARCP panel may ask to see
                projects referenced in your Summary document.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div id="headingFive" data-bs-toggle="collapse" data-bs-target="#collapseFive" class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed p-0 text-left nti"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <span class="when-opened">
                <font-awesome-icon icon="caret-down" />
              </span>
              <span class="when-closed">
                <font-awesome-icon icon="caret-right" />
              </span>
              GMC Survey
            </button>
          </h5>
        </div>
        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
          <div class="card-body">
            <div>
              <div v-if="ltft">
                <div class="alert alert-success">
                  <strong>LTFT</strong>
                  <br />
                  One to be completed annually.
                </div>
              </div>
              <code v-if="toShow('CT1')" class="year">CT1</code>
              <code v-if="toShow('CT2')" class="year">CT2</code>
              <code v-if="toShow('CT3')" class="year">CT3</code>
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
              <br />
              <strong>Item</strong>
              <blockquote>
                Annual GMC Survey certificate of completion - can be re-issued and downloaded from your GMC account.
                Copy of email confirming participation also acceptable.
              </blockquote>
              <strong>Format</strong>
              <blockquote>PDF or Word document uploaded to LLP</blockquote>
              <br />
              &nbsp; &nbsp;
              <em>
                It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                Using the 'Document Store' does not link to units of training and may mean the files are unavailable at
                ARCP.
              </em>
              <strong>Title</strong>
              <blockquote>
                Named in the format:
                <br />
                <code>Evidence - GMC Survey - 2012</code>
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>One per year.</blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
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
              <code v-if="toShow('CT1')" class="year">CT1</code>
              <code v-if="toShow('CT2')" class="year">CT2</code>
              <code v-if="toShow('CT3')" class="year">CT3</code>
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
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
                &nbsp; &nbsp;
                <em>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </em>
                <br />
                <div v-if="toShow('ST7')" class="ST7 bg-light p-3 mb-3 mt-3">
                  <font-awesome-icon icon="triangle-exclamation" />
                  For your final ARCP, it is strongly advised that you bring a paper copy of your CV in order to fill in
                  the Completion of Training form.
                </div>
              </blockquote>
              <strong>Title</strong>
              <blockquote>
                Named with the year of update in the format:
                <code>Evidence - CV - 2012</code>
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>Once per year.</blockquote>
            </div>
          </div>
        </div>
      </div>
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
              <br />
              <strong>Item</strong>
              <blockquote>Summary from your logbook software in RCoA-approved format</blockquote>
              <strong>Format</strong>
              <blockquote>PDF or Word document</blockquote>
              <strong>Title</strong>
              <blockquote>
                Named with the year & month of your ARCP in the format:
                <br />
                <code>Evidence - Logbook - 2012 August</code>
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>One summary per ARCP period.</blockquote>
              <strong>Note</strong>
              <blockquote>
                The summary needs to cover the whole year, not the individual modules. Ensure your summary is in the
                correct format as per Appendix 4 (pp. 87-89) of the
                <a
                  class="btn btn-outline-secondary btn-sm"
                  href="https://www.rcoa.ac.uk/system/files/TRG-CU-CCT-ANAES2010.pdf"
                >
                  <i class="icon icon-arrow-right"></i>
                  CCT Curriculum
                </a>
                <br />
              </blockquote>
              <div class="bg-light p-3 mb-3 mt-3">
                <font-awesome-icon icon="triangle-exclamation" />
                Remember to backup your logbook regularly!
              </div>
            </div>
          </div>
        </div>
      </div>
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
              CME Points
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
              <code v-if="toShow('CT1')" class="year">CT1</code>
              <code v-if="toShow('CT2')" class="year">CT2</code>
              <code v-if="toShow('CT3')" class="year">CT3</code>
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
              <br />
              <strong>Items</strong>
              <blockquote>
                <ol>
                  <li>
                    Summary document totalling internal and external points: &nbsp;
                    <a href="CME%20summary.doc" class="btn btn-outline-secondary btn-sm">
                      <i class="icon-download-alt"></i>
                      .doc
                    </a>
                    &nbsp;
                    <a href="CME%20summary.pdf" class="btn btn-outline-secondary btn-sm">
                      <i class="icon-download-alt"></i>
                      .pdf
                    </a>
                    <em>Remember to fill in the totals!</em>
                  </li>
                  <li>CME/CPD certificates, certificates and records of attendance.</li>
                </ol>
              </blockquote>
              <strong>Format</strong>
              <blockquote>PDFs, Word documents or Spreadsheet</blockquote>
              <strong>Titles</strong>
              <blockquote>
                <ol>
                  <li>
                    <em>Summary:</em>
                    Named with the year & month of your ARCP in the format:
                    <br />
                    <code>Evidence - CME Summary - 2012 August</code>
                  </li>
                  <li>
                    <em>Individual documents:</em>
                    Named with year & month activity undertaken in the format:
                    <br />
                    <code>Evidence - Certificate - 2012 June - Title of Course</code>
                  </li>
                </ol>
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>One summary per ARCP period.</blockquote>
              <strong>CPD Point Requirement</strong>
              <blockquote>25 internal and 25 external CPD/CME points per year.</blockquote>
              <strong>Guidance</strong>
              <blockquote>
                Internal CME is anything undertaken within your base hospital: eg. attending teaching & audit meetings,
                <strong>formal</strong>
                teaching sessions of junior trainees/medical students (note this does not include informal theatre or
                ward-based teaching). It also includes any online learning activity with accredited CME/CPD points.
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
                teaching courses. This has now been replaced by a recommendation of a "balanced CPD programme" (for more
                details see this
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
      <div class="card">
        <div id="headingNine" data-bs-toggle="collapse" data-bs-target="#collapseNine" class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed p-0 text-left nti"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <span class="when-opened">
                <font-awesome-icon icon="caret-down" />
              </span>
              <span class="when-closed">
                <font-awesome-icon icon="caret-right" />
              </span>
              Training Certificates
            </button>
          </h5>
        </div>
        <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
          <div class="card-body">
            <div>
              <div v-if="ltft">
                <div class="alert alert-success">
                  <strong>LTFT</strong>
                  <br />
                  Same requirements as full-time colleagues.
                </div>
              </div>
              <div v-if="toShow('CT1')" class="CT1">
                <code v-if="toShow('CT1')" class="year">CT1</code>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>Initial Assessment of Competence</blockquote>
                <strong>Format</strong>
                <blockquote>Only via LLP</blockquote>
                <strong>Associated WBAs</strong>
                <blockquote>
                  To pass the IAC, trainees must successfully complete the following workplace based assessments:
                  <ul class="double">
                    <li>5 x A-CEX</li>
                    <li>8 x CBD</li>
                    <li>6 x DOPS</li>
                  </ul>
                </blockquote>
                <br />
                <br />
              </div>
              <div v-if="toShow('CT2 CT3')" class="CT2 CT3">
                <code v-if="toShow('CT2')" class="year">CT2</code>
                <code v-if="toShow('CT3')" class="year">CT3</code>
                <br />
                <br />
                <strong>Items</strong>
                <blockquote>
                  <ol>
                    <li>
                      Core Level Training Certificate &nbsp;
                      <a
                        href="https://www.rcoa.ac.uk/system/files/TRG-CoreLevelTrainingCertificate2016.pdf"
                        class="btn btn-outline-secondary btn-sm"
                      >
                        <i class="icon-download-alt"></i>
                        RCoA
                      </a>
                    </li>
                    <li>
                      Initial Assessment of Competence in Obstetric Anaesthesia &nbsp;
                      <a
                        href="https://www.rcoa.ac.uk/system/files/TRG-InitialAssessCompObstetrics2016.pdf"
                        class="btn btn-outline-secondary btn-sm"
                      >
                        <i class="icon-download-alt"></i>
                        RCoA
                      </a>
                    </li>
                    <!--  <font color="#ff0000">B-95 of Annex B and link upwards</font> -->
                  </ol>
                </blockquote>
                <strong>Format</strong>
                <blockquote>
                  Downloaded from college website at the links above. Once completed (which may be at your ARCP) one
                  copy should be uploaded to the LLP and another copy sent to the RCoA.
                </blockquote>
                <br />
                &nbsp; &nbsp;
                <em>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </em>
                <br />
                <br />
              </div>
              <div v-if="toShow('ST3')" class="ST3">
                <code v-if="toShow('ST3')" class="year">ST3</code>
                <br />
                <br />
                <p>
                  An intermediate training certificate is not required until the end of ST4.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <div v-if="toShow('ST4')" class="ST4">
                <code v-if="toShow('ST4')" class="year">ST4</code>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>
                  Intermediate Training Certificate &nbsp;
                  <a
                    href="https://www.rcoa.ac.uk/system/files/TRG-ILTCertificate2016.pdf"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    <i class="icon-download-alt"></i>
                    RCoA
                  </a>
                </blockquote>
                <strong>Format</strong>
                <blockquote>
                  Downloaded from college website at the link above. Once completed (which may be at your ARCP) one copy
                  should be uploaded to the LLP and another copy sent to the RCoA.
                </blockquote>
                <br />
                &nbsp; &nbsp;
                <em>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </em>
                <br />
                <br />
              </div>
              <div v-if="toShow('ST5 ST6')" class="ST5 ST6">
                <code v-if="toShow('ST5')" class="year">ST5</code>
                <code v-if="toShow('ST6')" class="year">ST6</code>
                <br />
                <br />
                <p>
                  A higher training certificate (Completion of Training Certificate) is not required until the end of
                  ST7.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <div v-if="toShow('ST7')" class="ST7">
                <code v-if="toShow('ST7')" class="year">ST7</code>
                <br />
                <br />
                <strong>Item</strong>
                <blockquote>
                  Your Completion of Training Certificate will be provided at your ARCP. Please ensure you have a paper
                  copy of your CV with you to facilitate filling in this form correctly. Even better, save time by
                  completing
                  <strong>two copies</strong>
                  of the form in advance of your ARCP. It is available for download on the RCoA website:
                  <a
                    href="https://www.rcoa.ac.uk/system/files/TRG-NCT-2018.pdf"
                    class="btn btn-outline-secondary btn-sm"
                  >
                    <i class="icon-download-alt"></i>
                    RCoA
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
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
                should be submitted to the ARCP panel by any trainee who at any time since their previous ARCP has been:
                <ul>
                  <li>in an Academic Clinical Fellowship or Clinical Lecturer post; or</li>
                  <li>registered for MD(res), MPhil or PhD; or</li>
                  <li>
                    undertaking any training, trust grade or fellowship post with ≥25% WTE (usually 12 hours per week)
                    dedicated to research; or
                  </li>
                  <li>out of programme for research (OOPR) or OOPE with ≥25% WTE research</li>
                </ul>
                Guidance for ARCP panels for trainees undertaking research placements is available from the NIAA website
                <!-- eslint-disable -->
                <a
                  href="https://www.niaa.org.uk/download.php/?fn=Supporting%20document%20for%20academic%20ARCP%20review.pdf&mime=application/pdf&pureFn=Supporting%20document%20for%20academic%20ARCP%20review.pdf"
                  class="btn btn-outline-secondary btn-sm"
                >
                <!-- eslint-enable -->
                  <font-awesome-icon icon="share" />
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
                  <!-- eslint-disable -->
                  <a
                    href="https://www.niaa.org.uk/download.php/?fn=ARCP_Academic%20Progress%20Report_FINAL%2016022017.doc&mime=application/msword&pureFn=ARCP_Academic%20Progress%20Report_FINAL%2016022017.doc"
                    class="btn btn-outline-secondary btn-sm"
                  >
                  <!-- eslint-enable -->
                    <i class="icon-download-alt"></i>
                    .doc
                  </a>
                  uploaded as evidence to LLP.
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
              <code v-if="toShow('ST4')" class="year">ST4</code>
              <code v-if="toShow('ST5')" class="year">ST5</code>
              <code v-if="toShow('ST6')" class="year">ST6</code>
              <code v-if="toShow('ST7')" class="year">ST7</code>
              <br />
              <br />
              <strong>This section is only applicable if you are being given time out of programme</strong>
              <br />
              <br />
              <font-awesome-icon icon="triangle-exclamation" />
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
                &nbsp;NB. If your OOP time has been approved for training by the RCoA, it is acceptable to upload a copy
                of the report sent to the college as evidence.
              </blockquote>
              <strong>Frequency</strong>
              <blockquote>One summary per period out of programme.</blockquote>
              <strong>Format</strong>
              <blockquote>
                Word or PDF Document uploaded to LLP.
                <br />
                &nbsp; &nbsp;
                <em>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </em>
              </blockquote>
              <strong>Title</strong>
              <blockquote>
                Named with the year of your OOPE activity in the format:
                <br />
                <code>Evidence - OOPE - 2012</code>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
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
              Multi-source Feedback
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
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
                once per ICU placement. ie. if you do 3 months ICU and 9 months anaesthetics in a year, you will need to
                undertake two MSFs in this period.
                <br />
                <br />
                <em>
                  This is a
                  <strong>minimum</strong>
                  and the School or your educational supervisor may require you to undertake more.
                </em>
              </blockquote>
              <strong>Format</strong>
              <blockquote>Via LLP.</blockquote>
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
      <div class="card">
        <div id="headingFifteen" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" class="card-header">
          <h5 class="mb-0">
            <button
              class="btn btn-link collapsed p-0 text-left nti"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFifteen"
              aria-expanded="false"
              aria-controls="collapseFifteen"
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
        <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
          <div class="card-body">
            <div>
              <div v-if="ltft">
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
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
                <font-awesome-icon icon="triangle-exclamation" />
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
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
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
        <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
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
              <code v-if="toShow('ST3')" class="year">ST3</code>
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
                <a href="https://eanaesthesia.com/feedback/" class="btn btn-outline-secondary btn-sm">
                  <font-awesome-icon icon="arrow-right" />
                  online here
                </a>
                with evidence of completion uploaded to LLP (pdf or screenshot).
                <br />
                &nbsp; &nbsp;
                <em>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </em>
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
                <code>Evidence - Feedback - UHSM - 2015</code>
              </blockquote>
              <strong>Note</strong>
              <blockquote>
                All placement feedback is confidential and will be used to improve the quality of training in the North
                West.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { ltft: { type: Boolean } },
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
          (this.$store.state.items === 50 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT3'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 3 || this.$store.state.items === 200 || this.$store.state.items === 0) &&
          year === 'ST3'
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

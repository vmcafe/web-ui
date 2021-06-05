<template>
  <b-spinner v-if="isLoading" variant="primary" label="Spinning"></b-spinner>
  <div v-else class="biodata">
    <Navbar />
    <b-container class="card__utama">
      <div class="d-flex justify-content-center">
        <div class="navbar__profile border-bottom border-secondary pb-2">
          <b-badge
            class="mx-2"
            :variant="state === 1 ? 'info' : 'transparent'"
            @click="state = 1"
            style="font-size: 14px; cursor: pointer"
            >Biodata Diri</b-badge
          >
          <b-badge
            class="mx-2"
            :variant="state === 2 ? 'info' : 'transparent'"
            @click="state = 2"
            style="font-size: 14px; cursor: pointer"
            >Daftar Alamat</b-badge
          >
          <b-badge
            class="mx-2"
            :variant="state === 3 ? 'info' : 'transparent'"
            @click="state = 3"
            style="font-size: 14px; cursor: pointer"
            >Favorit</b-badge
          >
          <b-badge
            class="mx-2"
            :variant="state === 4 ? 'info' : 'transparent'"
            @click="state = 4"
            style="font-size: 14px; cursor: pointer"
            >Pesanan Saya</b-badge
          >
        </div>
      </div>
      <div v-if="state === 1">
        <b-card class="card__biodata mb-2">
          <b-row>
            <b-button
              :class="`button__ubah ${isEdit && 'button__ubah__clicked'}`"
              type="button"
              @click="isEdit = !isEdit"
            >
              {{ isEdit ? 'SIMPAN' : 'UBAH' }}
            </b-button>
          </b-row>
          <b-row>
            <div class="avatar">
              <b-col class="relative__profile">
                <b-avatar
                  class="profile__avatar mb-2 mx-auto"
                  src="https://placekitten.com/300/300"
                  size="12rem"
                ></b-avatar>
                <div class="absolute__profile">
                  <b-img
                    :class="`profile__ubah ${isEdit && 'profile__ubah__show'}`"
                    src="~/assets/edit_profile.png"
                    alt=""
                    width="45px"
                  ></b-img>
                </div>
                <b-row>
                  <b-text class="nama_lengkap mx-auto">Yudistryan</b-text>
                </b-row>
              </b-col>
            </div>
            <b-col>
              <div class="form_group1">
                <div class="keterangan mt-2">NAMA DEPAN {{ text }}</div>
                <input
                  :class="`input text-center ${isEdit && 'input_show'}`"
                  type="text"
                  placeholder="Nama Depan"
                  :disabled="!isEdit"
                />
                <div class="keterangan mt-2">TANGGAL LAHIR {{ text }}</div>
                <input
                  :class="`input text-center ${isEdit && 'input_show'}`"
                  type="text"
                  placeholder="Tanggal Lahir"
                  :disabled="!isEdit"
                />
                <div class="keterangan mt-2">EMAIL {{ text }}</div>
                <input
                  :class="`input text-center ${isEdit && 'input_show'}`"
                  type="text"
                  placeholder="Email"
                  :disabled="!isEdit"
                />
              </div>
            </b-col>
            <b-col>
              <div class="form_group2">
                <div class="keterangan mt-2">NAMA BELAKANG {{ text }}</div>
                <input
                  :class="`input text-center ${isEdit && 'input_show'}`"
                  type="text"
                  placeholder="Nama Belakang"
                  :disabled="!isEdit"
                />
                <div class="keterangan mt-2">JENIS KELAMIN {{ text }}</div>
                <input
                  :class="`input text-center ${isEdit && 'input_show'}`"
                  type="text"
                  placeholder="Jenis Kelamin"
                  :disabled="!isEdit"
                />
                <div class="keterangan mt-2">NO. HP {{ text }}</div>
                <input
                  :class="`input text-center ${isEdit && 'input_show'}`"
                  type="text"
                  placeholder="No Hp"
                  :disabled="!isEdit"
                />
              </div>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <div v-else-if="state === 2">
        <b-row>
          <div class="tambah__alamat">
            <b-button class="button__tambah__alamat" v-b-modal.modal-1
              >+ Tambah Alamat</b-button
            >
            <b-modal
              class="modal_tambah_alamat"
              id="modal-1"
              title="BootstrapVue"
              ref="my-modal"
              hide-header
              hide-footer
              size="md"
            >
              <div class="icon_close text-right">
                <b-img
                  src="~/assets/Exit_icon.svg"
                  alt=""
                  width="25px"
                  @click="hideModal"
                ></b-img>
              </div>
              <div class="d-block text-center">
                <h1 class="judul_tambah_alamat mt-2">Tambah Alamat Baru</h1>
              </div>
              <div class="form_modal pt-4 pb-2 px-2">
                <form
                  class="form_modal pt-4 pb-2 px-2"
                  @submit.stop.prevent="onSubmit"
                >
                  <div class="row">
                    <div class="col-12">
                      <label
                        for="nama_penerimma"
                        class="label_modal col-12 mb-1 pt-2"
                        >Nama penerima</label
                      >
                      <Field
                        class="col-12 mb-2 field_input"
                        type="text"
                        placeholder="Yudistryan Izhar"
                        :value="$v.form.receiver.$model"
                        :error="
                          $v.form.receiver.$dirty && $v.form.receiver.$error
                        "
                        @model="$v.form.receiver.$model = $event"
                      />
                    </div>
                    <div class="col-12">
                      <label for="no_hp" class="label_modal col-12 mb-1 pt-2"
                        >No HP</label
                      >
                      <Field
                        class="col-12 mb-2 field_input"
                        type="text"
                        placeholder="+6283848467748"
                        :value="$v.form.phone.$model"
                        :error="$v.form.phone.$dirty && $v.form.phone.$error"
                        @model="$v.form.phone.$model = $event"
                      />
                    </div>
                    <div class="col-12">
                      <label for="district" class="label_modal col-12 mb-1 pt-2"
                        >Kecamatan/Kota</label
                      >
                      <Field
                        class="col-12 mb-2 field_input"
                        type="text"
                        placeholder="Kandangan, kab. Kediri, Jawa Timur"
                        :value="$v.form.district.$model"
                        :error="
                          $v.form.district.$dirty && $v.form.district.$error
                        "
                        @model="$v.form.district.$model = $event"
                      />
                    </div>
                    <div class="col-12">
                      <label
                        for="portal_pos"
                        class="label_modal col-12 mb-1 pt-2"
                        >Kode Pos</label
                      >
                      <Field
                        class="col-12 mb-2 ml-auto field_input"
                        type="text"
                        placeholder="642942"
                        :value="$v.form.postal_code.$model"
                        :error="
                          $v.form.postal_code.$dirty &&
                          $v.form.postal_code.$error
                        "
                        @model="$v.form.postal_code.$model = $event"
                      />
                    </div>
                    <div class="col-12">
                      <label for="street" class="label_modal col-12 mb-1 pt-2"
                        >Alamat</label
                      >
                      <Field
                        class="col-12 mb-4 field_input"
                        type="text"
                        placeholder="Jl. Karang kitri no. 52, Kandangan"
                        :value="$v.form.street.$model"
                        :error="$v.form.street.$dirty && $v.form.street.$error"
                        @model="$v.form.street.$model = $event"
                      />
                    </div>
                  </div>

                  <div class="btn_modal text-center mb-3 mt-2">
                    <b-button class="btn_tambah_modal" type="submit"
                      >+ Tambah</b-button
                    >
                    <b-button class="btn_batal_modal" @click="hideModal"
                      >Batal</b-button
                    >
                  </div>
                </form>
              </div>
            </b-modal>
          </div>
          <div class="cari_alamat ml-auto">
            <b-input-group>
              <b-form-input
                type="search"
                placeholder="Cari alamat"
              ></b-form-input>
              <b-input-group-append>
                <b-button
                  type="button"
                  style="background: #2d4957"
                  size="md"
                  class="cari_alamat_icon my-2 my-md-0"
                  ><b-img
                    class="search_icon"
                    src="~/assets/search-icon.png"
                    alt=""
                /></b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-row>
        <div class="table__tambah__alamat">
          <table class="table">
            <thead>
              <tr class="daftar_alamat">
                <th scope="col"></th>
                <th scope="col">PENERIMA</th>
                <th scope="col">ALAMAT PENGIRIMAN</th>
                <th scope="col">DAERAH PENGIRIMAN</th>
                <th colspan="2" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataAddress" :key="item.id">
                <th scope="row">
                  <input type="radio" name="product_variation" />
                </th>
                <td>
                  <div>
                    <div>{{ item.receiver }}</div>
                    <div>{{ item.phone }}</div>
                  </div>
                </td>
                <td>
                  <div>{{ item.street }}</div>
                </td>
                <td>
                  <div>
                    <div>{{ item.district }}</div>
                    <div>{{ item.postal_code }}</div>
                  </div>
                </td>
                <td>
                  <b-img
                    class="action__edit"
                    @click="modalShow1 = !modalShow1"
                    src="~/assets/icons/ic_edit.svg"
                    alt=""
                  >
                  </b-img>
                  <b-modal
                    class="modal_edit_alamat"
                    v-model="modalShow1"
                    id="modal-2"
                    ref="my-modal"
                    hide-header
                    hide-footer
                    size="md"
                  >
                    <div class="icon_close text-right">
                      <b-img
                        src="~/assets/Exit_icon.svg"
                        alt=""
                        width="25px"
                        @click="hideModal"
                      >
                      </b-img>
                    </div>
                    <div class="d-block text-center">
                      <h1 class="judul_edit_alamat mt-2">Edit Alamat?</h1>
                    </div>
                    <div class="form_modal pt-4 pb-2 px-2">
                      <form
                        class="form_modal pt-4 pb-2 px-2"
                        @submit.stop.prevent="onSubmit"
                      >
                        <div class="row">
                          <div class="col-12">
                            <label
                              for="nama_penerimma"
                              class="label_modal col-12 mb-1 pt-2"
                              >Nama penerima</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder="Yudistryan Izhar"
                              :value="$v.form.receiver.$model"
                              :error="
                                $v.form.receiver.$dirty &&
                                $v.form.receiver.$error
                              "
                              @model="$v.form.receiver.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="no_hp"
                              class="label_modal col-12 mb-1 pt-2"
                              >No HP</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder="+6283848467748"
                              :value="$v.form.phone.$model"
                              :error="
                                $v.form.phone.$dirty && $v.form.phone.$error
                              "
                              @model="$v.form.phone.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="district"
                              class="label_modal col-12 mb-1 pt-2"
                              >Kecamatan/Kota</label
                            >
                            <Field
                              class="col-12 mb-2 field_input"
                              type="text"
                              placeholder="Kandangan, kab. Kediri, Jawa Timur"
                              :value="$v.form.district.$model"
                              :error="
                                $v.form.district.$dirty &&
                                $v.form.district.$error
                              "
                              @model="$v.form.district.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="portal_pos"
                              class="label_modal col-12 mb-1 pt-2"
                              >Kode Pos</label
                            >
                            <Field
                              class="col-12 mb-2 ml-auto field_input"
                              type="text"
                              placeholder="642942"
                              :value="$v.form.postal_code.$model"
                              :error="
                                $v.form.postal_code.$dirty &&
                                $v.form.postal_code.$error
                              "
                              @model="$v.form.postal_code.$model = $event"
                            />
                          </div>
                          <div class="col-12">
                            <label
                              for="street"
                              class="label_modal col-12 mb-1 pt-2"
                              >Alamat</label
                            >
                            <Field
                              class="col-12 mb-4 field_input"
                              type="text"
                              placeholder="Jl. Karang kitri no. 52, Kandangan"
                              :value="$v.form.street.$model"
                              :error="
                                $v.form.street.$dirty && $v.form.street.$error
                              "
                              @model="$v.form.street.$model = $event"
                            />
                          </div>
                        </div>
                        <div class="btn_modal text-center mb-3 mt-2">
                          <b-button class="btn_tambah_modal" type="submit"
                            >+ Edit</b-button
                          >
                          <b-button class="btn_batal_modal" @click="hideModal"
                            >Batal</b-button
                          >
                        </div>
                      </form>
                    </div>
                  </b-modal>
                </td>
                <td>
                  <b-img
                    class="action__hapus ml-3"
                    @click="modalShow2 = !modalShow2"
                    src="~/assets/icons/ic_trashcan.svg"
                    alt=""
                  >
                  </b-img>
                  <b-modal
                    class="modal_hapus_alamat"
                    v-model="modalShow2"
                    id="modal-3"
                    title="BootstrapVue"
                    ref="my-modal"
                    hide-header
                    hide-footer
                    size="md"
                  >
                    <div class="d-block text-center">
                      <h1 class="judul_tambah_alamat mt-2">
                        Anda yakin menghapus alamat ini?
                      </h1>
                    </div>
                    <div class="form_modal pt-4 pb-2 px-2">
                      <b-form-group class="form_modal_content"> </b-form-group>
                    </div>
                    <div class="btn_modal text-center mb-3">
                      <b-button class="btn_edit_modal" @click="hideModal"
                        >Hapus</b-button
                      >
                      <b-button class="btn_batal_red" @click="hideModal"
                        >Batal</b-button
                      >
                    </div>
                  </b-modal>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else-if="state === 3">
        <div class="product_list">
          <client-only>
            <slick :options="slickOptions">
              <b-row>
                <b-col
                  class="favorite"
                  v-for="item in [1, 2, 3, 4, 5]"
                  :key="item"
                >
                  <ProductCard name="Sumpia" price="120000" :love="true" />
                </b-col>
              </b-row>
            </slick>
          </client-only>
        </div>
      </div>
      <div v-else>
        <div class="table__pesanan">
          <table class="table">
            <thead>
              <tr class="daftar_alamat">
                <th scope="col">STATUS</th>
                <th scope="col">INVOICE</th>
                <th scope="col">PENERIMA</th>
                <th scope="col">ALAMAT PENGIRIMAN</th>
                <th scope="col">RINGKASAN PEMBELIAN</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dataOrder" :key="item.id">
                <td>
                  <div
                    class="table__pesanan__status"
                    @click="modalShow3 = !modalShow3"
                    alt=""
                  >
                    {{ item.status }}
                  </div>
                  <b-modal
                    class="modal__menunggu__pembayaran"
                    v-model="modalShow3"
                    ref="my-modal"
                    id="modal-3"
                    title="BoostrapVue"
                    hide-header
                    hide-footer
                    size="md"
                  >
                    <div class="icon_close text-right">
                      <b-img
                        src="~/assets/Exit_icon.svg"
                        alt=""
                        width="25px"
                        @click="hideModal"
                      ></b-img>
                    </div>
                    <div class="d-block text-center">
                      <h1 class="judul_tambah_alamat mt-2">Detail Pesanan</h1>
                    </div>
                    <div class="form_modal pt-4 pb-2 px-2">
                      <b-form-group class="form_modal_content"> </b-form-group>
                      <b-row>
                        <b-col>
                          <div class="detail__payment__kiri">Invoice</div>
                          <div class="detail__payment__kiri">Tanggal</div>
                          <div class="detail__payment__kiri">Status</div>
                        </b-col>
                        <b-col>
                          <div class="detail__payment__kanan">213940049</div>
                          <div class="detail__payment__kanan">29/04/2021</div>
                          <div></div>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-img
                          src="~/assets/icons/ic_payment.svg"
                          alt=""
                          width="200px"
                          class="img__payment mx-auto"
                        ></b-img>
                      </b-row>
                      <b-row>
                        <div class="status__payment mx-auto">
                          Menunggu Pembayaran
                        </div>
                      </b-row>
                    </div>
                    <div class="btn_modal text-center mb-3 d-flex flex-column">
                      <b-button
                        class="btn_bayar_sekarang mx-auto"
                        @click="hideModal"
                        >Bayar Sekarang</b-button
                      >
                      <b-button
                        class="btn_batal_pesanan mx-auto"
                        @click="hideModal"
                        >Batalkan Pesanan</b-button
                      >
                    </div>
                  </b-modal>
                </td>
                <td>
                  <div>{{ item.invoice }}</div>
                </td>
                <td>
                  <div>
                    <div>Yudistryan Izhar</div>
                    <div>{{ item.phone }}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Rumah</div>
                    <div>{{ item.street }}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>quantity</div>
                    // nama pesanan dan jumlah masih jadi satu
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div
                    class="table__pesanan__status"
                    @click="modalShow4 = !modalShow4"
                    alt=""
                  >
                    Diproses
                  </div>
                  <b-modal
                    class="modal__menunggu__pembayaran"
                    v-model="modalShow4"
                    ref="my-modal"
                    id="modal-4"
                    title="BoostrapVue"
                    hide-header
                    hide-footer
                    size="md"
                  >
                    <div class="icon_close text-right">
                      <b-img
                        src="~/assets/Exit_icon.svg"
                        alt=""
                        width="25px"
                        @click="hideModal"
                      ></b-img>
                    </div>
                    <div class="d-block text-center">
                      <h1 class="judul_tambah_alamat mt-2">Detail Pesanan</h1>
                    </div>
                    <div class="form_modal pt-4 pb-2 px-2">
                      <b-form-group class="form_modal_content">
                        <b-row>
                          <b-col>
                            <div class="detail__payment__kiri">Invoice</div>
                            <div class="detail__payment__kiri">Tanggal</div>
                            <div class="detail__payment__kiri">Status</div>
                          </b-col>
                          <b-col>
                            <div class="detail__payment__kanan">213940049</div>
                            <div class="detail__payment__kanan">29/04/2021</div>
                            <div></div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-img
                            src="~/assets/icons/ic_packing.svg"
                            alt=""
                            width="200px"
                            class="img__payment mx-auto"
                          ></b-img>
                        </b-row>
                        <b-row>
                          <div class="status__payment mx-auto">Diproses</div>
                        </b-row>
                      </b-form-group>
                    </div>
                  </b-modal>
                </td>
                <td>
                  <div>253478493750</div>
                </td>
                <td>
                  <div>
                    <div>Yudistryan Izhar</div>
                    <div>+085884070122</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Rumah</div>
                    <div>Jl. Karang kitri no.52 Kandangan, ds. Kandangan</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Fruity Nastar (M) - 1</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div
                    class="table__pesanan__status"
                    @click="modalShow5 = !modalShow5"
                    alt=""
                  >
                    Dikirim
                  </div>
                  <b-modal
                    class="modal__menunggu__pembayaran"
                    v-model="modalShow5"
                    ref="my-modal"
                    id="modal-5"
                    title="BoostrapVue"
                    hide-header
                    hide-footer
                    size="md"
                  >
                    <div class="icon_close text-right">
                      <b-img
                        src="~/assets/Exit_icon.svg"
                        alt=""
                        width="25px"
                        @click="hideModal"
                      ></b-img>
                    </div>
                    <div class="d-block text-center">
                      <h1 class="judul_tambah_alamat mt-2">Detail Pesanan</h1>
                    </div>
                    <div class="form_modal pt-4 pb-2 px-2">
                      <b-form-group class="form_modal_content">
                        <b-row>
                          <b-col>
                            <div class="detail__payment__kiri">Invoice</div>
                            <div class="detail__payment__kiri">Tanggal</div>
                            <div class="detail__payment__kiri">Status</div>
                          </b-col>
                          <b-col>
                            <div class="detail__payment__kanan">213940049</div>
                            <div class="detail__payment__kanan">29/04/2021</div>
                            <div></div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-img
                            src="~/assets/icons/ic_deliver.svg"
                            alt=""
                            width="200px"
                            class="img__payment mx-auto"
                          ></b-img>
                        </b-row>
                        <b-row>
                          <div class="status__payment mx-auto">Dikirim</div>
                        </b-row>
                      </b-form-group>
                    </div>
                    <div class="btn_modal text-center mb-3 d-flex flex-column">
                      <b-button
                        class="btn_bayar_sekarang mx-auto"
                        @click="hideModal"
                        >Pesanan Diterima</b-button
                      >
                      <b-button
                        class="btn_batal_pesanan mx-auto"
                        @click="hideModal"
                        >Ajukan Komplain</b-button
                      >
                    </div>
                  </b-modal>
                </td>
                <td>
                  <div>253478493750</div>
                </td>
                <td>
                  <div>
                    <div>Yudistryan Izhar</div>
                    <div>+085884070122</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Rumah</div>
                    <div>Jl. Karang kitri no.52 Kandangan, ds. Kandangan</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Fruity Nastar (M) - 1</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <div
                    class="table__pesanan__status"
                    @click="modalShow6 = !modalShow6"
                    alt=""
                  >
                    Selesai
                  </div>
                  <b-modal
                    class="modal__menunggu__pembayaran"
                    v-model="modalShow6"
                    ref="my-modal"
                    id="modal-6"
                    title="BoostrapVue"
                    hide-header
                    hide-footer
                    size="md"
                  >
                    <div class="icon_close text-right">
                      <b-img
                        src="~/assets/Exit_icon.svg"
                        alt=""
                        width="25px"
                        @click="hideModal"
                      ></b-img>
                    </div>
                    <div class="d-block text-center">
                      <h1 class="judul_tambah_alamat mt-2">Detail Pesanan</h1>
                    </div>
                    <div class="form_modal pt-4 pb-2 px-2">
                      <b-form-group class="form_modal_content">
                        <b-row>
                          <b-col>
                            <div class="detail__payment__kiri">Invoice</div>
                            <div class="detail__payment__kiri">Tanggal</div>
                            <div class="detail__payment__kiri">Status</div>
                          </b-col>
                          <b-col>
                            <div class="detail__payment__kanan">213940049</div>
                            <div class="detail__payment__kanan">29/04/2021</div>
                            <div></div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-img
                            src="~/assets/icons/ic_done.svg"
                            alt=""
                            width="200px"
                            class="img__payment mx-auto"
                          ></b-img>
                        </b-row>
                        <b-row>
                          <div class="status__payment mx-auto">
                            Pesanan Selesai
                          </div>
                        </b-row>
                      </b-form-group>
                    </div>
                  </b-modal>
                </td>
                <td>
                  <div>253478493750</div>
                </td>
                <td>
                  <div>
                    <div>Yudistryan Izhar</div>
                    <div>+085884070122</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Rumah</div>
                    <div>Jl. Karang kitri no.52 Kandangan, ds. Kandangan</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div>Fruity Nastar (M) - 1</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/Cards/ProductCard'
import Field from '@/components/Fields/FieldAdd'
import { required } from 'vuelidate/lib/validators'
export default {
  components: {
    Navbar,
    ProductCard,
    Field,
  },
  data() {
    return {
      dataSource: null,
      state: 1,
      isEdit: false,
      modalShow1: false,
      modalShow2: false,
      modalShow3: false,
      modalShow4: false,
      modalShow5: false,
      modalShow6: false,
      isLoading: false,
      dataAddress: null,
      dataOrder: null,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          this.$cookies.get('__vmctHarimau').access_token
        }`,
      },
      form: {
        receiver: '',
        phone: '',
        district: '',
        postal_code: '',
        street: '',
      },
      myOrder: {
        status: '',
        invoice: '',
        phone: '',
        street: '',
        quantity: '',
      },
    }
  },
  validations: {
    form: {
      receiver: {
        required,
      },
      phone: {
        required,
      },
      district: {
        required,
      },
      postal_code: {
        required,
      },
      street: {
        required,
      },
    },
    myOrder: {
      status: {
        required,
      },
      invoice: {
        required,
      },
      phone: {
        required,
      },
      street: {
        required,
      },
      quantity: {
        required,
      },
    },
  },
  created() {
    this.fetchData()
    this.listAddress()
    this.listOrder()
  },
  methods: {
    async fetchData() {
      try {
        const resp = await this.$axios.$get(`/api/product`)
        this.dataSource = resp.data
      } catch (error) {
        console.log(error)
      }
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    oneSlideEnd(slide) {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    async onSubmit() {
      this.$v.$touch()
      if (!this.$v.form.$invalid) {
        this.isLoading = true
        try {
          const resp = await this.$axios.$post('/api/address/add', this.form, {
            headers: this.headers,
          })
          this.dataAddress = resp.data
          setTimeout(() => {
            location.reload()
          }, 3000)
        } catch (error) {
          this.isLoading = false
          console.log(error)
        }
      } else {
        this.$toast.error('Ada yang salah dalam pengisian form').goAway(3000)
      }
    },
    async listAddress() {
      this.isLoading = true
      try {
        const resp = await this.$axios.$get(`/api/address/get`, {
          headers: this.headers,
        })
        this.dataAddress = resp.data
        this.isLoading = false
      } catch (error) {
        this.$toast.error('Gagal mendapatkan data user').goAway(3000) // if user need to know
        this.isLoading = false
      }
    },
    async listOrder() {
      this.isLoading = true
      try {
        const resp = await this.$axios.$get(`/api/order`, {
          headers: this.headers,
        })
        this.dataOrder = resp.data
        this.isLoading = false
      } catch (error) {
        this.$toast.error('Gagal mendapatkan data order').goAway(3000) // if user need to know
        this.isLoading = false
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/imports';

.card__utama {
  padding-bottom: 70px;
  background: #FFFFFF;
  box-shadow: 0px 0px 15px #00000024;
  opacity: 1;
}

.card__biodata {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 20px;
  background: #FBEFE1;
}

.navbar__profile {
  margin-top: 70px;
}

.button__ubah {
  margin-top: -20px;
  margin-left: auto;
  margin-right: -5px;
  width: 133px;
  height: 52px;
  border-radius: 20px;
  letter-spacing: 3.25px;
  color: #FFFFFF;
  background: #2D4957;
  font-size: 13px;
  opacity: 1;

  &__clicked {
    background: #FCFCFC;
    color: #2D4957;
  }
}

.avatar {
  padding-left: 50px;
  padding-right: 50px;
}

.profile__avatar {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
}

.relative__profile {
  position: relative;
}

.profile__ubah {
  position: absolute;
  margin-top: -185px;
  margin-left: 150px;
  display: none;

  &__show {
    display: block;
  }
}

.nama_lengkap {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 15px;
  font-size: 20px;
  font-style: italic;
  letter-spacing: 0.55px;
  font: Proxima Nova;
  color: #2D4957;
  opacity: 1;
}

.form_group1 {
  margin-left: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  letter-spacing: 2.25px;
  font-size: 15px;
  color: #000000;
  font-style: futura-pt;
}

.form_group2 {
  margin-top: 50px;
  margin-bottom: 40px;
  letter-spacing: 2.25px;
  font-size: 15px;
  color: #000000;
  font-style: futura-pt;
}

.input {
  margin-bottom: 15px;
  font-color: #2d4957;
  background-color: #FCFCFC;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 5px;
  height: 40px;
  width: 250px;
  background: #0000000D;

  &_show {
    background: #FCFCFC;
  }
}

.keterangan {
  margin-bottom: 10px;
}

.table__tambah__alamat {
  margin-top: 20px;
  font-size: 15px;
  font: normal Proxima Nova;
  letter-spacing: 0.3px;
  color: #000000;
}

.daftar_alamat {
  border-bottom: 1px solid #707070;
}

.button__tambah__alamat {
  background-color: #2D4957;
  width: 180px;
  margin-left: 40px;
  margin-top: 50px;
}

.modal_tambah_alamat {
  border-radius: 10px;
}

.judul_tambah_alamat {
  font-size: 18px;
  font-weight: bold;
  font: normal normal Proxima Nova;
  letter-spacing: 3px;
  color: #2D4957;
  border-bottom: 1px solid #2D4957;
  padding-bottom: 7px;
}

.label_modal {
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 0.7px;
  color: #2D4957;
}

.input_modal {
  font-size: 15px;
  font: normal normal Proxima Nova;
  color: #2D4957;
}

.btn_tambah_modal {
  margin-top: 40px;
  background: #2D4957;
  opacity: 1;
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 1.8px;
  color: #FFFFFF;
  border-radius: 5px;
}

.btn_batal_modal {
  margin-top: 40px;
  margin-left: 5px;
  background: #F6F6F6;
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 1.8px;
  color: #2D4957;
  border-radius: 5px;
}

.btn_edit_modal {
  background: #2D4957;
  opacity: 1;
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 1.8px;
  color: #FFFFFF;
  border-radius: 5px;
}

.btn_batal_red {
  margin-left: 5px;
  background: #B14141;
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 1.8px;
  color: #F6F6F6;
  width: 100px;
  border-radius: 5px;
}

.btn_batal_pesanan {
  margin-top: 10px;
  background: #F6F6F6;
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 1.8px;
  color: #2D4957;
  border-radius: 5px;
  width: 200px;
}

.btn_bayar_sekarang {
  background: #2D4957;
  opacity: 1;
  font-size: 15px;
  font: normal normal Proxima Nova;
  letter-spacing: 1.8px;
  color: #FFFFFF;
  border-radius: 5px;
  width: 200px;
}

.cari_alamat {
  margin-right: 40px;
  margin-top: 50px;
}

.search_icon {
  height: 15px;
  width: 15px;
}

.tabel__tambah__alamat {
  margin-top: 40px;
  letter-spacing: 2.25px;
  color: #2D4957;
  opacity: 1;
}

.action {
  position: absolute;
  display: flex;
  margin-right: 30px;
}

.action__edit {
  margin-left: -40px;
  width: 18px;
  height: 18px;
}

.action__hapus {
  width: 18px;
  height: 18px;
}

.favorite {
  margin-top: 40px;
}

.table__pesanan {
  margin-top: 40px;

  &__status {
    color: #4AB4A2;
  }
}

.img__payment {
  margin-top: 40px;
  margin-bottom: 40px;
}

.detail__payment__kiri {
  font-color: #2D4957;
  letter-spacing: 1.5px;
  font: normal normal medium 15px / 17px Proxima Nova;
}

.detail__payment__kanan {
  font-color: #635F5F;
  font-size: 15px;
  letter-spacing: 1.5px;
}

.status__payment {
  margin-bottom: 20px;
  color: #4AB4A2;
  font: normal normal bold 20px / 17px Proxima Nova;
  letter-spacing: 2px;
}
</style>

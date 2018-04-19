<template>
    <div class="calendar">
        <h4>Select the dates to stay in Charlotte</h4>
        <div class="calendar__content">
            <div class="calendar__content__details details">
                <div class="details__check-in">
                    <span class="details__check-in__label">Check-in</span>
                    <span class="details__check-in__date" v-if="date">{{ formatedStartDate }}</span>
                    <span class="details__check-in__date" v-else>Choose a date</span>
                </div>
                <div class="details__check-out">
                    <span class="details__check-out__label">Check-out</span>
                    <span class="details__check-out__date" v-if="date">{{ formatedEndDate }}</span>
                    <span class="details__check-out__date" v-else>Choose a date</span>
                </div>
                <div class="details__button" @click="getRooms()">
                    Search hotels
                </div>
            </div>
            <div class="calendar__content__range">
                <v-date-picker mode="range"
                    is-single-paned
                    is-inline
                    :theme-styles='calendarStyle'
                    :pane-width='290'
                    :attributes='attrs'
                    tint-color="#79BD1A"
                    v-model='date'>
					<span slot='header-title' slot-scope='{ monthLabel, yearLabel }'>
						{{ monthLabel }} / {{ yearLabel }}
					</span>
				</v-date-picker>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import moment from 'moment'
    
    export default {
        data() {
            return {
                date: null,
                attrs: [{
					highlight: {
						backrgoundColor: '#79BD1A'
					}
				}],
				calendarStyle: {
					wrapper: {
						background: 'transparent',
						border: 0,
						fontFamily: 'Montserrat'
					},
					header: {
						paddingTop: '10px',
						fontFamily: 'Montserrat',
						borderTop: 'solid rgb(227, 227, 227) 2px'
					},
					headerTitle: {
						paddingBottom: '10px'
					},
					headerArrows: {
						display: 'none'
					},
					dayCellNotInMonth: {
						opacity: 0
					},
					weekdaysHorizontalDivider: {
						paddingBottom: '10px',
						borderBottom: 'solid rgb(227, 227, 227) 2px',
						width: '100%'
					}
				}
            }
        },
		computed: {
			formatedStartDate () {
				return moment(this.date.start).format('MMMM D, YYYY')
			},
			formatedEndDate () {
				return moment(this.date.end).format('MMMM D, YYYY')
			}
        },
        methods: {
            ...mapActions([
                'getRooms'
            ])
        }
    }
</script>
<style lang="scss" scoped>
    .calendar {
        width: 840px;
        border-radius: 15px;
        background-color: #fff;
        margin: 100px auto 0;
        padding-top: 65px;
        box-shadow: 0px -41px 156px -51px rgba(0,0,0,0.75);

        > h4 {
            text-align: center;
            font-family: "Montserrat";
            font-size: 22px;
        }

        &__content {
            display: flex;
            margin-top: 70px;

            .details {
                font-family: "Heebo";
                width: 50%;
                margin-left: 100px;

                &__check-in, &__check-out {
                    display: flex;
                    flex-direction: column;
                    
                    &__label {
                        text-transform: uppercase;
                        font-size: 22px;
                        color: #555555;
                    }

                    &__date {
                        font-size: 20px;
                        color: #b5b5b5;
                    }
                }

                &__check-out {
                    padding-top: 50px;
                }

                &__button {
                    font-size: 15px;
                    font-weight: 600;
                    background-color: #fff;
                    width: 185px;
                    height: 50px;
                    border-radius: 25px;
                    border: 4px solid #f98100;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #f98100;
                    cursor: pointer;
                    transition: all .4s ease;
                    margin-top: 50px;

                    &:hover {
                        background-color: #f98100;
                        color: #fff;
                    }
                }
            }

            &__range {
                width: 50%;
            }
        }
    }
</style>